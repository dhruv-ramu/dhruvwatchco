import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const serif = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dhruv Watch Co | Custom Handmade Watches',
  description: 'Premium custom handmade watches. Each piece is meticulously crafted with attention to detail and finished by hand.',
  openGraph: {
    title: 'Dhruv Watch Co | Custom Handmade Watches',
    description: 'Premium custom handmade watches. Each piece is meticulously crafted with attention to detail and finished by hand.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

