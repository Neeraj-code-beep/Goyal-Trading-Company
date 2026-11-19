import { Trophy, GraduationCap, Building2, Shield } from 'lucide-react'

const industries = [
  {
    icon: Trophy,
    name: 'Sports & Athletic Organizations',
    description: 'Team tracksuits, training kits, jerseys, and activewear for sports clubs and academies.',
  },
  {
    icon: GraduationCap,
    name: 'Schools & Colleges',
    description: 'Institutional uniform garments, physical education kits, and winter pullovers.',
  },
  {
    icon: Building2,
    name: 'Corporate Organizations',
    description: 'Staff polo shirts, uniform work shirts, and branded promotional apparel.',
  },
  {
    icon: Shield,
    name: 'Security & Staff Uniforms',
    description: 'Uniform shirts, trousers, and outer jackets suited for facility and security personnel.',
  },
]

export function IndustriesServed() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="industries-served-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
      {/* Decorative glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="industries-served-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Product Ranges for Organizations
          </h2>
          <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Apparel collections structured by organizational requirements across athletic, educational, corporate, and staffing sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-accent/30 group text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <industry.icon size={32} strokeWidth={2} className="text-accent" />
              </div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                {industry.name}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
