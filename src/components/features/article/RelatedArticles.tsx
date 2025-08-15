import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Article } from '@/types'

interface RelatedArticlesProps {
  articles: Article[]
  currentArticleId: string
  className?: string
}

export function RelatedArticles({ articles, currentArticleId, className = '' }: RelatedArticlesProps) {
  // Filter out current article and limit to 3
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 3)

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <section className={`${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Continue Reading
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            More career insights to help you level up
          </p>
        </div>
        <Link 
          href="/articles"
          className="hidden sm:flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group"
        >
          <span>View all articles</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Related Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relatedArticles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article}
            variant="compact"
          />
        ))}
      </div>

      {/* Mobile View All Link */}
      <div className="sm:hidden text-center">
        <Link 
          href="/articles"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group"
        >
          <span>View all articles</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}