import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getAllArticles } from '@/lib/content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Articles | Follow My Stuff',
  description: 'Browse all career development articles and professional growth insights.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: 'All Articles' }
            ]}
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Articles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of career development insights, job search strategies, and professional growth tips.
            </p>
            <p className="text-lg text-gray-500 mt-4">
              {articles.length} articles • {Math.round(articles.reduce((sum, article) => sum + article.readingTime, 0) / 60)} hours of content
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No articles found. Content may still be migrating.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}