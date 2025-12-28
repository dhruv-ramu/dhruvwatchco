import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-semibold text-ink hover:text-accent transition-colors">
            Dhruv Watch Co
          </Link>
          
          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="/gallery" className="link-underline text-sm font-medium">
              Gallery
            </Link>
            <Link href="/process" className="link-underline text-sm font-medium">
              Process
            </Link>
            <Link href="/about" className="link-underline text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="link-underline text-sm font-medium">
              Contact
            </Link>
            <a
              href="https://instagram.com/dhruvwatches"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              @dhruvwatches
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

