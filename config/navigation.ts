import { getFeaturedProductFamilies } from '@/data/products'

const featuredFamilies = getFeaturedProductFamilies()

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      children: featuredFamilies.map(family => ({
        name: family.shortName,
        href: `/products/${family.slug}`,
        description: family.description,
      })),
    },
    { 
      name: 'Capabilities', 
      href: '/capabilities',
      children: [
        { name: 'Manufacturing', href: '/capabilities/manufacturing' },
        { name: 'Infrastructure', href: '/capabilities/infrastructure' },
        { name: 'Quality Assurance', href: '/capabilities/quality-assurance' },
        { name: 'Custom Solutions', href: '/capabilities/custom-solutions' },
      ],
    },
    { name: 'Quality', href: '/quality' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Mission & Vision', href: '/about/mission-vision' },
      { name: 'Team', href: '/about/team' },
    ],
    products: [
      { name: 'All Products', href: '/products' },
      ...featuredFamilies.slice(0, 6).map(family => ({
        name: family.shortName,
        href: `/products/${family.slug}`,
      })),
    ],
    capabilities: [
      { name: 'Manufacturing', href: '/capabilities/manufacturing' },
      { name: 'Infrastructure', href: '/capabilities/infrastructure' },
      { name: 'Quality Assurance', href: '/capabilities/quality-assurance' },
      { name: 'Custom Solutions', href: '/capabilities/custom-solutions' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Request Quote', href: '/contact/request-quote' },
      { name: 'Request Sample', href: '/contact/request-sample' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
}
