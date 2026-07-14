import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Infrastructure - Goyal Trading Company',
  description: 'Learn about our infrastructure including production facilities, premises, and operational setup.',
}

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 35%'
            }}
          />
        </div>

        {/* Gradient overlays - lighter for better image visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary-dark/45 to-accent/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/20 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Operational Base
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Our Infrastructure
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Established production facilities and infrastructure in Delhi supporting large-scale manufacturing operations for B2B clients.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Right - Visual Composition */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565514020176-6c3c8b8f4a3a?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Capacity Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">10K</div>
                    <div className="font-body text-xs">Capacity</div>
                  </div>
                </div>

                {/* Floating Location Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">Delhi</div>
                    <div className="font-body text-xs">HQ</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Premises - Editorial Split */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Location & Premises
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Established Urban Infrastructure
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-sans text-h3 text-primary mb-6">Address</h3>
                <address className="font-body text-body text-gray-600 leading-relaxed not-italic">
                  No. E-187, First Floor, Near Indra Park, Opp. Metro Piller 180, Shastri Nagar, Delhi - 110052, India
                </address>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-sans text-h4 text-primary mb-1">Location Type</h4>
                    <p className="font-body text-body text-gray-600">Urban - Delhi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-sans text-h4 text-primary mb-1">Building Infrastructure</h4>
                    <p className="font-body text-body text-gray-600">Permanent Setup</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-sans text-h4 text-primary mb-1">Premises Size</h4>
                    <p className="font-body text-body text-gray-600">2,000 Square Feet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Units - Technical Grid */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Production Facilities
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white leading-tight">
                Production Units
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-0">
                {[
                  { metric: '02', label: 'UNITS', detail: 'Production Facilities' },
                  { metric: '2,000', label: 'SQ FT', detail: 'Total Manufacturing Space' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`p-8 border-r border-b border-white/10 ${
                      index === 0 ? 'border-t border-l' : 'border-l'
                    }`}
                  >
                    <div className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 font-bold text-white mb-2">
                      {item.metric}
                    </div>
                    <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {item.label}
                    </div>
                    <div className="w-8 h-0.5 bg-accent mb-2" />
                    <p className="font-body text-sm text-white/60">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure - Compact Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Our Team
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Skilled Workforce Across Functions
              </h2>
              <p className="font-body text-body-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                Our team of 26-50 skilled professionals spans design, production, quality control, and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Designers',
                'Procuring Agents',
                'Quality Controllers',
                'Sales & Marketing',
                'Tailors',
                'Production Managers',
                'Technicians',
                'Warehousing',
                'Packaging Experts',
              ].map((role) => (
                <div key={role} className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <span className="font-body text-body text-primary font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Leadership
              </span>
              <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary leading-tight">
                Key Personnel
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-accent font-bold text-sm">CEO</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-h3 text-primary mb-1">Mr. Bhoj Raj Goyal</h3>
                    <p className="font-body text-body text-gray-600">Company CEO</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-accent font-bold text-sm">PR</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-h3 text-primary mb-1">Mr. Sanjay</h3>
                    <p className="font-body text-body text-gray-600">Proprietor & Contact Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Visit Our Facility
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a visit to see our infrastructure and production capabilities firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/capabilities"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
