'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { heroSlides } from '@/data/hero-images'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, FileText, MapPin, Layers, Calendar, Sparkles } from 'lucide-react'

export function Hero() {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const currentSlide = heroSlides[currentIndex]

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-primary">
      {/* Background Image Carousel Layer */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide.imageUrl}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
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

      {/* Dark gradient overlay tuned for readable high contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-dark/90 via-transparent to-black/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-sans text-xs font-semibold text-accent uppercase tracking-widest">
              Established 2000 · B2B Textile Manufacturer &amp; Trader
            </span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-[1.12] tracking-tight">
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p className="font-body text-base sm:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {currentSlide.description} Custom manufacturing for institutions, academies, sports teams, and corporate organizations across India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button variant="primary" size="lg" asChild>
              <Link href="/products" className="inline-flex items-center gap-2 shadow-lg">
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="light-surface" size="lg" asChild>
              <Link href="/contact/request-quote" className="inline-flex items-center gap-2">
                <FileText size={18} />
                <span>Request a Quote</span>
              </Link>
            </Button>
          </div>

          {/* Verified Trust Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                <Calendar size={18} />
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-white">2000</div>
                <div className="font-body text-xs text-gray-300">Year Founded</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                <Layers size={18} />
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-white">13 Families</div>
                <div className="font-body text-xs text-gray-300">35 Categories</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-white">Custom OEM</div>
                <div className="font-body text-xs text-gray-300">Bulk Grading &amp; Trims</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-accent">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-white">Delhi Base</div>
                <div className="font-body text-xs text-gray-300">Delhi-Based Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
