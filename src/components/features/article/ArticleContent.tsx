'use client'

import { useEffect, useRef, useState } from 'react'

interface ArticleContentProps {
  content: string
  className?: string
}

export function ArticleContent({ content, className = '' }: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [sanitizedContent, setSanitizedContent] = useState<string>('')

  // Load DOMPurify and sanitize content on client side only
  useEffect(() => {
    const sanitizeContent = async () => {
      if (typeof window !== 'undefined') {
        const DOMPurify = (await import('dompurify')).default
        const clean = DOMPurify.sanitize(content, {
          ALLOWED_TAGS: [
            'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's', 'strike', 'del',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ul', 'ol', 'li',
            'blockquote', 'cite',
            'a', 'img',
            'pre', 'code',
            'table', 'thead', 'tbody', 'tr', 'th', 'td',
            'div', 'span'
          ],
          ALLOWED_ATTR: [
            'href', 'title', 'target', 'rel',
            'src', 'alt', 'width', 'height',
            'class', 'id'
          ],
          ALLOW_DATA_ATTR: false,
          FORBID_TAGS: ['script', 'object', 'embed', 'base', 'link', 'meta', 'style']
        })
        setSanitizedContent(clean)
      }
    }
    sanitizeContent()
  }, [content])

  // Update reading progress
  useEffect(() => {
    const updateReadingProgress = () => {
      const progressBar = document.getElementById('reading-progress')
      if (!progressBar || !contentRef.current) return

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const winScroll = scrollTop
      const height = scrollHeight - clientHeight
      const scrolled = (winScroll / height) * 100

      progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%'
    }

    window.addEventListener('scroll', updateReadingProgress)
    updateReadingProgress() // Initial call

    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  // Show loading state while sanitizing
  if (!sanitizedContent) {
    return (
      <div ref={contentRef} className={`prose-enhanced max-w-none ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={contentRef}
      className={`prose-enhanced max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  )
}