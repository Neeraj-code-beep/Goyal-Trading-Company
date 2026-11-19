import { CheckCircle, Shield, Search, FileText } from 'lucide-react'

const qualitySteps = [
  {
    icon: Search,
    title: 'Fabric Check',
    description: 'Visual review of fabric rolls, color uniformity, and material texture prior to cutting.',
  },
  {
    icon: Shield,
    title: 'Stitching Assembly',
    description: 'Review of seam alignment and construction during garment stitching.',
  },
  {
    icon: CheckCircle,
    title: 'Garment Finishing',
    description: 'Review of finished garments, trims, fasteners, and labels prior to packing.',
  },
  {
    icon: FileText,
    title: 'Packaging & Counts',
    description: 'Order verification, carton packing, and labelling for dispatch.',
  },
]

export function QualityAssurance() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="quality-assurance-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #48BB78 1px, transparent 0)',
        backgroundSize: '36px 36px'
      }} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/3 via-white to-primary/3" />
      {/* Decorative glow */}
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="quality-assurance-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Quality Assurance
          </h2>
          <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Standard workflow steps reviewing fabric, stitching, and finishing across bulk apparel orders.
          </p>
        </div>

        {/* Quality Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualitySteps.map((step) => (
            <div
              key={step.title}
              className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-success/30 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                <step.icon size={32} strokeWidth={2} className="text-accent group-hover:text-success transition-colors" />
              </div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-success transition-colors">
                {step.title}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="mt-16 bg-primary p-8 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">Visual</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Fabric & Seam Review</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">Detailed</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Pre-Packing Garment Check</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">Accurate</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Carton & Quantity Counts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
