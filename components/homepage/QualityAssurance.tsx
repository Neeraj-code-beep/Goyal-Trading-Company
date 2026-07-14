'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Search, FileText } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations/variants'

const qualitySteps = [
  {
    icon: Search,
    title: 'Raw Material Testing',
    description: 'Comprehensive testing of all incoming materials for quality and consistency.',
  },
  {
    icon: Shield,
    title: 'In-Process Inspection',
    description: 'Real-time quality checks during production to catch issues early.',
  },
  {
    icon: CheckCircle,
    title: 'Final Quality Check',
    description: 'Thorough inspection of finished products before packaging.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Complete quality reports and certifications for every batch.',
  },
]

export function QualityAssurance() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="quality-assurance-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #48BB78 1px, transparent 0)',
        backgroundSize: '36px 36px'
      }} />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/3 via-white to-primary/3" />
      {/* Decorative glow */}
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
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
            id="quality-assurance-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Quality Assurance
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Multi-stage quality control process ensuring every product meets international standards.
          </motion.p>
        </motion.div>

        {/* Quality Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {qualitySteps.map((step, _index) => (
            <motion.div
              key={step.title}
              variants={slideUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 hover:border-success/30 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors"
              >
                <step.icon size={32} strokeWidth={2} className="text-accent group-hover:text-success transition-colors" />
              </motion.div>
              <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-success transition-colors">
                {step.title}
              </h3>
              <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Standards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mt-16 bg-primary p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">100%</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Inspection Coverage</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">ISO 9001</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Certified Process</div>
            </div>
            <div>
              <div className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-accent mb-2">&lt;1%</div>
              <div className="font-body text-white/80 text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm">Defect Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
