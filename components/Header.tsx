'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-ink hover:text-accent transition-colors">
            Dhruv Watch Co
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
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
              className="text-xs md:text-sm font-medium hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              @dhruvwatches
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="sm:hidden border-t border-ink/10 py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                href="/gallery" 
                className="link-underline text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/process" 
                className="link-underline text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </Link>
              <Link 
                href="/about" 
                className="link-underline text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="link-underline text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://instagram.com/dhruvwatches"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                @dhruvwatches
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
