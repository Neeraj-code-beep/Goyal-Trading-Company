import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { getFeaturedProducts } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'
import { ProductFamilySlug } from '@/types/product'

export function FeaturedProducts() {
  const allFeatured = getFeaturedProducts()

  // Select 4 prime showcase products across core apparel categories
  const showcaseSlugs = [
    'track-suit-general',
    'round-neck-cotton-tshirt',
    'dry-fit-polo-black',
    'football-kit-navy',
  ]

  const featuredProducts = showcaseSlugs
    .map((slug) => allFeatured.find((p) => p.slug === slug))
    .filter(Boolean)

  return (
    <section className="py-20 sm:py-24 bg-gray-50/70 relative overflow-hidden" aria-labelledby="featured-products-heading">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-sans text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Garment Specifications</span>
            </div>
            <h2
              id="featured-products-heading"
              className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight"
            >
              Featured Garments &amp; Activewear
            </h2>
            <p className="font-body text-base text-gray-600 mt-2 leading-relaxed">
              Showcase of key garments with technical fabric weights, composition details, and direct enquiry options.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-accent hover:text-primary font-sans text-sm font-semibold transition-colors group"
            >
              <span>Explore All Products</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Standardized ProductCard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product!.id}
              product={product!}
              familySlug={product!.familySlug as ProductFamilySlug}
              categorySlug={product!.categorySlug}
              variant="featured"
            />
          ))}
        </div>

        {/* Section Action Button */}
        <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-gray-200">
          <Button variant="primary" size="lg" asChild>
            <Link href="/products" className="inline-flex items-center gap-2">
              <span>View All Products in Catalogue</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
