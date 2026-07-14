import type { Metadata } from 'next'
import { Inter, Open_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { LayoutWrapper } from '@/components/layout/LayoutWrapper'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Goyal Trading Company - Sportswear Manufacturing Since 2000',
  description: 'Premium sportswear manufacturing for global retailers. 26+ years of experience in track suits, t-shirts, corporate wear, school uniforms, and custom manufacturing. GST registered, export licensed.',
  keywords: ['sportswear manufacturing', 'track suits', 't-shirts', 'corporate wear', 'school uniforms', 'custom manufacturing', 'B2B textiles', 'export manufacturing', 'OEM services'],
  authors: [{ name: 'Goyal Trading Company' }],
  openGraph: {
    title: 'Goyal Trading Company - Sportswear Manufacturing Since 2000',
    description: 'Premium sportswear manufacturing for global retailers. 10,000 sets/month capacity.',
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
    <html lang="en" className={`${inter.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <AnnouncementBar />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  )
}
