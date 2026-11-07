import { Shield, Truck, Users, Award, Clock, DollarSign } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'In-House Quality Checks',
    description: 'Systematic inspection protocols covering fabric integrity, stitching strength, and finishing.',
  },
  {
    icon: Truck,
    title: 'Dependable Logistics',
    description: 'Coordinated freight delivery across India by road and sea shipping for global export orders.',
  },
  {
    icon: Users,
    title: 'Experienced Craftsmen',
    description: 'Dedicated team of skilled tailors, pattern masters, and finishing technicians in New Delhi.',
  },
  {
    icon: Award,
    title: 'Established Manufacturing',
    description: 'Over two decades of continuous manufacturing experience with verified business credentials.',
  },
  {
    icon: Clock,
    title: 'Flexible Batch Production',
    description: 'Agile manufacturing setups capable of handling customized small-to-large bulk runs.',
  },
  {
    icon: DollarSign,
    title: 'Direct Factory Pricing',
    description: 'Competitive manufacturer pricing without intermediary markups for bulk procurement.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" aria-labelledby="why-choose-us-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #1A365D 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      {/* Decorative glow */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="why-choose-us-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Why Choose Us
          </h2>
          <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We combine manufacturing excellence with transparent operations to deliver reliable apparel solutions for bulk procurement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-accent/20 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon size={24} strokeWidth={2} className="text-accent" />
              </div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
