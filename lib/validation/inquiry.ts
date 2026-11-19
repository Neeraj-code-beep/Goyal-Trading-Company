/**
 * Server-side validation and sanitization for Goyal Trading Company B2B inquiries.
 * Checked for Zod dependency: Zod is not installed in the workspace.
 * In accordance with strict project restrictions ("Do not install dependencies"),
 * this module implements a zero-dependency, type-safe schema validator with
 * Zod-compatible result structures ({ success: true, data } | { success: false, errors }).
 */

import { getAllProductFamilies, getAllCategories, getAllProducts } from '@/data/products'

export interface QuoteInquiryInput {
  name: string
  company: string
  email: string
  phone: string
  productInterest?: string
  familySlug?: string
  categorySlug?: string
  estimatedQuantity: string
  specificationsMessage: string
  targetDeliveryDate?: string
}

export interface SampleInquiryInput {
  name: string
  company: string
  email: string
  phone: string
  deliveryAddress: string
  city: string
  postalCode: string
  productInterest?: string
  sampleType: 'fabric-swatch' | 'prototype-garment' | 'size-set'
  customRequirements?: string
}

export type ValidationResult<T> =
  | { success: true; data: T; errors?: never }
  | { success: false; errors: Record<string, string>; data?: never }

// Standard HTML tag names to sanitize without stripping plain text angle brackets
const HTML_TAG_NAMES =
  'a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h[1-6]|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|slot|small|source|span|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr'

/**
 * Sanitizes input string to prevent executable markup / HTML injection
 * while strictly preserving legitimate procurement specifications that use
 * angle brackets (e.g. "Tolerance <1cm", "Order size <500 sets", "Color <Navy Blue>").
 */
export function sanitizeString(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value
    // 1. Remove script, style, and iframe blocks with their contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    // 2. Remove any HTML tag-like construct containing inline event handlers (onerror=, onload=, etc.)
    .replace(/<[^>]*\bon\w+\s*=[^>]*>/gi, '')
    // 3. Remove javascript: and vbscript: pseudo-protocols
    .replace(/javascript\s*:/gi, '')
    .replace(/vbscript\s*:/gi, '')
    // 4. Remove recognized HTML tags (opening, closing, self-closing) while preserving non-tag angle brackets
    .replace(new RegExp(`</?(?:${HTML_TAG_NAMES})\\b[^>]*>`, 'gi'), '')
    // 5. Remove null bytes
    .replace(/\0/g, '')
    .trim()
}

/**
 * Validates standard email address format.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return emailRegex.test(email)
}

/**
 * Validates telephone number syntax and structural formatting for B2B inquiries.
 *
 * NOTE: Performs structural/syntactic validation only; does NOT verify whether
 * a telephone line is currently active, assigned by a carrier, reachable, or in service.
 *
 * Supported formats:
 * - Indian mobile: 10 digits starting with 6, 7, 8, or 9 (e.g. 9876543210)
 * - Indian mobile with country prefix: +91 or 91 followed by 10 digits (e.g. +91 9212126463, 919212126463)
 * - Indian landlines with STD code: 10–11 digits with verified STD area codes (e.g. 011-XXXXXXXX for Delhi, 022-XXXXXXXX for Mumbai)
 * - International numbers: MUST include an explicit '+' country code prefix followed by
 *   valid international digits (total 10–15 digits, e.g. +1 415 555 2671, +44 20 7946 0958)
 *
 * Rejected:
 * - International numbers without an explicit '+' prefix
 * - Arbitrary characters, letters, HTML, or symbols other than telephone formatting (+, space, -, ., ())
 * - Numbers with all identical repeated digits (e.g. 0000000000, 1111111111)
 * - Obvious sequential dummy sequences (e.g. 1234567890, 0123456789)
 * - Arbitrary 10-digit numbers not matching mobile (6-9) or valid STD landline structures
 */

