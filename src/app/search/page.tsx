'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Button } from '@/components/ui/Button'
import { SearchInput } from '@/components/ui/SearchInput'
import { Article } from '@/types'

// Mock search function - will be replaced with real search API
const mockSearchArticles = (query: string): Article[] => {
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'Unleash the Power of Online Job Search Tools',
      slug: 'unleash-the-power-of-online-job-search-tools',
      excerpt: 'Navigate the digital job safari with confidence. Learn which platforms actually work and how to use them effectively.',
      content: '',
      author: {
        id: '1',
        name: 'Follow My Stuff Team',
      },
      publishedAt: '2024-01-15',
      updatedAt: '2024-01-15',
      featuredImage: '/images/job-search-tools.jpg',
      categories: [
        { id: '1', name: 'Career', slug: 'career' }
      ],
      tags: [
        { id: '1', name: 'Job Search', slug: 'job-search' },
        { id: '2', name: 'Tools', slug: 'tools' }
      ],
      readingTime: 8,
      seo: {
        metaTitle: 'Unleash the Power of Online Job Search Tools',
        metaDescription: 'Navigate the digital job safari with confidence. Learn which platforms actually work and how to use them effectively.'
      }
    },
    {
      id: '2',
      title: 'Career Change 101: Your Complete Guide',
      slug: 'career-change-101',
      excerpt: 'Ready for a career plot twist? This comprehensive guide covers everything from financial planning to emotional resilience.',
      content: '',
      author: {
        id: '1',
        name: 'Follow My Stuff Team',
      },
      publishedAt: '2024-01-10',
      updatedAt: '2024-01-10',
      categories: [
        { id: '1', name: 'Career', slug: 'career' }
      ],
      tags: [
        { id: '3', name: 'Career Change', slug: 'career-change' },
        { id: '4', name: 'Guide', slug: 'guide' }
      ],
      readingTime: 12,
      seo: {
        metaTitle: 'Career Change 101: Your Complete Guide',
        metaDescription: 'Ready for a career plot twist? This comprehensive guide covers everything from financial planning to emotional resilience.'
      }
    }
  ]

  if (!query) return []
  
  return mockArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    article.tags.some(tag => tag.name.toLowerCase().includes(query.toLowerCase())) ||
    article.categories.some(cat => cat.name.toLowerCase().includes(query.toLowerCase()))
  )
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [searchResults, setSearchResults] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [searchParams])

  const performSearch = async (query: string) => {
    if (!query.trim()) return
    
    setIsLoading(true)
    setHasSearched(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const results = mockSearchArticles(query)
    setSearchResults(results)
    setIsLoading(false)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    performSearch(query)
    
    // Update URL without page reload
    const newUrl = `/search?q=${encodeURIComponent(query)}`
    window.history.pushState({}, '', newUrl)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Search Articles
              </h1>
              <SearchInput
                placeholder="Search for career advice, job tips, and more..."
                value={searchQuery}
                onSearch={handleSearch}
                isLoading={isLoading}
              />
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {hasSearched && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isLoading ? (
                    'Searching...'
                  ) : (
                    <>
                      {searchResults.length > 0
                        ? `Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${searchQuery}"`
                        : `No results found for "${searchQuery}"`
                      }
                    </>
                  )}
                </h2>
              </div>
            )}

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card p-6 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
                
                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="secondary">
                    Load More Results
                  </Button>
                </div>
              </>
            ) : hasSearched ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Try adjusting your search terms or browse our categories to find what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" onClick={() => handleSearch('')}>
                    Clear Search
                  </Button>
                  <Button variant="secondary">
                    Browse Categories
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Find Your Next Career Insight
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                  Search through our collection of career advice, job search tips, and professional development guides.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Popular Searches */}
        {!hasSearched && (
          <section className="bg-gray-50 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">
                Popular Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'job search',
                  'career change',
                  'interview tips',
                  'resume writing',
                  'salary negotiation',
                  'remote work',
                  'professional development',
                  'networking'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    {term}
                  </button>
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