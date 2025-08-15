const fs = require('fs')
const path = require('path')
const https = require('https')
const { URL } = require('url')

// Configuration
const WORDPRESS_DOMAIN = 'followmystuff.com'
const OUTPUT_DIR = './public/images/articles'
const ARTICLES_FILE = './src/data/migrated/articles.json'
const MAX_CONCURRENT_DOWNLOADS = 5
const DOWNLOAD_TIMEOUT = 30000 // 30 seconds

// Track filename mappings for duplicates
const filenameMap = new Map()

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Helper function to download image
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Download timeout for ${url}`))
    }, DOWNLOAD_TIMEOUT)

    https.get(url, (response) => {
      clearTimeout(timeout)
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`))
        return
      }

      const writer = fs.createWriteStream(outputPath)
      response.pipe(writer)

      writer.on('finish', () => {
        resolve(outputPath)
      })

      writer.on('error', (error) => {
        reject(error)
      })
    }).on('error', (error) => {
      clearTimeout(timeout)
      reject(error)
    })
  })
}

// Helper function to get flattened filename from URL
function getImageFilename(imageUrl) {
  try {
    const url = new URL(imageUrl)
    const pathname = url.pathname
    let filename = path.basename(pathname)
    
    // If no extension, add .jpg as default
    if (!path.extname(filename)) {
      filename = filename + '.jpg'
    }
    
    // Handle duplicates by adding unique suffix
    if (filenameMap.has(filename)) {
      const count = filenameMap.get(filename) + 1
      filenameMap.set(filename, count)
      
      const ext = path.extname(filename)
      const name = path.basename(filename, ext)
      filename = `${name}-${count}${ext}`
    } else {
      filenameMap.set(filename, 1)
    }
    
    // Store the mapping for later reference
    filenameMap.set(imageUrl, filename)
    
    return filename
  } catch (error) {
    // Fallback to creating filename from URL
    const fallback = imageUrl.split('/').pop() || 'image.jpg'
    return filenameMap.get(imageUrl) || fallback
  }
}

// Helper function to process image URL for the new flat structure
function processImageUrl(imageUrl) {
  if (!imageUrl) return null
  
  // If it's already a local path, return as is
  if (imageUrl.startsWith('/')) {
    return imageUrl
  }
  
  // If it's a WordPress URL, we need to migrate it to flat structure
  if (imageUrl.includes('wp-content/uploads')) {
    // Check if we already have a mapping for this URL
    const existingFilename = filenameMap.get(imageUrl)
    if (existingFilename) {
      return `/images/articles/${existingFilename}`
    }
    
    // Create new mapping
    const filename = getImageFilename(imageUrl)
    return `/images/articles/${filename}`
  }
  
  // If it's an external URL, keep as is (but could be flagged for manual review)
  return imageUrl
}

// Extract all unique image URLs from articles
function extractImageUrls(articles) {
  const imageUrls = new Set()
  
  articles.forEach(article => {
    // Featured image (check both current and original)
    if (article.featuredImage && article.featuredImage.includes('wp-content')) {
      imageUrls.add(article.featuredImage)
    }
    if (article.featuredImageOriginal && article.featuredImageOriginal.includes('wp-content')) {
      imageUrls.add(article.featuredImageOriginal)
    }
    
    // Images in content
    const contentImages = article.content.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)/gi) || []
    contentImages.forEach(url => {
      if (url.includes(WORDPRESS_DOMAIN) && url.includes('wp-content')) {
        imageUrls.add(url)
      }
    })
  })
  
  return Array.from(imageUrls)
}

// Download images with concurrency limit
async function downloadImages(imageUrls) {
  const results = {
    successful: [],
    failed: [],
    skipped: []
  }
  
  console.log(`📥 Starting download of ${imageUrls.length} images...`)
  
  // Process images in batches
  for (let i = 0; i < imageUrls.length; i += MAX_CONCURRENT_DOWNLOADS) {
    const batch = imageUrls.slice(i, i + MAX_CONCURRENT_DOWNLOADS)
    const batchPromises = batch.map(async (imageUrl) => {
      const filename = getImageFilename(imageUrl)
      const outputPath = path.join(OUTPUT_DIR, filename)
      
      // Skip if file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipping existing: ${filename}`)
        results.skipped.push({ url: imageUrl, filename, reason: 'already exists' })
        return
      }
      
      try {
        await downloadImage(imageUrl, outputPath)
        console.log(`✅ Downloaded: ${filename}`)
        results.successful.push({ url: imageUrl, filename, outputPath })
      } catch (error) {
        console.log(`❌ Failed: ${filename} - ${error.message}`)
        results.failed.push({ url: imageUrl, filename, error: error.message })
      }
    })
    
    await Promise.all(batchPromises)
    
    // Show progress
    const completed = results.successful.length + results.failed.length + results.skipped.length
    console.log(`📊 Progress: ${completed}/${imageUrls.length} processed`)
  }
  
  return results
}