/**
 * Validates supported 10-digit national Indian landline numbers (STD code + subscriber number, without trunk '0').
 *
 * Supported STD structures:
 * - 2-digit Metro STD codes: 11 (Delhi), 20 (Pune), 22 (Mumbai), 33 (Kolkata), 40 (Hyderabad),
 *   44 (Chennai), 79 (Ahmedabad), 80 (Bengaluru) + 8-digit subscriber number starting with 2-6.
 * - 3-digit STD codes: Tier-2 cities & garment/textile/industrial hubs (e.g. 120 Noida, 124 Gurugram,
 *   141 Jaipur, 161 Ludhiana, 261 Surat, 421 Tirupur, 522 Lucknow, 731 Indore) + 7-digit
 *   subscriber number starting with 2-6.
 */
export function isSupportedIndianLandline10(digits: string): boolean {
  if (digits.length !== 10) return false
  // 1. 2-digit Metro STD codes (8-digit subscriber starting with 2-6)
  if (/^(11|20|22|33|40|44|79|80)[2-6]\d{7}$/.test(digits)) return true
  // 2. Supported 3-digit STD codes (7-digit subscriber starting with 2-6)
  if (
    /^(120|121|124|129|135|141|161|172|181|183|217|231|240|250|251|253|260|261|265|278|281|343|353|413|421|422|424|427|431|452|471|484|487|512|522|532|542|562|581|591|612|651|657|674|712|731|744|751|755|761|771|821|824|836|863|866|870|891)[2-6]\d{6}$/.test(
      digits
    )
  ) {
    return true
  }
  return false
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  const trimmed = phone.trim()

  // 1. Structural check: only optional leading +, digits, spaces, hyphens, dots, parentheses allowed
  if (!/^\+?[\d\s\-.()]{10,24}$/.test(trimmed)) {
    return false
  }

  const digits = trimmed.replace(/\D/g, '')

  // 2. Length constraints: E.164 allows 10 to 15 digits
  if (digits.length < 10 || digits.length > 15) {
    return false
  }

  // 3. Reject all identical repeated digits (0000000000, 1111111111, etc.)
  if (/^(\d)\1+$/.test(digits)) {
    return false
  }

  // 4. Reject trivial sequential sequences
  if (digits === '1234567890' || digits === '0123456789' || digits.includes('1234567890')) {
    return false
  }

  const hasExplicitPlus = trimmed.startsWith('+')

  // 5. If 10 digits:
  if (digits.length === 10) {
    // Valid Indian mobile (begins with 6, 7, 8, 9)
    if (/^[6-9]\d{9}$/.test(digits)) {
      return true
    }
    // Supported Indian landline (STD code + subscriber number starting with 2-6)
    if (isSupportedIndianLandline10(digits)) {
      return true
    }
    // If 10 digits and not Indian format, requires explicit '+' for international
    return hasExplicitPlus && /^[1-9]\d{9}$/.test(digits)
  }

  // 6. If 11 digits:
  // Indian STD landline format starting with trunk 0 (e.g. 011-XXXXXXXX for Delhi, 022-XXXXXXXX for Mumbai, 0120-XXXXXXX for Noida)
  if (digits.length === 11 && digits.startsWith('0')) {
    const national = digits.slice(1)
    return isSupportedIndianLandline10(national)
  }

  // 7. If 12 digits starting with Indian country code 91:
  if (digits.length === 12 && digits.startsWith('91')) {
    const national = digits.slice(2)
    if (national === '1234567890' || national === '0123456789') {
      return false
    }
    // National part must be valid Indian mobile OR supported Indian landline format
    if (/^[6-9]\d{9}$/.test(national)) {
      return true
    }
    return isSupportedIndianLandline10(national)
  }

  // 8. International format: MUST have an explicit '+' country code prefix
  if (hasExplicitPlus) {
    return /^[1-9]\d{9,14}$/.test(digits)
  }

  // Reject foreign numbers lacking an explicit '+' prefix
  return false
}

/**
 * Validates optional target delivery date.
 * If provided, must strictly adhere to ISO format YYYY-MM-DD,
 * represent a real calendar date (valid day for the specific month/leap year),
 * and be today or a future date (rejecting past dates).
 */
