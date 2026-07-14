'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { staggerContainer, slideUp } from '@/lib/animations/variants'
import { getFeaturedProductFamilies } from '@/data/products'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'

export function ProductCategories() {
  const families = getFeaturedProductFamilies().slice(0, 6)

  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="product-categories-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3" />
      {/* Decorative glow */}
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={slideUp}
            id="product-categories-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Product Categories
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive range of sportswear, corporate wear, school uniforms, and accessories manufactured to your specifications.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {families.map((family, _index) => (
            <motion.div
              key={family.slug}
              variants={slideUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-accent/30"
            >
              {/* Image/Fallback */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {family.heroImage ? (
                  <Image
                    src={family.heroImage}
                    alt={family.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <ProductImageFallback
                    categoryName={family.slug}
                    aspectRatio="landscape"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                  {family.name}
                </h3>
                <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {family.description}
                </p>
                <Link
                  href={`/products/${family.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-sans font-semibold text-body-mobile md:text-body-tablet lg:text-body group-hover:gap-3 transition-all"
                >
                  Explore {family.shortName}
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={16} strokeWidth={2} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            View All Products
            <ArrowRight size={20} strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
