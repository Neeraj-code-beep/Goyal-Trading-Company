'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProductCategory, ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import { ArrowRight, Layers, Sparkles } from 'lucide-react'

export interface CategoryCardProps {
  category: ProductCategory
  familySlug: ProductFamilySlug
  productCount?: number
  variant?: 'card' | 'pill'
  className?: string
}

export function CategoryCard({
  category,
  familySlug,
  productCount,
  variant = 'card',
  className = '',
}: CategoryCardProps) {
  const [imageError, setImageError] = useState(false)
  const categoryUrl = `/products/${familySlug}/${category.slug}`
  const rawImage = category.heroImage || category.image
  const hasValidImage = Boolean(rawImage && rawImage.trim() !== '' && !imageError)

  // Derived or explicit product count
  const effectiveCount = typeof productCount === 'number'
    ? productCount
    : category.subcategories?.flatMap(s => s.products).length ?? 0

  if (variant === 'pill') {
    return (
      <Link
        href={categoryUrl}
        className={`group inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-gray-200 hover:border-accent hover:shadow-sm rounded-xl text-sm transition-all ${className}`}
      >
        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
        <span className="font-sans font-medium text-primary group-hover:text-accent transition-colors">
          {category.name}
        </span>
        {effectiveCount > 0 ? (
          <span className="font-body text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
            {effectiveCount}
          </span>
        ) : (
          <span className="font-body text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
            OEM
          </span>
        )}
      </Link>
    )
  }

  return (
    <Link
      href={categoryUrl}
      className={`group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full ${className}`}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
        {hasValidImage ? (
          <Image
            src={rawImage!}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <ProductImageFallback
            categoryName={category.slug}
            aspectRatio="landscape"
            className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Capability / Product Count Badge */}
        <div className="absolute top-3 right-3 z-10">
          {effectiveCount > 0 ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-primary font-sans text-xs font-semibold rounded-md shadow-xs">
              <Layers size={11} className="text-accent" />
              <span>{effectiveCount} {effectiveCount === 1 ? 'Product' : 'Products'}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-white font-sans text-xs font-semibold rounded-md shadow-xs">
              <Sparkles size={11} className="text-accent" />
              <span>Custom OEM Orders</span>
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-sans text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
          {category.name}
        </h3>

        <p className="font-body text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
          {category.description}
        </p>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
          <span>Explore Category</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
