import type { Metadata } from 'next'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { LayoutWrapper } from '@/components/layout/LayoutWrapper'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Goyal Trading Company - Sportswear Manufacturing Since 2000',
  description: 'B2B sportswear and clothing manufacturer based in New Delhi. Established in 2000, specializing in bulk manufacturing of track suits, athletic gear, t-shirts, school uniforms, and corporate apparel.',
  keywords: ['sportswear manufacturing', 'track suits', 't-shirts', 'corporate wear', 'school uniforms', 'custom manufacturing', 'B2B textiles', 'export manufacturing', 'OEM services'],
  authors: [{ name: 'Goyal Trading Company' }],
  openGraph: {
    title: 'Goyal Trading Company - Sportswear Manufacturing Since 2000',
    description: 'B2B sportswear and garment manufacturer in New Delhi. Over two decades of manufacturing excellence.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
