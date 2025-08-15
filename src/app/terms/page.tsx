import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Follow My Stuff',
  description: 'Terms of Service for Follow My Stuff - Understand your rights and responsibilities when using our site.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Follow My Stuff, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2>2. Use of Content</h2>
            <p>
              The content on Follow My Stuff is provided for informational and educational purposes. You may:
            </p>
            <ul>
              <li>View and read our content for personal, non-commercial use</li>
              <li>Share links to our content on social media</li>
              <li>Quote portions of our content with proper attribution</li>
            </ul>
            <p>
              You may not:
            </p>
            <ul>
              <li>Reproduce entire articles without permission</li>
              <li>Use our content for commercial purposes without consent</li>
              <li>Modify or create derivative works from our content</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>

            <h2>3. User Conduct</h2>
            <p>
              When using our website, you agree to:
            </p>
            <ul>
              <li>Provide accurate information if submitting any forms</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
              <li>Not attempt to gain unauthorized access to any portion of the site</li>
              <li>Not use automated systems to access the site without permission</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on Follow My Stuff, including text, graphics, logos, and images, is the property of Follow My Stuff or its content creators and is protected by copyright and other intellectual property laws.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              Follow My Stuff is provided "as is" without any warranties, express or implied. We do not guarantee that:
            </p>
            <ul>
              <li>The site will be available uninterrupted or error-free</li>
              <li>The information provided is complete, accurate, or current</li>
              <li>The advice provided will achieve any particular result</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              Follow My Stuff and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul>
              <li>Your use or inability to use the site</li>
              <li>Any content obtained from the site</li>
              <li>Unauthorized access to your transmissions or data</li>
            </ul>

            <h2>7. Professional Advice Disclaimer</h2>
            <p>
              The career advice and information provided on Follow My Stuff is for general informational purposes only. It should not be considered as professional career counseling, financial advice, or legal advice. Always seek qualified professional guidance for your specific situation.
            </p>

            <h2>8. External Links</h2>
            <p>
              Our site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Follow My Stuff, its operators, and affiliates from any claims, losses, damages, or expenses arising from your use of the site or violation of these terms.
            </p>

            <h2>10. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the site. Your continued use of the site after changes constitutes acceptance of the modified terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Follow My Stuff operates, without regard to conflict of law principles.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}