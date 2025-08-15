const fs = require('fs')
const path = require('path')
const https = require('https')

// WordPress REST API endpoints
const WORDPRESS_BASE_URL = 'https://followmystuff.com/wp-json/wp/v2'
const OUTPUT_DIR = './src/data/migrated'

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Helper function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      
      res.on('data', (chunk) => {
        data += chunk
      })
      
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (error) {
          reject(error)
        }
      })
    }).on('error', (error) => {
      reject(error)
    })
  })
}

// Helper function to calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '') // Strip HTML tags
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Helper function to clean HTML content
function cleanContent(html) {
  // Remove WordPress-specific shortcodes and clean up HTML
  return html
    .replace(/\[.*?\]/g, '') // Remove shortcodes
    .replace(/<p>&nbsp;<\/p>/g, '') // Remove empty paragraphs
    .replace(/<!--.*?-->/gs, '') // Remove HTML comments
    .replace(/\r\n/g, '\n') // Normalize line endings
    .trim()
}

// Extract excerpt from content if not provided
function extractExcerpt(content, providedExcerpt) {
  if (providedExcerpt && providedExcerpt.rendered) {
    return cleanContent(providedExcerpt.rendered)
  }
  
  // Extract first paragraph as excerpt
  const text = content.replace(/<[^>]*>/g, '')
  const firstParagraph = text.split('\n\n')[0]
  return firstParagraph.length > 160 
    ? firstParagraph.substring(0, 157) + '...'
    : firstParagraph
}

// Fetch and process posts
async function fetchPosts() {
  try {
    console.log('Fetching posts from WordPress...')
    
    // Fetch all posts (you may need to handle pagination for large sites)
    const posts = await makeRequest(`${WORDPRESS_BASE_URL}/posts?per_page=100&_embed`)
    
    console.log(`Found ${posts.length} posts`)
    
    const processedPosts = posts.map(post => {
      // Extract featured image
      let featuredImage = null
      if (post._embedded && post._embedded['wp:featuredmedia']) {
        const media = post._embedded['wp:featuredmedia'][0]
        featuredImage = media.source_url
      }
      
      // Extract categories
      const categories = post._embedded['wp:term']?.[0] || []
      
      // Extract tags
      const tags = post._embedded['wp:term']?.[1] || []
      
      // Extract author
      const author = post._embedded['author']?.[0] || {}
      
      return {
        id: post.id.toString(),
        title: post.title.rendered,
        slug: post.slug,
        excerpt: extractExcerpt(post.content.rendered, post.excerpt),
        content: cleanContent(post.content.rendered),
        author: {
          id: author.id?.toString() || '1',
          name: author.name || 'Follow My Stuff Team',
          bio: author.description || '',
          avatar: author.avatar_urls?.['96'] || null,
        },
        publishedAt: post.date,
        updatedAt: post.modified,
        featuredImage: featuredImage,
        categories: categories.map(cat => ({
          id: cat.id.toString(),
          name: cat.name,
          slug: cat.slug,
          description: cat.description || ''
        })),
        tags: tags.map(tag => ({
          id: tag.id.toString(),
          name: tag.name,
          slug: tag.slug
        })),
        readingTime: calculateReadingTime(post.content.rendered),
        seo: {
          metaTitle: post.title.rendered,
          metaDescription: extractExcerpt(post.content.rendered, post.excerpt),
          canonicalUrl: `/articles/${post.slug}`
        },
        wordpressId: post.id,
        wordpressUrl: post.link
      }
    })
    
    // Save processed posts
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'articles.json'),
      JSON.stringify(processedPosts, null, 2)
    )
    
    console.log(`✅ Processed and saved ${processedPosts.length} articles`)
    return processedPosts
    
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

