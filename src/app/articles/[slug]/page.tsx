import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ArticleHeader } from '@/components/features/article/ArticleHeader'
import { EnhancedArticleContent } from '@/components/features/article/EnhancedArticleContent'
import { AuthorBio } from '@/components/features/article/AuthorBio'
import { RelatedArticles } from '@/components/features/article/RelatedArticles'
import { StructuredData } from '@/components/features/article/StructuredData'
import { getArticleBySlug, getRelatedArticles, getAllArticles } from '@/lib/content'

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Article Not Found | Follow My Stuff'
    }
  }

  return {
    title: article.seo.metaTitle || article.title,
    description: article.seo.metaDescription || article.excerpt,
    openGraph: {
      title: article.seo.ogTitle || article.title,
      description: article.seo.ogDescription || article.excerpt,
      images: article.seo.ogImage ? [article.seo.ogImage] : undefined,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags.map(tag => tag.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.ogTitle || article.title,
      description: article.seo.ogDescription || article.excerpt,
      images: article.seo.ogImage ? [article.seo.ogImage] : undefined,
    },
    alternates: {
      canonical: article.seo.canonicalUrl || `/articles/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article, 3)

  return (
    <>
      <StructuredData article={article} />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: 'Articles', href: '/articles' },
              ...(article.categories.length > 0 ? [{ 
                label: article.categories[0].name, 
                href: `/category/${article.categories[0].slug}` 
              }] : []),
              { label: article.title }
            ]}
          />
          
          {/* Article Header */}
          <ArticleHeader article={article} />

          {/* Article Content */}
          <EnhancedArticleContent 
            content={article.content}
            slug={article.slug}
            className="mb-12"
          />

          {/* Author Bio */}
          <AuthorBio 
            author={article.author}
            className="mb-12"
          />
        </div>

        {/* Related Articles Section */}
        <div className="max-w-6xl mx-auto px-4">
          <RelatedArticles 
            articles={relatedArticles}
            currentArticleId={article.id}
            className="mb-16"
          />
        </div>
      </main>

        <Footer />
      </div>
    </>
  )
}