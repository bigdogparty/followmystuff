import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Free Guides | Follow My Stuff',
  description: 'Comprehensive career guides to help you navigate your professional journey with confidence.',
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Free Career Guides
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 font-light">
                In-depth resources to master every aspect of your career
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                  <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Coming Soon
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  We're creating comprehensive guides that will walk you through every major career milestone and challenge with actionable, step-by-step advice.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Upcoming Guide Topics
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Job Search Mastery</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Complete guide to finding and landing your dream job
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Salary Negotiation</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          How to negotiate the compensation you deserve
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Career Transitions</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Successfully switching careers or industries
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Leadership Development</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Growing from individual contributor to leader
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Remote Work Excellence</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Thriving in remote and hybrid work environments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">📚</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Personal Branding</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Building your professional reputation and network
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Why Our Guides Will Be Different
                  </h3>
                  <div className="text-left space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>No fluff:</strong> Every guide cuts straight to actionable advice
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Real examples:</strong> Based on actual career experiences, not theory
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Always free:</strong> Quality career guidance shouldn't have a price tag
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Regularly updated:</strong> Keeping pace with the evolving job market
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mb-8">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Good career advice should be accessible to everyone. That's why all our guides will always be completely free."
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    — The Follow My Stuff Team
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/articles">
                    <Button variant="primary" size="lg">
                      Read Our Articles
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" size="lg">
                      Return Home
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