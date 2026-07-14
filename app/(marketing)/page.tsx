import { Hero } from '@/components/homepage/Hero'
import { TrustStatistics } from '@/components/homepage/TrustStatistics'
import { ProductCategories } from '@/components/homepage/ProductCategories'
import { WhyChooseUs } from '@/components/homepage/WhyChooseUs'
import { FeaturedProducts } from '@/components/homepage/FeaturedProducts'
import { ManufacturingProcess } from '@/components/homepage/ManufacturingProcess'
import { Infrastructure } from '@/components/homepage/Infrastructure'
import { QualityAssurance } from '@/components/homepage/QualityAssurance'
import { CertificationsAwards } from '@/components/homepage/CertificationsAwards'
import { IndustriesServed } from '@/components/homepage/IndustriesServed'
import { TrustSignals } from '@/components/homepage/TrustSignals'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStatistics />
      <ProductCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <ManufacturingProcess />
      <Infrastructure />
      <QualityAssurance />
      <CertificationsAwards />
      <IndustriesServed />
      <TrustSignals />
    </main>
  )
}
