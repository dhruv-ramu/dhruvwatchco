import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">404</h1>
        <p className="text-xl md:text-2xl text-ink/70 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Return Home</Button>
          <Button href="/gallery" variant="secondary">View Gallery</Button>
        </div>
      </div>
    </div>
  )
}

