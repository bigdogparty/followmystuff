# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

FollowMyStuff is a modern career development magazine built with Next.js 15, TypeScript, and Tailwind CSS. This project migrated from WordPress to a JAMstack architecture, focusing on professional development content with a witty, approachable tone.

## High-Level Architecture

### Frontend Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design system
- **Path Aliases**: `@/*` maps to `./src/*`

### Content Architecture
The application uses a static content system with JSON data files:
- **Data Source**: Migrated WordPress content stored in `src/data/migrated/`
- **Content Processing**: Runtime conversion from migrated data to TypeScript types
- **Content Types**: Articles, Categories, Tags with SEO metadata
- **Image Management**: Optimized images in `public/images/articles/` with originals preserved

### Key Architectural Patterns
- **Static Generation**: Pre-rendered pages for optimal performance
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures
- **Component Architecture**: Modular UI components in `components/ui/` and `components/layout/`
- **Content API**: Centralized content access through `src/lib/content.ts`

## Common Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000
npm run type-check   # Run TypeScript type checking
npm run lint         # Run Next.js linting

# Build & Production
npm run build        # Build for production
npm start           # Start production server

# Content Migration
npm run migrate:csv      # Migrate content from WordPress CSV export
npm run migrate:images   # Process and optimize article images
npm run optimize:images  # Run image optimization script

# Legacy commands (kept for compatibility)
npm run migrate         # Run original migration script
npm run export         # Build and export static site
```

## Content Management Workflow

### Article Storage System
**IMPORTANT**: All articles are stored in a single JSON file at `src/data/migrated/articles.json`. This is the source of truth for all content. The system reads directly from this JSON file at runtime.

### Adding New Articles (2025 and Beyond)
1. **Write the article** in your preferred format (Markdown, Google Docs, etc.)
2. **Convert to JSON format** matching the existing structure in `articles.json`
3. **Add to articles.json** at the beginning of the array (newest first)
4. **Required fields** for each article:
   - `title`: Article headline
   - `slug`: URL-friendly version (lowercase, hyphens)
   - `excerpt`: Short description (150-200 chars)
   - `content`: HTML-formatted content (use `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<strong>`, etc.)
   - `author`: Object with id, name, bio, avatar
   - `publishedAt`: Date string (format: "2025-09-04 10:00:00")
   - `updatedAt`: Date string (usually same as publishedAt for new articles)
   - `featuredImage`: Path to image (e.g., "/images/articles/filename.jpg")
   - `categories`: Array of category objects with id, name, slug
   - `tags`: Array of tag objects with id, name, slug
   - `readingTime`: Estimated minutes to read
   - `seo`: Object with metaTitle, metaDescription, focusKeyword, canonicalUrl
   - `isCareerFocused`: Boolean (true for career content)

### Content Calendar
- **Location**: `src/data/content-calendar-2025.json` contains the editorial calendar
- **Planning**: One article per week for Q4 2025
- **Brand Guide**: Follow tone and style from `ref/FOLLOW-MY-STUFF-BRAND-GUIDE.md`

### Converting Markdown to JSON
When adding a new article:
1. Write content following brand voice (witty, practical, honest)
2. Convert Markdown headers to HTML tags:
   - `#` → Skip (use article title in JSON)
   - `##` → `<h2>`
   - `###` → `<h3>`
   - Lists → `<ul>` or `<ol>` with `<li>`
   - Bold → `<strong>`
   - Links → `<a href="">`
3. Use the script at `scripts/add-new-article.js` as a template
4. Ensure proper escaping of quotes in JSON

### Migration from WordPress
The project includes migration scripts to import content from WordPress:
1. Export WordPress posts to CSV format
2. Place CSV in `ref/` directory
3. Run `npm run migrate:csv` to process and convert to JSON
4. Run `npm run migrate:images` to process associated images

### URL Structure
- Articles: `/articles/[slug]`
- Categories: `/category/[slug]`
- Search: `/search?q=[query]`
- Homepage: `/`

## Testing Strategy

Currently, the project does not have automated tests configured. When implementing tests:
1. Use Jest with React Testing Library for component tests
2. Test critical user paths: article viewing, search, navigation
3. Ensure content loading and error states are covered

## Performance Considerations

### Image Optimization
- Use Next.js Image component for automatic optimization
- Keep original images in `originals/` subdirectory
- Run `npm run optimize:images` for batch processing

### Content Loading
- Content is loaded synchronously from JSON files
- Consider implementing ISR (Incremental Static Regeneration) for large content sets
- Monitor bundle size as content grows

## Deployment Notes

The project is configured for Vercel deployment:
- Build command: `npm run build`
- Output directory: `.next`
- Environment variables can be set in Vercel dashboard
- `vercel.json` includes redirect configurations