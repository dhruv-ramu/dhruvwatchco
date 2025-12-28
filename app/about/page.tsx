import Button from '@/components/Button'

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <p className="small-caps text-ink/60 mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Dhruv Watch Co</h1>
        </div>

        {/* Portrait placeholder */}
        <div className="mb-16 md:mb-24 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-ink/20 flex items-center justify-center bg-ink/5">
            <span className="font-serif text-4xl md:text-5xl font-bold text-ink/40">DR</span>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16">
          <section className="hairline pt-8">
            <p className="text-xl md:text-2xl text-ink/90 leading-relaxed font-serif">
              Watches have always been more than timekeepers. They're objects we live with, items we glance at throughout the day, and pieces that can carry meaning beyond their function.
            </p>
          </section>

          <section className="space-y-4">
            <p className="text-lg text-ink/80 leading-relaxed">
              Dhruv Watch Co started from a simple observation: most watches tell the same story. They're mass-produced, generic, and designed to appeal to the broadest possible audience. There's nothing wrong with that, but there's also room for something different—something personal, carefully made, and thoughtfully finished.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              Custom dials became the focus because they're where personality lives. Whether it's a reference to a beloved character, a vintage aesthetic, or simply a color combination that speaks to you, the dial is what makes a watch yours. But custom dials are only worthwhile if they're done well—with proper alignment, clear finishing, and attention to the details that matter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold">Our Approach</h2>
            <p className="text-lg text-ink/80 leading-relaxed">
              We build watches in small batches, never rushing the process. Each dial is prepared individually. Each hand is aligned by hand. Each watch is inspected under magnification before it leaves our bench. This approach isn't scalable, and that's the point—we'd rather make fewer watches well than many watches quickly.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              Taste and restraint guide our work. We avoid excess decoration, flashy branding, and trends that will look dated in a few years. Instead, we focus on clean design, thoughtful finishing, and elements that feel intentional rather than gratuitous. The goal is a watch that looks good now and will still look good in ten years.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold">Meticulous Finishing</h2>
            <p className="text-lg text-ink/80 leading-relaxed">
              "Meticulous" isn't marketing copy—it's a requirement. Dust particles under the crystal are unacceptable. Misaligned hands are unacceptable. Blurry or faded custom elements are unacceptable. These standards mean we sometimes redo work, and that's fine. The alternative—sending out something that isn't right—isn't acceptable.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              This attention to detail extends beyond the dial. Caseback engraving is done carefully. Gaskets are installed correctly. The watch is tested to ensure it runs accurately and feels solid. When you receive a watch from us, you're getting something that we're genuinely proud to have built.
            </p>
          </section>

          <section className="hairline pt-8">
            <p className="text-xl md:text-2xl text-ink/90 leading-relaxed font-serif">
              If you're looking for a watch that tells your story, built with care and finished by hand, we'd love to work with you. Commission a watch, and let's create something unique together.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-ink/15 text-center">
          <Button href="/contact">Commission a Watch</Button>
        </div>
      </div>
    </div>
  )
}

