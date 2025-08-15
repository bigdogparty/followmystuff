import { MetadataRoute } from 'next'
import { getAllArticles, getAllCategories } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://followmystuff.com'
  
  // Get all articles and categories
  const articles = getAllArticles()
  const categories = getAllCategories()
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
  
  // Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...articlePages, ...categoryPages]
}