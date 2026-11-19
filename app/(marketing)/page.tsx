import { Hero } from '@/components/homepage/Hero'
import { TrustStatistics } from '@/components/homepage/TrustStatistics'
import { ProductCategories } from '@/components/homepage/ProductCategories'
import { FeaturedProducts } from '@/components/homepage/FeaturedProducts'
import { ManufacturingProcess } from '@/components/homepage/ManufacturingProcess'
import { Infrastructure } from '@/components/homepage/Infrastructure'
import { WhyChooseUs } from '@/components/homepage/WhyChooseUs'
import { CertificationsAwards } from '@/components/homepage/CertificationsAwards'
import { IndustriesServed } from '@/components/homepage/IndustriesServed'
import { InquiryCTA } from '@/components/homepage/InquiryCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStatistics />
      <ProductCategories />
      <FeaturedProducts />
      <ManufacturingProcess />
      <Infrastructure />
      <WhyChooseUs />
      <CertificationsAwards />
      <IndustriesServed />
      <InquiryCTA />
    </main>
  )
}
