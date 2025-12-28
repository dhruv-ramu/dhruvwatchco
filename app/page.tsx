import Image from 'next/image'
import Link from 'next/link'
import { getBuildImages } from '@/lib/images'
import Button from '@/components/Button'
import BuildGrid from '@/components/BuildGrid'

export default function Home() {
  const allBuilds = getBuildImages()
  const featuredBuilds = allBuilds.slice(0, 6)
  const heroImage = allBuilds[0] || null

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Handmade Watches,<br />
                  Crafted with Care
                </h1>
                <p className="text-lg md:text-xl text-ink/70 max-w-xl">
                  Each piece is meticulously assembled by hand, with custom dials, careful alignment, and thoughtful finishing.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Commission a Watch</Button>
                <Button href="/gallery" variant="secondary">View Gallery</Button>
              </div>
            </div>
            {heroImage && (
              <div className="relative aspect-square max-w-2xl mx-auto md:mx-0">
                <div className="relative w-full h-full border border-ink/10 bg-ink/5">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Builds */}
      {featuredBuilds.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <p className="small-caps text-ink/60 mb-4">Featured Builds</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Recent Work</h2>
            </div>
            <BuildGrid builds={featuredBuilds} />
            <div className="mt-12 text-center">
              <Button href="/gallery" variant="secondary">View All Builds</Button>
            </div>
          </div>
        </section>
      )}

      {/* Brand Statement */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-ink/15">
        <div className="max-w-3xl mx-auto">
          <p className="small-caps text-ink/60 mb-8 text-center">Philosophy</p>
          <div className="space-y-8 prose prose-lg max-w-none">
            <div className="hairline pt-8">
              <p className="font-serif text-xl md:text-2xl text-ink/90 leading-relaxed">
                Watches should tell more than time. They should tell a story—of careful consideration, of personal taste, of the joy found in details that others might overlook.
              </p>
            </div>
            <div className="hairline pt-8">
              <p className="text-lg text-ink/80 leading-relaxed">
                At Dhruv Watch Co, we build custom dial watches in small batches. Each dial is individually prepared, aligned by hand, and finished with attention to dust control and clarity. The result is a timepiece that feels both personal and precise.
              </p>
            </div>
            <div className="hairline pt-8">
              <p className="text-lg text-ink/80 leading-relaxed">
                We believe in restraint over excess, quality over quantity, and craft over convenience. Every watch that leaves our bench has been inspected under magnification and adjusted until it meets our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-ink/15">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="small-caps text-ink/60 mb-4">How It's Made</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="text-4xl font-serif font-bold text-ink/20 mb-4">01</div>
              <h3 className="font-serif text-2xl font-semibold">Design</h3>
              <p className="text-ink/70">
                We work with you to conceptualize the dial design, considering color, layout, and personal meaning.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-serif font-bold text-ink/20 mb-4">02</div>
              <h3 className="font-serif text-2xl font-semibold">Dial Work</h3>
              <p className="text-ink/70">
                Custom decals or prints are applied, clear-coated, and finished with careful attention to alignment and clarity.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-serif font-bold text-ink/20 mb-4">03</div>
              <h3 className="font-serif text-2xl font-semibold">Assembly & QC</h3>
              <p className="text-ink/70">
                Hand assembly, gasket sealing, and final inspection under magnification ensure everything meets our standards.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button href="/process" variant="secondary">Learn More About Our Process</Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-ink/15 bg-ink/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="font-serif text-lg md:text-xl text-ink/80">
              Built in small batches. Finished by hand. QC'd under magnification.
            </p>
            <a
              href="https://instagram.com/dhruvwatches"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-medium hover:text-accent transition-colors"
            >
              @dhruvwatches
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-ink/15">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Commission Your Next Piece
          </h2>
          <p className="text-lg md:text-xl text-ink/70 max-w-xl mx-auto">
            Ready to create a watch that tells your story? Let's discuss your vision.
          </p>
          <Button href="/contact">Get Started</Button>
        </div>
      </section>
    </div>
  )
}

