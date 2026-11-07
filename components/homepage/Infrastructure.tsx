const infrastructureData = [
  {
    metric: '02',
    label: 'PRODUCTION UNITS',
    description: 'Dedicated manufacturing facilities in New Delhi',
  },
  {
    metric: 'DELHI',
    label: 'URBAN BASE',
    description: 'Permanent commercial facility in Shastri Nagar',
  },
  {
    metric: 'IN-HOUSE',
    label: 'STITCHING & QA',
    description: 'Dedicated craftsmen across cutting, assembly, and finishing',
  },
  {
    metric: 'CIRCULAR',
    label: 'KNIT & FLAT KNIT',
    description: 'Specialized knitting machinery and commercial finishing units',
  },
]

export function Infrastructure() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" aria-labelledby="infrastructure-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature Panel */}
          <div>
            <div className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                Established Operations
              </span>
            </div>
            <h2
              id="infrastructure-heading"
              className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-6 leading-tight"
            >
              Our Infrastructure
            </h2>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-white/80 max-w-xl leading-relaxed mb-8">
              Established manufacturing infrastructure in New Delhi with dedicated production units, flat knit and circular knitting equipment, and skilled craftsmen enabling quality bulk production.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Shastri Nagar, Delhi · Established Manufacturing Base</span>
            </div>
          </div>

          {/* Right - Technical Data Grid */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider">
                VERIFIED OPERATIONAL DATA
              </span>
            </div>
            <div className="grid grid-cols-2 gap-0">
              {infrastructureData.map((item, index) => (
                <div
                  key={item.label}
                  className={`p-6 border-b border-r border-white/10 ${
                    index === 0 || index === 1 ? 'border-t' : ''
                  } ${
                    index % 2 === 0 ? 'border-l' : ''
                  }`}
                >
                  <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {item.label}
                  </div>
                  <div className="w-8 h-0.5 bg-accent mb-3" />
                  <p className="font-body text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
