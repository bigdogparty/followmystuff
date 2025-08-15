import Link from 'next/link'
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { Article } from '@/types'

interface AuthorBioProps {
  author: Article['author']
  className?: string
}

export function AuthorBio({ author, className = '' }: AuthorBioProps) {
  return (
    <div className={`p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-100 dark:border-gray-600 ${className}`}>
      <div className="flex items-start gap-4">
        {/* Author Avatar */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>

        {/* Author Information */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <UserIcon className="w-4 h-4 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {author.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <BuildingOfficeIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Follow My Stuff Team
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {author.bio}
          </p>
        </div>
      </div>
    </div>
  )
}