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

// Enhanced content sections to add
const enhancedSections = {
  // Expand the Survival Kit section with modern tools
  modernTools: `
<h3 class="wp-block-heading">The Digital Arsenal: Modern Networking Tools</h3>

<p>Welcome to 2025, where your networking toolkit has gone digital. Here's what the modern networker carries:</p>

<h4 class="wp-block-heading">LinkedIn QR Codes: The Business Card 2.0</h4>

<p>Remember fumbling with business cards? Now you can connect instantly with LinkedIn's QR code feature. It's like a secret handshake, but for professionals who understand technology. Pro tip: Have it ready on your phone's lock screen for quick access.</p>

<h4 class="wp-block-heading">Digital Business Cards (HiHello, Popl, or Dot)</h4>

<p>These aren't your grandpa's business cards. Tap your phone or scan a code, and boom – all your contact info transfers instantly. Plus, you can update your details without reprinting 500 cards every time you change jobs. Environmental and efficient!</p>

<h4 class="wp-block-heading">The Follow-Up App Arsenal</h4>

<ul>
<li><strong>Calendly or Cal.com:</strong> Skip the "when are you free?" dance. Send your scheduling link and let them pick a time.</li>
<li><strong>Notion or Airtable:</strong> Create a CRM for your networking contacts. Track where you met, what you discussed, and when to follow up.</li>
<li><strong>Voice Memos:</strong> After each conversation, record a quick note about the person. It's like having a photographic memory, but for your ears.</li>
</ul>`,

  // Replace "Disappearing" section with Graceful Exit Strategies
  gracefulExits: `
<h2 class="wp-block-heading">The Art of the Graceful Exit: How to Move On Without Being Rude</h2>

<p>Every great networker knows that ending a conversation is just as important as starting one. Here's how to exit gracefully without looking like you're escaping a burning building:</p>

<h3 class="wp-block-heading">The Bathroom Excuse (Classic But Effective)</h3>

<p>"Would you excuse me for a moment?" Simple, universally understood, and nobody questions biological necessities. Just don't use it three times with the same person.</p>

<h3 class="wp-block-heading">The Introduction Pass-Off</h3>

<p>"Oh, you absolutely must meet Sarah! She's working on something similar." Introduce them to someone else, and gracefully bow out as they start chatting. You're not abandoning them; you're being a connector!</p>

<h3 class="wp-block-heading">The Honest Time-Check</h3>

<p>"This has been fascinating! I promised myself I'd connect with at least five people tonight, so I should keep circulating. Let's definitely continue this conversation – may I have your card?"</p>

<h3 class="wp-block-heading">The Refill Redirect</h3>

<p>"I'm going to grab another drink/some food. It was great talking with you!" If they offer to come with you, you can naturally split up at the bar or buffet.</p>

<h3 class="wp-block-heading">The Strategic Summary</h3>

<p>Summarize the conversation: "So you're working on blockchain for pet adoption – that's incredible! I'll definitely check out your website." This signals the conversation is concluding while showing you were listening.</p>

<p>Remember: A good exit leaves both parties feeling positive about the interaction. You're not escaping; you're being respectful of everyone's networking time.</p>`,

  // Add section for introverts vs extroverts
  personalityTypes: `
<h2 class="wp-block-heading">Networking for Every Personality: Introverts, Extroverts, and Everyone In Between</h2>

<h3 class="wp-block-heading">The Introvert's Playbook</h3>

<p>If the thought of working a room makes you want to hide in the coat closet, this section is for you:</p>

<h4 class="wp-block-heading">Quality Over Quantity</h4>
<p>Set a realistic goal: three meaningful conversations instead of 30 surface-level interactions. Depth is your superpower – use it.</p>

<h4 class="wp-block-heading">The Buddy System</h4>
<p>Bring an extroverted friend who can make introductions. You're Batman; they're Robin. Together, you're unstoppable.</p>

<h4 class="wp-block-heading">Strategic Positioning</h4>
<p>Find the quiet corners, the balcony, or the area near the food. These are introvert-friendly zones where one-on-one conversations naturally happen.</p>

<h4 class="wp-block-heading">The Early Bird Advantage</h4>
<p>Arrive early when the crowd is smaller and energy is calmer. You can ease into conversations before the room becomes overwhelming.</p>

<h4 class="wp-block-heading">Recovery Breaks</h4>
<p>Schedule mini-breaks. Step outside for "a phone call" (even if you're just checking Instagram). Recharge and return refreshed.</p>

<h3 class="wp-block-heading">The Extrovert's Guidelines</h3>

<p>You love the energy of a crowded room, but here's how to maximize your natural advantages:</p>

<h4 class="wp-block-heading">Listen More Than You Speak</h4>
<p>Your energy is infectious, but make sure you're not dominating conversations. Aim for a 60/40 listening-to-talking ratio.</p>

<h4 class="wp-block-heading">Depth Check</h4>
<p>Challenge yourself to have fewer but deeper conversations. Not every interaction needs to be a performance.</p>

<h4 class="wp-block-heading">Include the Quiet Ones</h4>
<p>Use your social confidence to bring wallflowers into conversations. Be the bridge between different groups.</p>

<h4 class="wp-block-heading">Energy Management</h4>
<p>Don't burn out in the first hour. Pace yourself for the entire event. Think marathon, not sprint.</p>

<h3 class="wp-block-heading">The Ambivert's Advantage</h3>

<p>If you're somewhere in the middle (like most of us), you have the best of both worlds:</p>

<ul>
<li><strong>Read the room:</strong> Adapt your energy to match the situation</li>
<li><strong>Switch modes:</strong> Start with one-on-one conversations, then join group discussions when you're warmed up</li>
<li><strong>Be the translator:</strong> Help introverts and extroverts understand each other</li>
</ul>`,

  // Add section on maintaining long-term relationships
  longTermRelationships: `
<h2 class="wp-block-heading">Beyond the Business Card: Building Lasting Professional Relationships</h2>

<p>Collecting contacts is easy. Building relationships? That's where the real magic happens. Here's how to turn that stack of business cards into a powerful professional network:</p>

<h3 class="wp-block-heading">The 24-48-7 Rule</h3>

<ul>
<li><strong>24 hours:</strong> Send a quick "nice to meet you" message</li>
<li><strong>48 hours:</strong> Connect on LinkedIn with a personalized note</li>
<li><strong>7 days:</strong> Share something valuable (article, introduction, resource) related to your conversation</li>
</ul>

<h3 class="wp-block-heading">The Value-First Approach</h3>

<p>Before asking for anything, provide value three times. Share an article they'd find interesting, make an introduction, or offer a helpful resource. Be a giver, not a taker.</p>

<h3 class="wp-block-heading">The Touchpoint Calendar</h3>

<p>Create a system for regular check-ins:</p>

<ul>
<li><strong>Monthly:</strong> Close professional contacts and potential collaborators</li>
<li><strong>Quarterly:</strong> Broader network and industry connections</li>
<li><strong>Annually:</strong> Everyone else (birthday wishes, holiday greetings, major milestones)</li>
</ul>

<h3 class="wp-block-heading">The Coffee Strategy</h3>

<p>Commit to one coffee meeting per week with someone from your network. That's 52 strengthened relationships per year. Virtual coffee counts too!</p>

<h3 class="wp-block-heading">The Update Loop</h3>

<p>Share your wins and milestones with your network. Got promoted? Launched a project? Let them know. It keeps you top of mind and gives them a reason to reach out.</p>

<h3 class="wp-block-heading">The Gratitude Practice</h3>

<p>When someone in your network helps you, thank them publicly (with their permission). A LinkedIn post celebrating their assistance strengthens the relationship and shows others you value your connections.</p>

<p>Remember: Your network is like a garden. It needs regular attention, care, and cultivation to flourish. The seeds you plant today become the opportunities of tomorrow.</p>`
}

