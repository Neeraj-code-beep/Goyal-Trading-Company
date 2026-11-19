'use client'

import { StatCard } from '@/components/shared/StatCard'
import { Calendar, MapPin, Layers, Tag } from 'lucide-react'
import { getCatalogueStats } from '@/data/products'

export function TrustStatistics() {
  const stats = getCatalogueStats()

  return (
    <section className="bg-white py-20 relative overflow-hidden" aria-labelledby="trust-statistics-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      <div className="container mx-auto px-6">
        <h2 id="trust-statistics-heading" className="sr-only">
          Business Overview and Catalogue Scope
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Calendar}
            value="2000"
            label="Year Established"
            description="Textile Manufacturing Heritage"
            iconColor="text-accent"
            delay={0}
          />
          <StatCard
            icon={MapPin}
            value="Delhi"
            label="Business Base"
            description="Delhi-Based B2B Business"
            iconColor="text-accent"
            delay={0.1}
          />
          <StatCard
            icon={Layers}
            value={stats.familyCount}
            label="Product Families"
            description="Sportswear & Institutional Apparel"
            iconColor="text-accent"
            delay={0.2}
          />
          <StatCard
            icon={Tag}
            value={stats.categoryCount}
            label="Product Categories"
            description="Activewear, Uniforms & Basics"
            iconColor="text-accent"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
