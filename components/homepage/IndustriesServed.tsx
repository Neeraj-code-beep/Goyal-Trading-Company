'use client'

import { motion } from 'framer-motion'
import { Building2, ShoppingBag, Briefcase, Shirt } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations/variants'

const industries = [
  {
    icon: Building2,
    name: 'Corporate Uniforms',
    description: 'Professional attire for corporate and institutional clients.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail Fashion',
    description: 'Trendy clothing for fashion retailers and boutiques.',
  },
  {
    icon: Briefcase,
    name: 'Workwear',
    description: 'Durable and functional workwear for various industries.',
  },
  {
    icon: Shirt,
    name: 'Ethnic Fashion',
    description: 'Traditional and contemporary ethnic wear manufacturers.',
  },
]

export function IndustriesServed() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="industries-served-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
      {/* Decorative glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
            id="industries-served-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Diverse industry expertise enabling us to deliver specialized textile solutions.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={slideUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-accent/30 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
              >
                <industry.icon size={32} strokeWidth={2} className="text-accent" />
              </motion.div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                {industry.name}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Reach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mt-16 bg-primary p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">25+</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Countries Served</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">5 Continents</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Global Presence</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">100+</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