// Update articles with new image paths using image manifest
function updateArticleImages(articles, imageManifest) {
  const urlMappings = imageManifest?.urlMappings || {}
  
  const updatedArticles = articles.map(article => {
    const updatedArticle = { ...article }
    
    // Update featured image
    if (updatedArticle.featuredImage) {
      updatedArticle.featuredImage = processImageUrlWithManifest(updatedArticle.featuredImage, urlMappings)
    }
    
    // Update images in content
    if (updatedArticle.content) {
      updatedArticle.content = updatedArticle.content.replace(
        /https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|gif|webp|svg)/gi,
        (match) => {
          if (match.includes(WORDPRESS_DOMAIN) && match.includes('wp-content')) {
            return processImageUrlWithManifest(match, urlMappings)
          }
          return match
        }
      )
    }
    
    return updatedArticle
  })
  
  return updatedArticles
}

// Helper function to process image URL using manifest mappings
function processImageUrlWithManifest(imageUrl, urlMappings) {
  if (!imageUrl) return null
  
  // If it's already a local path, return as is
  if (imageUrl.startsWith('/')) {
    return imageUrl
  }
  
  // Check if we have an exact mapping
  if (urlMappings[imageUrl]) {
    return urlMappings[imageUrl]
  }
  
  // Try to match variations (with/without size suffixes)
  const baseUrl = imageUrl.replace(/-\d+x\d+\.(jpg|jpeg|png|gif|webp)$/i, '.$1')
  if (urlMappings[baseUrl]) {
    return urlMappings[baseUrl]
  }
  
  // Try to find by filename
  const filename = imageUrl.split('/').pop()
  if (filename) {
    for (const [url, path] of Object.entries(urlMappings)) {
      if (url.endsWith(filename)) {
        return path
      }
    }
  }
  
  // If no mapping found, use the fallback flat structure approach
  if (imageUrl.includes('wp-content/uploads')) {
    const filename = getImageFilename(imageUrl)
    return `/images/articles/${filename}`
  }
  
  // If it's an external URL, keep as is
  return imageUrl
}

// Generate image optimization script
function generateOptimizationScript(downloadResults) {
  const successfulImages = downloadResults.successful.map(img => img.filename)
  
  const script = `#!/bin/bash
# Image optimization script
# Run this after downloading images to optimize them for web

echo "🎨 Optimizing images for web..."

# Install dependencies if needed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Please install:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  Windows: Download from https://imagemagick.org/script/download.php"
    exit 1
fi

cd public/images/articles

# Create backup folder
mkdir -p originals

# Optimize each image
${successfulImages.map(filename => `
echo "Optimizing ${filename}..."
# Backup original
cp "${filename}" "originals/${filename}"

if [[ "${filename}" == *.jpg ]] || [[ "${filename}" == *.jpeg ]]; then
    convert "${filename}" -quality 85 -strip -resize "1200x1200>" "optimized_${filename}"
    mv "optimized_${filename}" "${filename}"
elif [[ "${filename}" == *.png ]]; then
    convert "${filename}" -quality 85 -strip -resize "1200x1200>" "optimized_${filename}"
    mv "optimized_${filename}" "${filename}"
fi`).join('')}

echo "✅ Image optimization complete!"
echo "📊 Optimized ${successfulImages.length} images"
echo "📁 Originals saved in: public/images/articles/originals/"
echo "🎯 Images resized to max 1200px width/height, 85% quality"
`

  fs.writeFileSync('./scripts/optimize-images.sh', script)
  fs.chmodSync('./scripts/optimize-images.sh', '755')
  
  console.log('📝 Created image optimization script: scripts/optimize-images.sh')
}

