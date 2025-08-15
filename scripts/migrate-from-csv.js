const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

// Install required dependency if not present
try {
  require('csv-parser')
} catch (e) {
  console.log('Installing csv-parser dependency...')
  require('child_process').execSync('npm install csv-parser', { stdio: 'inherit' })
}

const CSV_FILE_PATH = './ref/followmystuff-Posts-Export-2025-August-13-0454.csv'
const OUTPUT_DIR = './src/data/migrated'

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Helper function to calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '') // Strip HTML tags
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

// Helper function to clean HTML content
function cleanContent(html) {
  if (!html) return ''
  
  return html
    // Remove WordPress block comments
    .replace(/<!-- wp:[\s\S]*?-->/g, '')
    .replace(/<!-- \/wp:[\s\S]*?-->/g, '')
    // Remove WordPress shortcodes
    .replace(/\[.*?\]/g, '')
    // Clean up double quotes that got escaped in CSV
    .replace(/""/g, '"')
    // Remove empty paragraphs
    .replace(/<p>&nbsp;<\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    // Remove HTML comments
    .replace(/<!--.*?-->/gs, '')
    // Normalize line endings
    .replace(/\r\n/g, '\n')
    .trim()
}

// Helper function to extract excerpt from content if not provided
function extractExcerpt(content, providedExcerpt) {
  if (providedExcerpt && providedExcerpt.trim()) {
    return cleanContent(providedExcerpt)
  }
  
  // Extract first paragraph as excerpt
  const text = cleanContent(content).replace(/<[^>]*>/g, '')
  const firstParagraph = text.split('\n\n')[0] || text.split('\n')[0] || text
  
  if (firstParagraph.length > 160) {
    return firstParagraph.substring(0, 157) + '...'
  }
  
  return firstParagraph || 'No excerpt available.'
}

// Helper function to process categories
function processCategories(categoriesString) {
  if (!categoriesString || categoriesString === 'Uncategorized') {
    return [{ id: 'career', name: 'Career', slug: 'career' }] // Default category
  }
  
  return categoriesString.split('|').map((cat, index) => ({
    id: `cat-${index + 1}`,
    name: cat.trim(),
    slug: cat.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }))
}

// Helper function to process tags
function processTags(tagsString) {
  if (!tagsString) return []
  
  return tagsString.split('|').map((tag, index) => ({
    id: `tag-${index + 1}`,
    name: tag.trim(),
    slug: tag.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }))
}

// Helper function to determine if content is career-related
function isCareerRelated(title, content, tags, categories) {
  const careerKeywords = [
    'career', 'job', 'work', 'professional', 'resume', 'interview', 'salary',
    'workplace', 'business', 'networking', 'skills', 'employment', 'freelance',
    'entrepreneur', 'leadership', 'management', 'productivity', 'finance',
    'investment', 'money', 'income', 'success', 'goals', 'achievement'
  ]
  
  const textToSearch = `${title} ${content} ${tags} ${categories}`.toLowerCase()
  
  return careerKeywords.some(keyword => textToSearch.includes(keyword))
}

// Helper function to create URL-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
}

// Helper function to get featured image path from URL
function getFeaturedImagePath(featuredImageUrl, imageManifest) {
  if (!featuredImageUrl || !imageManifest) return null
  
  // Try to find exact match in URL mappings
  if (imageManifest.urlMappings && imageManifest.urlMappings[featuredImageUrl]) {
    return imageManifest.urlMappings[featuredImageUrl]
  }
  
  // Try to match variations (with/without size suffixes)
  const baseUrl = featuredImageUrl.replace(/-\d+x\d+\.(jpg|jpeg|png|gif|webp)$/i, '.$1')
  if (imageManifest.urlMappings && imageManifest.urlMappings[baseUrl]) {
    return imageManifest.urlMappings[baseUrl]
  }
  
  // Try to find by filename
  const filename = featuredImageUrl.split('/').pop()
  if (filename) {
    for (const [url, path] of Object.entries(imageManifest.urlMappings || {})) {
      if (url.endsWith(filename)) {
        return path
      }
    }
  }
  
  return null
}

