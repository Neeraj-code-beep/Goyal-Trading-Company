'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'How long has Goyal Trading Company been in business?',
        a: 'Goyal Trading Company was established in 2000, bringing over two decades of dedicated manufacturing experience in the sports and activewear apparel industry.',
      },
      {
        q: 'What is your production capacity?',
        a: 'We operate 2 specialized manufacturing units in New Delhi, equipped for flexible batch production to handle medium-to-large bulk institutional and corporate orders.',
      },
      {
        q: 'Do you export internationally?',
        a: 'Yes, we export to multiple countries including UAE, USA, UK, Africa, Asia, Australia, Central America, Eastern Europe, Middle East, North America, South America, and Western Europe.',
      },
    ],
  },
  {
    category: 'Products',
    questions: [
      {
        q: 'What types of products do you manufacture?',
        a: 'We manufacture a wide range of sportswear including track suits, t-shirts, sports wear, jackets, shorts, school wear, corporate wear, bags, and accessories.',
      },
      {
        q: 'Do you offer custom manufacturing?',
        a: 'Yes, we provide OEM services and can manufacture products according to your specifications and requirements for bulk B2B orders.',
      },
      {
        q: 'What is your minimum order quantity?',
        a: 'Minimum order quantities vary by product. Contact us with your requirements for specific MOQ information.',
      },
    ],
  },
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How can I request a quote?',
        a: 'You can request a quote through our website by filling out the quote request form, or contact us directly via phone or WhatsApp.',
      },
      {
        q: 'Can I request a sample before placing a bulk order?',
        a: 'Yes, we provide samples for quality evaluation. Please use our sample request form or contact us directly.',
      },
      {
        q: 'What are your payment terms?',
        a: 'We accept cash, cheque, credit card, and demand draft. Specific payment terms can be discussed based on order size.',
      },
      {
        q: 'How do you ship orders?',
        a: 'We ship by road and sea. Shipping method depends on order size, destination, and customer preference.',
      },
    ],
  },
  {
    category: 'Quality',
    questions: [
      {
        q: 'What quality standards do you follow?',
        a: 'We maintain strict quality control with centralized systems ensuring color fastness, excellent fabric quality, faultless fitting, fine stitching, and shrinkage-free products.',
      },
      {
        q: 'Are you certified and legally registered?',
        a: 'Yes, we are a GST-registered enterprise holding an official DGFT Import-Export License with full statutory tax compliance in New Delhi, India.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ category: number; question: number } | null>(null)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    if (openIndex?.category === categoryIndex && openIndex?.question === questionIndex) {
      setOpenIndex(null)
    } else {
      setOpenIndex({ category: categoryIndex, question: questionIndex })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)',
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
                Support Center
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Find answers to common questions about our products, services, and ordering process.
              </p>
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

                {/* Floating Questions Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">20+</div>
                    <div className="font-body text-xs">FAQs</div>
                  </div>
                </div>

                {/* Floating Support Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">24h</div>
                    <div className="font-body text-xs">Support</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="mb-8">
                  <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-2 inline-block">
                    {category.category}
                  </span>
                  <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary">
                    {category.category === 'General' && 'Company Information'}
                    {category.category === 'Products' && 'Product & Manufacturing'}
                    {category.category === 'Orders & Shipping' && 'Orders & Logistics'}
                    {category.category === 'Quality' && 'Quality & Compliance'}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                        aria-expanded={openIndex?.category === categoryIndex && openIndex?.question === questionIndex}
                      >
                        <span className="font-sans text-h3 text-primary pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`text-primary transition-transform flex-shrink-0 ${
                            openIndex?.category === categoryIndex && openIndex?.question === questionIndex
                              ? 'rotate-180'
                              : ''
                          }`}
                          size={20}
                        />
                      </button>
                      
                      {openIndex?.category === categoryIndex && openIndex?.question === questionIndex && (
                        <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                          <p className="font-body text-body text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            Still Have Questions?
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Contact us directly and we&apos;ll be happy to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919212126463"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
