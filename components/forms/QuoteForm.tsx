'use client'

import { useState, useTransition } from 'react'
import { submitQuoteInquiry, InquiryActionState } from '@/app/actions/inquiry'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertTriangle, MessageSquare, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react'

export interface QuoteFormData {
  name: string
  company: string
  email: string
  phone: string
  productInterest: string
  familySlug?: string
  categorySlug?: string
  estimatedQuantity: string
  specificationsMessage: string
  targetDeliveryDate?: string
}

export interface QuoteFormProps {
  initialData?: Partial<QuoteFormData>
  variant?: 'full' | 'modal'
  onSuccess?: () => void
  className?: string
}

export function QuoteForm({
  initialData = {},
  variant: _variant = 'full',
  onSuccess,
  className = '',
}: QuoteFormProps) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<InquiryActionState | null>(null)

  // Minimum allowed delivery date is today in India (Asia/Kolkata)
  const minDeliveryDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

  const [formData, setFormData] = useState<QuoteFormData>({
    name: initialData.name || '',
    company: initialData.company || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    productInterest: initialData.productInterest || '',
    familySlug: initialData.familySlug || '',
    categorySlug: initialData.categorySlug || '',
    estimatedQuantity: initialData.estimatedQuantity || '',
    specificationsMessage: initialData.specificationsMessage || '',
    targetDeliveryDate: initialData.targetDeliveryDate || '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setState(null)
    setFormData({
      name: initialData.name || '',
      company: initialData.company || '',
      email: initialData.email || '',
      phone: initialData.phone || '',
      productInterest: initialData.productInterest || '',
      familySlug: initialData.familySlug || '',
      categorySlug: initialData.categorySlug || '',
      estimatedQuantity: initialData.estimatedQuantity || '',
      specificationsMessage: initialData.specificationsMessage || '',
      targetDeliveryDate: initialData.targetDeliveryDate || '',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = e.currentTarget
    const data = new FormData(formElement)

    startTransition(async () => {
      const result = await submitQuoteInquiry(state, data)
      setState(result)
      if (result.status === 'success') {
        onSuccess?.()
      }
    })
  }

  // 1. Success State (Only when email delivery was verified & delivered)
  if (state?.status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-md text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-sans text-2xl font-bold text-primary mb-3">
          Wholesale Inquiry Transmitted
        </h3>
        <p className="font-body text-gray-600 mb-6 leading-relaxed">
          {state.message}
        </p>
        <Button
          variant="secondary"
          size="md"
          onClick={handleReset}
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 ${className}`}>
      {/* 2. Honest Fallback Notice (When email provider is not yet configured) */}
      {state?.status === 'provider_unavailable' && (
        <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200 rounded-xl" role="alert">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-amber-900 mb-1">
                Direct Submission Channel Ready
              </h4>
              <p className="font-body text-sm text-amber-800 leading-relaxed mb-4">
                Automated email dispatch is awaiting backend provider configuration. To ensure your quotation is processed immediately without delay, please dispatch your verified specifications directly to our sales desk.
              </p>

              <div className="flex flex-wrap gap-3">
                {state.fallbackWhatsAppUrl && (
                  <a
                    href={state.fallbackWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp ({state.verifiedContactPhone})</span>
                    <ArrowRight size={14} />
                  </a>
                )}
                {state.verifiedContactPhone && (
                  <a
                    href={`tel:${state.verifiedContactPhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-amber-300 hover:bg-amber-100 text-amber-900 font-sans text-sm font-semibold rounded-lg transition-colors"
                  >
                    <PhoneCall size={16} />
                    <span>Call Sales Desk</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verified Context Indicator */}
      {(formData.productInterest || formData.familySlug || formData.categorySlug) && (
        <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/15 flex items-center gap-3">
          <ShieldCheck size={20} className="text-primary flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-primary">Target Product Context: </span>
            <span className="font-medium text-gray-800">
              {formData.productInterest || formData.categorySlug || formData.familySlug}
            </span>
          </div>
        </div>
      )}

      {state?.status === 'validation_error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {state.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam Honeypot Field (invisible to users & screen readers) */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="quote-hp-url">Do not fill this field</label>
          <input
            type="text"
            id="quote-hp-url"
            name="_hp_company_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Hidden inputs to preserve verified catalogue context */}
        <input type="hidden" name="familySlug" value={formData.familySlug} />
        <input type="hidden" name="categorySlug" value={formData.categorySlug} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-name" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Contact Person *
            </label>
            <input
              type="text"
              id="quote-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.name)}
              aria-describedby={state?.fieldErrors?.name ? 'quote-name-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. Rajesh Kumar"
            />
            {state?.fieldErrors?.name && (
              <p id="quote-name-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="quote-company" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Organization / Company *
            </label>
            <input
              type="text"
              id="quote-company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.company)}
              aria-describedby={state?.fieldErrors?.company ? 'quote-company-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.company ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. Delhi Sports Academy"
            />
            {state?.fieldErrors?.company && (
              <p id="quote-company-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.company}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-email" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Work Email *
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.email)}
              aria-describedby={state?.fieldErrors?.email ? 'quote-email-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="procurement@company.com"
            />
            {state?.fieldErrors?.email && (
              <p id="quote-email-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="quote-phone" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Contact Telephone / WhatsApp *
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.phone)}
              aria-describedby={state?.fieldErrors?.phone ? 'quote-phone-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.phone ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Mobile, landline or international number"
            />
            {state?.fieldErrors?.phone && (
              <p id="quote-phone-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-product" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Product Interest
            </label>
            <input
              type="text"
              id="quote-product"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              disabled={isPending}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
              placeholder="e.g. Track Suits, Cricket Dress"
            />
          </div>

          <div>
            <label htmlFor="quote-quantity" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Estimated Order Volume *
            </label>
            <select
              id="quote-quantity"
              name="estimatedQuantity"
              required
              value={formData.estimatedQuantity}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.estimatedQuantity)}
              aria-describedby={state?.fieldErrors?.estimatedQuantity ? 'quote-quantity-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.estimatedQuantity ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <option value="">Select Estimated Volume</option>
              <option value="50 - 150 pieces">50 - 150 pieces</option>
              <option value="150 - 500 pieces">150 - 500 pieces</option>
              <option value="500 - 1,000 pieces">500 - 1,000 pieces</option>
              <option value="1,000 - 5,000 pieces">1,000 - 5,000 pieces</option>
              <option value="5,000+ pieces">5,000+ pieces (Institutional / OEM)</option>
            </select>
            {state?.fieldErrors?.estimatedQuantity && (
              <p id="quote-quantity-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.estimatedQuantity}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-targetDeliveryDate" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Target Delivery Date <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="date"
              id="quote-targetDeliveryDate"
              name="targetDeliveryDate"
              min={minDeliveryDate}
              value={formData.targetDeliveryDate}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.targetDeliveryDate)}
              aria-describedby={state?.fieldErrors?.targetDeliveryDate ? 'quote-delivery-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.targetDeliveryDate ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {state?.fieldErrors?.targetDeliveryDate && (
              <p id="quote-delivery-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.targetDeliveryDate}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="quote-specs" className="block font-sans text-sm font-medium text-gray-700 mb-1">
            Garment Specifications & Customization Requirements *
          </label>
          <textarea
            id="quote-specs"
            name="specificationsMessage"
            required
            rows={4}
            value={formData.specificationsMessage}
            onChange={handleChange}
            disabled={isPending}
            aria-invalid={Boolean(state?.fieldErrors?.specificationsMessage)}
            aria-describedby={state?.fieldErrors?.specificationsMessage ? 'quote-specs-error' : undefined}
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
              state?.fieldErrors?.specificationsMessage ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Specify fabric composition (GSM), color codes, embroidery, sublimation printing, size breakdowns, and target delivery requirements..."
          />
          {state?.fieldErrors?.specificationsMessage && (
            <p id="quote-specs-error" className="mt-1 text-xs text-red-600" role="alert">
              {state.fieldErrors.specificationsMessage}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isPending}
        >
          {isPending ? 'Verifying & Submitting Inquiry...' : 'Generate Wholesale Quote Request'}
        </Button>
      </form>
    </div>
  )
}
