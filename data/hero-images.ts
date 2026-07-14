// Hero configuration - Synchronized content with product imagery
// Images from Unsplash for visual storytelling (replace with authentic company imagery when available)

export interface HeroSlide {
  id: string
  familySlug: string
  eyebrow: string
  title: string
  description: string
  secondaryCta: {
    label: string
    href: string
  }
  imageUrl: string
  imageAlt: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'track-suits',
    familySlug: 'track-suits-activewear',
    eyebrow: 'Sports & Team Wear',
    title: 'Performance Track Suits Built for Champions',
    description: 'Premium track suits and activewear manufactured for sports teams, schools, and corporate wellness programs with moisture-wicking technology.',
    secondaryCta: {
      label: 'View Track Suits',
      href: '/products/track-suits-activewear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Athletic track suit and activewear'
  },
  {
    id: 'corporate-uniforms',
    familySlug: 'corporate-wear',
    eyebrow: 'Corporate Excellence',
    title: 'Professional Uniforms for Modern Organizations',
    description: 'Custom corporate wear solutions for employee uniforms, branding, and professional representation with premium fabric options.',
    secondaryCta: {
      label: 'Explore Corporate Wear',
      href: '/products/corporate-wear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Professional corporate apparel'
  },
  {
    id: 'school-uniforms',
    familySlug: 'school-wear',
    eyebrow: 'Education Sector',
    title: 'Durable School Uniforms for Institutions',
    description: 'Reliable school wear manufactured to withstand daily use while maintaining professional appearance and comfort.',
    secondaryCta: {
      label: 'View School Uniforms',
      href: '/products/school-wear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Professional school uniforms'
  },
  {
    id: 'polo-shirts',
    familySlug: 't-shirts',
    eyebrow: 'Premium Basics',
    title: 'Custom Polo Shirts for Branding & Events',
    description: 'High-quality polo shirts with embroidery options for corporate branding, events, and retail distribution.',
    secondaryCta: {
      label: 'Explore Polo Shirts',
      href: '/products/t-shirts'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625910513413-5fc458a22d1c?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Premium polo shirts'
  },
  {
    id: 't-shirts',
    familySlug: 't-shirts',
    eyebrow: 'Essential Apparel',
    title: 'Bulk T-Shirts for Every Application',
    description: 'High-quality t-shirts in round neck, V-neck, and oversized styles for corporate branding, events, and retail.',
    secondaryCta: {
      label: 'View T-Shirts',
      href: '/products/t-shirts'
    },
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Premium t-shirts collection'
  },
  {
    id: 'hoodies',
    familySlug: 'track-suits-activewear',
    eyebrow: 'Casual Performance',
    title: 'Premium Hoodies & Sweatshirts',
    description: 'Comfortable hoodies and sweatshirts for casual wear, team uniforms, and promotional merchandise.',
    secondaryCta: {
      label: 'View Hoodies',
      href: '/products/track-suits-activewear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Premium hoodies and sweatshirts'
  },
  {
    id: 'hospital-uniforms',
    familySlug: 'corporate-wear',
    eyebrow: 'Healthcare Sector',
    title: 'Medical Scrubs & Hospital Uniforms',
    description: 'Comfortable and durable medical scrubs, lab coats, and hospital uniforms for healthcare professionals.',
    secondaryCta: {
      label: 'View Medical Wear',
      href: '/products/corporate-wear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Medical scrubs and hospital uniforms'
  },
  {
    id: 'industrial-uniforms',
    familySlug: 'corporate-wear',
    eyebrow: 'Industrial Safety',
    title: 'Industrial Workwear & Safety Gear',
    description: 'Heavy-duty industrial uniforms, safety jackets, and reflective gear for manufacturing and construction sectors.',
    secondaryCta: {
      label: 'View Industrial Wear',
      href: '/products/corporate-wear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Industrial workwear and safety gear'
  },
  {
    id: 'promotional-apparel',
    familySlug: 'corporate-wear',
    eyebrow: 'Brand Marketing',
    title: 'Custom Promotional Apparel & Merchandise',
    description: 'Branded promotional wear for events, marketing campaigns, and corporate giveaways with custom printing.',
    secondaryCta: {
      label: 'View Promotional Wear',
      href: '/products/corporate-wear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Custom promotional apparel'
  },
  {
    id: 'winter-wear',
    familySlug: 'track-suits-activewear',
    eyebrow: 'Seasonal Collection',
    title: 'Winter Jackets & Cold Weather Gear',
    description: 'Insulated jackets, winter wear, and cold weather apparel for outdoor work and activities.',
    secondaryCta: {
      label: 'View Winter Wear',
      href: '/products/track-suits-activewear'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd628b1?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Winter jackets and cold weather gear'
  }
]

export function getHeroSlideById(id: string): HeroSlide | undefined {
  return heroSlides.find(slide => slide.id === id)
}

export function getHeroSlidesByFamily(familySlug: string): HeroSlide[] {
  return heroSlides.filter(slide => slide.familySlug === familySlug)
}
