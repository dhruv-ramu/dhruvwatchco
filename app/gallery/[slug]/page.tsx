import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBuildImageBySlug, getBuildImages } from '@/lib/images'
import Button from '@/components/Button'
import TagPills from '@/components/TagPills'
import SpecTable from '@/components/SpecTable'

export async function generateStaticParams() {
  const builds = getBuildImages()
  return builds.map((build) => ({
    slug: build.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const build = getBuildImageBySlug(params.slug)
  
  if (!build) {
    return {
      title: 'Build Not Found | Dhruv Watch Co',
    }
  }

  return {
    title: `${build.title} | Dhruv Watch Co`,
    description: `Custom handmade watch: ${build.title}. ${build.tags.join(', ')}.`,
    openGraph: {
      title: `${build.title} | Dhruv Watch Co`,
      description: `Custom handmade watch: ${build.title}`,
      images: [build.src],
    },
  }
}

export default function BuildDetailPage({ params }: { params: { slug: string } }) {
  const build = getBuildImageBySlug(params.slug)

  if (!build) {
    notFound()
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink link-underline mb-8"
        >
          ← Back to Gallery
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-square w-full border border-ink/10 bg-ink/5">
            <Image
              src={build.src}
              alt={build.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                {build.title}
              </h1>
              <TagPills tags={build.tags} />
            </div>

            <SpecTable />

            <div className="pt-8 border-t border-ink/15">
              <p className="text-ink/80 mb-6 leading-relaxed">
                This custom build features a hand-finished dial with careful attention to alignment, clarity, and detail. Each component is selected and assembled by hand, with final quality control performed under magnification.
              </p>
              <Button href="/contact">Commission a Similar Piece</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
