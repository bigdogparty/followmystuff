import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Button } from '@/components/ui/Button'
import { getFeaturedArticles, getAllCategories, getContentStats } from '@/lib/content'

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(6)
  const categories = getAllCategories()
  const stats = getContentStats()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Career Advice that <span className="text-blue-600">Actually Works</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional development doesn't have to be stuffy. Get actionable career advice 
              with a sense of humor that actually helps you level up.
            </p>
            {stats.totalArticles > 0 && (
              <p className="text-lg text-gray-500 mb-8">
                {stats.totalArticles} articles • {Math.round(stats.totalReadingTime / 60)} hours of career insights
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles">
                <Button variant="primary" size="lg">
                  Explore Career Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Career Insights
            </h2>
            {featuredArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link href="/articles">
                    <Button variant="secondary">
                      View All Articles
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Content is being migrated. Run <code className="bg-gray-100 px-2 py-1 rounded">npm run migrate:csv</code> to import articles.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.length > 0 ? categories.slice(0, 4).map((category) => (
                <div
                  key={category.slug}
                  className="card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {category.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore articles
                  </p>
                </div>
              )) : (
                // Fallback categories if migration hasn't been run
                [
                  { name: 'Career Development', slug: 'career', count: 24 },
                  { name: 'Job Search', slug: 'job-search', count: 18 },
                  { name: 'Professional Finance', slug: 'finance', count: 12 },
                  { name: 'Work-Life Balance', slug: 'wellness', count: 15 },
                ].map((category) => (
                  <div
                    key={category.slug}
                    className="card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {category.count}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.count} articles
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}