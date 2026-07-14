export interface Testimonial {
  id: string
  quote: string
  author: {
    name: string
    title: string
    company: string
    location: string
  }
  metrics?: string
  clientSince: string
  logo: string
  industry: string
}

export const testimonials: Testimonial[] = [
  // Placeholder data - will be populated with actual testimonials
]
