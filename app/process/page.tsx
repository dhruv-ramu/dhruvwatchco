import Button from '@/components/Button'

export default function ProcessPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <p className="small-caps text-ink/60 mb-4">Our Process</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">How They're Made</h1>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Section 1: Design */}
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif font-bold text-ink/20">01</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Design</h2>
            </div>
            <div className="hairline pt-6">
              <p className="text-lg text-ink/80 leading-relaxed">
                Every build starts with a conversation. We discuss your vision—whether it's a custom dial design, a specific color palette, or a meaningful reference you'd like to incorporate. From anime characters to vintage railway aesthetics, we work with you to bring your concept to life.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed mt-4">
                The design phase involves selecting the right base dial, determining the layout, and planning how custom elements will integrate with the watch's overall aesthetic. We prioritize clarity, legibility, and a cohesive look that feels intentional rather than decorative.
              </p>
            </div>
          </section>

          {/* Section 2: Dial Work */}
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif font-bold text-ink/20">02</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Dial Work</h2>
            </div>
            <div className="hairline pt-6">
              <p className="text-lg text-ink/80 leading-relaxed">
                Custom dials are where the magic happens. Depending on your design, we apply decals, prints, or other finishing techniques to transform a blank dial into something unique. Each application is done by hand, with careful attention to alignment and positioning.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed mt-4">
                After the custom elements are applied, the dial receives a clear coat to protect the design and ensure durability. This finishing step is crucial—it prevents fading, adds depth, and creates a professional appearance that matches the quality of the rest of the watch.
              </p>
              <blockquote className="mt-8 pl-6 border-l-2 border-ink/20 italic text-ink/70">
                "Dust control is everything. We work in a clean environment and handle each dial with care to ensure no particles compromise the final result."
              </blockquote>
            </div>
          </section>

          {/* Section 3: Hand Alignment */}
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif font-bold text-ink/20">03</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Hand Alignment & Assembly</h2>
            </div>
            <div className="hairline pt-6">
              <p className="text-lg text-ink/80 leading-relaxed">
                Once the dial is ready, we move to assembly. Hand alignment ensures that the hour, minute, and second hands are perfectly positioned and don't interfere with any custom elements on the dial. This requires patience and a steady hand.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed mt-4">
                The movement is carefully installed, the hands are set to a reference time, and we verify that everything moves smoothly and accurately. At this stage, we also install the crown and ensure proper winding and time-setting functionality.
              </p>
            </div>
          </section>

          {/* Section 4: Caseback & Sealing */}
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif font-bold text-ink/20">04</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Caseback Engraving & Water Resistance</h2>
            </div>
            <div className="hairline pt-6">
              <p className="text-lg text-ink/80 leading-relaxed">
                If you've opted for caseback engraving, this is where we add your personal touch—a name, date, or small design element that makes the watch uniquely yours. The engraving is done carefully to ensure clarity and depth.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed mt-4">
                Before final assembly, we install and inspect all gaskets to ensure proper sealing. While we don't make exaggerated claims about water resistance, we follow best practices: proper gasket installation, careful caseback tightening, and a final check for any gaps or misalignments.
              </p>
            </div>
          </section>

          {/* Section 5: Quality Control */}
          <section className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-serif font-bold text-ink/20">05</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Quality Control</h2>
            </div>
            <div className="hairline pt-6">
              <p className="text-lg text-ink/80 leading-relaxed">
                Every watch undergoes a final inspection under magnification. We check for dust particles, alignment issues, hand clearance, dial clarity, and any imperfections that might compromise the final result. If something doesn't meet our standards, we fix it—or start over if necessary.
              </p>
              <div className="mt-8 border border-ink/10 bg-paper/50 p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">QC Checklist</h3>
                <ul className="space-y-2 text-ink/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Dial free of dust and particles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Hands properly aligned and cleared</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Custom elements crisp and clear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Caseback properly sealed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Movement running accurately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Overall finish meets standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-ink/15 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Build?
          </h2>
          <p className="text-lg text-ink/70 mb-8 max-w-xl mx-auto">
            Let's discuss your vision and create something unique together.
          </p>
          <Button href="/contact">Commission a Watch</Button>
        </div>
      </div>
    </div>
  )
}

