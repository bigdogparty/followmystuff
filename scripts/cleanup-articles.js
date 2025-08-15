const fs = require('fs')
const path = require('path')

// Load the current articles
const articlesPath = path.join(__dirname, '../src/data/migrated/articles.json')
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))

console.log(`Starting with ${articles.length} articles`)

// Define articles to delete by slug
const slugsToDelete = [
  // Art category articles
  'drawing-with-procreate',
  'how-to-use-procreate-for-creatives',
  'about-art-history',
  'the-rise-of-nft-art-how-digital-artists-are-revolutionizing-the-art-world',
  'from-graffiti-to-galleries-the-evolution-of-street-art',
  'the-possibilities-of-pixels-the-beauty-and-power-of-digital-art',
  'embracing-diversity-in-art-a-call-to-action-for-inclusion',
  'exploring-environmental-art-incorporating-sustainability-into-the-art-world',
  'the-power-of-generative-ai-exploring-its-capabilities-and-implications',
  'the-influence-of-renaissance-art-on-modern-day-art',
  'the-importance-of-art-education-in-schools',
  'the-role-of-art-in-cultural-preservation',
  'the-use-of-color-in-contemporary-art',
  'the-impact-of-technology-on-art-and-design',
  '10-must-see-art-galleries-around-the-world',
  'an-artists-guide-to-choosing-the-right-paintbrushes',
  'the-history-and-evolution-of-abstract-art',
  '5-emerging-art-styles-to-watch-out-for',
  'a-beginners-guide-to-watercolor-painting',
  '10-most-famous-artworks-of-the-21st-century',
  'a-deep-dive-into-the-world-of-street-art-exploring-graffiti-and-murals',
  'the-art-of-printmaking-techniques-and-styles',
  'exploring-pencil-shades-the-impact-of-using-different-pencil-grades',
  'masterful-inking-techniques-to-elevate-your-pen-drawings',
  
  // Food category articles
  'sushi-more-than-just-raw-fish',
  'sushi-etiquette-dos-and-donts-at-the-sushi-restaurant',
  'from-farm-to-fork-exploring-the-journey-of-fresh-produce',
  'mastering-the-art-of-homemade-pasta-a-step-by-step-guide',
  'taste-the-world-unveiling-international-food-trends',
  'delicious-dishes-under-30-minutes-quick-and-flavorful-recipes',
  'foodgasm-alert-indulging-in-decadent-dessert-destinations',
  'exploring-umami-the-fifth-taste-that-elevates-your-dishes',
  'umami-fries-a-taste-explosion-you-wont-forget',
  'kitchen-alchemy-transforming-leftovers-into-gourmet-delights',
  
  // Relationships category articles
  '5-communication-techniques-to-strengthen-your-relationship',
  'how-to-make-a-long-distance-relationship-work-tips-and-advice',
  'building-healthy-family-relationships-tips-for-positive-communication',
  '10-creative-date-ideas-to-spice-up-your-relationship',
  'from-friends-to-lovers-is-it-possible-to-turn-a-friendship-into-a-romantic-relationship',
  'when-to-say-i-love-you-signs-that-your-relationship-is-ready-for-that-next-step',
  'breaking-up-is-hard-to-do-tips-for-coping-with-a-painful-breakup',
  'how-to-handle-relationship-conflict-strategies-for-resolving-disagreements',
  'the-dos-and-donts-of-sexting-tips-for-safe-and-sexy-messaging',
  'the-benefits-of-a-supportive-partner-how-your-relationship-can-boost-your-mental-health',
  'coping-with-a-partners-mental-illness-advice-for-supporting-your-loved-one',
  'the-role-of-forgiveness-in-relationships-how-to-move-forward-after-a-betrayal',
  'balancing-independence-and-intimacy-in-your-relationship-tips-for-maintaining-a-healthy-connection',
  'how-to-build-stronger-friendships-strategies-for-nurturing-meaningful-connections',
  'healthy-boundaries-in-relationships-why-theyre-important-and-how-to-set-them',
  
  // Gaming/Entertainment articles miscategorized as Career
  'how-to-play-minecraft-parkour-maps',
  'better-text-formatting-discord',
  'how-to-throw-an-oscars-party',
  'how-to-draw-anime',
  'how-to-make-your-computer-run-faster',
  'best-alternatives-ccleaner'
]

// Filter articles
const filteredArticles = articles.filter(article => {
  const shouldDelete = slugsToDelete.includes(article.slug)
  if (shouldDelete) {
    console.log(`Deleting: ${article.title} (${article.categories[0]?.name || 'No category'})`)
  }
  return !shouldDelete
})

// Update Health and Fitness category to Wellness
const updatedArticles = filteredArticles.map(article => {
  if (article.categories && article.categories.length > 0) {
    article.categories = article.categories.map(cat => {
      if (cat.name === 'Health and Fitness') {
        return { ...cat, name: 'Wellness', slug: 'wellness' }
      }
      return cat
    })
  }
  return article
})

console.log(`\nFiltered from ${articles.length} to ${updatedArticles.length} articles`)
console.log(`Deleted ${articles.length - updatedArticles.length} articles`)

// Write the filtered articles back
fs.writeFileSync(articlesPath, JSON.stringify(updatedArticles, null, 2))
console.log('\nArticles cleaned and saved!')

// Update categories.json
const categoriesPath = path.join(__dirname, '../src/data/migrated/categories.json')
const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'))

// Filter out off-topic categories and update Health and Fitness
const updatedCategories = categories
  .filter(cat => !['Art', 'Food', 'Relationships'].includes(cat.name))
  .map(cat => {
    if (cat.name === 'Health and Fitness') {
      return {
        ...cat,
        name: 'Wellness',
        slug: 'wellness',
        description: 'Health, fitness, and wellness tips for a balanced professional life'
      }
    }
    return cat
  })

// Ensure we have the core categories
const coreCategories = ['Career', 'Finance', 'Wellness']
coreCategories.forEach(catName => {
  if (!updatedCategories.find(c => c.name === catName)) {
    console.log(`Adding missing category: ${catName}`)
    updatedCategories.push({
      id: catName.toLowerCase(),
      name: catName,
      slug: catName.toLowerCase(),
      description: `${catName} articles and resources`
    })
  }
})

fs.writeFileSync(categoriesPath, JSON.stringify(updatedCategories, null, 2))
console.log(`\nCategories updated: ${updatedCategories.length} categories remaining`)