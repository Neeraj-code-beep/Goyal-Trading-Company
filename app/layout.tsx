import type { Metadata } from 'next'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { LayoutWrapper } from '@/components/layout/LayoutWrapper'
import { Footer } from '@/components/layout/Footer'
import { SEO_CONFIG, getVerifiedProductionUrl } from '@/config/seo'
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/seo/jsonLd'

const verifiedUrl = getVerifiedProductionUrl()

export const metadata: Metadata = {
  metadataBase: verifiedUrl ? new URL(verifiedUrl) : undefined,
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [
    'sportswear manufacturing',
    'track suits',
    't-shirts',
    'corporate wear',
    'school uniforms',
    'custom manufacturing',
    'B2B textiles',
    'bulk apparel supplier Delhi',
    'wholesale clothing India',
  ],
  authors: [{ name: SEO_CONFIG.brandName }],
  robots: SEO_CONFIG.defaultRobots,
  openGraph: SEO_CONFIG.defaultOpenGraph,
  twitter: SEO_CONFIG.defaultTwitter,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = generateOrganizationJsonLd()
  const webSiteJsonLd = generateWebSiteJsonLd()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar />
        <LayoutWrapper>
          <div id="main-content">
            {children}
          </div>
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  )
}
