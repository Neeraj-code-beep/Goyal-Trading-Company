'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { getProductFamily, getFeaturedProductFamilies } from '@/data/products'
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
  const featuredFamilies = getFeaturedProductFamilies()

  const initialFamily = hoveredFamily || (featuredFamilies[0]?.slug || null)
  const activeFamily = getProductFamily(initialFamily as ProductFamilySlug)

  if (!isOpen) return null

  const featuredProducts = activeFamily?.categories
    .flatMap(cat => cat.subcategories.flatMap(sub => sub.products))
    .filter(p => p.featured)
    .slice(0, 2) || []

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg"
        onMouseEnter={onMenuEnter}
        onMouseLeave={onMenuLeave}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex gap-8">
            {/* Product Families Sidebar */}
            <div className="w-56 flex-shrink-0">
              <h3 className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Product Families
              </h3>
              <ul className="space-y-0.5">
                {featuredFamilies.map((family) => (
                  <li key={family.slug}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <Link
                        href={`/products/${family.slug}`}
                        className={`
                          flex items-center justify-between px-3 py-1.5 rounded-md transition-all duration-200
                          ${hoveredFamily === family.slug || pathname === `/products/${family.slug}`
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}
                        onMouseEnter={() => setHoveredFamily(family.slug)}
                        onClick={onClose}
                      >
                        <span className="font-sans text-sm font-medium">{family.shortName}</span>
                        <ChevronRight size={14} className="flex-shrink-0" />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories and Featured Products */}
            <div className="flex-1">
              {activeFamily && (
                <div className="grid grid-cols-3 gap-8">
                  {/* Categories */}
                  <div className="col-span-1">
                    <h3 className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      {activeFamily.name} Categories
                    </h3>
                    <ul className="space-y-1.5">
                      {activeFamily.categories.map((category) => (
                        <li key={category.slug}>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                          >
                            <Link
                              href={`/products/${activeFamily.slug}/${category.slug}`}
                              className="flex items-center gap-2 text-gray-700 hover:text-accent transition-colors group"
                              onClick={onClose}
                            >
                              <span className="font-body text-sm">{category.name}</span>
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured Products with Visuals */}
                  <div className="col-span-2">
                    <h3 className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Featured Products
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {featuredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${activeFamily.slug}/${product.categorySlug}/${product.slug}`}
                          className="group block"
                          onClick={onClose}
                        >
                          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-2">
                            <ProductImageFallback
                              categoryName={activeFamily.slug}
                              aspectRatio="landscape"
                              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p className="font-sans text-sm font-semibold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                            {product.name}
                          </p>
                          <p className="font-body text-xs text-gray-600 line-clamp-1">
                            {product.categorySlug}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/products/${activeFamily.slug}`}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      View All {activeFamily.shortName}
                      <ArrowRight size={16} />
                    </Link>
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
