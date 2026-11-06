import { Metadata } from 'next'
import Link from 'next/link'
import { BusinessMetricsGrid } from './BusinessMetricsGrid'

export const metadata: Metadata = {
  title: 'About Us - Goyal Trading Company',
  description: 'Learn about Goyal Trading Company, a premier manufacturer and supplier of sportswear since 2000, operating from New Delhi with global export capabilities.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1920&q=80)',
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
                Since 2000
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                About Goyal Trading Company
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Premier manufacturer, supplier, and trader of sportswear and related products operating from New Delhi with global export capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/request-quote"
                  className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:shadow-lg hover:-translate-y-0.5"
                >
                  View Products
                </Link>
              </div>
            </div>

            {/* Right - Visual Composition */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-3xl font-bold">2000</div>
                    <div className="font-body text-sm">Est.</div>
                  </div>
                </div>

                {/* Floating Capacity Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">2</div>
                    <div className="font-body text-xs">Units</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story - Editorial Split */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Our Story
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
                Manufacturing Excellence in Sportswear Since 2000
              </h2>
              <div className="space-y-6">
                <p className="font-body text-body-lg text-gray-600 leading-relaxed">
                  Operated from the capital city of India, New Delhi, Goyal Trading Company is an established manufacturer and supplier engaged in manufacturing and supplying a comprehensive range of sportswear since 2000.
                </p>
                <p className="font-body text-body-lg text-gray-600 leading-relaxed">
                  With over two decades of dedicated manufacturing experience in the sports garment industry, we have built a reputation for reliable stitching, transparent wholesale pricing, and consistent quality across domestic and export markets.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80)',
                    objectPosition: 'center 30%'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-center">
                      <div className="font-sans text-2xl font-bold text-white">2000</div>
                      <div className="font-body text-sm text-white/80">Established</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <div className="font-sans text-display-3 font-bold text-accent">2000</div>
                    <div className="font-body text-sm text-gray-600">Year Established</div>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div>
                    <div className="font-sans text-display-3 font-bold text-accent">Delhi</div>
                    <div className="font-body text-sm text-gray-600">Operating Location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business at a Glance - Technical Grid */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Business at a Glance
            </span>
            <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white leading-tight">
              Verified Operational Data
            </h2>
          </div>
          
          <BusinessMetricsGrid metrics={[
            { metric: '2000', label: 'ESTABLISHED', detail: 'Year Founded' },
            { metric: '02', label: 'UNITS', detail: 'Production Facilities' },
            { metric: '13', label: 'FAMILIES', detail: 'Product Range' },
            { metric: 'Global', label: 'REACH', detail: 'Export Ready' },
          ]} />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                What We Do
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
                Comprehensive Sportswear Solutions
              </h2>
              <p className="font-body text-body-lg text-gray-600 leading-relaxed mb-12">
                We manufacture and supply a diverse range of sportswear and apparel products for various applications including sports teams, educational institutions, corporate uniforms, and promotional wear.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Track Suits & Activewear',
                  'T-Shirts & Polo Shirts',
                  'Sports Wear & Athletic Gear',
                  'School Uniforms',
                  'Corporate Apparel',
                  'Promotional Wear',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="font-body text-body text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Explore All Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* Product Collage */}
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80)' }}
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80)' }}
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80)' }}
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="font-sans text-2xl font-bold">50+</div>
                  <div className="font-body text-xs">Product Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Credentials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Business Credentials
            </span>
            <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
              Verified Legal & Financial Details
            </h2>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-sans text-h3 text-primary mb-6">Legal Status</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-body text-body text-gray-500">Legal Status</span>
                      <span className="font-body text-body text-gray-900 font-medium">Proprietorship Firm</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-body text-body text-gray-500">GST Registration</span>
                      <span className="font-body text-body text-gray-900 font-medium">Verified & Compliant</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-body text-body text-gray-500">DGFT/IE Code</span>
                      <span className="font-body text-body text-gray-900 font-medium">Export Licensed</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-body text-body text-gray-500">Operating Base</span>
                      <span className="font-body text-body text-gray-900 font-medium">Shastri Nagar, Delhi</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-sans text-h3 text-primary mb-6">Banking Partners</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="font-body text-body text-gray-900 font-medium">HDFC Bank Limited</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <span className="font-body text-body text-gray-900 font-medium">Punjab National Bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Served */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Organizations Served
            </span>
            <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
              Trusted Across Public & Private Sectors
            </h2>
            
            <div className="space-y-4">
              {[
                { name: 'Government & Institutional Departments', location: 'Institutional uniform supplies & physical training apparel' },
                { name: 'Sports & Athletic Academies', location: 'Custom athletic wear, tracksuits & sports team apparel' },
                { name: 'Educational Institutions & Schools', location: 'Durable school uniforms & sports day apparel' },
              ].map((org) => (
                <div key={org.name} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div>
                    <p className="font-sans text-h3 text-primary mb-1">{org.name}</p>
                    <p className="font-body text-body text-gray-600">{org.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Industries Served
            </span>
            <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
              Diverse Industry Applications
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Educational Institutions',
                'Engineering',
                'Hospitals',
                'Corporate Offices',
                'Security Services',
                'Sports Organizations',
              ].map((industry) => (
                <div key={industry} className="p-4 bg-white rounded-lg border border-gray-100 text-center">
                  <span className="font-body text-body text-gray-900">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Ready to Work Together?
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your sportswear manufacturing requirements. We&apos;re ready to deliver quality products for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a Quote
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
