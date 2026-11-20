import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

/**
 * Returns the verified production website URL from environment configuration.
 * Strictly adheres to project rules:
 * - If NEXT_PUBLIC_SITE_URL is not configured or points to localhost, returns undefined.
 * - Never invents or guesses a production domain.
 */
export function getVerifiedProductionUrl(): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!envUrl) return undefined
  if (envUrl.includes('localhost') || envUrl.includes('127.0.0.1')) {
    return undefined
  }
  return envUrl.replace(/\/+$/, '')
}

/**
 * Centralized SEO Configuration for Goyal Trading Company.
 */
export const SEO_CONFIG = {
  brandName: 'Goyal Trading Company',
  defaultTitle: 'Goyal Trading Company | B2B Apparel & Textile Manufacturing',
  titleTemplate: '%s | Goyal Trading Company',
  defaultDescription:
    'Established in 2000 in Delhi, Goyal Trading Company is an established B2B manufacturer and wholesale supplier of sportswear, track suits, activewear, t-shirts, school uniforms, and corporate attire.',
  defaultRobots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  defaultOpenGraph: {
    type: 'website' as const,
    locale: 'en_IN',
    siteName: 'Goyal Trading Company',
    title: 'Goyal Trading Company | B2B Apparel & Textile Manufacturing',
    description:
      'Established in 2000 in Delhi, Goyal Trading Company is an established B2B manufacturer and wholesale supplier of sportswear, track suits, activewear, t-shirts, school uniforms, and corporate attire.',
  },
  defaultTwitter: {
    card: 'summary' as const,
    title: 'Goyal Trading Company | B2B Apparel & Textile Manufacturing',
    description:
      'Established in 2000 in Delhi, Goyal Trading Company is an established B2B manufacturer and wholesale supplier of sportswear, track suits, activewear, t-shirts, school uniforms, and corporate attire.',
  },
}

/**
 * Helper to construct route-specific Metadata objects with consistent brand defaults.
 */
export function constructMetadata({
  title,
  description,
  canonicalPath,
  noIndex = false,
  openGraphType = 'website',
  image,
}: {
  title: string
  description?: string
  canonicalPath?: string
  noIndex?: boolean
  openGraphType?: 'website' | 'article'
  image?: string
}): Metadata {
  const verifiedUrl = getVerifiedProductionUrl()
  const metaDescription = description || SEO_CONFIG.defaultDescription

  const metadata: Metadata = {
    title,
    description: metaDescription,
    robots: noIndex
      ? { index: false, follow: false }
      : SEO_CONFIG.defaultRobots,
    openGraph: {
      ...SEO_CONFIG.defaultOpenGraph,
      type: openGraphType,
      title: `${title} | ${SEO_CONFIG.brandName}`,
      description: metaDescription,
      ...(verifiedUrl && canonicalPath ? { url: `${verifiedUrl}${canonicalPath}` } : {}),
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      ...SEO_CONFIG.defaultTwitter,
      title: `${title} | ${SEO_CONFIG.brandName}`,
      description: metaDescription,
      ...(image ? { images: [image] } : {}),
    },
  }

  if (canonicalPath) {
    metadata.alternates = {
      canonical: canonicalPath,
    }
  }

  return metadata
}
