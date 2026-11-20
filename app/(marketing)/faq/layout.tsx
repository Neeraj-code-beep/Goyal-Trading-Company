import type { Metadata } from 'next'
import { constructMetadata } from '@/config/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Common questions regarding B2B apparel manufacturing, order minimums, custom sampling, fabric specifications, and wholesale ordering with Goyal Trading Company.',
  canonicalPath: '/faq',
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
