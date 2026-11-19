'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight, Sparkles, FileText } from 'lucide-react'
import { getProductFamily, getAllProductFamilies } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  onMenuEnter?: () => void
  onMenuLeave?: () => void
}

export function MegaMenu({ isOpen, onClose, onMenuEnter, onMenuLeave }: MegaMenuProps) {
  const pathname = usePathname()
  const [hoveredFamily, setHoveredFamily] = useState<ProductFamilySlug | null>(null)
  const allFamilies = getAllProductFamilies()

  const initialFamily = hoveredFamily || (allFamilies[0]?.slug || null)
  const activeFamily = getProductFamily(initialFamily as ProductFamilySlug)

  if (!isOpen) return null

  // Get products for the active family, prioritizing featured products, or falling back to first 2 products
  const familyProducts = activeFamily?.categories
    .flatMap(cat => cat.subcategories.flatMap(sub => sub.products)) || []

  const featuredProducts = (
    familyProducts.filter(p => p.featured).length > 0
      ? familyProducts.filter(p => p.featured)
      : familyProducts
  ).slice(0, 2)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex gap-8">
            {/* Product Families Sidebar (13 Families) */}
            <div className="w-64 flex-shrink-0 max-h-[65vh] overflow-y-auto pr-2 border-r border-gray-100">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Product Families ({allFamilies.length})
                </h3>
                <Link
                  href="/products"
                  className="text-xs text-accent hover:underline font-medium"
                  onClick={onClose}
                >
                  All
                </Link>
              </div>
              <ul className="space-y-0.5">
                {allFamilies.map((family) => (
                  <li key={family.slug}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                    >
                      <Link
                        href={`/products/${family.slug}`}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-150 text-xs sm:text-sm font-medium
                          ${hoveredFamily === family.slug || pathname === `/products/${family.slug}`
                            ? 'bg-primary text-white shadow-xs'
                            : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}
                        onMouseEnter={() => setHoveredFamily(family.slug)}
                        onClick={onClose}
                      >
                        <span className="truncate">{family.shortName}</span>
                        <ChevronRight size={14} className="flex-shrink-0 opacity-70" />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories and Featured Products Showcase */}
            <div className="flex-1">
              {activeFamily && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  {/* Categories Column */}
                  <div className="col-span-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {activeFamily.shortName} Categories ({activeFamily.categories.length})
                      </h3>
                      <Link
                        href={`/products/${activeFamily.slug}`}
                        className="text-xs text-accent hover:underline font-medium"
                        onClick={onClose}
                      >
                        View Family
                      </Link>
                    </div>

                    <ul className="space-y-1 max-h-[55vh] overflow-y-auto pr-2">
                      {activeFamily.categories.map((category) => (
                        <li key={category.slug}>
                          <Link
                            href={`/products/${activeFamily.slug}/${category.slug}`}
                            className="flex items-center justify-between p-2 rounded-lg text-gray-700 hover:text-accent hover:bg-accent/5 transition-colors group text-sm"
                            onClick={onClose}
                          >
                            <span className="font-body font-medium">{category.name}</span>
                            <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-accent flex-shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured Products or OEM Custom Ordering Card */}
                  <div className="col-span-7">
                    <h3 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      {featuredProducts.length > 0 ? 'Featured Products' : 'Custom OEM Ordering'}
                    </h3>

                    {featuredProducts.length > 0 ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {featuredProducts.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${activeFamily.slug}/${product.categorySlug}/${product.slug}`}
                              className="group block bg-gray-50 hover:bg-white rounded-xl p-3 border border-gray-200 hover:border-accent hover:shadow-md transition-all"
                              onClick={onClose}
                            >
                              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white mb-2 relative">
                                <ProductImageFallback
                                  categoryName={activeFamily.slug}
                                  productName={product.name}
                                  aspectRatio="landscape"
                                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <p className="font-sans text-sm font-bold text-primary mb-0.5 group-hover:text-accent transition-colors truncate">
                                {product.name}
                              </p>
                              <p className="font-body text-xs text-gray-500 line-clamp-1">
                                {product.categorySlug.replace(/-/g, ' ')}
                              </p>
                            </Link>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <Link
                            href={`/products/${activeFamily.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors"
                            onClick={onClose}
                          >
                            <span>Explore all {activeFamily.shortName} categories</span>
                            <ArrowRight size={13} />
                          </Link>
                          <Link
                            href={`/contact/request-quote?family=${activeFamily.slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary-dark transition-colors"
                            onClick={onClose}
                          >
                            <FileText size={12} />
                            <span>Family Quote</span>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                          <Sparkles size={20} />
                        </div>
                        <h4 className="font-sans text-sm font-bold text-primary mb-1">
                          Custom {activeFamily.name}
                        </h4>
                        <p className="font-body text-xs text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">
                          We manufacture customized {activeFamily.shortName.toLowerCase()} garments per institutional specifications, including custom sizing, colors, and printing.
                        </p>
                        <Link
                          href={`/contact/request-quote?family=${activeFamily.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-sans text-xs font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-xs"
                          onClick={onClose}
                        >
                          <span>Request Custom {activeFamily.shortName} Quote</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
