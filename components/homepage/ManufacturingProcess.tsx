'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, slideUp } from '@/lib/animations/variants'

const processSteps = [
  {
    step: 1,
    title: 'Design & Development',
    description: 'Custom design creation with technical specifications and material selection.',
  },
  {
    step: 2,
    title: 'Sourcing',
    description: 'Premium raw material procurement from certified suppliers worldwide.',
  },
  {
    step: 3,
    title: 'Production',
    description: 'State-of-the-art manufacturing with quality control at every stage.',
  },
  {
    step: 4,
    title: 'Quality Assurance',
    description: 'Multi-stage inspection ensuring compliance with international standards.',
  },
  {
    step: 5,
    title: 'Packaging',
    description: 'Secure packaging with proper labeling and documentation.',
  },
  {
    step: 6,
    title: 'Delivery',
    description: 'Global logistics coordination for timely delivery to your location.',
  },
]

export function ManufacturingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden" aria-labelledby="manufacturing-process-heading">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
      {/* Decorative glow */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
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
            id="manufacturing-process-heading"
            className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4"
          >
            Our Manufacturing Process
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            A streamlined process ensuring quality, efficiency, and transparency from design to delivery.
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line with scroll animation */}
          <motion.div
            style={{ height: lineHeight }}
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={slideUp}
                className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:mt-8'}`}
              >
                {/* Step Number */}
                <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse lg:justify-end'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg cursor-default"
                  >
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </motion.div>
                  <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary leading-tight group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body text-body-mobile md:text-body-tablet lg:text-body text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden lg:block absolute top-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"
                  style={{
                    left: index % 2 === 0 ? 'calc(100% + 0.5rem)' : '-0.5rem',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
