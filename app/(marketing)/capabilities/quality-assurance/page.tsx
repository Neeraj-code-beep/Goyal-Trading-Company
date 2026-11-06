import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quality Assurance - Goyal Trading Company',
  description: 'Learn about our quality assurance processes, standards, and commitment to delivering premium quality products.',
}

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 30%'
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
                Quality First
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Quality Assurance
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Our commitment to quality ensures every product meets the highest standards of excellence through centralized quality control and rigorous testing.
              </p>
              <Link
                href="/contact/request-sample"
                className="inline-block px-6 py-3 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Request Sample
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
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Quality Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">100%</div>
                    <div className="font-body text-xs">Inspection</div>
                  </div>
                </div>

                {/* Floating Standards Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">ISO</div>
                    <div className="font-body text-xs">Standards</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Credentials Header */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Built on Verified Credentials
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="font-sans text-h2 text-primary mb-1">GST REGISTERED</div>
                <div className="font-body text-xs text-gray-500">07AFEPG9418H1ZF</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="font-sans text-h2 text-primary mb-1">DGFT / IE CODE</div>
                <div className="font-body text-xs text-gray-500">0511050160</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="font-sans text-h2 text-primary mb-1">26+ YEARS</div>
                <div className="font-body text-xs text-gray-500">SINCE 2000</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="font-sans text-h2 text-primary mb-1">10K SETS/MONTH</div>
                <div className="font-body text-xs text-gray-500">CAPACITY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards - Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Quality Standards
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Six Pillars of Quality
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Color Fastness', description: 'Ensuring colors remain vibrant through multiple washes' },
                { title: 'Excellent Fabric', description: 'Premium quality materials for durability and comfort' },
                { title: 'Faultless Fitting', description: 'Precision sizing for perfect fit every time' },
                { title: 'Finely Stitched', description: 'Expert craftsmanship with attention to detail' },
                { title: 'Shrinkage Free', description: 'Pre-treated fabrics to maintain size and shape' },
                { title: 'Designer Products', description: 'Contemporary designs with classic quality' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <h3 className="font-sans text-h3 text-primary mb-2">{item.title}</h3>
                  <p className="font-body text-body text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Quality Process
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Centralized Quality Control System
              </h2>
              <p className="font-body text-body-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                Our centralized quality control system ensures consistent quality across all production units.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="space-y-0">
                {[
                  { step: '01', title: 'Material Inspection', description: 'Raw material quality checks before production begins' },
                  { step: '02', title: 'Production Monitoring', description: 'In-process quality checks during manufacturing' },
                  { step: '03', title: 'Final Inspection', description: 'Pre-shipment quality assurance before delivery' },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className={`flex items-start gap-6 p-6 ${
                      index < 2 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-sans text-accent font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-sans text-h3 text-primary mb-1">{item.title}</h3>
                      <p className="font-body text-body text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Compliance
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white leading-tight">
                Legal & Regulatory Compliance
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-sans text-h3 text-white mb-2">GST Registered</h3>
                  <p className="font-body text-body text-white/70">Compliant Indian Tax Entity</p>
                  <p className="font-body text-sm text-white/50 mt-2">Verified statutory registration</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-sans text-h3 text-white mb-2">Export Licensed</h3>
                  <p className="font-body text-body text-white/70">DGFT / Import-Export Code</p>
                  <p className="font-body text-sm text-white/50 mt-2">Authorized for international trade</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-sans text-h3 text-white mb-2">Established Heritage</h3>
                  <p className="font-body text-body text-white/70">Founded in 2000</p>
                  <p className="font-body text-sm text-white/50 mt-2">Over two decades of operation</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="font-sans text-h3 text-white mb-2">Manufacturing Facilities</h3>
                  <p className="font-body text-body text-white/70">2 Production Units in Delhi</p>
                  <p className="font-body text-sm text-white/50 mt-2">Equipped for bulk apparel manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Our Team
              </span>
              <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary leading-tight">
                Quality Control Team
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="font-body text-body-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated quality control team includes experienced professionals who ensure every product meets our stringent quality standards before it reaches our customers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-accent font-bold text-sm">QC</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-h4 text-primary mb-1">Quality Controllers</h3>
                    <p className="font-body text-body-sm text-gray-600">Dedicated inspection team</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-accent font-bold text-sm">TM</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-h4 text-primary mb-1">Technicians</h3>
                    <p className="font-body text-body-sm text-gray-600">Equipment maintenance</p>
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
            Quality You Can Trust
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience our commitment to quality firsthand. Request a sample to verify our standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact/request-sample"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request Sample
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
