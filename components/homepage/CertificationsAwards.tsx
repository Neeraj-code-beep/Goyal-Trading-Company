import { Calendar, MapPin, Layers, Users } from 'lucide-react'

const credentials = [
  {
    icon: Calendar,
    name: 'Established in 2000',
    description: 'Over Two Decades of Garment Manufacturing Experience',
  },
  {
    icon: MapPin,
    name: 'Delhi Business Base',
    description: 'Commercial Operations Based in New Delhi',
  },
  {
    icon: Layers,
    name: '13 Product Families',
    description: '35 Categories Covering Activewear & Uniforms',
  },
  {
    icon: Users,
    name: 'B2B Textile Range',
    description: 'Supplying Bulk Wholesale & Institutional Requirements',
  },
]

export function CertificationsAwards() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" aria-labelledby="credentials-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #1A365D 1px, transparent 0)',
        backgroundSize: '44px 44px'
      }} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      {/* Decorative glow */}
      <div className="absolute top-40 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="credentials-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Company at a Glance
          </h2>
          <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Delhi-based B2B textile manufacturing and trading company offering structured apparel solutions for organizations.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.name}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100 hover:border-accent/30 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <cred.icon size={32} strokeWidth={2} className="text-accent" />
              </div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                {cred.name}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
