'use client'

import { siteConfig } from '@/config/site'
import { MapPin, ExternalLink } from 'lucide-react'

export function GoogleMap() {
  const address = siteConfig.links.address.full
  const encodedAddress = encodeURIComponent(address)
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  
  // Using Google Maps embed without API key for basic display
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="space-y-6">
      {/* Address Display */}
      <div>
        <h3 className="font-sans text-h3 text-primary mb-4">Visit Goyal Trading Company</h3>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <address className="not-font-sans not-italic space-y-1">
            <p className="font-body text-body text-gray-900">{siteConfig.links.address.line1}</p>
            <p className="font-body text-body text-gray-900">{siteConfig.links.address.landmark}</p>
            <p className="font-body text-body text-gray-900">{siteConfig.links.address.locality}</p>
            <p className="font-body text-body text-gray-900">{siteConfig.links.address.city} - {siteConfig.links.address.postalCode}</p>
            <p className="font-body text-body text-gray-900">{siteConfig.links.address.country}</p>
          </address>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <MapPin size={16} />
            Get Directions
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          src={mapUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Goyal Trading Company Location"
        />
      </div>
    </div>
  )
}
