import { Metadata } from 'next'
import { resolveCataloguePrefill } from '@/lib/catalogue/prefill'
import { SampleRequestForm } from '@/components/forms/SampleRequestForm'
import { generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { Phone, MessageSquare, ShieldCheck, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request Garment Samples | Goyal Trading Company',
  description:
    'Order fabric swatches, prototype garments, or sizing specification sets for institutional evaluation prior to bulk manufacturing.',
  alternates: {
    canonical: '/contact/request-sample',
  },
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function RequestSamplePage({ searchParams }: PageProps) {
  const rawParams = await searchParams
  const prefill = resolveCataloguePrefill(rawParams)

  const initialData = {
    productInterest: prefill.product?.name || (typeof rawParams.product === 'string' ? '' : undefined),
  }

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
    { name: 'Request Sample', url: '/contact/request-sample' },
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
              Quality Verification & Prototypes
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-4 leading-tight">
              Request Garment Samples
            </h1>
            <p className="font-body text-body-lg text-gray-200 max-w-2xl leading-relaxed">
              Verify fabric hand-feel, GSM density, stitching construction, and finish quality prior to bulk manufacturing commitments.
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
                    Sample Dispatch Details
                  </h2>
                  <p className="font-body text-sm text-gray-600">
                    Provide complete delivery address and specify your required sample format.
                  </p>
                </div>

                <SampleRequestForm initialData={initialData} />
              </div>

              {/* Right Column: Verified Policy & Contact (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-primary rounded-2xl p-7 text-white shadow-md">
                  <h3 className="font-sans text-xl font-bold mb-4">
                    Sample Evaluation Policy
                  </h3>
                  <div className="space-y-3.5 text-xs text-white/85 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Physical swatches & prototype garments provided for technical evaluation.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Standard courier freight charges applicable based on destination.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>Dispatch schedule confirmed directly by production coordinator.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <h4 className="font-sans font-bold text-sm text-primary mb-3">
                    Direct Coordination Line
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-gray-500">Telephone Line</p>
                        <a
                          href="tel:+919212126463"
                          className="font-body text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                          +91 9212126463
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={18} className="text-green-700" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-gray-500">WhatsApp Desk</p>
                        <a
                          href="https://wa.me/919212126463"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                          +91 9212126463
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 mt-4 border-t border-gray-200 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-primary/60" />
                    <span>Delhi Production Facility | E-187, Shastri Nagar</span>
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
