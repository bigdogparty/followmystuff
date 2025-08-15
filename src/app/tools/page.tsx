import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Career Tools | Follow My Stuff',
  description: 'Free career development tools and resources to help you advance your professional journey.',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Career Tools
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 font-light">
                Practical tools to accelerate your professional growth
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Coming Soon
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  We're working hard to bring you powerful career development tools that will help you track your progress, set goals, and achieve professional success.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    What to Expect
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Resume Builder</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Create ATS-optimized resumes with professional templates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Career Path Planner</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Map out your career trajectory and milestones
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Salary Calculator</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Compare salaries and negotiate with confidence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Interview Prep</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Practice common questions and improve your answers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Be the First to Know
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Want to be notified when our career tools launch? Follow us on social media or check back soon!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/articles">
                    <Button variant="primary" size="lg">
                      Browse Articles
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