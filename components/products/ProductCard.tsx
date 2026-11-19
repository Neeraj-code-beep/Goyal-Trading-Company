'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product, ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import { ArrowRight, FileText } from 'lucide-react'

export interface ProductCardProps {
  product: Product
  familySlug: ProductFamilySlug
  categorySlug: string
  variant?: 'standard' | 'compact' | 'featured'
  priority?: boolean
  className?: string
  onCardClick?: (product: Product) => void
}

export function ProductCard({
  product,
  familySlug,
  categorySlug,
  variant = 'standard',
  priority = false,
  className = '',
  onCardClick,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const productUrl = `/products/${familySlug}/${categorySlug}/${product.slug}`
  const quoteUrl = `/contact/request-quote?product=${encodeURIComponent(product.id)}&family=${encodeURIComponent(familySlug)}&category=${encodeURIComponent(categorySlug)}`
  const sampleUrl = `/contact/request-sample?product=${encodeURIComponent(product.id)}&family=${encodeURIComponent(familySlug)}&category=${encodeURIComponent(categorySlug)}`

  const hasValidImage = Boolean(product.image && product.image.trim() !== '' && !imageError)

  if (variant === 'compact') {
    return (
      <Link
        href={productUrl}
        onClick={() => onCardClick?.(product)}
        className={`group flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-accent hover:shadow-md transition-all ${className}`}
      >
        <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
          {hasValidImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="64px"
              onError={() => setImageError(true)}
            />
          ) : (
            <ProductImageFallback
              categoryName={categorySlug}
              productName={product.name}
              aspectRatio="square"
              className="w-full h-full"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-sans text-sm font-semibold text-primary truncate group-hover:text-accent transition-colors">
            {product.name}
          </h4>
          <p className="font-body text-xs text-gray-500 truncate capitalize">
            {categorySlug.replace(/-/g, ' ')}
          </p>
        </div>
        <ArrowRight size={14} className="text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </Link>
    )
  }

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full ${
        variant === 'featured' ? 'ring-1 ring-accent/30' : ''
      } ${className}`}
    >
      {/* Product Image Media Container */}
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
        <Link
          href={productUrl}
          onClick={() => onCardClick?.(product)}
          className="block w-full h-full"
          tabIndex={-1}
          aria-hidden="true"
        >
          {hasValidImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <ProductImageFallback
              categoryName={categorySlug}
              productName={product.name}
              aspectRatio="portrait"
              className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary font-sans text-xs font-semibold rounded-md shadow-xs capitalize">
            {categorySlug.replace(/-/g, ' ')}
          </span>
          {variant === 'featured' && (
            <span className="px-2.5 py-1 bg-accent text-white font-sans text-xs font-semibold rounded-md shadow-xs">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Product Info & Specifications */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-sans text-base font-bold text-primary mb-1.5 group-hover:text-accent transition-colors leading-snug">
          <Link href={productUrl} onClick={() => onCardClick?.(product)}>
            {product.name}
          </Link>
        </h3>

        <p className="font-body text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3 flex-1">
          {product.description}
        </p>

        {/* Specifications snippet if available */}
        {product.specifications && (product.specifications.fabric || product.specifications.gsm) && (
          <div className="mb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            {product.specifications.fabric && (
              <span className="truncate max-w-[55%]">
                <span className="text-gray-400">Fabric:</span> {product.specifications.fabric}
              </span>
            )}
            {product.specifications.gsm && (
              <span className="text-gray-500 font-medium">
                {product.specifications.gsm} GSM
              </span>
            )}
          </div>
        )}

        {/* Action Bar */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 mt-auto">
          <Link
            href={productUrl}
            onClick={() => onCardClick?.(product)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
          >
            <span>Specs</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-1.5">
            <Link
              href={sampleUrl}
              className="inline-flex items-center px-2 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition-all duration-200"
              title="Request Sample"
            >
              <span>Sample</span>
            </Link>
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-lg text-xs font-semibold transition-all duration-200"
            >
              <FileText size={12} />
              <span>Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
