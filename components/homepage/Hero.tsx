'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { heroSlides } from '@/data/hero-images'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const currentSlide = heroSlides[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction < 0 ? 20 : -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    }),
  }

  return (
    <section className="relative min-h-[80vh] lg:min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide.imageUrl}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.imageUrl}
            alt={currentSlide.imageAlt}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays for readability - lighter for better image visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/40 via-primary-dark/35 to-accent/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-black/15 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/50 to-transparent" />

      {/* Animated Background Pattern */}
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : y,
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
        className="absolute inset-0 z-10 opacity-10"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-[1000px] mx-auto">
          {/* Synchronized Content with Crossfade */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={1}
              className="text-center"
            >
              {/* Eyebrow - Changes with slide */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mb-4"
              >
                <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                  {currentSlide.eyebrow}
                </span>
              </motion.div>

              {/* Headline - Changes with slide */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Description - Changes with slide */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                {currentSlide.description}
              </motion.p>

              {/* CTAs - Primary persistent, secondary changes with slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact/request-quote">Request a Quote</Link>
                </Button>
                <Button 
                  variant="light-surface" 
                  size="lg" 
                  asChild
                >
                  <Link href={currentSlide.secondaryCta.href}>{currentSlide.secondaryCta.label}</Link>
                </Button>
              </motion.div>

              {/* Trust Metrics - Persistent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {/* GST Registration */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="font-sans text-white font-bold text-xs">GST</span>
                  </div>
                  <span className="font-body text-white/80 text-xs">Registered</span>
                </div>
                {/* DGFT/IE Code */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="font-sans text-white font-bold text-xs">DGFT</span>
                  </div>
                  <span className="font-body text-white/80 text-xs">Export License</span>
                </div>
                {/* Established Year */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="font-sans text-white font-bold text-xs">2000</span>
                  </div>
                  <span className="font-body text-white/80 text-xs">Established</span>
                </div>
                {/* Dual Facilities */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="font-sans text-white font-bold text-xs">2</span>
                  </div>
                  <span className="font-body text-white/80 text-xs">Units</span>
                </div>
              </motion.div>

              {/* Manufacturing Focus - Persistent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
                className="mt-8 flex flex-wrap justify-center gap-8 text-white/90"
              >
                <div className="text-center">
                  <div className="font-sans text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-white">B2B Bulk</div>
                  <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-white/70 mt-1">Manufacturing</div>
                </div>
                <div className="text-center">
                  <div className="font-sans text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-white">Global</div>
                  <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-white/70 mt-1">Export Supply</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
