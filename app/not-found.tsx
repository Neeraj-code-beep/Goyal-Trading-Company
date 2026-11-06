import { Metadata } from 'next'
import Link from 'next/link'
import { Home, Package, PhoneCall, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Goyal Trading Company',
  description: 'The page you are looking for does not exist or has been moved. Explore our sportswear manufacturing catalog or contact Goyal Trading Company.',
}

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20 px-6">
      <div className="max-w-xl w-full text-center">
        {/* Visual Brand Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-white font-sans text-3xl font-bold mb-6 shadow-md">
          404
        </div>

        <h1 className="font-sans text-display-2-mobile md:text-display-2 text-primary font-bold mb-4 leading-tight">
          Page Not Found
        </h1>

        <p className="font-body text-body-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          The page you requested could not be found. It may have been relocated, renamed, or is temporarily unavailable.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary border border-gray-300 font-sans font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            <Package size={18} />
            <span>Browse Products</span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Helpful Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/capabilities/manufacturing"
              className="p-3 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-xs transition-all text-sm font-medium text-gray-800 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <span>Manufacturing</span>
            </Link>
            <Link
              href="/contact/request-quote"
              className="p-3 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-xs transition-all text-sm font-medium text-gray-800 flex items-center gap-2"
            >
              <PhoneCall size={14} className="text-accent flex-shrink-0" />
              <span>Request Quote</span>
            </Link>
            <Link
              href="/faq"
              className="p-3 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-xs transition-all text-sm font-medium text-gray-800 flex items-center gap-2 col-span-2 sm:col-span-1"
            >
              <HelpCircle size={14} className="text-accent flex-shrink-0" />
              <span>FAQs</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

