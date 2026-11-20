import type { MetadataRoute } from 'next'
import { getVerifiedProductionUrl } from '@/config/seo'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getVerifiedProductionUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    ...(baseUrl ? { sitemap: `${baseUrl}/sitemap.xml` } : {}),
  }
}