// Function to insert content at the right position
function insertEnhancedContent(content) {
  let enhancedContent = content
  
  // 1. Add modern tools after the existing Survival Kit section
  const survivalKitEnd = content.indexOf('<h2 class="wp-block-heading">The Post-Event Follow-Up')
  if (survivalKitEnd !== -1) {
    enhancedContent = content.slice(0, survivalKitEnd) + 
                     enhancedSections.modernTools + 
                     content.slice(survivalKitEnd)
  }
  
  // 2. Replace the "Disappearing" section with Graceful Exit Strategies
  const disappearingStart = enhancedContent.indexOf('<h2 class="wp-block-heading">When All Else Fails')
  const disappearingEnd = enhancedContent.indexOf('</p>', enhancedContent.lastIndexOf('talking to a ficus.'))
  
  if (disappearingStart !== -1 && disappearingEnd !== -1) {
    enhancedContent = enhancedContent.slice(0, disappearingStart) + 
                     enhancedSections.gracefulExits +
                     enhancedContent.slice(disappearingEnd + 4)
  }
  
  // 3. Add personality types section after the Networking Superheroes section
  const superheroesEnd = enhancedContent.indexOf('<h2 class="wp-block-heading">The Networking Event Survival Kit')
  if (superheroesEnd !== -1) {
    enhancedContent = enhancedContent.slice(0, superheroesEnd) + 
                     enhancedSections.personalityTypes + 
                     enhancedContent.slice(superheroesEnd)
  }
  
  // 4. Add long-term relationships section before the closing
  // Find the last paragraph that starts the conclusion
  const conclusionStart = enhancedContent.lastIndexOf('<p>In the end, networking is all about')
  if (conclusionStart !== -1) {
    enhancedContent = enhancedContent.slice(0, conclusionStart) + 
                     enhancedSections.longTermRelationships + 
                     enhancedContent.slice(conclusionStart)
  }
  
  return enhancedContent
}

// Update the article content
article.content = insertEnhancedContent(article.content)

// Update the reading time (content is longer now)
article.readingTime = 18

// Update the excerpt to be more actionable
article.excerpt = "Master the art of networking with this comprehensive guide. Learn your networking personality type, discover modern tools beyond business cards, and get actionable strategies for making meaningful connections. Plus, take our quiz to find out if you're a Social Butterfly, Wallflower Whisperer, or Jester!"

// Save the updated articles
articles[articleIndex] = article
fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2))

console.log('✅ Successfully enhanced the networking article with:')
console.log('  - Modern networking tools section')
console.log('  - Graceful exit strategies (replaced disappearing section)') 
console.log('  - Personality-based networking strategies')
console.log('  - Long-term relationship building section')
console.log('  - Interactive personality quiz (added via React component)')