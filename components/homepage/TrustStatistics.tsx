'use client'

import { StatCard } from '@/components/shared/StatCard'
import { Calendar, Building2, Layers, Globe } from 'lucide-react'

export function TrustStatistics() {
  return (
    <section className="bg-white py-20 relative overflow-hidden" aria-labelledby="trust-statistics-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      <div className="container mx-auto px-6">
        <h2 id="trust-statistics-heading" className="sr-only">
          Trust Statistics and Business Metrics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Calendar}
            value="2000"
            label="Year Established"
            description="Over 2 Decades in Manufacturing"
            iconColor="text-accent"
            delay={0}
          />
          <StatCard
            icon={Building2}
            value={2}
            label="Manufacturing Units"
            description="Dedicated Delhi Facilities"
            iconColor="text-accent"
            delay={0.1}
          />
          <StatCard
            icon={Layers}
            value={13}
            label="Product Families"
            description="Sportswear & Institutional Catalog"
            iconColor="text-success"
            delay={0.2}
          />
          <StatCard
            icon={Globe}
            value="Global"
            label="Export Ready"
            description="Pan-India & International Trade"
            iconColor="text-success"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