// Main migration function
async function migrateFromCSV() {
  return new Promise((resolve, reject) => {
    const articles = []
    const categories = new Map()
    const tags = new Map()
    const redirects = []
    
    console.log('🚀 Starting CSV migration...')
    console.log(`📁 Reading from: ${CSV_FILE_PATH}`)
    
    // Load image manifest for featured image mapping
    let imageManifest = null
    const imageManifestPath = './src/data/migrated/image-manifest.json'
    if (fs.existsSync(imageManifestPath)) {
      try {
        imageManifest = JSON.parse(fs.readFileSync(imageManifestPath, 'utf8'))
        console.log(`📷 Loaded image manifest with ${Object.keys(imageManifest.urlMappings || {}).length} mappings`)
      } catch (e) {
        console.log('⚠️  Could not load image manifest:', e.message)
      }
    }
    
    if (!fs.existsSync(CSV_FILE_PATH)) {
      reject(new Error(`CSV file not found: ${CSV_FILE_PATH}`))
      return
    }
    
    fs.createReadStream(CSV_FILE_PATH)
      .pipe(csv())
      .on('data', (row) => {
        // Skip if not a published post
        if (row.Status !== 'publish' || row['Post Type'] !== 'post') {
          return
        }
        
        // Skip if no content
        if (!row.Content || row.Content.trim().length < 100) {
          console.log(`⚠️  Skipping short/empty post: ${row.Title}`)
          return
        }
        
        // Process categories and tags
        const postCategories = processCategories(row.Categories)
        const postTags = processTags(row.Tags)
        
        // Check if career-related (for focused migration)
        const isCareer = isCareerRelated(row.Title, row.Content, row.Tags || '', row.Categories || '')
        
        // Add to categories map
        postCategories.forEach(cat => {
          if (!categories.has(cat.slug)) {
            categories.set(cat.slug, {
              ...cat,
              description: `Articles about ${cat.name.toLowerCase()}`,
              count: 0
            })
          }
          categories.get(cat.slug).count++
        })
        
        // Add to tags map
        postTags.forEach(tag => {
          if (!tags.has(tag.slug)) {
            tags.set(tag.slug, { ...tag, count: 0 })
          }
          tags.get(tag.slug).count++
        })
        
        // Create article object
        const slug = row.Slug || createSlug(row.Title)
        const excerpt = extractExcerpt(row.Content, row.Excerpt)
        const cleanedContent = cleanContent(row.Content)
        
        // Get featured image path using the image manifest
        const featuredImagePath = getFeaturedImagePath(row.Featured, imageManifest)
        
        const article = {
          id: row.ID,
          title: row.Title,
          slug: slug,
          excerpt: excerpt,
          content: cleanedContent,
          author: {
            id: row['Author ID'] || '1',
            name: `${row['Author First Name']} ${row['Author Last Name']}`.trim() || row['Author Username'] || 'Follow My Stuff Team',
            bio: 'Career development expert focused on helping professionals achieve their goals.',
            avatar: null
          },
          publishedAt: row.Date,
          updatedAt: row['Post Modified Date'] || row.Date,
          featuredImage: featuredImagePath, // Use mapped local path
          featuredImageOriginal: row.Featured || null, // Keep original for reference
          categories: postCategories,
          tags: postTags,
          readingTime: calculateReadingTime(cleanedContent),
          seo: {
            metaTitle: row.Title,
            metaDescription: row.rank_math_description || excerpt,
            focusKeyword: row.rank_math_focus_keyword || null,
            canonicalUrl: `/articles/${slug}`
          },
          wordpressId: parseInt(row.ID),
          wordpressUrl: row.Permalink,
          isCareerFocused: isCareer
        }
        
        articles.push(article)
        
        // Create redirect mapping
        if (row.Permalink) {
          try {
            const oldPath = new URL(row.Permalink).pathname
            redirects.push({
              source: oldPath,
              destination: `/articles/${slug}`,
              permanent: true
            })
          } catch (e) {
            console.log(`⚠️  Invalid permalink for ${row.Title}: ${row.Permalink}`)
          }
        }
      })
      .on('end', () => {
        console.log(`✅ Processed ${articles.length} articles`)
        
        // Convert maps to arrays
        const categoriesArray = Array.from(categories.values())
        const tagsArray = Array.from(tags.values())
        
        // Filter for career-focused content
        const careerArticles = articles.filter(article => article.isCareerFocused)
        const otherArticles = articles.filter(article => !article.isCareerFocused)
        
        console.log(`📊 Content Analysis:`)
        console.log(`   - Total articles: ${articles.length}`)
        console.log(`   - Career-focused: ${careerArticles.length}`)
        console.log(`   - Other topics: ${otherArticles.length}`)
        console.log(`   - Categories: ${categoriesArray.length}`)
        console.log(`   - Tags: ${tagsArray.length}`)
        
        // Save all articles
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'articles-all.json'),
          JSON.stringify(articles, null, 2)
        )
        
        // Save career-focused articles (recommended for main site)
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'articles.json'),
          JSON.stringify(careerArticles, null, 2)
        )
        
        // Save other articles for potential future use
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'articles-other.json'),
          JSON.stringify(otherArticles, null, 2)
        )
        
        // Save categories and tags
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'categories.json'),
          JSON.stringify(categoriesArray, null, 2)
        )
        
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'tags.json'),
          JSON.stringify(tagsArray, null, 2)
        )
        
        // Save redirects
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'redirects.json'),
          JSON.stringify(redirects, null, 2)
        )
        
        // Generate summary
        const summary = {
          timestamp: new Date().toISOString(),
          totalArticles: articles.length,
          careerArticles: careerArticles.length,
          otherArticles: otherArticles.length,
          categories: categoriesArray.length,
          tags: tagsArray.length,
          redirects: redirects.length,
          totalReadingTime: careerArticles.reduce((sum, article) => sum + article.readingTime, 0),
          oldestPost: articles.length > 0 ? Math.min(...articles.map(a => new Date(a.publishedAt).getTime())) : null,
          newestPost: articles.length > 0 ? Math.max(...articles.map(a => new Date(a.publishedAt).getTime())) : null
        }
        
        fs.writeFileSync(
          path.join(OUTPUT_DIR, 'migration-summary.json'),
          JSON.stringify(summary, null, 2)
        )
        
        // Generate TypeScript definitions
        generateTypes()
        
        console.log('\n🎉 CSV Migration completed successfully!')
        console.log(`📊 Final Summary:`)
        console.log(`   - Career-focused articles: ${summary.careerArticles}`)
        console.log(`   - Total reading time: ${summary.totalReadingTime} minutes`)
        console.log(`   - Categories: ${summary.categories}`)
        console.log(`   - Tags: ${summary.tags}`)
        console.log(`   - Redirects created: ${summary.redirects}`)
        console.log(`\n📁 Files saved to: ${OUTPUT_DIR}`)
        console.log(`\n📝 Recommendations:`)
        console.log(`   - Review articles.json (career-focused content for main site)`)
        console.log(`   - Consider articles-other.json for blog expansion`)
        console.log(`   - Update Vercel redirects with redirects.json`)
        console.log(`   - Test migrated content in development`)
        
        resolve(summary)
      })
      .on('error', (error) => {
        console.error('❌ CSV migration failed:', error)
        reject(error)
      })
  })
}

// Generate TypeScript types
function generateTypes() {
  const typeDefinitions = `
// Auto-generated types from CSV migration
// Do not edit manually - regenerate using npm run migrate:csv

export interface MigratedArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    id: string;
    name: string;
    bio: string;
    avatar: string | null;
  };
  publishedAt: string;
  updatedAt: string;
  featuredImage: string | null;
  featuredImageOriginal: string | null;
  categories: MigratedCategory[];
  tags: MigratedTag[];
  readingTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string | null;
    canonicalUrl: string;
  };
  wordpressId: number;
  wordpressUrl: string;
  isCareerFocused: boolean;
}

export interface MigratedCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface MigratedTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Data exports
export const migratedArticles: MigratedArticle[] = require('./articles.json');
export const allMigratedArticles: MigratedArticle[] = require('./articles-all.json');
export const otherArticles: MigratedArticle[] = require('./articles-other.json');
export const migratedCategories: MigratedCategory[] = require('./categories.json');
export const migratedTags: MigratedTag[] = require('./tags.json');
`

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.ts'),
    typeDefinitions
  )
  
  console.log('✅ Generated TypeScript definitions')
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrateFromCSV().catch(console.error)
}

module.exports = { migrateFromCSV }