export interface Certification {
  id: string
  name: string
  licenseNumber: string
  issuingBody: string
  validFrom: string
  validUntil: string
  status: 'active' | 'pending' | 'expired'
  verificationUrl?: string
  badge: string
}

export const certifications: Certification[] = [
  // Placeholder data - will be populated with actual certifications
]
