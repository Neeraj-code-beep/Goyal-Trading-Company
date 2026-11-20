import { Metadata } from 'next'
import Link from 'next/link'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import { getCatalogueStats } from '@/data/products'
import { constructMetadata } from '@/config/seo'

export const metadata: Metadata = constructMetadata({
  title: 'Product Gallery',
  description:
    'View our product gallery showcasing our range of sportswear, corporate wear, and custom manufacturing capabilities.',
  canonicalPath: '/gallery',
})

export default function GalleryPage() {
  const stats = getCatalogueStats()
  const featuredCategories = [
    { 
      category: 'track-suits-activewear', 
      title: 'Track Suits & Activewear',
      description: 'Performance track suits for sports teams and fitness programs',
      href: '/products/track-suits-activewear'
    },
    { 
      category: 't-shirts', 
      title: 'T-Shirts & Polo',
      description: 'Premium t-shirts and polo shirts for corporate and events',
      href: '/products/t-shirts'
    },
    { 
      category: 'sports-wear-athletic-gear', 
      title: 'Sports Wear',
      description: 'Athletic gear and performance sportswear',
      href: '/products/sports-wear-athletic-gear'
    },
    { 
      category: 'school-wear', 
      title: 'School Uniforms',
      description: 'Durable school wear for educational institutions',
      href: '/products/school-wear'
    },
    { 
      category: 'corporate-wear', 
      title: 'Corporate Apparel',
      description: 'Professional clothing for modern organizations',
      href: '/products/corporate-wear'
    },
    { 
      category: 'jackets-outerwear', 
      title: 'Jackets & Outerwear',
      description: 'Quality jackets and outerwear for various applications',
      href: '/products/jackets-outerwear'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 30%'
            }}
          />
        </div>

        {/* Gradient overlays - lighter for better image visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary-dark/45 to-accent/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/20 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Product Showcase
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Our Product Gallery
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Explore our range of sportswear, corporate wear, and custom manufactured products designed for B2B clients.
              </p>
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View All Products
              </Link>
            </div>

            {/* Right - Visual Composition */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Categories Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">{stats.categoryCount}</div>
                    <div className="font-body text-xs">Categories</div>
                  </div>
                </div>

                {/* Floating Product Families Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">{stats.familyCount}</div>
                    <div className="font-body text-xs">Product Families</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery - Editorial Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Featured Categories
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Premium Manufacturing Across Categories
              </h2>
            </div>
            
            {/* Masonry-inspired grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((item) => (
                <Link 
                  key={item.category}
                  href={item.href}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                    <ProductImageFallback
                      categoryName={item.category}
                      aspectRatio="portrait"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="font-body text-sm">View Category</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-h3 text-primary mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-body text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Categories - Compact */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                More Categories
              </span>
              <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary leading-tight">
                Additional Product Lines
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Shorts', href: '/products' },
                { name: 'Bags', href: '/products' },
                { name: 'Caps', href: '/products' },
                { name: 'Swimming', href: '/products' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-6 bg-white rounded-xl border border-gray-100 text-center hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <span className="font-body text-body text-gray-900 group-hover:text-accent transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Interested in Custom Manufacturing?
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your specific requirements. We offer custom manufacturing solutions for bulk orders across all product categories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
