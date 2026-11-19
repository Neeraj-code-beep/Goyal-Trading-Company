import { Metadata } from 'next'
import { resolveCataloguePrefill } from '@/lib/catalogue/prefill'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request a Wholesale Quote | Goyal Trading Company',
  description:
    'Submit your garment manufacturing specifications, bulk order volumes, and custom apparel requirements for institutional B2B pricing.',
  alternates: {
    canonical: '/contact/request-quote',
  },
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function RequestQuotePage({ searchParams }: PageProps) {
  const rawParams = await searchParams
  const prefill = resolveCataloguePrefill(rawParams)

  const initialData = {
    productInterest: prefill.product?.name || (typeof rawParams.product === 'string' ? '' : undefined),
    familySlug: prefill.family?.slug,
    categorySlug: prefill.category?.slug,
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
    { name: 'Request Quote', url: '/contact/request-quote' },
  ])

  return (
    <div className="min-h-screen">
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative min-h-[45vh] lg:min-h-[50vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3 inline-block">
              Institutional & Bulk Procurement
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-4 leading-tight">
              Request a Wholesale Quote
            </h1>
            <p className="font-body text-body-lg text-gray-200 max-w-2xl leading-relaxed">
              Submit your garment specifications, fabric GSM, and volume targets. Our production desk provides custom OEM pricing for institutions, clubs, and brands.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Interactive Form Island (8 cols) */}
              <div className="lg:col-span-8">
                <div className="mb-6">
                  <h2 className="font-sans text-2xl font-bold text-primary mb-2">
                    Garment Order Specifications
                  </h2>
                  <p className="font-body text-sm text-gray-600">
                    Fields marked with an asterisk (*) are required for accurate bulk quotation.
                  </p>
                </div>

                <QuoteForm initialData={initialData} />
              </div>

              {/* Right Column: Verified Contact & Desk Info (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-primary rounded-2xl p-7 text-white shadow-md">
                  <h3 className="font-sans text-xl font-bold mb-4 flex items-center gap-2">
                    <span>Direct Sales Desk</span>
                  </h3>
                  <p className="font-body text-xs text-white/70 mb-6 leading-relaxed">
                    Have urgent institutional tender requirements or bespoke tech pack files? Contact our verified Delhi headquarters directly.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-white/60">Phone Line</p>
                        <a
                          href="tel:+919212126463"
                          className="font-body text-sm font-semibold hover:text-accent transition-colors"
                        >
                          +91 9212126463
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={18} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-white/60">WhatsApp Business</p>
                        <a
                          href="https://wa.me/919212126463"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm font-semibold hover:text-accent transition-colors"
                        >
                          +91 9212126463
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Clock size={18} className="text-accent" />
                    <h4 className="font-sans font-bold text-sm">Response Timeline</h4>
                  </div>
                  <p className="font-body text-xs text-gray-600 leading-relaxed mb-4">
                    Standard wholesale quotation analysis is completed within 24 to 48 business hours. Direct WhatsApp submissions receive faster preliminary confirmation.
                  </p>

                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-primary/60" />
                    <span>Established in 2000 | Delhi Factory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
