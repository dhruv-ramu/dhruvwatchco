'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    inspiration: '',
    timeline: '',
    understands: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range'
    }
    if (!formData.inspiration.trim()) {
      newErrors.inspiration = 'Please tell us about your inspiration'
    }
    if (!formData.understands) {
      newErrors.understands = 'Please confirm you understand the timeline'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // In a real implementation, you would send this to an API
      // For now, we'll just show success
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ink/10 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Thank You
            </h1>
            <p className="text-lg text-ink/70 mb-8">
              Your commission inquiry has been received. We'll review your request and get back to you soon.
            </p>
            <p className="text-ink/60 mb-8">
              You can also reach us directly at{' '}
              <a href="mailto:hello@dhruvwatches.com" className="link-underline text-ink/80 hover:text-ink">
                hello@dhruvwatches.com
              </a>
              {' '}or via{' '}
              <a
                href="https://instagram.com/dhruvwatches"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink/80 hover:text-ink"
              >
                Instagram DM
              </a>
              .
            </p>
            <Button href="/gallery">View Gallery</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <p className="small-caps text-ink/60 mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Commission a Watch
          </h1>
          <p className="text-lg text-ink/70">
            Tell us about your vision, and we'll work together to bring it to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block small-caps text-ink/70 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-ink/20'
              } bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block small-caps text-ink/70 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-ink/20'
              } bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block small-caps text-ink/70 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.budget ? 'border-red-500' : 'border-ink/20'
              } bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
              aria-invalid={!!errors.budget}
              aria-describedby={errors.budget ? 'budget-error' : undefined}
            >
              <option value="">Select a range</option>
              <option value="200-250">$200 - $250</option>
              <option value="250-400">$250 - $400</option>
              <option value="400+">$400+</option>
            </select>
            {errors.budget && (
              <p id="budget-error" className="mt-1 text-sm text-red-600">
                {errors.budget}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="inspiration" className="block small-caps text-ink/70 mb-2">
              Inspiration & Vision
            </label>
            <textarea
              id="inspiration"
              name="inspiration"
              value={formData.inspiration}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 border ${
                errors.inspiration ? 'border-red-500' : 'border-ink/20'
              } bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none`}
              aria-invalid={!!errors.inspiration}
              aria-describedby={errors.inspiration ? 'inspiration-error' : undefined}
              placeholder="Tell us about the watch you envision. What design elements matter to you? Any specific themes, colors, or references?"
            />
            {errors.inspiration && (
              <p id="inspiration-error" className="mt-1 text-sm text-red-600">
                {errors.inspiration}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="block small-caps text-ink/70 mb-2">
              Timeline (Optional)
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-ink/20 bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="e.g., '3 months' or 'no rush'"
            />
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="understands"
                checked={formData.understands}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-accent border-ink/20 rounded focus:ring-accent focus:ring-2"
                aria-invalid={!!errors.understands}
                aria-describedby={errors.understands ? 'understands-error' : undefined}
              />
              <span className="text-sm text-ink/80">
                I understand that builds are made in small batches and may take time
              </span>
            </label>
            {errors.understands && (
              <p id="understands-error" className="mt-1 text-sm text-red-600 ml-7">
                {errors.understands}
              </p>
            )}
          </div>

          <div className="pt-4">
            <Button type="submit">Submit Inquiry</Button>
          </div>
        </form>

        {/* Alternative contact methods */}
        <div className="mt-16 pt-16 border-t border-ink/15">
          <p className="small-caps text-ink/60 mb-4 text-center">Or Reach Us Directly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@dhruvwatches.com"
              className="link-underline text-ink/80 hover:text-ink font-medium"
            >
              hello@dhruvwatches.com
            </a>
            <span className="text-ink/40 hidden sm:inline">•</span>
            <a
              href="https://instagram.com/dhruvwatches"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ink/80 hover:text-ink font-medium"
            >
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

