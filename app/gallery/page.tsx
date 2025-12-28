import { Metadata } from 'next'
import { getBuildImages } from '@/lib/images'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery | Dhruv Watch Co',
  description: 'Browse our collection of custom handmade watches. Each piece is meticulously crafted with attention to detail and finished by hand.',
}

export default function GalleryPage() {
  const builds = getBuildImages()

  return <GalleryClient initialBuilds={builds} />
}
