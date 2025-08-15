import { Article } from '@/types'

interface StructuredDataProps {
  article: Article
}

export function StructuredData({ article }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://followmystuff.com'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage ? `${baseUrl}${article.featuredImage}` : undefined,
    author: {
      '@type': 'Person',
      name: article.author.name,
      description: article.author.bio
    },
    publisher: {
      '@type': 'Organization',
      name: 'Follow My Stuff',
      description: 'Your witty guide to career success',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 60,
        height: 60
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/articles/${article.slug}`
    },
    keywords: article.tags.map(tag => tag.name).join(', '),
    articleSection: article.categories.map(cat => cat.name).join(', '),
    wordCount: article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    timeRequired: `PT${article.readingTime}M`,
    url: `${baseUrl}/articles/${article.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Follow My Stuff',
      url: baseUrl
    }
  }

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Articles',
        item: `${baseUrl}/articles`
      },
      ...(article.categories.length > 0 ? [{
        '@type': 'ListItem',
        position: 3,
        name: article.categories[0].name,
        item: `${baseUrl}/category/${article.categories[0].slug}`
      }] : []),
      {
        '@type': 'ListItem',
        position: article.categories.length > 0 ? 4 : 3,
        name: article.title,
        item: `${baseUrl}/articles/${article.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}