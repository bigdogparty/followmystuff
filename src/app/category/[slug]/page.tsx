import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Button } from '@/components/ui/Button'
import { getArticlesByCategory, getCategoryBySlug, getAllCategories } from '@/lib/content'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'Category Not Found | Follow My Stuff'
    }
  }

  return {
    title: `${category.name} Articles | Follow My Stuff`,
    description: category.description || `Browse ${category.name} articles and insights on Follow My Stuff`,
    openGraph: {
      title: `${category.name} - Career Advice & Tips`,
      description: category.description || `Browse ${category.name} articles and insights on Follow My Stuff`,
      type: 'website',
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  
  if (!category) {
    notFound()
  }

  // Get all articles for this category
  const articles = getArticlesByCategory(slug)
  
  // Get all categories for the "Explore Other Categories" section
  const allCategories = getAllCategories()
  const otherCategories = allCategories
    .filter(cat => cat.slug !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Category Header */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {category.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/articles">
                  <Button variant="secondary">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {articles.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {articles.length} {articles.length === 1 ? 'Article' : 'Articles'} in {category.name}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  No Articles Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  We don't have any articles in this category yet.
                  Check back soon or browse other categories.
                </p>
                <Link href="/articles">
                  <Button variant="primary">
                    Browse All Articles
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related Categories */}
        {otherCategories.length > 0 && (
          <section className="bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Explore Other Categories
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherCategories.map((relatedCategory) => (
                  <Link
                    key={relatedCategory.slug}
                    href={`/category/${relatedCategory.slug}`}
                    className="card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer block"
                  >
                    <h3 className="text-xl font-semibold mb-2">{relatedCategory.name}</h3>
                    {relatedCategory.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {relatedCategory.description}
                      </p>
                    )}
                    <span className="inline-flex items-center justify-center rounded-lg font-medium px-3 py-2 text-sm border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700">
                      Explore {relatedCategory.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}