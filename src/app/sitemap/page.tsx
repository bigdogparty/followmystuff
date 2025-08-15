import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getAllArticles, getAllCategories } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sitemap | Follow My Stuff',
  description: 'Complete sitemap of all pages, articles, and categories on Follow My Stuff.',
}

export default function SitemapPage() {
  const articles = getAllArticles()
  const categories = getAllCategories()
  
  // Group articles by category for better organization
  const articlesByCategory: Record<string, typeof articles> = {}
  
  articles.forEach(article => {
    article.categories.forEach(category => {
      if (!articlesByCategory[category.slug]) {
        articlesByCategory[category.slug] = []
      }
      articlesByCategory[category.slug].push(article)
    })
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Explore all the content available on Follow My Stuff. For search engines, visit our <Link href="/sitemap.xml" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">XML Sitemap</Link>.
            </p>

            {/* Main Pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Search
                  </Link>
                </li>
              </ul>
            </section>

            {/* Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.slug}>
                    <Link 
                      href={`/category/${category.slug}`} 
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {category.name}
                    </Link>
                    <span className="text-gray-500 ml-2">
                      ({articlesByCategory[category.slug]?.length || 0} articles)
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Articles by Category */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">All Articles</h2>
              {categories.map(category => {
                const categoryArticles = articlesByCategory[category.slug] || []
                if (categoryArticles.length === 0) return null
                
                return (
                  <div key={category.slug} className="mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      {category.name}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {categoryArticles
                        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                        .map(article => (
                        <li key={article.id}>
                          <Link 
                            href={`/articles/${article.slug}`} 
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {article.title}
                          </Link>
                          <span className="text-gray-500 text-sm ml-2">
                            ({new Date(article.publishedAt).toLocaleDateString()})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </section>

            {/* Legal Pages */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>

            {/* Article Count */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Total Content:</strong> {articles.length} articles across {categories.length} categories
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}