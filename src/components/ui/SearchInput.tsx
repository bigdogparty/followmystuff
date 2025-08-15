'use client'

import { useState, KeyboardEvent } from 'react'
import { cn } from '@/utils/cn'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onSearch: (query: string) => void
  isLoading?: boolean
  className?: string
}

export function SearchInput({ 
  placeholder = 'Search...', 
  value = '', 
  onSearch, 
  isLoading = false,
  className 
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value)

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className={cn('relative max-w-2xl mx-auto', className)}>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isLoading}
          className="w-full pl-12 pr-24 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />
        
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isLoading ? (
            <div className="animate-spin h-5 w-5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          ) : (
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </div>
        
        {/* Search Button */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={handleSubmit}
            disabled={isLoading || !inputValue.trim()}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>
      
      {/* Search Suggestions (Optional - can be enhanced later) */}
      {inputValue && !isLoading && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {/* This can be enhanced with actual search suggestions */}
          <div className="p-2 text-sm text-gray-500 dark:text-gray-400">
            Press Enter to search for "{inputValue}"
          </div>
        </div>
      )}
    </div>
  )
}