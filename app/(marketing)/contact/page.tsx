import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { GoogleMap } from '@/components/ui/GoogleMap'
import { generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Package,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Goyal Trading Company - B2B Apparel Manufacturing',
  description:
    'Connect with Goyal Trading Company for bulk apparel manufacturing, wholesale quotations, fabric sample requests, and institutional business inquiries at our Delhi business office.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  const generalInquirySubject = encodeURIComponent('B2B Business Inquiry - Goyal Trading Company')
  const generalInquiryBody = encodeURIComponent(
    `Hello Goyal Trading Company Team,\n\nI am contacting your business desk regarding:\n\nOrganization / Company:\nContact Person:\nPhone / Mobile:\nRequirements Overview:\n\nThank you,\n`
  )
  const generalInquiryMailto = `mailto:${siteConfig.links.email}?subject=${generalInquirySubject}&body=${generalInquiryBody}`

  return (
    <div className="min-h-screen">
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* A. Contact Hero */}
      <section className="relative min-h-[45vh] lg:min-h-[50vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Subtle patterned overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-6 relative z-10 py-16">
          <div className="max-w-3xl">
            {/* Meta Tags / Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <Building2 size={13} className="text-accent" />
                Delhi Business Office
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <ShieldCheck size={13} className="text-accent" />
                Established in 2000
              </span>
            </div>

            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-5 leading-tight">
              Let&apos;s Discuss Your Apparel Requirements
            </h1>
            <p className="font-body text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
              Connect with Goyal Trading Company regarding bulk garment manufacturing, wholesale orders, fabric specifications, quotations, and sample inquiries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact/request-quote"
                className="px-6 py-3.5 bg-accent hover:bg-accent/90 text-white font-sans text-sm font-semibold rounded-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-sans text-sm font-semibold rounded-lg backdrop-blur-sm transition-all duration-200"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* D. Available Inquiry Pathways */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                Inquiry Pathways
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-primary mb-3">
                How Can We Assist Your Organization?
              </h2>
              <p className="font-body text-sm text-gray-600">
                Choose the direct pathway matching your procurement requirements for faster review and tailored assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pathway 1: Wholesale Quotation */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-primary mb-2">
                    Wholesale Quotation
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                    Submit order quantities, fabric GSM, color schemes, and customization requirements for volume institutional pricing.
                  </p>
                </div>
                <Link
                  href="/contact/request-quote"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-primary hover:bg-primary-dark text-white font-sans text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Pathway 2: Sample Inquiry */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                    <Package size={24} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-primary mb-2">
                    Sample Inquiry
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                    Request physical fabric swatches, prototype garments, or sizing sets to evaluate construction and finish quality before bulk commitments.
                  </p>
                </div>
                <Link
                  href="/contact/request-sample"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-accent hover:bg-accent/90 text-white font-sans text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>Request Samples</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Pathway 3: General Business Inquiry */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center mb-5">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-primary mb-2">
                    General Inquiry
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                    Connect regarding institutional tenders, vendor partnerships, or general apparel trade questions via our official email inbox.
                  </p>
                </div>
                <a
                  href={generalInquiryMailto}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-primary font-sans text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>Email Business Desk</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Contact Information & Operating Hours */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Verified Contact Details (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                    Verified Contact Information
                  </span>
                  <h2 className="font-sans text-display-2-mobile md:text-display-2 text-primary leading-tight mb-4">
                    Goyal Trading Company
                  </h2>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    Our team operates from our New Delhi business office. We welcome institutional inquiries, wholesale procurement requests, and custom garment specifications.
                  </p>
                </div>

                {/* Contact Channels List */}
                <div className="space-y-4">
                  {/* Verified Email */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Official Business Email
                      </p>
                      <a
                        href={generalInquiryMailto}
                        className="font-sans text-base font-bold text-primary hover:text-accent transition-colors block break-all"
                      >
                        {siteConfig.links.email}
                      </a>
                      <p className="font-body text-xs text-gray-500 mt-1">
                        Opens your email application with our verified contact details. Please review and send your specifications.
                      </p>
                    </div>
                  </div>

                  {/* Public Phone / WhatsApp (Strictly Gated on Owner Approval) */}
                  {siteConfig.contact.publicPhoneApproved ? (
                    <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          Direct Telephone
                        </p>
                        <a
                          href={`tel:${siteConfig.links.phone.replace(/\s+/g, '')}`}
                          className="font-sans text-base font-bold text-primary hover:text-accent transition-colors block"
                        >
                          {siteConfig.links.phone}
                        </a>
                      </div>
                    </div>
                  ) : null}

                  {siteConfig.contact.publicWhatsAppApproved && siteConfig.contact.publicPhoneApproved ? (
                    <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageSquare size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                          WhatsApp Business
                        </p>
                        <a
                          href={`https://wa.me/${siteConfig.links.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-base font-bold text-primary hover:text-accent transition-colors block"
                        >
                          +{siteConfig.links.whatsapp}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 text-xs text-gray-600 leading-relaxed">
                      <span className="font-semibold text-primary">Direct Phone & Messaging Lines: </span>
                      Direct telephone support and dedicated messaging lines are available for confirmed institutional accounts and formal inquiries. Please initiate contact via our quotation form or verified business email.
                    </div>
                  )}

                  {/* Address */}
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Delhi Business Address
                      </p>
                      <address className="font-body text-sm text-gray-900 not-italic space-y-0.5 leading-relaxed">
                        <p className="font-semibold">{siteConfig.name}</p>
                        <p>{siteConfig.links.address.line1}</p>
                        <p>{siteConfig.links.address.landmark}</p>
                        <p>{siteConfig.links.address.locality}</p>
                        <p>{siteConfig.links.address.city} - {siteConfig.links.address.postalCode}, {siteConfig.links.address.country}</p>
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inquiry Review & Commercial Engagement (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Inquiry Review */}
                <div className="bg-primary rounded-2xl p-7 text-white shadow-md">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-bold">Inquiry Evaluation</h3>
                      <p className="font-body text-xs text-white/70">B2B Wholesale & Custom Manufacturing</p>
                    </div>
                  </div>

                  <p className="font-body text-sm text-white/85 leading-relaxed mb-4">
                    Inquiries submitted via our quote request form, sample form, or official business email are evaluated by our team during regular business operations.
                  </p>

                  <div className="pt-4 border-t border-white/10 text-xs text-white/70 leading-relaxed">
                    Please provide complete garment specifications, target order volume, and fabric details to facilitate prompt evaluation.
                  </div>
                </div>

                {/* Commercial Engagement */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-sans font-bold text-sm text-primary mb-3 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-accent" />
                    <span>B2B Commercial Engagement</span>
                  </h4>
                  <ul className="space-y-2.5 font-body text-xs text-gray-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Wholesale supply and custom garment fabrication for institutions, brands, and organizations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Custom fabrication available for schools, corporate institutions, and athletic clubs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Technical tech-pack specifications and custom fabric composition evaluation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Business Location & Map */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                Physical Location
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-primary mb-3">
                Delhi Business Location
              </h2>
              <p className="font-body text-sm text-gray-600">
                Situated in Shastri Nagar, opposite Delhi Metro Pillar 180, near Indra Park.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
