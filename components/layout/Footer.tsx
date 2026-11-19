'use client'

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import { navigation } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="font-sans text-white font-bold text-lg">G</span>
              </div>
              <span className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3">Goyal Trading</span>
            </div>
            <p className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">
              B2B apparel manufacturing and wholesale textile trading established in 2000. Supplying activewear, sports apparel, school wear, and corporate uniforms from New Delhi.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-3 font-body text-white/80 hover:text-accent transition-colors text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm"
              >
                <Mail size={16} />
                <span>{siteConfig.links.email}</span>
              </a>
              {siteConfig.contact.publicPhoneApproved && (
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-3 font-body text-white/80 hover:text-accent transition-colors text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm"
                >
                  <Phone size={16} />
                  <span>{siteConfig.links.phone}</span>
                </a>
              )}
              <div className="flex items-start gap-3 font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  <span className="block text-xs uppercase tracking-wider text-accent font-semibold mb-0.5">New Delhi Business Address</span>
                  <span>{siteConfig.links.address.full}</span>
                </address>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 mb-4">Products</h3>
            <ul className="space-y-2">
              {navigation.footer.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-white/80 hover:text-brand-orange transition-colors text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 mb-4">Capabilities</h3>
            <ul className="space-y-2">
              {navigation.footer.capabilities.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-white/80 hover:text-brand-orange transition-colors text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.footer.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-white/80 hover:text-brand-orange transition-colors text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-white/60 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
