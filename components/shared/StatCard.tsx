'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  description: string
  iconColor?: string
  delay?: number
}

export function StatCard({
  icon: Icon,
  value,
  label,
  description,
  iconColor = 'text-accent',
  delay = 0,
}: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false

  useEffect(() => {
    if (isInView && !hasAnimated && typeof value === 'number' && !prefersReducedMotion) {
      setHasAnimated(true)
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    } else if (isInView && !hasAnimated && typeof value === 'number' && prefersReducedMotion) {
      setDisplayValue(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, value, prefersReducedMotion])

  const displayString = typeof value === 'number' 
    ? displayValue.toLocaleString() 
    : value

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center text-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={cn('mb-4', iconColor)}
      >
        <Icon size={32} strokeWidth={2} />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="font-sans text-display-3-mobile md:text-display-3-tablet lg:text-display-3 font-bold text-primary mb-2"
      >
        {displayString}
      </motion.div>
      <div className="font-sans text-body-mobile md:text-body-tablet lg:text-body font-semibold text-primary mb-1">{label}</div>
      <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-gray-500">{description}</div>
    </motion.div>
  )
}