// Fetch and process categories
async function fetchCategories() {
  try {
    console.log('Fetching categories from WordPress...')
    
    const categories = await makeRequest(`${WORDPRESS_BASE_URL}/categories?per_page=100`)
    
    console.log(`Found ${categories.length} categories`)
    
    const processedCategories = categories
      .filter(cat => cat.count > 0) // Only include categories with posts
      .map(cat => ({
        id: cat.id.toString(),
        name: cat.name,
        slug: cat.slug,
        description: cat.description || '',
        count: cat.count,
        wordpressId: cat.id
      }))
    
    // Save processed categories
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'categories.json'),
      JSON.stringify(processedCategories, null, 2)
    )
    
    console.log(`✅ Processed and saved ${processedCategories.length} categories`)
    return processedCategories
    
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// Fetch and process tags
async function fetchTags() {
  try {
    console.log('Fetching tags from WordPress...')
    
    const tags = await makeRequest(`${WORDPRESS_BASE_URL}/tags?per_page=100`)
    
    console.log(`Found ${tags.length} tags`)
    
    const processedTags = tags
      .filter(tag => tag.count > 0) // Only include tags with posts
      .map(tag => ({
        id: tag.id.toString(),
        name: tag.name,
        slug: tag.slug,
        count: tag.count,
        wordpressId: tag.id
      }))
    
    // Save processed tags
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'tags.json'),
      JSON.stringify(processedTags, null, 2)
    )
    
    console.log(`✅ Processed and saved ${processedTags.length} tags`)
    return processedTags
    
  } catch (error) {
    console.error('Error fetching tags:', error)
    throw error
  }
}

// Generate TypeScript types based on migrated data
function generateTypes(articles, categories, tags) {
  const typeDefinitions = `
// Auto-generated types from WordPress migration
// Do not edit manually - regenerate using npm run migrate

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
  categories: MigratedCategory[];
  tags: MigratedTag[];
  readingTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
  };
  wordpressId: number;
  wordpressUrl: string;
}

export interface MigratedCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count?: number;
  wordpressId: number;
}

export interface MigratedTag {
  id: string;
  name: string;
  slug: string;
  count?: number;
  wordpressId: number;
}

// Data exports
export const migratedArticles: MigratedArticle[] = require('./articles.json');
export const migratedCategories: MigratedCategory[] = require('./categories.json');
export const migratedTags: MigratedTag[] = require('./tags.json');
`

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.ts'),
    typeDefinitions
  )
  
  console.log('✅ Generated TypeScript definitions')
}

// Create redirect mapping for SEO
function createRedirectMapping(articles) {
  const redirects = articles.map(article => ({
    source: new URL(article.wordpressUrl).pathname,
    destination: `/articles/${article.slug}`,
    permanent: true
  }))
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'redirects.json'),
    JSON.stringify(redirects, null, 2)
  )
  
  console.log(`✅ Created redirect mapping for ${redirects.length} articles`)
}

// Main migration function
async function migrate() {
  try {
    console.log('🚀 Starting WordPress to Next.js content migration...')
    
    const [articles, categories, tags] = await Promise.all([
      fetchPosts(),
      fetchCategories(),
      fetchTags()
    ])
    
    generateTypes(articles, categories, tags)
    createRedirectMapping(articles)
    
    // Generate summary
    const summary = {
      timestamp: new Date().toISOString(),
      articles: articles.length,
      categories: categories.length,
      tags: tags.length,
      totalReadingTime: articles.reduce((sum, article) => sum + article.readingTime, 0)
    }
    
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'migration-summary.json'),
      JSON.stringify(summary, null, 2)
    )
    
    console.log('\n🎉 Migration completed successfully!')
    console.log(`📊 Summary:`)
    console.log(`   - Articles: ${summary.articles}`)
    console.log(`   - Categories: ${summary.categories}`)
    console.log(`   - Tags: ${summary.tags}`)
    console.log(`   - Total reading time: ${summary.totalReadingTime} minutes`)
    console.log(`\n📁 Files saved to: ${OUTPUT_DIR}`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrate()
}

module.exports = { migrate, fetchPosts, fetchCategories, fetchTags }