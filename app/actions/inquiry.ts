'use server'

import {
  validateQuoteInquiry,
  validateSampleInquiry,
  QuoteInquiryInput,
  SampleInquiryInput,
} from '@/lib/validation/inquiry'

export type InquiryActionStatus =
  | 'idle'
  | 'success'
  | 'validation_error'
  | 'provider_unavailable'
  | 'server_error'

export interface InquiryActionState {
  status: InquiryActionStatus
  message?: string
  fieldErrors?: Record<string, string>
  fallbackWhatsAppUrl?: string
  verifiedContactPhone?: string
  contextSummary?: {
    product?: string
    family?: string
    category?: string
    quantity?: string
    deliveryDate?: string
  }
}

const VERIFIED_WHATSAPP_NUMBER = '919212126463'
const VERIFIED_DISPLAY_PHONE = '+91 9212126463'

/**
 * Server Action: Submit Quote Inquiry.
 * Validates inputs, checks delivery provider, and provides an honest fallback
 * when automated email dispatch is not configured.
 */
export async function submitQuoteInquiry(
  prevState: InquiryActionState | null,
  formData: FormData
): Promise<InquiryActionState> {
  // Anti-spam Honeypot Check: If hidden field is populated, silently reject
  const honeypot = formData.get('_hp_company_url')
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return {
      status: 'validation_error',
      message: 'Your inquiry could not be processed at this time.',
    }
  }

  const rawInput: Partial<QuoteInquiryInput> = {
    name: formData.get('name') as string,
    company: formData.get('company') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    productInterest: formData.get('productInterest') as string,
    familySlug: formData.get('familySlug') as string,
    categorySlug: formData.get('categorySlug') as string,
    estimatedQuantity: formData.get('estimatedQuantity') as string,
    specificationsMessage: formData.get('specificationsMessage') as string,
    targetDeliveryDate: formData.get('targetDeliveryDate') as string,
  }

  const validation = validateQuoteInquiry(rawInput)

  if (!validation.success) {
    return {
      status: 'validation_error',
      message: 'Please resolve the highlighted validation errors.',
      fieldErrors: validation.errors,
    }
  }

  const validData = validation.data

  // Honest B2B Delivery Handling:
  // Automated backend email dispatch requires confirmed recipient inbox and verified domain configuration.
  // Until a real email provider transport is implemented and confirms actual delivery,
  // we strictly return 'provider_unavailable' with verified direct WhatsApp routing.
  // We NEVER report false success.
  const waQuoteLines: string[] = [
    `*B2B Wholesale Quotation Request*`,
    `*Buyer:* ${validData.name}`,
    `*Organization:* ${validData.company}`,
    validData.email ? `*Email:* ${validData.email}` : '',
    `*Phone:* ${validData.phone}`,
    `*Product:* ${validData.productInterest || 'Custom Garment Manufacturing'}`,
    validData.familySlug ? `*Family:* ${validData.familySlug}` : '',
    validData.categorySlug ? `*Category:* ${validData.categorySlug}` : '',
    `*Estimated Volume:* ${validData.estimatedQuantity}`,
    validData.targetDeliveryDate ? `*Target Delivery:* ${validData.targetDeliveryDate}` : '',
    `*Specifications:* ${validData.specificationsMessage}`,
  ]

  const waText = waQuoteLines.filter(Boolean).join('\n')

  const fallbackWhatsAppUrl = `https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`

  return {
    status: 'provider_unavailable',
    message:
      'Automated email dispatch is awaiting backend email provider configuration. To ensure your quotation is processed immediately, please forward your specifications directly to our sales desk via WhatsApp or telephone.',
    fallbackWhatsAppUrl,
    verifiedContactPhone: VERIFIED_DISPLAY_PHONE,
    contextSummary: {
      product: validData.productInterest,
      family: validData.familySlug,
      category: validData.categorySlug,
      quantity: validData.estimatedQuantity,
      deliveryDate: validData.targetDeliveryDate,
    },
  }
}

/**
 * Server Action: Submit Garment Sample Request.
 */
export async function submitSampleInquiry(
  prevState: InquiryActionState | null,
  formData: FormData
): Promise<InquiryActionState> {
  // Anti-spam Honeypot Check: If hidden field is populated, silently reject
  const honeypot = formData.get('_hp_company_url')
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return {
      status: 'validation_error',
      message: 'Your inquiry could not be processed at this time.',
    }
  }

  const rawInput: Partial<SampleInquiryInput> = {
    name: formData.get('name') as string,
    company: formData.get('company') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    deliveryAddress: formData.get('deliveryAddress') as string,
    city: formData.get('city') as string,
    postalCode: formData.get('postalCode') as string,
    productInterest: formData.get('productInterest') as string,
    sampleType: formData.get('sampleType') as 'fabric-swatch' | 'prototype-garment' | 'size-set',
    customRequirements: formData.get('customRequirements') as string,
  }

  const validation = validateSampleInquiry(rawInput)

  if (!validation.success) {
    return {
      status: 'validation_error',
      message: 'Please resolve the highlighted validation errors.',
      fieldErrors: validation.errors,
    }
  }

  const validData = validation.data

  // Honest B2B Delivery Handling:
  // Automated email delivery is awaiting confirmed backend recipient & domain setup.
  // Until real delivery is confirmed by provider transport, return 'provider_unavailable'.
  const sampleTypeLabelMap: Record<string, string> = {
    'fabric-swatch': 'Fabric Swatch',
    'prototype-garment': 'Prototype Garment',
    'size-set': 'Size Specification Set',
  }
  const sampleFormatLabel = sampleTypeLabelMap[validData.sampleType] || validData.sampleType

  const waSampleLines: string[] = [
    `*Garment Sample Dispatch Request*`,
    `*Buyer:* ${validData.name}`,
    `*Organization:* ${validData.company}`,
    validData.email ? `*Email:* ${validData.email}` : '',
    `*Phone:* ${validData.phone}`,
    `*Product:* ${validData.productInterest || 'General Garment Sample'}`,
    `*Sample Format:* ${sampleFormatLabel}`,
    `*Delivery Address:* ${validData.deliveryAddress}`,
    `*City:* ${validData.city}`,
    `*Postal Code:* ${validData.postalCode}`,
    validData.customRequirements ? `*Requirements:* ${validData.customRequirements}` : '',
  ]

  const waText = waSampleLines.filter(Boolean).join('\n')

  const fallbackWhatsAppUrl = `https://wa.me/${VERIFIED_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`

  return {
    status: 'provider_unavailable',
    message:
      'Automated email dispatch is awaiting backend email provider configuration. Please forward your sample request directly to our production coordinator via WhatsApp or telephone.',
    fallbackWhatsAppUrl,
    verifiedContactPhone: VERIFIED_DISPLAY_PHONE,
    contextSummary: {
      product: validData.productInterest,
    },
  }
}
