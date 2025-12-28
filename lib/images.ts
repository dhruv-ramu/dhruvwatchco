import fs from 'fs'
import path from 'path'

export interface BuildImage {
  src: string
  slug: string
  title: string
  tags: string[]
  alt: string
  filename: string
}

// Keyword mapping for tags based on filename
const keywordMap: Record<string, string[]> = {
  tintin: ['Tintin-inspired', 'Custom Dial'],
  bike: ['Custom Dial', 'Hand Finished'],
  coat: ['Tintin-inspired', 'Custom Dial'],
  train: ['Rail', 'Custom Dial'],
  railways: ['Rail', 'Custom Dial'],
  mu: ['Anime', 'Custom Dial'],
  aot: ['Anime', 'Custom Dial'],
  anime: ['Anime', 'Custom Dial'],
  experimental: ['Experimental', 'Custom Dial'],
}

// Default tags if no keywords match
const defaultTags = ['Custom Dial', 'Hand Finished', 'Limited']

/**
 * Generates tags from filename keywords
 */
function generateTags(filename: string): string[] {
  const lower = filename.toLowerCase()
  const matchedTags = new Set<string>()

  for (const [keyword, tags] of Object.entries(keywordMap)) {
    if (lower.includes(keyword)) {
      tags.forEach(tag => matchedTags.add(tag))
    }
  }

  // If we found matches, return them; otherwise use defaults
  if (matchedTags.size > 0) {
    return Array.from(matchedTags)
  }
  return [...defaultTags]
}

/**
 * Generates a slug from filename
 */
function generateSlug(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphens
    .toLowerCase()
}

/**
 * Generates a title from filename
 */
function generateTitle(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[_-]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\b\w/g, l => l.toUpperCase()) // Title case
}

/**
 * Gets all build images from /public/images directory
 */
export function getBuildImages(): BuildImage[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  
  if (!fs.existsSync(imagesDir)) {
    return []
  }

  const files = fs.readdirSync(imagesDir)
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP']
  
  const imageFiles = files
    .filter(file => imageExtensions.some(ext => file.endsWith(ext)))
    .sort() // Sort alphabetically for deterministic ordering

  return imageFiles.map(filename => {
    const slug = generateSlug(filename)
    const title = generateTitle(filename)
    const tags = generateTags(filename)
    
    return {
      src: `/images/${filename}`,
      slug,
      title,
      tags,
      alt: `${title} - Custom Handmade Watch`,
      filename,
    }
  })
}

/**
 * Gets a single build image by slug
 */
export function getBuildImageBySlug(slug: string): BuildImage | null {
  const images = getBuildImages()
  return images.find(img => img.slug === slug) || null
}

