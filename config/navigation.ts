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
      href: '/capabilities/manufacturing',
      children: [
        { name: 'Manufacturing', href: '/capabilities/manufacturing', description: 'Garment manufacturing facilities and capacity' },
        { name: 'Infrastructure', href: '/capabilities/infrastructure', description: 'Machinery and production units' },
        { name: 'Quality Assurance', href: '/capabilities/quality-assurance', description: 'Quality inspection and standards' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Manufacturing Facilities', href: '/capabilities/manufacturing' },
      { name: 'Infrastructure & Machinery', href: '/capabilities/infrastructure' },
      { name: 'Quality Assurance', href: '/capabilities/quality-assurance' },
    ],
    products: [
      { name: 'All Products', href: '/products' },
      ...featuredFamilies.slice(0, 6).map(family => ({
        name: family.shortName,
        href: `/products/${family.slug}`,
      })),
    ],
    capabilities: [
      { name: 'Manufacturing Facilities', href: '/capabilities/manufacturing' },
      { name: 'Infrastructure & Machinery', href: '/capabilities/infrastructure' },
      { name: 'Quality Assurance', href: '/capabilities/quality-assurance' },
      { name: 'Product Gallery', href: '/gallery' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Request Quote', href: '/contact/request-quote' },
      { name: 'Request Sample', href: '/contact/request-sample' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
}