// Create Next.js image configuration
function updateNextConfig(downloadResults) {
  const configPath = './next.config.js'
  let config = fs.readFileSync(configPath, 'utf8')
  
  // Add image domains to next.config.js
  const imageDomainsToAdd = [
    'followmystuff.com',
    'www.followmystuff.com'
  ]
  
  // Update the domains array
  config = config.replace(
    /domains:\s*\[(.*?)\]/,
    (match, domains) => {
      const currentDomains = domains.split(',').map(d => d.trim().replace(/['"]/g, '')).filter(d => d)
      const newDomains = [...new Set([...currentDomains, ...imageDomainsToAdd])]
      return `domains: [${newDomains.map(d => `'${d}'`).join(', ')}]`
    }
  )
  
  fs.writeFileSync(configPath, config)
  console.log('📝 Updated next.config.js with image domains')
}

// Generate image manifest for tracking URL mappings
function generateImageManifest(imageUrls, downloadResults) {
  const manifest = {
    timestamp: new Date().toISOString(),
    totalImages: imageUrls.length,
    downloadResults: downloadResults,
    urlMappings: {},
    filenameMappings: {},
    duplicateFiles: []
  }
  
  // Build URL to filename mappings
  imageUrls.forEach(url => {
    const filename = filenameMap.get(url)
    if (filename) {
      manifest.urlMappings[url] = `/images/articles/${filename}`
      manifest.filenameMappings[filename] = url
    }
  })
  
  // Identify duplicate filenames
  const filenameCounts = new Map()
  downloadResults.successful.forEach(result => {
    const count = filenameCounts.get(result.filename) || 0
    filenameCounts.set(result.filename, count + 1)
    if (count > 0) {
      manifest.duplicateFiles.push(result.filename)
    }
  })
  
  return manifest
}

// Main migration function
async function migrateImages() {
  try {
    console.log('🖼️  Starting image migration...')
    
    // Load articles
    if (!fs.existsSync(ARTICLES_FILE)) {
      throw new Error(`Articles file not found: ${ARTICLES_FILE}`)
    }
    
    const articles = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf8'))
    console.log(`📚 Loaded ${articles.length} articles`)
    
    // Extract image URLs
    const imageUrls = extractImageUrls(articles)
    console.log(`🔍 Found ${imageUrls.length} unique images to migrate`)
    
    if (imageUrls.length === 0) {
      console.log('ℹ️  No images found to migrate')
      return
    }
    
    // Download images
    const downloadResults = await downloadImages(imageUrls)
    
    // Generate/update image manifest
    const imageManifest = generateImageManifest(imageUrls, downloadResults)
    
    // Load existing manifest if it exists to preserve previous mappings
    const manifestPath = './src/data/migrated/image-manifest.json'
    let existingManifest = null
    if (fs.existsSync(manifestPath)) {
      try {
        existingManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
        console.log(`📷 Loaded existing image manifest with ${Object.keys(existingManifest.urlMappings || {}).length} mappings`)
        
        // Merge existing mappings with new ones
        if (existingManifest.urlMappings) {
          imageManifest.urlMappings = { ...existingManifest.urlMappings, ...imageManifest.urlMappings }
        }
      } catch (e) {
        console.log('⚠️  Could not load existing manifest:', e.message)
      }
    }
    
    // Update articles with new image paths
    const updatedArticles = updateArticleImages(articles, imageManifest)
    
    // Save updated articles
    const backupFile = ARTICLES_FILE.replace('.json', '-backup.json')
    fs.writeFileSync(backupFile, JSON.stringify(articles, null, 2))
    fs.writeFileSync(ARTICLES_FILE, JSON.stringify(updatedArticles, null, 2))
    
    // Generate optimization script
    generateOptimizationScript(downloadResults)
    
    // Update Next.js config
    updateNextConfig(downloadResults)
    
    // Save the updated image manifest
    fs.writeFileSync(manifestPath, JSON.stringify(imageManifest, null, 2))
    console.log('📋 Updated image manifest: src/data/migrated/image-manifest.json')
    
    // Generate summary
    const summary = {
      timestamp: new Date().toISOString(),
      totalImages: imageUrls.length,
      successful: downloadResults.successful.length,
      failed: downloadResults.failed.length,
      skipped: downloadResults.skipped.length,
      downloadResults: downloadResults
    }
    
    fs.writeFileSync('./src/data/migrated/image-migration-summary.json', JSON.stringify(summary, null, 2))
    
    console.log('\n🎉 Image migration completed!')
    console.log(`📊 Summary:`)
    console.log(`   - Total images found: ${summary.totalImages}`)
    console.log(`   - Successfully downloaded: ${summary.successful}`)
    console.log(`   - Failed downloads: ${summary.failed}`)
    console.log(`   - Skipped (already exist): ${summary.skipped}`)
    console.log(`\n📁 Images saved to: ${OUTPUT_DIR}`)
    console.log(`📝 Backup created: ${backupFile}`)
    console.log(`\n🔧 Next steps:`)
    console.log(`   1. Run 'bash scripts/optimize-images.sh' to optimize images`)
    console.log(`   2. Review failed downloads and handle manually if needed`)
    console.log(`   3. Test the site to ensure images display correctly`)
    
    if (downloadResults.failed.length > 0) {
      console.log(`\n❌ Failed downloads:`)
      downloadResults.failed.forEach(failed => {
        console.log(`   - ${failed.filename}: ${failed.error}`)
      })
    }
    
    return summary
    
  } catch (error) {
    console.error('❌ Image migration failed:', error)
    throw error
  }
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrateImages().catch(console.error)
}

module.exports = { migrateImages }