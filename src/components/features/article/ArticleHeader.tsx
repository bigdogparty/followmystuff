'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CalendarDaysIcon, ClockIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline'
import { Article } from '@/types'
import { formatDate } from '@/utils/date'

interface ArticleHeaderProps {
  article: Article
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const [imageError, setImageError] = useState(false)
  
  const getCategoryBadgeClass = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('career') || name.includes('job')) return 'badge-career'
    if (name.includes('wellness') || name.includes('health') || name.includes('life')) return 'badge-wellness'
    if (name.includes('finance') || name.includes('money') || name.includes('invest')) return 'badge-finance'
    if (name.includes('development') || name.includes('skill')) return 'badge-development'
    if (name.includes('leadership') || name.includes('management')) return 'badge-leadership'
    return 'badge-career'
  }

  const getCategoryGradient = (categoryName: string) => {
    const name = categoryName.toLowerCase()
    if (name.includes('career') || name.includes('job')) return 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
    if (name.includes('wellness') || name.includes('health') || name.includes('life')) return 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
    if (name.includes('finance') || name.includes('money') || name.includes('invest')) return 'from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-900/20'
    if (name.includes('development') || name.includes('skill')) return 'from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20'
    if (name.includes('leadership') || name.includes('management')) return 'from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20'
    return 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
  }

  const primaryCategory = article.categories[0]

  return (
    <header className="mb-12">
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {article.categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 ${getCategoryBadgeClass(category.name)}`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Article Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
        {article.title}
      </h1>

      {/* Article Excerpt */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl">
        {article.excerpt}
      </p>

      {/* Article Meta Information */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
            {article.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              <UserIcon className="w-4 h-4 text-gray-500" />
              <span className="font-semibold text-gray-900 dark:text-white">
                {article.author.name}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {article.author.bio}
            </p>
          </div>
        </div>

        {/* Article Meta */}
        <div className="flex flex-col sm:items-end gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="w-4 h-4" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{article.readingTime} min read</span>
            </div>
          </div>
          
          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex items-center gap-1">
              <TagIcon className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    #{tag.name}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-500">
                    +{article.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {article.featuredImage && !imageError ? (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl mb-8">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      ) : !article.featuredImage && (
        // Fallback placeholder when no featured image
        <div className={`relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br ${getCategoryGradient(primaryCategory?.name || '')} flex items-center justify-center`}>
          <div className="text-center">
            <div className={`w-24 h-24 ${getCategoryBadgeClass(primaryCategory?.name || '')} rounded-2xl flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg`}>
              {primaryCategory?.name?.slice(0, 2).toUpperCase() || 'FM'}
            </div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {primaryCategory?.name || 'Follow My Stuff'}
            </p>
          </div>
        </div>
      )}

      {/* Reading Progress Indicator */}
      <div id="reading-progress" className="reading-progress" style={{ width: '0%' }} />
    </header>
  )
}