import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://followmystuff.com'),
  title: {
    default: 'Follow My Stuff - Career Advice that Actually Works',
    template: '%s | Follow My Stuff'
  },
  description: 'Career advice that actually works. Get practical, actionable career development tips without the corporate jargon.',
  keywords: ['career advice', 'professional development', 'job search', 'career change', 'workplace tips'],
  authors: [{ name: 'Follow My Stuff Team' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://followmystuff.com',
    siteName: 'Follow My Stuff',
    title: 'Follow My Stuff - Career Advice that Actually Works',
    description: 'Career advice that actually works. Get practical, actionable career development tips without the corporate jargon.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Follow My Stuff - Career Advice that Actually Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Follow My Stuff - Career Advice that Actually Works',
    description: 'Career advice that actually works. Get practical, actionable career development tips without the corporate jargon.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}