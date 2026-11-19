import { ArrowRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { getAllCategories, getCatalogueStats } from '@/data/products'
import { CategoryCard } from '@/components/products/CategoryCard'
import { ProductFamilySlug } from '@/types/product'

export function ProductCategories() {
  const allCategories = getAllCategories()
  const stats = getCatalogueStats()

  // Select 6 prime representative categories across core business sectors
  const primeSlugs = [
    { familySlug: 'track-suits-activewear', categorySlug: 'track-suits' },
    { familySlug: 't-shirts', categorySlug: 'round-neck-t-shirts' },
    { familySlug: 'sports-wear-athletic-gear', categorySlug: 'cricket-wear' },
    { familySlug: 'school-wear', categorySlug: 'school-dress' },
    { familySlug: 'corporate-wear', categorySlug: 'corporate-shirts' },
    { familySlug: 'uniforms', categorySlug: 'security-uniforms' },
  ]

  const primeCategories = primeSlugs
    .map(({ familySlug, categorySlug }) =>
      allCategories.find((c) => c.familySlug === familySlug && c.slug === categorySlug)
    )
    .filter(Boolean)

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" aria-labelledby="product-categories-heading">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-sans text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers size={14} />
              <span>Garment Manufacturing Range</span>
            </div>
            <h2
              id="product-categories-heading"
              className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight"
            >
              Core Product Categories
            </h2>
            <p className="font-body text-base text-gray-600 mt-2 leading-relaxed">
              Customized sportswear, corporate apparel, institutional uniforms, and apparel categories for bulk business buyers across India.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-accent hover:text-primary font-sans text-sm font-semibold transition-colors group"
            >
              <span>Explore All {stats.categoryCount} Categories</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Categories Grid using standardized CategoryCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primeCategories.map((category) => (
            <CategoryCard
              key={`${category!.familySlug}-${category!.slug}`}
              category={category!}
              familySlug={category!.familySlug as ProductFamilySlug}
            />
          ))}
        </div>

        {/* View All Catalogue CTA */}
        <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Browse Complete Product Catalogue</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
