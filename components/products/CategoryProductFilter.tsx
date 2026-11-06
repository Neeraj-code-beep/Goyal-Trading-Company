'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product, ProductSubcategory } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
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
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Layers size={18} className="text-accent" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
              Filter by Subcategory
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedSubcategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${
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
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${familySlug}/${categorySlug}/${product.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/50 hover:-translate-y-2">
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={85}
                      loading="lazy"
                    />
                  ) : (
                    <ProductImageFallback
                      categoryName={categorySlug}
                      productName={product.name}
                      aspectRatio="portrait"
                      className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  {product.inquiryLabel && (
                    <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-accent font-semibold pt-2">
                      {product.inquiryLabel}
                    </div>
                  )}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent transition-colors">
                    <span>View Specifications</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
          <p className="font-sans text-lg font-semibold text-primary mb-2">
            Custom Manufacturing Available
          </p>
          <p className="font-body text-sm text-gray-500 max-w-md mx-auto mb-6">
            We manufacture bespoke {categoryName} garments according to your institutional design, fabric, and sizing requirements.
          </p>
          <Link
            href={`/contact/request-quote?category=${encodeURIComponent(categorySlug)}&family=${encodeURIComponent(familySlug)}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm text-sm"
          >
            <span>Request Custom Specifications</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  )
}

