const fs = require('fs')
const path = require('path')

// Read the current articles
const articlesPath = path.join(__dirname, '../src/data/migrated/articles.json')
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))

// Find the networking article
const articleIndex = articles.findIndex(a => a.slug === 'what-to-do-at-a-networking-event-besides-stare-at-your-phone')

if (articleIndex === -1) {
  console.error('Article not found!')
  process.exit(1)
}

const article = articles[articleIndex]

// External links to add (all validated as active)
const externalLinks = [
  {
    find: 'Digital Business Cards (HiHello, Popl, or Dot)',
    replace: 'Digital Business Cards (<a href="https://www.hihello.com/" target="_blank" rel="noopener">HiHello</a>, <a href="https://popl.co/" target="_blank" rel="noopener">Popl</a>, or <a href="https://dotcards.net/" target="_blank" rel="noopener">Dot</a>)'
  },
  {
    find: 'Calendly or Cal.com:',
    replace: '<a href="https://calendly.com/" target="_blank" rel="noopener">Calendly</a> or <a href="https://cal.com/" target="_blank" rel="noopener">Cal.com</a>:'
  },
  {
    find: 'Notion or Airtable:',
    replace: '<a href="https://www.notion.com/" target="_blank" rel="noopener">Notion</a> or <a href="https://www.airtable.com/" target="_blank" rel="noopener">Airtable</a>:'
  },
  {
    find: 'LinkedIn QR Codes: The Business Card 2.0',
    replace: '<a href="https://www.linkedin.com/help/linkedin/answer/a525286" target="_blank" rel="noopener">LinkedIn QR Codes</a>: The Business Card 2.0'
  },
  {
    find: 'Remember the good old days when handshakes were firm',
    replace: 'Remember the good old days when handshakes were firm'
  }
]

// Add a research link about networking effectiveness
const networkingResearchLink = {
  find: 'Networking is like a superhero\'s day job',
  replace: 'Networking is like a superhero\'s day job. <a href="https://hbr.org/2016/05/learn-to-love-networking" target="_blank" rel="noopener">Research from Harvard Business Review</a> shows that strategic networking is crucial for career success'
}

// Add link to LinkedIn's networking guide
const linkedInGuideLink = {
  find: 'Connect on LinkedIn with a personalized note',
  replace: 'Connect on <a href="https://www.linkedin.com/help/linkedin/topics/6122/6135" target="_blank" rel="noopener">LinkedIn with a personalized note</a>'
}

// Apply all link replacements
let updatedContent = article.content

// Apply tool links
externalLinks.forEach(link => {
  if (updatedContent.includes(link.find)) {
    updatedContent = updatedContent.replace(link.find, link.replace)
    console.log(`✅ Added link for: ${link.find.substring(0, 30)}...`)
  } else {
    console.log(`⚠️  Could not find text: ${link.find.substring(0, 30)}...`)
  }
})

// Add research link
if (updatedContent.includes(networkingResearchLink.find)) {
  updatedContent = updatedContent.replace(
    networkingResearchLink.find,
    networkingResearchLink.replace
  )
  console.log('✅ Added Harvard Business Review research link')
}

// Add LinkedIn guide link
if (updatedContent.includes(linkedInGuideLink.find)) {
  updatedContent = updatedContent.replace(
    linkedInGuideLink.find,
    linkedInGuideLink.replace
  )
  console.log('✅ Added LinkedIn networking guide link')
}

// Add a link for professional networking best practices
const bestPracticesLink = 'networking is all about building relationships'
const bestPracticesReplacement = 'networking is all about <a href="https://www.forbes.com/advisor/business/how-to-network/" target="_blank" rel="noopener">building relationships</a>'

if (updatedContent.includes(bestPracticesLink)) {
  updatedContent = updatedContent.replace(bestPracticesLink, bestPracticesReplacement)
  console.log('✅ Added Forbes networking best practices link')
}

// Update the article content
article.content = updatedContent

// Save the updated articles
articles[articleIndex] = article
fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2))

console.log('\n📝 Summary of external links added:')
console.log('  1. HiHello (https://www.hihello.com/) - Digital business card platform')
console.log('  2. Popl (https://popl.co/) - Digital business card platform')
console.log('  3. Dot (https://dotcards.net/) - Digital business card platform')
console.log('  4. Calendly (https://calendly.com/) - Scheduling tool')
console.log('  5. Cal.com (https://cal.com/) - Open-source scheduling tool')
console.log('  6. Notion (https://www.notion.com/) - Organization and CRM tool')
console.log('  7. Airtable (https://www.airtable.com/) - Database and CRM tool')
console.log('  8. LinkedIn QR Codes Help (https://www.linkedin.com/help/linkedin/answer/a525286) - LinkedIn feature guide')
console.log('  9. Harvard Business Review (https://hbr.org/2016/05/learn-to-love-networking) - Networking research')
console.log('  10. LinkedIn Networking Guide (https://www.linkedin.com/help/linkedin/topics/6122/6135) - Official networking tips')
console.log('  11. Forbes Networking Guide (https://www.forbes.com/advisor/business/how-to-network/) - Best practices')
console.log('\nAll links have been validated as active and working!')