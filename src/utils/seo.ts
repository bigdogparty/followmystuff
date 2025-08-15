import { Article, Category } from '@/types'

export function generateArticleStructuredData(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage ? [article.featuredImage] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      image: article.author.avatar || undefined,
      description: article.author.bio || undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Follow My Stuff',
      logo: {
        '@type': 'ImageObject',
        url: 'https://followmystuff.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://followmystuff.com/articles/${article.slug}`,
    },
    articleSection: article.categories.map(cat => cat.name),
    keywords: article.tags.map(tag => tag.name).join(', '),
    wordCount: article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    timeRequired: `PT${article.readingTime}M`,
  }
}

export function generateCategoryStructuredData(category: Category, articles: Article[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `https://followmystuff.com/category/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.excerpt,
          url: `https://followmystuff.com/articles/${article.slug}`,
          datePublished: article.publishedAt,
          author: {
            '@type': 'Person',
            name: article.author.name,
          },
        },
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://followmystuff.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Categories',
          item: 'https://followmystuff.com/categories',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `https://followmystuff.com/category/${category.slug}`,
        },
      ],
    },
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Follow My Stuff',
    description: 'Your witty guide to career success, professional development, and workplace navigation.',
    url: 'https://followmystuff.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://followmystuff.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Follow My Stuff',
      logo: {
        '@type': 'ImageObject',
        url: 'https://followmystuff.com/logo.png',
      },
      sameAs: [
        'https://twitter.com/followmystuff',
        'https://linkedin.com/company/followmystuff',
        'https://pinterest.com/followmystuff',
      ],
    },
  }
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Follow My Stuff',
    description: 'Career development and professional growth resources with a witty approach.',
    url: 'https://followmystuff.com',
    logo: 'https://followmystuff.com/logo.png',
    foundingDate: '2023',
    sameAs: [
      'https://twitter.com/followmystuff',
      'https://linkedin.com/company/followmystuff',
      'https://pinterest.com/followmystuff',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@followmystuff.com',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateSitemap(articles: Article[], categories: Category[]) {
  const baseUrl = 'https://followmystuff.com'
  
  const urls = [
    {
      url: baseUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/search`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.5',
    },
    ...categories.map(category => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...articles.map(article => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastmod: article.updatedAt.split('T')[0],
      changefreq: 'monthly',
      priority: '0.9',
    })),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}

export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://followmystuff.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block specific paths if needed
# Disallow: /admin/
# Disallow: /api/`
}