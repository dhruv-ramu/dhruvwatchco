# Dhruv Watch Co

Premium marketing website for Dhruv Watch Co, a microbrand specializing in custom handmade watches.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Next/font** (Cormorant Garamond + Inter)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - Reusable React components
- `/lib` - Utility functions (image loader)
- `/public/images` - Watch images (automatically included in gallery)

## Features

- **Automatic Image Discovery**: All images in `/public/images` are automatically included in the gallery
- **Gallery Filtering**: Filter builds by category (All, Minimal, Anime, Rail, Tintin-inspired, Experimental)
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **SEO Optimized**: Proper metadata, OpenGraph tags, accessible markup
- **Performance**: Next/Image optimization, lazy loading, minimal JavaScript

## Configuration

- Email: Update `hello@dhruvwatches.com` throughout the codebase (search and replace)
- Instagram: Update `@dhruvwatches` if needed
- Colors: Edit `tailwind.config.ts` to customize the design tokens

## Building for Production

```bash
npm run build
npm start
```
