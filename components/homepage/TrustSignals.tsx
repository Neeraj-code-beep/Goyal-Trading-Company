'use client'

import { motion } from 'framer-motion'
import { staggerContainer, slideUp } from '@/lib/animations/variants'

const credentials = [
  {
    metric: 'GST REGISTERED',
    detail: '07AFEPG9418H1ZF',
  },
  {
    metric: 'DGFT / IE CODE',
    detail: '0511050160 - Export License',
  },
  {
    metric: '26+ YEARS',
    detail: 'SINCE 2000',
  },
  {
    metric: '10K SETS/MONTH',
    detail: 'PRODUCTION CAPACITY',
  },
]

const organizations = [
  {
    name: 'Software Technology Parks of India',
    location: 'Noida',
  },
  {
    name: 'CRPF',
    location: 'Greater Noida',
  },
]

export function TrustSignals() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" aria-labelledby="trust-signals-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Business Credentials Section */}
          <motion.div variants={slideUp} className="mb-20">
            <motion.div variants={slideUp} className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                VERIFIED BUSINESS CREDENTIALS
              </span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              id="trust-signals-heading"
              className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-12 leading-tight"
            >
              Built on Verified Business Credentials
            </motion.h2>

            {/* Credentials Rail */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-white/10"
            >
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.metric}
                  variants={slideUp}
                  className={`p-8 border-r border-white/10 ${
                    index === 0 || index === 1 ? 'border-t' : ''
                  } ${
                    index % 2 === 0 ? 'border-l' : ''
                  }`}
                >
                  <div className="w-12 h-0.5 bg-accent mb-4" />
                  <div className="font-sans text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {cred.metric}
                  </div>
                  <div className="font-body text-sm text-white/70 leading-relaxed">
                    {cred.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Organizations Served Section */}
          <motion.div variants={slideUp}>
            <motion.div variants={slideUp} className="mb-6">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                ORGANIZATIONS SERVED
              </span>
            </motion.div>
            <motion.h3
              variants={slideUp}
              className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 text-white mb-8 leading-tight"
            >
              Organizations We&apos;ve Served
            </motion.h3>

            <motion.div
              variants={slideUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <div>
                      <p className="font-sans text-h3 text-white mb-1">{org.name}</p>
                      <p className="font-body text-sm text-white/60">{org.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
