'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { NavigationItem } from '@/types'

const navigation: NavigationItem[] = [
  { label: 'Career', href: '/category/career' },
  { label: 'Finance', href: '/category/finance' },
  { label: 'Wellness', href: '/category/wellness' },
  { label: 'All Articles', href: '/articles' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Follow My Stuff
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}