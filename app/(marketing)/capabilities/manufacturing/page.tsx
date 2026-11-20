import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities - Goyal Trading Company',
  description: 'Learn about our manufacturing capabilities including production capacity, equipment, and custom manufacturing services.',
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 40%'
            }}
          />
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient overlays - lighter for better image visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary-dark/45 to-accent/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/20 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Operational Excellence
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
              Manufacturing Capabilities
            </h1>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
              Established production facilities with modern equipment and custom manufacturing capabilities for bulk B2B orders.
            </p>
            <Link
              href="/contact/request-quote"
              className="inline-block px-6 py-3 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Production Capacity - Technical Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Production Capacity
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Verified Operational Metrics
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {[
                  { metric: '2000', label: 'ESTABLISHED', detail: 'Year Founded' },
                  { metric: 'Delhi', label: 'LOCATION', detail: 'Shastri Nagar Facility' },
                  { metric: '13', label: 'FAMILIES', detail: 'Product Range' },
                  { metric: 'Custom', label: 'OEM ORDERS', detail: 'Built to Specification' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`p-6 border-r border-b border-gray-200 ${
                      index === 0 || index === 1 ? 'border-t' : ''
                    } ${
                      index % 2 === 0 ? 'border-l' : ''
                    }`}
                  >
                    <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-primary mb-2">
                      {item.metric}
                    </div>
                    <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {item.label}
                    </div>
                    <div className="w-8 h-0.5 bg-accent mb-2" />
                    <p className="font-body text-xs text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Equipment - Technical List */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Production Equipment
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white leading-tight">
                Modern Manufacturing Setup
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-0">
                {[
                  { name: 'High Speed Circular Knitting Machine', description: 'For efficient fabric production' },
                  { name: 'Flat Knit Machine', description: 'Precision knitting capabilities' },
                  { name: 'Dyeing Facility', description: 'In-house color processing' },
                  { name: 'Balloon Padding Facility', description: 'Advanced fabric treatment' },
                  { name: 'Drier Systems', description: 'Efficient drying capabilities' },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex items-start gap-6 p-6 ${
                      index < 4 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-sans text-h3 text-white mb-1">{item.name}</h3>
                      <p className="font-body text-sm text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions - Editorial */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Manufacturing Services
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Custom Manufacturing Solutions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: 'OEM Services',
                  title: 'Original Equipment Manufacturing',
                  description: 'Custom manufacturing according to client specifications with quality assurance.',
                },
                {
                  label: 'B2B Manufacturing',
                  title: 'Bulk Production for Business',
                  description: 'Manufacturing capabilities for wholesale and corporate clients with competitive pricing.',
                },
                {
                  label: 'Export Manufacturing',
                  title: 'International Production Standards',
                  description: 'Specialized production for international markets with quality standards compliance.',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-sans text-accent font-bold text-sm">{item.label}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-h3 text-primary mb-2">{item.title}</h3>
                    <p className="font-body text-body text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Integration */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Quality Integration
              </span>
              <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary leading-tight">
                Quality Control in Manufacturing
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="font-body text-body-lg text-gray-600 mb-8 leading-relaxed">
                Our centralized quality control system ensures consistent quality across all production units. Every product undergoes rigorous quality checks before shipment.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Color Fastness',
                  'Fabric Quality',
                  'Fitting Accuracy',
                  'Stitching Quality',
                ].map((item) => (
                  <div key={item} className="p-4 bg-gray-50 rounded-lg text-center">
                    <span className="font-sans text-body text-primary font-medium">{item}</span>
                  </div>
                ))}
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
            Ready to Manufacture Your Products?
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your manufacturing requirements. We offer custom solutions for bulk orders across all product categories.
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
