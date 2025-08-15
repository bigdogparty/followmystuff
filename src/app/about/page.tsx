import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { getContentStats } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Us | Follow My Stuff',
  description: 'Learn about Follow My Stuff - your trusted source for career advice that actually works.',
}

export default function AboutPage() {
  const stats = getContentStats()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Follow My Stuff
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We're on a mission to make career development less painful and more practical.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Follow My Stuff is more than just another career advice website. We're a team of professionals who got tired of the same recycled, generic career guidance that sounds good in theory but falls flat in practice. So we decided to do something about it.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We believe career advice should be honest, actionable, and actually relevant to the modern workplace. No corporate jargon, no outdated strategies from the 90s, and definitely no "just follow your passion" platitudes that ignore reality.
                </p>

                <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Real Talk</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We tell it like it is. If a strategy works, we'll share it. If something's BS, we'll call it out. Your career is too important for sugar-coating.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Practical Focus</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Every piece of advice we share is actionable. We're not here to inspire you with quotes; we're here to help you get results.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Modern Approach</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The workplace has changed. Remote work, AI, gig economy – we cover what matters now, not what worked 20 years ago.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Humor Included</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Career development doesn't have to be boring. We keep things engaging because learning works better when you're actually awake.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">What We Cover</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our content spans the full spectrum of professional development:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Career Strategy:</strong> From entry-level to executive, we cover advancement tactics that actually work
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Job Search:</strong> Modern techniques for finding opportunities and standing out from the crowd
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Professional Finance:</strong> Salary negotiation, investing your earnings, and building wealth through your career
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">→</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Work-Life Balance:</strong> Because burning out isn't a badge of honor
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We promise to deliver career advice that:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="text-gray-700 dark:text-gray-300">✓ Is based on real-world experience, not theory</li>
                  <li className="text-gray-700 dark:text-gray-300">✓ Respects your intelligence and time</li>
                  <li className="text-gray-700 dark:text-gray-300">✓ Provides specific, actionable steps</li>
                  <li className="text-gray-700 dark:text-gray-300">✓ Acknowledges that one size doesn't fit all</li>
                  <li className="text-gray-700 dark:text-gray-300">✓ Keeps it real without being cynical</li>
                </ul>
              </div>

              {/* Stats Section */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-bold mb-6">By the Numbers</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">{stats.totalArticles}</div>
                    <div className="text-blue-100">Articles</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">{stats.totalCategories}</div>
                    <div className="text-blue-100">Categories</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">{Math.round(stats.totalReadingTime / 60)}h</div>
                    <div className="text-blue-100">Of insights</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Career?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Dive into our content and discover career advice that actually makes a difference. 
                  No fluff, no BS, just practical strategies that work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/articles">
                    <Button variant="primary" size="lg">
                      Browse Articles
                    </Button>
                  </Link>
                  <Link href="/mission">
                    <Button variant="secondary" size="lg">
                      Our Mission
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}