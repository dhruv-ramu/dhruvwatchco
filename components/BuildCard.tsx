import Image from 'next/image'
import Link from 'next/link'
import { BuildImage } from '@/lib/images'
import TagPills from './TagPills'

interface BuildCardProps {
  build: BuildImage
}

export default function BuildCard({ build }: BuildCardProps) {
  return (
    <Link href={`/gallery/${build.slug}`} className="group block">
      <div className="card-lift bg-paper border border-ink/10 overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-ink/5">
          <Image
            src={build.src}
            alt={build.alt}
            fill
            className="object-cover image-hover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 md:p-6">
          <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-ink group-hover:text-accent transition-colors">
            {build.title}
          </h3>
          <TagPills tags={build.tags} />
        </div>
      </div>
    </Link>
  )
}

