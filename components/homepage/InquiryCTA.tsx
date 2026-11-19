import Link from 'next/link'
import { FileText, Package, MessageSquare, PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function InquiryCTA() {
  const isWhatsAppApproved =
    siteConfig.contact.publicWhatsAppApproved && siteConfig.contact.publicPhoneApproved
  const whatsappUrl = `https://wa.me/${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    'Hello Goyal Trading Company, I would like to inquire about wholesale apparel and manufacturing.'
  )}`

  return (
    <section className="py-20 sm:py-24 bg-primary text-white relative overflow-hidden" aria-labelledby="inquiry-cta-heading">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-sans text-xs font-bold text-accent uppercase tracking-widest block mb-2">
            Procurement &amp; Inquiries
          </span>
          <h2
            id="inquiry-cta-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
          >
            Start Your Bulk Procurement Inquiry
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-200 leading-relaxed">
            Select an inquiry option below or contact us directly to discuss catalogue requirements, custom specifications, and wholesale pricing.
          </p>
        </div>

        {/* 3 Inquiry Pathways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Request Quote */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 flex flex-col justify-between hover:border-accent transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-5">
                <FileText size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-2 text-white">
                Request a Bulk Quote
              </h3>
              <p className="font-body text-sm text-gray-200 leading-relaxed mb-6">
                Submit target quantities, garment specifications, and delivery timeline for custom bulk pricing.
              </p>
            </div>
            <Link
              href="/contact/request-quote"
              className="inline-flex items-center justify-between w-full px-5 py-3 bg-accent hover:bg-accent/90 text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              <span>Submit Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Request Sample */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 flex flex-col justify-between hover:border-accent transition-all group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 text-accent flex items-center justify-center mb-5">
                <Package size={24} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-2 text-white">
                Request Product Sample
              </h3>
              <p className="font-body text-sm text-gray-200 leading-relaxed mb-6">
                Submit a sample enquiry to discuss fabric swatches, prototype garments, or sizing requirements.
              </p>
            </div>
            <Link
              href="/contact/request-sample"
              className="inline-flex items-center justify-between w-full px-5 py-3 bg-white/20 hover:bg-white/30 text-white font-sans text-sm font-semibold rounded-lg transition-colors border border-white/30"
            >
              <span>Request Sample</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3: Contact the Business / WhatsApp (conditional) */}
          {isWhatsAppApproved ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 flex flex-col justify-between hover:border-emerald-400 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-sans text-xl font-bold mb-2 text-white">
                  Inquire via WhatsApp
                </h3>
                <p className="font-body text-sm text-gray-200 leading-relaxed mb-6">
                  Connect on WhatsApp for quick inquiries, catalogue questions, and specification details.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 flex flex-col justify-between hover:border-accent transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 text-accent flex items-center justify-center mb-5">
                  <Mail size={24} />
                </div>
                <h3 className="font-sans text-xl font-bold mb-2 text-white">
                  Contact the Business
                </h3>
                <p className="font-body text-sm text-gray-200 leading-relaxed mb-6">
                  Submit general inquiries, catalogue requests, or business correspondence directly through our contact desk.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-between w-full px-5 py-3 bg-white/20 hover:bg-white/30 text-white font-sans text-sm font-semibold rounded-lg transition-colors border border-white/30"
              >
                <span>Contact Business Desk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>

        {/* Contact Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-accent" />
            <span>Reported Business Email: <strong className="text-white">{siteConfig.links.email}</strong></span>
          </div>
          {siteConfig.contact.publicPhoneApproved && (
            <div className="flex items-center gap-2">
              <PhoneCall size={15} className="text-accent" />
              <span>Direct Phone: <strong className="text-white">{siteConfig.links.phone}</strong></span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-accent" />
            <span>New Delhi Business Address: Shastri Nagar, Delhi - 110052</span>
          </div>
        </div>
      </div>
    </section>
  )
}
