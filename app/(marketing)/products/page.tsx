import { Metadata } from 'next'
import { getFeaturedProductFamilies, getAllCategories } from '@/data/products'
import Link from 'next/link'
import { ProductFamilyGrid } from './ProductFamilyGrid'

export const metadata: Metadata = {
  title: 'Products - Goyal Trading Company',
  description: 'Explore our comprehensive range of sportswear, corporate wear, school uniforms, and accessories manufactured to your specifications.',
}

export default function ProductsPage() {
  const families = getFeaturedProductFamilies()
  const allCategories = getAllCategories()

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 35%'
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
                Product Catalog
              </span>
              <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
                Our Products
              </h1>
              <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Comprehensive range of sportswear, corporate wear, school uniforms, and accessories manufactured to your specifications for B2B clients.
              </p>
              <Link
                href="/contact/request-quote"
                className="inline-block px-6 py-3 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Request a Quote
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
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80)' }}
                    />
                  </div>
                </div>

                {/* Floating Categories Badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">50+</div>
                    <div className="font-body text-xs">Categories</div>
                  </div>
                </div>

                {/* Floating Products Badge */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm text-white rounded-xl p-4 border border-white/30">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold">500+</div>
                    <div className="font-body text-xs">Products</div>
                  </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Families - Editorial Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Product Families
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                Browse by Product Category
              </h2>
              <p className="font-body text-body-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
                Explore our comprehensive product catalog organized by category. Each category offers custom manufacturing options for bulk orders.
              </p>
            </div>
            
            <ProductFamilyGrid families={families} />
          </div>
        </div>
      </section>

      {/* All Categories - Compact Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Quick Access
              </span>
              <h2 className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-primary leading-tight">
                Browse All Categories
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.familySlug}/${category.slug}`}
                  className="bg-white p-5 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="font-sans text-body-mobile md:text-body-tablet lg:text-body text-primary font-medium mb-1 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="font-body text-xs text-gray-500 capitalize">
                        {category.familySlug.replace(/-/g, ' ')}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Custom Manufacturing Solutions
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            We offer custom manufacturing for bulk orders across all product categories. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link 
              href="/contact/request-sample"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Request Sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
