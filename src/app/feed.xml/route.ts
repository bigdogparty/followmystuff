import { getAllArticles } from '@/lib/content'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://followmystuff.com'
  const articles = getAllArticles().slice(0, 50) // Latest 50 articles
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Follow My Stuff - Career Development Magazine</title>
    <description>Your witty guide to career success. Professional development advice with humor that actually helps you level up.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.excerpt}]]></description>
      <link>${baseUrl}/articles/${article.slug}</link>
      <guid>${baseUrl}/articles/${article.slug}</guid>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>noreply@followmystuff.com (${article.author.name})</author>
      ${article.categories.map(cat => `<category>${cat.name}</category>`).join('\n      ')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}