/**
 * Returns the current calendar date in India (IST, Asia/Kolkata timezone)
 * formatted as a strict YYYY-MM-DD ISO string.
 *
 * @param referenceDate Optional Date instance for deterministic boundary testing.
 */
export function getTodayInIndia(referenceDate: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return formatter.format(referenceDate)
}

/**
 * Validates optional target delivery date.
 * If provided, must strictly adhere to ISO format YYYY-MM-DD,
 * represent a real calendar date (valid day for the specific month/leap year),
 * and be today or a future date evaluated against India-local time (Asia/Kolkata).
 *
 * @param dateStr Target delivery date string in YYYY-MM-DD format
 * @param referenceDate Optional reference Date object for deterministic testing of timezone boundaries
 */
export function isValidDeliveryDate(dateStr: string, referenceDate?: Date): boolean {
  if (!dateStr || typeof dateStr !== 'string') return false
  const trimmed = dateStr.trim()

  // Accept ONLY strict YYYY-MM-DD format (no fallback)
  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!isoMatch) return false

  const year = parseInt(isoMatch[1], 10)
  const month = parseInt(isoMatch[2], 10)
  const day = parseInt(isoMatch[3], 10)

  // Calendar boundary checks
  if (month < 1 || month > 12 || day < 1 || day > 31) return false

  // Validate actual calendar days (including February 28/29 leap year verification, 30-day months)
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  const daysInMonths = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (day > daysInMonths[month - 1]) {
    return false
  }

  // Reject past dates according to India-local time (Asia/Kolkata); allow today or future
  const todayInIndia = getTodayInIndia(referenceDate)
  // Both trimmed and todayInIndia are strict 'YYYY-MM-DD', which compare lexicographically
  return trimmed >= todayInIndia
}

/**
 * Validates 6-digit Indian Postal Index Number (PIN Code).
 * Must be exactly 6 digits and cannot begin with 0.
 */
export function isValidIndianPinCode(code: unknown): boolean {
  if (typeof code !== 'string') return false
  const trimmed = code.trim()
  return /^[1-9]\d{5}$/.test(trimmed)
}

/**
 * Validates postal codes for delivery address verification.
 *
 * 1. Indian Postal Codes (PIN codes):
 *    - Exactly 6 digits.
 *    - Must not begin with zero (ranges 110001 to 855117).
 *    - Explicitly rejects 6-digit numbers starting with 0.
 *
 * 2. International Postal Codes:
 *    - US ZIP codes: 5 digits (e.g. 90210), or ZIP+4 (e.g. 10001-1234).
 *    - UK Postcodes: 5 to 8 alphanumeric characters (e.g. SW1A 1AA, M1 1AE, EC1A 1BB).
 *    - Canadian Postal Codes: A1A 1A1 format (e.g. M5V 2T6, K1A 0B1).
 *    - European / standard 4-digit codes (e.g. 2000, 8001).
 *    - Hyphenated 3+4 codes (e.g. Japan 100-0001).
 *    - Country-code prefixed formats (e.g. D-10115).
 *    - Rejects bare numbers of invalid length (<4 or >=7), random strings, symbols, or HTML injection.
 */
export function isValidPostalCode(code: unknown): boolean {
  if (typeof code !== 'string') return false
  const trimmed = code.trim()
  if (!trimmed) return false

  // 1. Indian PIN Code: exactly 6 digits, first digit 1-9
  if (/^[1-9]\d{5}$/.test(trimmed)) return true

  // Explicitly reject 6-digit code starting with 0
  if (/^0\d{5}$/.test(trimmed)) return false

  // 2. Reject bare numeric codes that are too short (<4 digits) or too long (>=7 digits)
  if (/^\d{1,3}$/.test(trimmed) || /^\d{7,}$/.test(trimmed)) return false

  // 3. US ZIP (5 digits) or ZIP+4 (5+4 format)
  if (/^\d{5}(-\d{4})?$/.test(trimmed)) return true

  // 4. 4-digit postal codes (e.g. Australia, Switzerland, Austria, New Zealand)
  if (/^\d{4}$/.test(trimmed)) return true

  // 5. UK Postcode (e.g. SW1A 1AA, M1 1AE, EC1A 1BB, W1A 0AX)
  if (/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(trimmed)) return true

  // 6. Canadian Postal Code (e.g. M5V 2T6, K1A 0B1)
  if (/^[A-Z]\d[A-Z]\s*\d[A-Z]\d$/i.test(trimmed)) return true

  // 7. Hyphenated 3+4 or 3+3 (e.g. Japan 100-0001)
  if (/^\d{3}-\d{3,4}$/.test(trimmed)) return true

  // 8. European country-code prefix (e.g. D-10115, CH-8001)
  if (/^[A-Z]{1,3}-\d{4,5}$/i.test(trimmed)) return true

  return false
}

