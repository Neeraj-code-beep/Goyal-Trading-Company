'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { staggerContainer, slideUp } from '@/lib/animations/variants'
import { getFeaturedProducts } from '@/data/products'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts().slice(0, 4)

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" aria-labelledby="featured-products-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #ED8936 1px, transparent 0)',
        backgroundSize: '48px 48px'
      }} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      {/* Decorative glow */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            id="featured-products-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Our most popular products trusted by global retailers for quality and consistency.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={slideUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-accent/30 group"
            >
              {/* Product Image */}
              <div className="aspect-[4/5] bg-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <ProductImageFallback
                    categoryName={product.categorySlug}
                    productName={product.name}
                    aspectRatio="portrait"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-white font-semibold text-sm">View Details</span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="font-sans text-caption-mobile md:text-caption-tablet lg:text-caption font-semibold text-accent uppercase tracking-wider">
                  {product.categorySlug}
                </div>
                <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary leading-tight group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                {product.inquiryLabel && (
                  <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-accent font-semibold pt-2">
                    {product.inquiryLabel}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
