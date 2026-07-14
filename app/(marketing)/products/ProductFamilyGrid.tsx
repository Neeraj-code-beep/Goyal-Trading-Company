'use client'

import { motion } from 'framer-motion'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'
import Link from 'next/link'
import { type ProductFamily } from '@/types/product'

interface ProductFamilyGridProps {
  families: ProductFamily[]
}

export function ProductFamilyGrid({ families }: ProductFamilyGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {families.map((family) => (
        <motion.div
          key={family.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            href={`/products/${family.slug}`}
            className="group block"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-accent/50 hover:-translate-y-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                {family.heroImage ? (
                  <Image
                    src={family.heroImage}
                    alt={family.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                ) : (
                  <ProductImageFallback
                    categoryName={family.slug}
                    aspectRatio="landscape"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-body text-sm">Explore Category</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                  {family.name}
                </h3>
                <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 line-clamp-2 leading-relaxed">
                  {family.description}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
