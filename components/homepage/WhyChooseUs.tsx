import { Building2, Package, PhoneCall, Award, Layers, FileCheck } from 'lucide-react'

const valueProps = [
  {
    icon: Award,
    title: 'Established Business Since 2000',
    description: 'Over two decades of continuous presence in Delhi garment manufacturing and wholesale textile trading.',
  },
  {
    icon: Layers,
    title: 'Organized Product Catalogue',
    description: '13 product families and 35 categories covering sports activewear, school wear, uniforms, and basics.',
  },
  {
    icon: Package,
    title: 'Sample Enquiries for Discussion',
    description: 'Submit a sample enquiry for discussion regarding fabrics, styles, and specifications prior to bulk orders.',
  },
  {
    icon: FileCheck,
    title: 'Custom Quotation Enquiries',
    description: 'Request a quotation for your product requirements tailored to fabric selection and order specifications.',
  },
  {
    icon: Building2,
    title: 'Delhi-Based Business',
    description: 'Established B2B textile manufacturing and wholesale trading operations based in New Delhi.',
  },
  {
    icon: PhoneCall,
    title: 'Direct Business Communication',
    description: 'Direct communication through approved business channels to discuss requirements and lead times.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50/70 relative overflow-hidden" aria-labelledby="why-choose-us-heading">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold text-accent uppercase tracking-widest block mb-2">
            Why Partner With Us
          </span>
          <h2
            id="why-choose-us-heading"
            className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4"
          >
            Built for Institutional Buyers &amp; Wholesale Procurement
          </h2>
          <p className="font-body text-base text-gray-600 leading-relaxed">
            We combine manufacturing reliability with transparent communication to deliver dependable textile and apparel solutions for organizations.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="bg-white p-7 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-accent/40 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors text-accent flex-shrink-0">
                <item.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-sans text-lg font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
