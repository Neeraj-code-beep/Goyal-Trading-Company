const infrastructureData = [
  {
    metric: '2000',
    label: 'ESTABLISHED YEAR',
    description: 'Over two decades of continuous business in Delhi',
  },
  {
    metric: 'DELHI',
    label: 'BUSINESS BASE',
    description: 'Commercial operations based in New Delhi',
  },
  {
    metric: 'KNIT & SEW',
    label: 'PRODUCT SCOPE',
    description: 'Knitted activewear, uniform sets, and basics',
  },
  {
    metric: '13',
    label: 'PRODUCT FAMILIES',
    description: 'Comprehensive apparel categories and styles',
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
                Operational Profile
              </span>
            </div>
            <h2
              id="infrastructure-heading"
              className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-6 leading-tight"
            >
              Operations &amp; Scope
            </h2>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-white/80 max-w-xl leading-relaxed mb-8">
              Delhi-based textile business established in 2000, supplying athletic wear, corporate uniforms, and institutional garments through structured wholesale procurement.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>New Delhi Business Address · Established 2000</span>
            </div>
          </div>

          {/* Right - Technical Data Grid */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider">
                BUSINESS PROFILE
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
