'use client'

import { lazy, Suspense } from 'react'
import { ArticleContent } from './ArticleContent'

// Lazy load interactive components
const NetworkingPersonalityQuiz = lazy(() => 
  import('./NetworkingPersonalityQuiz').then(mod => ({ 
    default: mod.NetworkingPersonalityQuiz 
  }))
)

const QuizLoader = () => (
  <div className="my-12 p-8 bg-gray-50 rounded-xl animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
  </div>
)

interface EnhancedArticleContentProps {
  content: string
  slug: string
  className?: string
}

export function EnhancedArticleContent({ content, slug, className = '' }: EnhancedArticleContentProps) {
  // Determine where to inject interactive components based on article slug
  const renderEnhancedContent = () => {
    switch (slug) {
      case 'what-to-do-at-a-networking-event-besides-stare-at-your-phone':
        // Find the position after "The Networking Superheroes" section
        const superheroesMarker = '<h2 class="wp-block-heading">The Networking Superheroes: Learning From the Masters</h2>'
        const quizPosition = content.indexOf(superheroesMarker)
        
        if (quizPosition !== -1) {
          // Find the end of this section (next h2 or end of content)
          const nextSectionMarker = '<h2 class="wp-block-heading">The Networking Event Survival Kit'
          const nextSectionPosition = content.indexOf(nextSectionMarker, quizPosition)
          
          if (nextSectionPosition !== -1) {
            // Insert quiz between sections
            return (
              <>
                <ArticleContent 
                  content={content.substring(0, nextSectionPosition)} 
                  className={className}
                />
                <Suspense fallback={<QuizLoader />}>
                  <NetworkingPersonalityQuiz />
                </Suspense>
                <ArticleContent 
                  content={content.substring(nextSectionPosition)} 
                  className={className}
                />
              </>
            )
          }
        }
        
        // Fallback: add quiz at the end if we can't find the right position
        return (
          <>
            <ArticleContent content={content} className={className} />
            <Suspense fallback={<QuizLoader />}>
              <NetworkingPersonalityQuiz />
            </Suspense>
          </>
        )
        
      // Add more cases for other articles with interactive components
      default:
        return <ArticleContent content={content} className={className} />
    }
  }

  return <>{renderEnhancedContent()}</>
}