import { Metadata } from 'next'
import Link from 'next/link'
import { GoogleMap } from '@/components/ui/GoogleMap'

export const metadata: Metadata = {
  title: 'Contact Us - Goyal Trading Company',
  description: 'Get in touch with Goyal Trading Company for quotes, samples, and inquiries. Contact Mr. Sanjay at our Delhi headquarters.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 40%'
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
                Get in Touch
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Reach out for quotes, samples, and business inquiries. Our team is ready to assist with your manufacturing requirements.
              </p>
              <a
                href="https://wa.me/919212126463"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Right - Visual Composition */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Location Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">Delhi</div>
                    <div className="font-body text-xs">Headquarters</div>
                  </div>
                </div>

                {/* Floating Response Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">24h</div>
                    <div className="font-body text-xs">Response</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information - Editorial Split */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                  Contact Information
                </span>
                <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
                  Primary Contact
                </h2>
                
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-6">
                  <h3 className="font-sans text-h3 text-primary mb-2">Mr. Sanjay</h3>
                  <p className="font-body text-body text-gray-600 mb-6">Proprietor & Contact Person</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-gray-500 mb-1">Phone</p>
                        <p className="font-body text-body text-gray-900">07313726929</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-gray-500 mb-1">Mobile</p>
                        <p className="font-body text-body text-gray-900">+91 9212126463</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-gray-500 mb-1">Mobile</p>
                        <p className="font-body text-body text-gray-900">+91 9968208744</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-gray-500 mb-1">Mobile</p>
                        <p className="font-body text-body text-gray-900">+91 8510079800</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-gray-500 mb-1">Skype</p>
                        <p className="font-body text-body text-gray-900">goyals27</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-sans text-h3 text-primary mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p className="font-body text-body text-gray-600">
                      <span className="font-medium text-gray-900">Monday - Saturday:</span> 9:00 AM - 6:00 PM IST
                    </p>
                    <p className="font-body text-body text-gray-600">
                      <span className="font-medium text-gray-900">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                  Quick Actions
                </span>
                <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-8 leading-tight">
                  Request Services
                </h2>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact/request-quote"
                    className="block bg-primary p-8 rounded-2xl border border-gray-100 hover:bg-primary-dark transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-sans text-h3 text-white mb-2 group-hover:text-gray-100">Request a Quote</h3>
                        <p className="font-body text-body text-gray-200">Get pricing for bulk orders</p>
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/contact/request-sample"
                    className="block bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-sans text-h3 text-primary mb-2 group-hover:text-accent">Request a Sample</h3>
                        <p className="font-body text-body text-gray-600">See our quality firsthand</p>
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/contact"
                    className="block bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-sans text-h3 text-primary mb-2 group-hover:text-accent">Schedule Visit</h3>
                        <p className="font-body text-body text-gray-600">Visit our production facility</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Location
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Visit Goyal Trading Company
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Shipment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Logistics
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Payment & Shipment
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-sans text-h3 text-primary mb-6">Payment Modes</h3>
                <div className="space-y-3">
                  {['Cash', 'Cheque', 'Credit Card', 'Demand Draft (DD)'].map((mode) => (
                    <div key={mode} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-body text-body text-gray-900">{mode}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-sans text-h3 text-primary mb-6">Shipment Modes</h3>
                <div className="space-y-3">
                  {['By Road', 'By Sea'].map((mode) => (
                    <div key={mode} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-body text-body text-gray-900">{mode}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
