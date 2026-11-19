'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product, ProductSubcategory, ProductFamilySlug } from '@/types/product'
import { ProductCard } from '@/components/products/ProductCard'
import { ArrowRight, Layers } from 'lucide-react'

interface CategoryProductFilterProps {
  subcategories: ProductSubcategory[]
  allProducts: Product[]
  familySlug: string
  categorySlug: string
  categoryName: string
}

export function CategoryProductFilter({
  subcategories,
  allProducts,
  familySlug,
  categorySlug,
  categoryName,
}: CategoryProductFilterProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')

  const filteredProducts = selectedSubcategory === 'all'
    ? allProducts
    : subcategories.find(s => s.slug === selectedSubcategory)?.products || []

  return (
    <div>
      {/* Subcategory In-Page Filter Tabs */}
      {subcategories.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={16} className="text-accent" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
              Filter by Subcategory
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedSubcategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all ${
                selectedSubcategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items ({allProducts.length})
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub.slug}
                type="button"
                onClick={() => setSelectedSubcategory(sub.slug)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all ${
                  selectedSubcategory === sub.slug
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sub.name} ({sub.products.length})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filtered Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              familySlug={familySlug as ProductFamilySlug}
              categorySlug={categorySlug}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <Layers size={24} />
          </div>
          <h3 className="font-sans text-lg font-bold text-primary mb-2">
            Custom Manufacturing Available
          </h3>
          <p className="font-body text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
            We manufacture bespoke {categoryName} garments according to your institutional design, fabric, GSM, and sizing requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/contact/request-quote?category=${encodeURIComponent(categorySlug)}&family=${encodeURIComponent(familySlug)}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-sans text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-sm"
            >
              <span>Request Custom Specifications</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href={`/contact/request-sample?category=${encodeURIComponent(categorySlug)}&family=${encodeURIComponent(familySlug)}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-primary hover:bg-gray-50 font-sans text-sm font-semibold rounded-lg transition-colors"
            >
              <span>Request Sample</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
