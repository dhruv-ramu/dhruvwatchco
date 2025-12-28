import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/15 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="small-caps text-ink/60">
              © {currentYear} Dhruv Watch Co
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@dhruvwatches.com"
                className="link-underline text-sm text-ink/80 hover:text-ink"
              >
                hello@dhruvwatches.com
              </a>
              <a
                href="https://instagram.com/dhruvwatches"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-ink/80 hover:text-ink"
              >
                @dhruvwatches
              </a>
            </div>
          </div>
          
          <nav className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6">
              <Link href="/gallery" className="small-caps link-underline text-ink/60 hover:text-ink">
                Gallery
              </Link>
              <Link href="/process" className="small-caps link-underline text-ink/60 hover:text-ink">
                Process
              </Link>
              <Link href="/about" className="small-caps link-underline text-ink/60 hover:text-ink">
                About
              </Link>
              <Link href="/contact" className="small-caps link-underline text-ink/60 hover:text-ink">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

