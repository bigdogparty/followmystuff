import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://followmystuff.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/_next/',
        '/api/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}