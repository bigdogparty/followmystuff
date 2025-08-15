import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="relative w-full max-w-md mx-auto mb-8">
            <Image
              src="/images/fms-lost-career-maze.jpg"
              alt="Lost professionals looking confused"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
              priority
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-2xl">
              404
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lost in the Career Maze?
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Don't worry, even the best of us take wrong turns sometimes. 
            The page you're looking for might have been moved, deleted, or perhaps it's out networking. 
            Let's get you back on track!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/articles">
              <Button variant="secondary" size="lg">
                Browse All Articles
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline" size="lg">
                Search Site
              </Button>
            </Link>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Or explore our popular categories:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/category/career" 
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span className="font-medium">Career</span>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">(71 articles)</span>
              </Link>
              <Link 
                href="/category/finance" 
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span className="font-medium">Finance</span>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">(20 articles)</span>
              </Link>
              <Link 
                href="/category/wellness" 
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <span className="font-medium">Wellness</span>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">(8 articles)</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              If you believe this is an error, please let us know so we can fix it. 
              In the meantime, our content is waiting to help you level up your career!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}