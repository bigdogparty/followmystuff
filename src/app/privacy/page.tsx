import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Follow My Stuff',
  description: 'Privacy Policy for Follow My Stuff - Learn how we protect your data and respect your privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              Follow My Stuff is committed to protecting your privacy. We collect minimal information necessary to provide you with the best career development content and user experience.
            </p>
            <ul>
              <li>Analytics data to understand how our content is used</li>
              <li>Basic browser information for optimizing site performance</li>
              <li>Any information you voluntarily provide through contact forms</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Improve our content and user experience</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Send updates about new content (only if you opt-in)</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>4. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience. These are small text files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our site</li>
              <li>Improve site performance</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and site optimization. These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of any communications</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us through our website.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}