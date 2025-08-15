import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Mission | Follow My Stuff',
  description: 'Our mission to transform career development with honest, practical advice that actually works.',
}

export default function MissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 font-light">
                To cut through the noise and deliver career advice that actually works.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                  Mission Statement
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  Follow My Stuff exists to empower professionals at every stage of their career with 
                  honest, actionable advice that bridges the gap between where they are and where they 
                  want to be – without the corporate speak, outdated tactics, or one-size-fits-all solutions.
                </p>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  The career advice industry is broken. It's filled with recycled content, generic tips that 
                  sound profound but mean nothing, and strategies that haven't been relevant since dial-up 
                  internet was a thing. Meanwhile, the workplace is evolving faster than ever.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We started Follow My Stuff because we believe professionals deserve better. You deserve 
                  advice that acknowledges the realities of modern work, respects your intelligence, and 
                  actually helps you make progress.
                </p>

                <h2 className="text-3xl font-bold mb-6">Our Core Beliefs</h2>
                <div className="space-y-6 mb-12">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Honesty Over Hype</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We believe in telling the truth about careers, even when it's uncomfortable. Not every 
                      passion can be monetized, not every job will be fulfilling, and that's okay. Real 
                      advice acknowledges reality.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Action Over Inspiration</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Motivational quotes don't pay bills. We focus on specific, actionable steps you can 
                      take today to improve your career tomorrow. Every article should leave you with 
                      something you can actually do.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Progress Over Perfection</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Career development isn't about finding the perfect path; it's about making consistent 
                      progress. We believe in incremental improvements, learning from failures, and adapting 
                      as you go.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Individual Over Universal</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      There's no universal career formula. What works for a software engineer won't work 
                      for a teacher. We provide frameworks and strategies you can adapt to your unique 
                      situation, not rigid rules.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Balance Over Burnout</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Success shouldn't come at the cost of your health, relationships, or sanity. We 
                      advocate for sustainable career growth that enhances your life, not consumes it.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We're committed to being the career resource we wish existed when we were starting out. 
                  That means:
                </p>
                <ul className="space-y-3 mb-12">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Staying Current:</strong> We continuously update our advice to reflect the 
                      modern workplace, not outdated conventions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Being Accessible:</strong> No paywalls for essential career advice. Everyone 
                      deserves access to quality guidance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Maintaining Quality:</strong> We'd rather publish one great article than ten 
                      mediocre ones. Quality over quantity, always
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Respecting Your Time:</strong> Clear, concise advice that gets to the point. 
                      Your time is valuable
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Keeping It Real:</strong> We'll never pretend to have all the answers. When 
                      we don't know something, we'll say so
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mb-6">The Future We're Building</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We envision a world where career development is:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Demystified</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Clear, straightforward guidance replaces confusing jargon and vague platitudes
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Personalized</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Advice that acknowledges different paths, industries, and individual circumstances
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Practical</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Every piece of advice comes with clear, actionable steps you can implement
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Sustainable</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Career growth strategies that enhance life without sacrificing well-being
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Join Us in Changing Career Development
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Whether you're just starting out or looking to make a change, we're here to help you 
                  navigate your career with confidence and clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/articles">
                    <Button variant="secondary" size="lg">
                      Start Reading
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                      Learn More About Us
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