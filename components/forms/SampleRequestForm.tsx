'use client'

import { useState, useTransition } from 'react'
import { submitSampleInquiry, InquiryActionState } from '@/app/actions/inquiry'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { CheckCircle2, AlertTriangle, MessageSquare, PhoneCall, ArrowRight, Package } from 'lucide-react'

export interface SampleFormData {
  name: string
  company: string
  email: string
  phone: string
  deliveryAddress: string
  city: string
  postalCode: string
  productInterest: string
  sampleType: 'fabric-swatch' | 'prototype-garment' | 'size-set'
  customRequirements?: string
}

export interface SampleRequestFormProps {
  initialData?: Partial<SampleFormData>
  variant?: 'full' | 'inline'
  onSuccess?: () => void
  className?: string
}

export function SampleRequestForm({
  initialData = {},
  variant: _variant = 'full',
  onSuccess,
  className = '',
}: SampleRequestFormProps) {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<InquiryActionState | null>(null)

  const [formData, setFormData] = useState<SampleFormData>({
    name: initialData.name || '',
    company: initialData.company || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    deliveryAddress: initialData.deliveryAddress || '',
    city: initialData.city || '',
    postalCode: initialData.postalCode || '',
    productInterest: initialData.productInterest || '',
    sampleType: initialData.sampleType || 'fabric-swatch',
    customRequirements: initialData.customRequirements || '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSampleTypeChange = (type: 'fabric-swatch' | 'prototype-garment' | 'size-set') => {
    setFormData(prev => ({ ...prev, sampleType: type }))
  }

  const handleReset = () => {
    setState(null)
    setFormData({
      name: initialData.name || '',
      company: initialData.company || '',
      email: initialData.email || '',
      phone: initialData.phone || '',
      deliveryAddress: initialData.deliveryAddress || '',
      city: initialData.city || '',
      postalCode: initialData.postalCode || '',
      productInterest: initialData.productInterest || '',
      sampleType: initialData.sampleType || 'fabric-swatch',
      customRequirements: initialData.customRequirements || '',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = e.currentTarget
    const data = new FormData(formElement)

    startTransition(async () => {
      const result = await submitSampleInquiry(state, data)
      setState(result)
      if (result.status === 'success') {
        onSuccess?.()
      }
    })
  }

  if (state?.status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-md text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-sans text-2xl font-bold text-primary mb-3">
          Sample Request Transmitted
        </h3>
        <p className="font-body text-gray-600 mb-6 leading-relaxed">
          {state.message}
        </p>
        <Button variant="secondary" size="md" onClick={handleReset}>
          Submit Another Sample Request
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 ${className}`}>
      {/* Fallback Notice */}
      {state?.status === 'provider_unavailable' && (
        <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200 rounded-xl" role="alert">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-amber-900 mb-1">
                Direct Sample Dispatch Desk Ready
              </h4>
              <p className="font-body text-sm text-amber-800 leading-relaxed mb-4">
                Automated email dispatch is awaiting backend provider configuration. To arrange sample dispatch without delay, please send your courier address directly to our sales desk.
              </p>

              <div className="flex flex-wrap gap-3">
                {siteConfig.contact.publicWhatsAppApproved && siteConfig.contact.publicPhoneApproved && state.fallbackWhatsAppUrl ? (
                  <a
                    href={state.fallbackWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare size={16} />
                    <span>Send Sample Address via WhatsApp ({state.verifiedContactPhone})</span>
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <a
                    href={`mailto:${siteConfig.links.email}?subject=${encodeURIComponent('Sample Request Delivery Details - ' + (formData.productInterest || 'General Sample'))}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    <span>Email Courier Address to Business Desk ({siteConfig.links.email})</span>
                    <ArrowRight size={14} />
                  </a>
                )}
                {siteConfig.contact.publicPhoneApproved && state.verifiedContactPhone && (
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

      {/* Target Product Badge */}
      {formData.productInterest && (
        <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/15 flex items-center gap-3">
          <Package size={20} className="text-primary flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-primary">Requested Product Sample: </span>
            <span className="font-medium text-gray-800">{formData.productInterest}</span>
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
          <label htmlFor="sample-hp-url">Do not fill this field</label>
          <input
            type="text"
            id="sample-hp-url"
            name="_hp_company_url"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <input type="hidden" name="sampleType" value={formData.sampleType} />

        {/* Sample Format Selector */}
        <div>
          <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Sample Format *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'fabric-swatch', label: 'Fabric Swatch', desc: 'Fabric texture, GSM & color options' },
              { id: 'prototype-garment', label: 'Single Prototype', desc: 'Pre-production finished garment sample' },
              { id: 'size-set', label: 'Size Specification Set', desc: 'Sizing graded fit verification set' },
            ].map(format => (
              <button
                key={format.id}
                type="button"
                onClick={() =>
                  handleSampleTypeChange(
                    format.id as 'fabric-swatch' | 'prototype-garment' | 'size-set'
                  )
                }
                disabled={isPending}
                className={`p-3.5 text-left rounded-xl border transition-all ${
                  formData.sampleType === format.id
                    ? 'border-accent bg-accent/5 ring-1 ring-accent'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <span className="font-sans text-sm font-semibold text-primary block mb-0.5">
                  {format.label}
                </span>
                <span className="font-body text-xs text-gray-500 block leading-tight">
                  {format.desc}
                </span>
              </button>
            ))}
          </div>
          {state?.fieldErrors?.sampleType && (
            <p id="sample-type-error" className="mt-1 text-xs text-red-600" role="alert">
              {state.fieldErrors.sampleType}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sample-name" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Recipient Name *
            </label>
            <input
              type="text"
              id="sample-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.name)}
              aria-describedby={state?.fieldErrors?.name ? 'sample-name-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.name ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. Ramesh Patel"
            />
            {state?.fieldErrors?.name && (
              <p id="sample-name-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sample-company" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Institution / Brand Name *
            </label>
            <input
              type="text"
              id="sample-company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.company)}
              aria-describedby={state?.fieldErrors?.company ? 'sample-company-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.company ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. Haryana Police Training School"
            />
            {state?.fieldErrors?.company && (
              <p id="sample-company-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.company}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sample-email" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Business Email *
            </label>
            <input
              type="email"
              id="sample-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.email)}
              aria-describedby={state?.fieldErrors?.email ? 'sample-email-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.email ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="procurement@organization.com"
            />
            {state?.fieldErrors?.email && (
              <p id="sample-email-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sample-phone" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Mobile / Courier Contact *
            </label>
            <input
              type="tel"
              id="sample-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.phone)}
              aria-describedby={state?.fieldErrors?.phone ? 'sample-phone-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.phone ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Mobile, landline or international number"
            />
            {state?.fieldErrors?.phone && (
              <p id="sample-phone-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="sample-address" className="block font-sans text-sm font-medium text-gray-700 mb-1">
            Courier Delivery Address *
          </label>
          <input
            type="text"
            id="sample-address"
            name="deliveryAddress"
            required
            value={formData.deliveryAddress}
            onChange={handleChange}
            disabled={isPending}
            aria-invalid={Boolean(state?.fieldErrors?.deliveryAddress)}
            aria-describedby={state?.fieldErrors?.deliveryAddress ? 'sample-address-error' : undefined}
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
              state?.fieldErrors?.deliveryAddress ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Plot / Building, Street, Area / Sector"
          />
          {state?.fieldErrors?.deliveryAddress && (
            <p id="sample-address-error" className="mt-1 text-xs text-red-600" role="alert">
              {state.fieldErrors.deliveryAddress}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sample-city" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              id="sample-city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.city)}
              aria-describedby={state?.fieldErrors?.city ? 'sample-city-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.city ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. New Delhi"
            />
            {state?.fieldErrors?.city && (
              <p id="sample-city-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.city}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sample-postalCode" className="block font-sans text-sm font-medium text-gray-700 mb-1">
              Postal PIN Code *
            </label>
            <input
              type="text"
              id="sample-postalCode"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={handleChange}
              disabled={isPending}
              aria-invalid={Boolean(state?.fieldErrors?.postalCode)}
              aria-describedby={state?.fieldErrors?.postalCode ? 'sample-postalCode-error' : undefined}
              className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm ${
                state?.fieldErrors?.postalCode ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="e.g. 110052"
            />
            {state?.fieldErrors?.postalCode && (
              <p id="sample-postalCode-error" className="mt-1 text-xs text-red-600" role="alert">
                {state.fieldErrors.postalCode}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="sample-requirements" className="block font-sans text-sm font-medium text-gray-700 mb-1">
            Custom Specifications or Fabric Requirements
          </label>
          <textarea
            id="sample-requirements"
            name="customRequirements"
            rows={3}
            value={formData.customRequirements}
            onChange={handleChange}
            disabled={isPending}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
            placeholder="Specify any preferred fabric weights, colors, or sizing details..."
          />
        </div>

        <p className="font-body text-xs text-gray-500 leading-relaxed">
          * Our production coordinator will contact your representative to confirm sample availability, courier tracking, and dispatch schedule per institutional requirements.
        </p>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isPending}
        >
          {isPending ? 'Verifying & Submitting Sample Request...' : 'Dispatch Sample Inquiry'}
        </Button>
      </form>
    </div>
  )
}
