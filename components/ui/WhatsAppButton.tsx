'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface WhatsAppButtonProps {
  hidden?: boolean
}

export function WhatsAppButton({ hidden = false }: WhatsAppButtonProps) {
  // Public display and WhatsApp messaging are conditioned on explicit business owner approval
  if (hidden || !siteConfig.contact.publicWhatsAppApproved || !siteConfig.contact.publicPhoneApproved) {
    return null
  }

  const whatsappNumber = siteConfig.links.whatsapp
  const message = encodeURIComponent('Hi, I am interested in your products. Please share more details.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  )
}
