'use client'

import { StatCard } from '@/components/shared/StatCard'
import { Factory, Calendar, Building2, Users } from 'lucide-react'

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
            icon={Factory}
            value={10000}
            label="Sets/Month"
            description="Production Capacity"
            iconColor="text-accent"
            delay={0}
          />
          <StatCard
            icon={Calendar}
            value={26}
            label="Years"
            description="Industry Experience"
            iconColor="text-accent"
            delay={0.1}
          />
          <StatCard
            icon={Building2}
            value={2}
            label="Units"
            description="Production Facilities"
            iconColor="text-success"
            delay={0.2}
          />
          <StatCard
            icon={Users}
            value={50}
            label="People"
            description="Skilled Workforce"
            iconColor="text-success"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
