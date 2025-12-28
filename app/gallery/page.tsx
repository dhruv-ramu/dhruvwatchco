'use client'

import { useState, useMemo } from 'react'
import { getBuildImages, BuildImage } from '@/lib/images'
import BuildGrid from '@/components/BuildGrid'
import { useRouter } from 'next/navigation'

// Filter categories
const filters = [
  { id: 'all', label: 'All' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'anime', label: 'Anime' },
  { id: 'rail', label: 'Rail' },
  { id: 'tintin-inspired', label: 'Tintin-inspired' },
  { id: 'experimental', label: 'Experimental' },
]

function getAllBuilds(): BuildImage[] {
  // This will be called on the client side
  // We need to handle this differently - actually, we should fetch on server
  // For now, we'll use a workaround
  if (typeof window === 'undefined') {
    return []
  }
  // On client, we'll pass data via props instead
  return []
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const router = useRouter()

  // For client-side filtering, we need the builds as props
  // Let's create a client component that receives builds as props
  return <GalleryClient />
}

function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const builds = getBuildImages()

  const filteredBuilds = useMemo(() => {
    if (activeFilter === 'all') {
      return builds
    }

    return builds.filter(build => {
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
        // Minimal could be builds without anime/tintin tags, or we could infer from filename
        return !tagsLower.some(t => t.includes('anime') || t.includes('tintin') || t.includes('rail'))
      }

      return tagsLower.includes(filterLower)
    })
  }, [activeFilter, builds])

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

