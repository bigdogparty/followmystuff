import { Article, Category, Tag, SearchResult } from '@/types'

// Import migrated data
let migratedArticles: any[] = []
let migratedCategories: any[] = []
let migratedTags: any[] = []

try {
  migratedArticles = require('../data/migrated/articles.json')
  migratedCategories = require('../data/migrated/categories.json')
  migratedTags = require('../data/migrated/tags.json')
  
  // Ensure we have valid data
  if (!Array.isArray(migratedArticles)) migratedArticles = []
  if (!Array.isArray(migratedCategories)) migratedCategories = []
  if (!Array.isArray(migratedTags)) migratedTags = []
  
} catch (error) {
  console.warn('Migrated data not found, using fallback data')
  // Fallback to mock data if migration hasn't been run
  migratedArticles = []
  migratedCategories = []
  migratedTags = []
}

// Convert migrated data to our types
function convertMigratedArticle(migratedArticle: any): Article {
  if (!migratedArticle) {
    throw new Error('Invalid article data')
  }
  
  return {
    id: migratedArticle.wordpressId?.toString() || migratedArticle.id?.toString() || '0',
    title: migratedArticle.title || 'Untitled',
    slug: migratedArticle.slug || 'untitled',
    excerpt: migratedArticle.excerpt || '',
    content: migratedArticle.content || '',
    author: migratedArticle.author || { id: '1', name: 'Follow My Stuff Team', bio: '', avatar: null },
    publishedAt: migratedArticle.publishedAt || new Date().toISOString(),
    updatedAt: migratedArticle.updatedAt || new Date().toISOString(),
    featuredImage: migratedArticle.featuredImage,
    categories: (migratedArticle.categories || []).map((cat: any): Category => ({
      id: cat.id || 'unknown',
      name: cat.name || 'Uncategorized',
      slug: cat.slug || 'uncategorized',
      description: cat.description || ''
    })),
    tags: (migratedArticle.tags || []).map((tag: any): Tag => ({
      id: tag.id || 'unknown',
      name: tag.name || 'untagged',
      slug: tag.slug || 'untagged'
    })),
    readingTime: migratedArticle.readingTime || 1,
    seo: migratedArticle.seo || {
      metaTitle: migratedArticle.title || 'Untitled',
      metaDescription: migratedArticle.excerpt || ''
    }
  }
}

// Get all articles
export function getAllArticles(): Article[] {
  try {
    // Map articles with index-based IDs if no ID exists
    return migratedArticles
      .filter(article => article && article.slug)
      .map((article, index) => convertMigratedArticle({ ...article, id: index + 1 }))
  } catch (error) {
    console.error('Error getting articles:', error)
    return []
  }
}

// Get article by slug
export function getArticleBySlug(slug: string): Article | null {
  const index = migratedArticles.findIndex(article => article.slug === slug)
  if (index === -1) return null
  const migratedArticle = migratedArticles[index]
  return migratedArticle ? convertMigratedArticle({ ...migratedArticle, id: index + 1 }) : null
}

// Get articles by category
export function getArticlesByCategory(categorySlug: string, limit?: number): Article[] {
  const articles = migratedArticles
    .map((article, index) => ({ ...article, id: index + 1 }))
    .filter(article => 
      article.categories && article.categories.some((cat: any) => cat.slug === categorySlug)
    )
    .map(article => convertMigratedArticle(article))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return limit ? articles.slice(0, limit) : articles
}

// Get featured articles (most recent career-focused articles)
export function getFeaturedArticles(limit: number = 6): Article[] {
  return migratedArticles
    .map((article, index) => convertMigratedArticle({ ...article, id: index + 1 }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

// Get recent articles
export function getRecentArticles(limit: number = 10): Article[] {
  return migratedArticles
    .map((article, index) => convertMigratedArticle({ ...article, id: index + 1 }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

// Get related articles
export function getRelatedArticles(article: Article, limit: number = 3): Article[] {
  const articles = migratedArticles.map((article, index) => convertMigratedArticle({ ...article, id: index + 1 }))
  
  // Find articles with similar tags or categories
  const related = articles
    .filter(a => a.id !== article.id)
    .map(a => {
      let score = 0
      
      // Score based on shared categories
      const sharedCategories = a.categories.filter(cat => 
        article.categories.some(articleCat => articleCat.slug === cat.slug)
      )
      score += sharedCategories.length * 3
      
      // Score based on shared tags
      const sharedTags = a.tags.filter(tag => 
        article.tags.some(articleTag => articleTag.slug === tag.slug)
      )
      score += sharedTags.length
      
      return { article: a, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article)
  
  return related
}

// Search articles
export function searchArticles(query: string, page: number = 1, limit: number = 10): SearchResult {
  if (!query.trim()) {
    return {
      articles: [],
      totalCount: 0,
      currentPage: page,
      totalPages: 0
    }
  }
  
  const searchTerm = query.toLowerCase()
  const allArticles = migratedArticles.map(convertMigratedArticle)
  
  // Search in title, excerpt, content, tags, and categories
  const matchingArticles = allArticles.filter(article => {
    const searchableText = [
      article.title,
      article.excerpt,
      article.content,
      ...article.tags.map(tag => tag.name),
      ...article.categories.map(cat => cat.name)
    ].join(' ').toLowerCase()
    
    return searchableText.includes(searchTerm)
  })
  
  // Sort by relevance (title matches first, then by date)
  const sortedArticles = matchingArticles.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(searchTerm)
    const bTitle = b.title.toLowerCase().includes(searchTerm)
    
    if (aTitle && !bTitle) return -1
    if (!aTitle && bTitle) return 1
    
    // If both or neither match title, sort by date
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
  
  // Paginate results
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedArticles = sortedArticles.slice(startIndex, endIndex)
  
  return {
    articles: paginatedArticles,
    totalCount: sortedArticles.length,
    currentPage: page,
    totalPages: Math.ceil(sortedArticles.length / limit)
  }
}

// Get all categories
export function getAllCategories(): Category[] {
  return migratedCategories.map(cat => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description
  }))
}

// Get category by slug
export function getCategoryBySlug(slug: string): Category | null {
  const category = migratedCategories.find(cat => cat.slug === slug)
  return category ? {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description
  } : null
}

// Get popular tags
export function getPopularTags(limit: number = 20): Tag[] {
  return migratedTags
    .sort((a, b) => (b.count || 0) - (a.count || 0))
    .slice(0, limit)
    .map(tag => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug
    }))
}

// Get articles by tag
export function getArticlesByTag(tagSlug: string, limit?: number): Article[] {
  const articles = migratedArticles
    .filter(article => 
      article.tags.some((tag: any) => tag.slug === tagSlug)
    )
    .map(convertMigratedArticle)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return limit ? articles.slice(0, limit) : articles
}

// Get content statistics
export function getContentStats() {
  const articles = migratedArticles.map(convertMigratedArticle)
  const totalReadingTime = articles.reduce((sum, article) => sum + article.readingTime, 0)
  
  return {
    totalArticles: articles.length,
    totalCategories: migratedCategories.length,
    totalTags: migratedTags.length,
    totalReadingTime,
    averageReadingTime: Math.round(totalReadingTime / articles.length),
    oldestArticle: articles.length > 0 ? articles.sort((a, b) => 
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    )[0] : null,
    newestArticle: articles.length > 0 ? articles.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )[0] : null
  }
}