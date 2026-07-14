'use client'

import { motion } from 'framer-motion'
import { staggerContainer, slideUp } from '@/lib/animations/variants'

const infrastructureData = [
  {
    metric: '02',
    label: 'PRODUCTION UNITS',
    description: 'Dedicated manufacturing facilities for specialized production',
  },
  {
    metric: '2,000 SQ FT',
    label: 'PREMISES',
    description: 'Permanent urban infrastructure in Delhi',
  },
  {
    metric: '26–50',
    label: 'TEAM SIZE',
    description: 'Skilled professionals across design, production, and quality',
  },
  {
    metric: 'MODERN',
    label: 'SETUP',
    description: 'Circular knitting, dyeing, and finishing machinery',
  },
]

export function Infrastructure() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" aria-labelledby="infrastructure-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={slideUp} className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                Established Operations
              </span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              id="infrastructure-heading"
              className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-6 leading-tight"
            >
              Our Infrastructure
            </motion.h2>
            <motion.p
              variants={slideUp}
              className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-white/80 max-w-xl leading-relaxed mb-8"
            >
              Established manufacturing infrastructure in Delhi with dedicated production units, modern equipment, and skilled professionals enabling quality production for global B2B clients.
            </motion.p>
            <motion.div
              variants={slideUp}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <span>Delhi · Established Setup</span>
            </motion.div>
          </motion.div>

          {/* Right - Technical Data Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <motion.div variants={slideUp} className="mb-6">
              <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider">
                VERIFIED OPERATIONAL DATA
              </span>
            </motion.div>
            <div className="grid grid-cols-2 gap-0">
              {infrastructureData.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={slideUp}
                  className={`p-6 border-b border-r border-white/10 ${
                    index === 0 || index === 1 ? 'border-t' : ''
                  } ${
                    index % 2 === 0 ? 'border-l' : ''
                  }`}
                >
                  <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {item.label}
                  </div>
                  <div className="w-8 h-0.5 bg-accent mb-3" />
                  <p className="font-body text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
