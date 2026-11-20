import { Product, ProductCategory, ProductFamily } from '@/types/product'
import { getVerifiedProductionUrl } from '@/config/seo'
import { siteConfig } from '@/config/site'

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD.
 * When a verified production domain is configured, generates absolute URLs.
 * When the production domain is unavailable or invalid, preserves names and positions
 * but strictly omits the 'item' URL property rather than emitting relative or guessed URLs.
 */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const baseUrl = getVerifiedProductionUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      let resolvedItemUrl: string | undefined = undefined

      if (item.url.startsWith('http')) {
        resolvedItemUrl = item.url
      } else if (baseUrl) {
        resolvedItemUrl = `${baseUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
      }

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(resolvedItemUrl ? { item: resolvedItemUrl } : {}),
      }
    }),
  }
}

/**
 * Generates Schema.org Organization JSON-LD.
 * Strictly adheres to privacy and verification rules:
 * - Omits URL property when no verified production domain is configured.
 * - Does not leak phone or WhatsApp numbers while publicPhoneApproved/publicWhatsAppApproved is false.
 * - Does not publish unverified GSTIN, PAN, or IEC registrations.
 */
export function generateOrganizationJsonLd() {
  const baseUrl = getVerifiedProductionUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Goyal Trading Company',
    legalName: 'Goyal Trading Company',
    foundingDate: '2000',
    description:
      'B2B apparel and textile manufacturing and wholesale trading company established in 2000 in Delhi, specializing in sportswear, uniforms, track suits, and institutional garments.',
    ...(baseUrl ? { url: baseUrl } : {}),
    email: siteConfig.links.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E-187, 1st Floor, Near Indra Park, Opp. Metro Pillar 180, Shastri Nagar',
      addressLocality: 'Delhi',
      postalCode: '110052',
      addressCountry: 'IN',
    },
    ...(siteConfig.contact.publicPhoneApproved && siteConfig.links.phone
      ? { telephone: siteConfig.links.phone }
      : {}),
  }
}

/**
 * Generates Schema.org WebSite JSON-LD.
 * Omits URL properties when no verified production domain is configured.
 */
export function generateWebSiteJsonLd() {
  const baseUrl = getVerifiedProductionUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Goyal Trading Company',
    description:
      'B2B apparel and textile manufacturing and wholesale trading catalog for institutional buyers, athletic teams, and corporate organizations.',
    ...(baseUrl ? { url: baseUrl } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Goyal Trading Company',
      ...(baseUrl ? { url: baseUrl } : {}),
    },
  }
}

/**
 * Generates Schema.org Product JSON-LD for B2B manufacturing and wholesale.
 * Strictly adheres to project policy:
 * - When a verified production domain is configured, generates absolute URLs.
 * - When unavailable, strictly omits url and manufacturer.url rather than emitting relative URLs.
 * - Strictly no invented ratings, no fabricated consumer reviews, and no fake or zero pricing.
 * - Offers object is omitted entirely until verified pricing or formal quotation offers are established.
 * - Does not claim unverified inventory availability.
 */
export function generateProductJsonLd(
  product: Product,
  family: ProductFamily,
  category: ProductCategory
) {
  const baseUrl = getVerifiedProductionUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: category.name,
    ...(baseUrl
      ? { url: `${baseUrl}/products/${family.slug}/${category.slug}/${product.slug}` }
      : {}),
    brand: {
      '@type': 'Brand',
      name: 'Goyal Trading Company',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Goyal Trading Company',
      ...(baseUrl ? { url: baseUrl } : {}),
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-187, 1st Floor, Near Indra Park, Opp. Metro Pillar 180, Shastri Nagar',
        addressLocality: 'Delhi',
        postalCode: '110052',
        addressCountry: 'IN',
      },
    },
    ...(product.image
      ? product.image.startsWith('http')
        ? { image: product.image }
        : baseUrl
        ? { image: `${baseUrl}${product.image.startsWith('/') ? product.image : `/${product.image}`}` }
        : {}
      : {}),
    ...(product.specifications?.material ? { material: product.specifications.material } : {}),
  }
}
