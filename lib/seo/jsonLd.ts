import { Product, ProductCategory, ProductFamily } from '@/types/product'

const FALLBACK_SITE_URL = 'https://www.goyaltradingcompany.in'

/**
 * Resolves the canonical base site URL from environment variables,
 * falling back to the approved production domain, with trailing slashes stripped.
 */
export function getBaseSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  const raw = envUrl && envUrl.trim().length > 0 ? envUrl.trim() : FALLBACK_SITE_URL
  return raw.replace(/\/+$/, '')
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD.
 */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const baseUrl = getBaseSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${baseUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  }
}

/**
 * Generates Schema.org Product JSON-LD for B2B manufacturing and wholesale.
 * Strictly adheres to project policy: no invented ratings, no fabricated consumer reviews,
 * and no fake or zero pricing. Offers object is omitted entirely until verified pricing
 * or formal quotation offers are established.
 * Does not claim unverified inventory availability.
 */
export function generateProductJsonLd(
  product: Product,
  family: ProductFamily,
  category: ProductCategory
) {
  const baseUrl = getBaseSiteUrl()
  const canonicalUrl = `${baseUrl}/products/${family.slug}/${category.slug}/${product.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: category.name,
    url: canonicalUrl,
    brand: {
      '@type': 'Brand',
      name: 'Goyal Trading Company',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Goyal Trading Company',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-187, Shastri Nagar',
        addressLocality: 'Delhi',
        postalCode: '110052',
        addressCountry: 'IN',
      },
    },
    ...(product.image
      ? {
          image: product.image.startsWith('http')
            ? product.image
            : `${baseUrl}${product.image.startsWith('/') ? product.image : `/${product.image}`}`,
        }
      : {}),
    ...(product.specifications?.material ? { material: product.specifications.material } : {}),
  }
}
