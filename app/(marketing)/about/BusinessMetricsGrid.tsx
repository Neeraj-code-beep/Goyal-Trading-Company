'use client'

import { motion } from 'framer-motion'

interface MetricItem {
  metric: string
  label: string
  detail: string
}

interface BusinessMetricsGridProps {
  metrics: MetricItem[]
}

export function BusinessMetricsGrid({ metrics }: BusinessMetricsGridProps) {
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
      className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {metrics.map((item, index) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`p-6 border-r border-b border-white/10 ${
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
            <div className="w-8 h-0.5 bg-accent mb-2" />
            <p className="font-body text-xs text-white/60">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
