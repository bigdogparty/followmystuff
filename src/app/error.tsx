'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Something Went Wrong
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We encountered an unexpected error. Don't worry, it's not your fault - 
            even the best career plans sometimes need a backup strategy!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} variant="primary">
              Try Again
            </Button>
            <Button 
              onClick={() => window.location.href = '/'} 
              variant="secondary"
            >
              Go Home
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
                Error Details (Development)
              </summary>
              <pre className="mt-2 text-xs text-red-600 dark:text-red-400 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}