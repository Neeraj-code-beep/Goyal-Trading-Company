const credentials = [
  {
    metric: 'ESTABLISHED 2000',
    detail: 'OVER TWO DECADES EXP.',
  },
  {
    metric: 'DELHI FACILITY',
    detail: 'SHASTRI NAGAR BASE',
  },
  {
    metric: '13 FAMILIES',
    detail: 'SPORTSWEAR & UNIFORMS',
  },
  {
    metric: 'B2B WHOLESALE',
    detail: 'BULK ORDERS & INQUIRIES',
  },
]

const organizations = [
  {
    name: 'Sports & Athletic Academies',
    location: 'Team kits, tracksuits, and athletic training apparel',
  },
  {
    name: 'Educational & Corporate Institutions',
    location: 'Staff polo shirts, student uniforms, and event wear',
  },
]

export function TrustSignals() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" aria-labelledby="trust-signals-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div>
          {/* Business Credentials Section */}
          <div className="mb-20">
            <div className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                ESTABLISHED FOUNDATION
              </span>
            </div>
            <h2
              id="trust-signals-heading"
              className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-12 leading-tight"
            >
              Established B2B Garment Manufacturing
            </h2>

            {/* Credentials Rail */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/10">
              {credentials.map((cred, index) => (
                <div
                  key={cred.metric}
                  className={`p-8 border-r border-white/10 ${
                    index === 0 || index === 1 ? 'border-t' : ''
                  } ${
                    index % 2 === 0 ? 'border-l' : ''
                  }`}
                >
                  <div className="w-12 h-0.5 bg-accent mb-4" />
                  <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {cred.metric}
                  </div>
                  <div className="font-body text-sm text-white/70 leading-relaxed">
                    {cred.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors Served Section */}
          <div>
            <div className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                SECTORS SERVED
              </span>
            </div>
            <h3 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-white mb-8 leading-tight">
              Sectors We Supply
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <div>
                      <p className="font-sans text-h3 text-white mb-1">{org.name}</p>
                      <p className="font-body text-sm text-white/60">{org.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
