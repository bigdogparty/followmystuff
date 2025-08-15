'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ClockIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import { Article } from '@/types'
import { formatDate } from '@/utils/date'

interface ArticleCardProps {
  article: Article
  featured?: boolean
  variant?: 'default' | 'compact' | 'minimal'
}

export function ArticleCard({ article, featured = false, variant = 'default' }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false)
  
  // Get category-based styling
  const getCategoryBadgeClass = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('career') || name.includes('job')) return 'badge-career'
    if (name.includes('wellness') || name.includes('health') || name.includes('life')) return 'badge-wellness'
    if (name.includes('finance') || name.includes('money') || name.includes('invest')) return 'badge-finance'
    if (name.includes('development') || name.includes('skill')) return 'badge-development'
    if (name.includes('leadership') || name.includes('management')) return 'badge-leadership'
    return 'badge-career' // default
  }
  
  const getCategoryGradient = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('career') || name.includes('job')) return 'gradient-cool'
    if (name.includes('wellness') || name.includes('health') || name.includes('life')) return 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
    if (name.includes('finance') || name.includes('money') || name.includes('invest')) return 'gradient-warm'
    if (name.includes('development') || name.includes('skill')) return 'from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20'
    if (name.includes('leadership') || name.includes('management')) return 'from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20'
    return 'gradient-cool' // default
  }
  
  const cardClass = featured 
    ? 'card-featured overflow-hidden group lg:col-span-2'
    : 'card overflow-hidden group'

  const imageHeight = featured ? 'h-64 md:h-80' : 'h-48'
  const primaryCategory = article.categories[0]

  return (
    <article className={cardClass}>
      <Link href={`/articles/${article.slug}`} className="block h-full">
        {article.featuredImage && !imageError ? (
          <div className={`relative ${imageHeight} w-full bg-gray-100 overflow-hidden`}>
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes={featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              onError={() => setImageError(true)}
              priority={featured}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          // Enhanced fallback placeholder
          <div className={`relative ${imageHeight} w-full bg-gradient-to-br ${getCategoryGradient(primaryCategory?.name || '')} flex items-center justify-center`}>
            <div className="text-center">
              <div className={`w-20 h-20 ${getCategoryBadgeClass(primaryCategory?.name || '')} rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-3 shadow-lg`}>
                {primaryCategory?.name?.slice(0, 2).toUpperCase() || 'FM'}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {primaryCategory?.name || 'Follow My Stuff'}
              </p>
            </div>
          </div>
        )}
        
        <div className={`${featured ? 'p-8' : 'p-6'} flex flex-col h-full`}>
          {/* Category badges and meta info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {article.categories.slice(0, 2).map((category) => (
                <span
                  key={category.id}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${getCategoryBadgeClass(category.name)}`}
                >
                  {category.name}
                </span>
              ))}
            </div>
            <div className="article-meta-item text-xs">
              <ClockIcon className="w-4 h-4" />
              <span>{article.readingTime} min</span>
            </div>
          </div>
          
          {/* Article title */}
          <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors leading-tight ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {article.title}
          </h3>
          
          {/* Article excerpt */}
          <p className={`text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow ${
            featured ? 'text-lg leading-relaxed' : 'text-base'
          }`}>
            {article.excerpt}
          </p>
          
          {/* Tags (only for featured articles) */}
          {featured && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag.id}
                  className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  #{tag.name}
                </span>
              ))}
              {article.tags.length > 4 && (
                <span className="px-2 py-1 text-xs text-gray-500">
                  +{article.tags.length - 4} more
                </span>
              )}
            </div>
          )}
          
          {/* Author and date info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {article.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {article.author.name}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <CalendarDaysIcon className="w-3 h-3" />
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                </div>
              </div>
            </div>
            
            {featured && (
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Featured</div>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}