# Follow My Stuff - Next.js Migration

A modern, high-performance career development magazine built with Next.js, TypeScript, and Tailwind CSS. This project migrates FollowMyStuff.com from WordPress to a modern JAMstack architecture.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap generation
- **Performance First**: Static generation, optimized images, Core Web Vitals
- **Mobile Responsive**: Mobile-first design with dark mode support
- **Content Migration**: Automated WordPress to Next.js migration scripts
- **Search Functionality**: Real-time article search with filters
- **Career Focused**: Specialized content architecture for professional development

## 🏗️ Architecture

### Content Focus
- **Primary**: Career development and professional growth
- **Supporting**: Job search strategies, professional finance, work-life balance
- **Tone**: Witty, approachable, actionable advice

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel (configured)
- **Content**: Static generation with ISR capability

## 📁 Project Structure

```
followmystuff/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── articles/[slug]/    # Dynamic article pages
│   │   ├── category/[slug]/    # Category pages
│   │   ├── search/             # Search functionality
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable components
│   │   ├── layout/             # Header, Footer
│   │   └── ui/                 # Button, ArticleCard, SearchInput
│   ├── styles/                 # Global styles and Tailwind config
│   ├── types/                  # TypeScript interfaces
│   ├── utils/                  # Utility functions
│   └── data/                   # Content data (post-migration)
├── scripts/                    # Migration and build scripts
├── public/                     # Static assets
└── docs/                       # Documentation
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Type check
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Content Migration

### Migrate from WordPress

```bash
# Run migration script
npm run migrate

# This will:
# - Fetch all posts from WordPress REST API
# - Process and clean content
# - Generate TypeScript types
# - Create redirect mappings
# - Save to src/data/migrated/
```

### Migration Output

The migration script creates:
- `articles.json` - All articles with metadata
- `categories.json` - Content categories
- `tags.json` - Content tags  
- `redirects.json` - URL redirect mappings
- `index.ts` - TypeScript definitions
- `migration-summary.json` - Migration statistics

## 🎨 Design System

### Colors
- **Primary**: Blue (career focus, trust)
- **Secondary**: Gray (professional, clean)
- **Accent**: Context-dependent category colors

### Typography
- **Font**: Inter (clean, professional, readable)
- **Scale**: Responsive typography with proper reading flow

### Components
- **Cards**: Consistent article presentation
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Accessible inputs with proper focus states

## 🔍 SEO Features

### Meta Tags
- Dynamic page titles and descriptions
- Open Graph and Twitter Cards
- Canonical URLs
- Author attribution

### Structured Data
- Article schema markup
- Organization information
- Breadcrumb navigation
- Website search functionality

### Performance
- Static generation where possible
- Optimized images with Next.js Image
- CSS optimization and purging
- Core Web Vitals optimization

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile reading experience
- **Breakpoints**: Tailwind's responsive system
- **Navigation**: Collapsible mobile menu
- **Typography**: Readable font sizes across devices

## 🌙 Dark Mode

- System preference detection
- Toggle functionality (can be added)
- Consistent color scheme
- Accessible contrast ratios

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run migrate      # Migrate WordPress content
```

## 📊 Content Strategy

### Content Categories
1. **Career Development** - Core focus, professional growth
2. **Job Search** - Tactical job finding strategies  
3. **Professional Finance** - Salary, investing, career ROI
4. **Work-Life Balance** - Sustainable career practices

### Content Types
- **Guides** - Comprehensive how-to articles
- **Tips** - Quick, actionable advice
- **Analysis** - Industry insights and trends
- **Stories** - Career journey narratives

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Set environment variables if needed
4. Deploy!

### Environment Variables

```bash
# Optional - for enhanced features
NEXT_PUBLIC_SITE_URL=https://followmystuff.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🔄 Content Workflow

### Adding New Articles
1. Use WordPress migration OR
2. Create JSON files in `src/data/` OR  
3. Implement headless CMS integration

### URL Structure
- Homepage: `/`
- Articles: `/articles/{slug}`
- Categories: `/category/{slug}`
- Search: `/search?q={query}`

## 🎯 Performance Targets

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo and favicon in `public/`
- Modify site metadata in `src/app/layout.tsx`

### Content Structure
- Modify types in `src/types/index.ts`
- Update components for new content fields
- Adjust migration script for custom data

## 📈 Analytics & Monitoring

### Recommended Tools
- **Analytics**: Google Analytics 4
- **Performance**: Vercel Analytics
- **Error Tracking**: Sentry
- **SEO**: Google Search Console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For questions about the migration or setup:
1. Check the documentation
2. Review the migration logs
3. Test in development environment
4. Create an issue for bugs

---

**Built with ❤️ for career growth and professional development.**