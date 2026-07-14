'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function RequestSamplePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    productInterest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24">
        <div className="bg-white p-12 rounded-2xl border border-gray-100 max-w-md mx-auto text-center shadow-lg">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-sans text-display-3 text-primary mb-4">Sample Request Submitted</h2>
          <p className="font-body text-body-lg text-gray-600 mb-8 leading-relaxed">
            Thank you for your interest. Our team will contact you to arrange sample delivery within 5-7 business days.
          </p>
          <Button variant="primary" size="lg" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Quality First
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
              Request a Sample
            </h1>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
              Experience our quality firsthand by requesting a product sample. Evaluate our materials, craftsmanship, and fit before placing bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h2 className="font-sans text-display-3 text-primary mb-8">Sample Request Form</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Shipping Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Complete shipping address"
                      />
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Product Interest *
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        required
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a product category</option>
                        <option value="track-suits">Track Suits</option>
                        <option value="t-shirts">T-Shirts</option>
                        <option value="sports-wear">Sports Wear</option>
                        <option value="jackets">Jackets</option>
                        <option value="shorts">Shorts</option>
                        <option value="school-wear">School Wear</option>
                        <option value="corporate-wear">Corporate Wear</option>
                        <option value="bags">Bags & Accessories</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Additional Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Specific requirements, colors, sizes, etc."
                      />
                    </div>

                    <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg" 
                          fullWidth 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Sample Request'}
                        </Button>
                  </form>
                </div>
              </div>

              {/* Sample Policy */}
              <div>
                <div className="bg-primary rounded-2xl p-8 text-white mb-6">
                  <h3 className="font-sans text-h3 mb-6">Sample Policy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="font-body text-body text-white/90">Samples provided for quality evaluation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="font-body text-body text-white/90">Shipping charges may apply</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="font-body text-body text-white/90">Delivery: 5-7 business days</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-sans text-h3 text-primary mb-4">Contact Directly</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-body text-sm text-gray-500 mb-1">Phone</p>
                      <p className="font-body text-body text-gray-900">07313726929</p>
                    </div>
                    <div>
                      <p className="font-body text-sm text-gray-500 mb-1">WhatsApp</p>
                      <p className="font-body text-body text-gray-900">9212126463</p>
                    </div>
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