/**
 * Validates Quote Inquiry Form Data.
 */
export function validateQuoteInquiry(input: Partial<QuoteInquiryInput>): ValidationResult<QuoteInquiryInput> {
  const errors: Record<string, string> = {}

  const name = sanitizeString(input.name)
  if (!name || name.length < 2) {
    errors.name = 'Contact name must be at least 2 characters.'
  } else if (name.length > 100) {
    errors.name = 'Contact name cannot exceed 100 characters.'
  }

  const company = sanitizeString(input.company)
  if (!company || company.length < 2) {
    errors.company = 'Company or institutional name is required for wholesale quotes.'
  } else if (company.length > 120) {
    errors.company = 'Company name cannot exceed 120 characters.'
  }

  const rawEmail = sanitizeString(input.email).toLowerCase()
  if (!rawEmail || !isValidEmail(rawEmail)) {
    errors.email = 'Please provide a valid business email address.'
  }

  const phone = sanitizeString(input.phone)
  if (!phone || !isValidPhone(phone)) {
    errors.phone = 'Please provide a valid contact telephone number.'
  }

  const estimatedQuantity = sanitizeString(input.estimatedQuantity)
  if (!estimatedQuantity) {
    errors.estimatedQuantity = 'Please select or specify your estimated order volume.'
  }

  const specificationsMessage = sanitizeString(input.specificationsMessage)
  if (!specificationsMessage || specificationsMessage.length < 10) {
    errors.specificationsMessage = 'Please describe your garment specifications (at least 10 characters).'
  } else if (specificationsMessage.length > 2000) {
    errors.specificationsMessage = 'Specifications message cannot exceed 2000 characters.'
  }

  // Target delivery date validation (Issue 3: strict YYYY-MM-DD, today or future date)
  let targetDeliveryDate: string | undefined = undefined
  const rawTargetDate = sanitizeString(input.targetDeliveryDate)
  if (rawTargetDate) {
    if (!isValidDeliveryDate(rawTargetDate)) {
      errors.targetDeliveryDate = 'Target delivery date must be today or a future date in YYYY-MM-DD format.'
    } else {
      targetDeliveryDate = rawTargetDate
    }
  }

  // Hierarchical catalogue verification (Issues 1 & 2)
  const allFamilies = getAllProductFamilies()
  const allCategories = getAllCategories()
  const allProducts = getAllProducts()

  let validProductInterest: string | undefined = undefined
  let validFamilySlug: string | undefined = undefined
  let validCategorySlug: string | undefined = undefined

  const rawProductInterest = sanitizeString(input.productInterest)
  const rawFamilySlug = sanitizeString(input.familySlug)
  const rawCategorySlug = sanitizeString(input.categorySlug)

  // 1. If productInterest is provided, resolve strictly against actual products
  if (rawProductInterest) {
    const matched = allProducts.find(
      p =>
        p.slug === rawProductInterest ||
        p.name.toLowerCase() === rawProductInterest.toLowerCase() ||
        p.id === rawProductInterest
    )
    if (matched) {
      validProductInterest = matched.name
      validFamilySlug = matched.familySlug
      validCategorySlug = matched.categorySlug
    } else {
      // Issue 2: Unmatched productInterest must NOT be retained
      validProductInterest = undefined
    }
  }

  // 2. If family was provided and not set by product:
  if (!validFamilySlug && rawFamilySlug) {
    const matchedFamily = allFamilies.find(f => f.slug === rawFamilySlug)
    if (matchedFamily) {
      validFamilySlug = matchedFamily.slug
    }
  }

  // 3. Issue 1: Validate category strictly within family hierarchy
  if (rawCategorySlug) {
    if (validFamilySlug) {
      // Category MUST belong to the validated family
      const matchedCategory = allCategories.find(
        c => c.slug === rawCategorySlug && c.familySlug === validFamilySlug
      )
      if (matchedCategory) {
        validCategorySlug = matchedCategory.slug
      } else {
        // Mismatched category for this family: discard category
        validCategorySlug = undefined
      }
    } else {
      // No family specified: find category and infer family from category
      const matchedCategory = allCategories.find(c => c.slug === rawCategorySlug)
      if (matchedCategory) {
        validCategorySlug = matchedCategory.slug
        validFamilySlug = matchedCategory.familySlug
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  return {
    success: true,
    data: {
      name,
      company,
      email: rawEmail,
      phone,
      productInterest: validProductInterest,
      familySlug: validFamilySlug,
      categorySlug: validCategorySlug,
      estimatedQuantity,
      specificationsMessage,
      targetDeliveryDate,
    },
  }
}

/**
 * Validates Sample Request Form Data.
 */
export function validateSampleInquiry(input: Partial<SampleInquiryInput>): ValidationResult<SampleInquiryInput> {
  const errors: Record<string, string> = {}

  const name = sanitizeString(input.name)
  if (!name || name.length < 2) {
    errors.name = 'Contact name must be at least 2 characters.'
  }

  const company = sanitizeString(input.company)
  if (!company || company.length < 2) {
    errors.company = 'Company or institutional name is required for sample dispatch.'
  }

  const rawEmail = sanitizeString(input.email).toLowerCase()
  if (!rawEmail || !isValidEmail(rawEmail)) {
    errors.email = 'Please provide a valid business email address.'
  }

  const phone = sanitizeString(input.phone)
  if (!phone || !isValidPhone(phone)) {
    errors.phone = 'Please provide a valid contact telephone number.'
  }

  const deliveryAddress = sanitizeString(input.deliveryAddress)
  if (!deliveryAddress || deliveryAddress.length < 10) {
    errors.deliveryAddress = 'Complete street delivery address is required for courier dispatch.'
  }

  const city = sanitizeString(input.city)
  if (!city || city.length < 2) {
    errors.city = 'City name is required.'
  }

  const postalCode = sanitizeString(input.postalCode)
  if (!postalCode || !isValidPostalCode(postalCode)) {
    errors.postalCode = 'Please enter a valid 6-digit PIN code or postal code.'
  }

  const sampleType = input.sampleType
  if (!sampleType || !['fabric-swatch', 'prototype-garment', 'size-set'].includes(sampleType)) {
    errors.sampleType = 'Please select a valid sample format (fabric swatch, prototype, or size-set).'
  }

  // Product interest resolution (Issue 2)
  let validProductInterest: string | undefined = undefined
  const rawProductInterest = sanitizeString(input.productInterest)
  if (rawProductInterest) {
    const matched = getAllProducts().find(
      p =>
        p.slug === rawProductInterest ||
        p.name.toLowerCase() === rawProductInterest.toLowerCase() ||
        p.id === rawProductInterest
    )
    if (matched) {
      validProductInterest = matched.name
    } else {
      // Issue 2: Unmatched productInterest must NOT be retained
      validProductInterest = undefined
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  return {
    success: true,
    data: {
      name,
      company,
      email: rawEmail,
      phone,
      deliveryAddress,
      city,
      postalCode,
      productInterest: validProductInterest,
      sampleType: sampleType as 'fabric-swatch' | 'prototype-garment' | 'size-set',
      customRequirements: sanitizeString(input.customRequirements),
    },
  }
}
