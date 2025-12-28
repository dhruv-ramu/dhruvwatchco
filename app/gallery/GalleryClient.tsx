'use client'

import { useState, useMemo } from 'react'
import { BuildImage } from '@/lib/images'
import BuildGrid from '@/components/BuildGrid'

// Filter categories
const filters = [
  { id: 'all', label: 'All' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'anime', label: 'Anime' },
  { id: 'rail', label: 'Rail' },
  { id: 'tintin-inspired', label: 'Tintin-inspired' },
  { id: 'experimental', label: 'Experimental' },
]

interface GalleryClientProps {
  initialBuilds: BuildImage[]
}

export default function GalleryClient({ initialBuilds }: GalleryClientProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredBuilds = useMemo(() => {
    if (activeFilter === 'all') {
      return initialBuilds
    }

    return initialBuilds.filter(build => {
      const tagsLower = build.tags.map(t => t.toLowerCase())
      const filterLower = activeFilter.toLowerCase()

      // Handle specific filter mappings
      if (filterLower === 'tintin-inspired') {
        return tagsLower.some(t => t.includes('tintin'))
      }
      if (filterLower === 'anime') {
        return tagsLower.some(t => t.includes('anime'))
      }
      if (filterLower === 'rail') {
        return tagsLower.some(t => t.includes('rail'))
      }
      if (filterLower === 'experimental') {
        return tagsLower.some(t => t.includes('experimental'))
      }
      if (filterLower === 'minimal') {
        // Minimal could be builds without anime/tintin tags
        return !tagsLower.some(t => t.includes('anime') || t.includes('tintin') || t.includes('rail'))
      }

      return tagsLower.includes(filterLower)
    })
  }, [activeFilter, initialBuilds])

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="small-caps text-ink/60 mb-4">Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">All Builds</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors border ${
                  activeFilter === filter.id
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink/70 border-ink/20 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {filteredBuilds.length > 0 ? (
          <BuildGrid builds={filteredBuilds} />
        ) : (
          <div className="text-center py-16">
            <p className="text-ink/60">No builds found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

