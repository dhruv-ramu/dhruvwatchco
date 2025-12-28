import { BuildImage } from '@/lib/images'
import BuildCard from './BuildCard'

interface BuildGridProps {
  builds: BuildImage[]
  className?: string
}

export default function BuildGrid({ builds, className = '' }: BuildGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {builds.map((build) => (
        <BuildCard key={build.slug} build={build} />
      ))}
    </div>
  )
}

