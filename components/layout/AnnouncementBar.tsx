'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface AnnouncementBarProps {
  message?: string
  link?: string
  linkText?: string
  dismissible?: boolean
}

export function AnnouncementBar({
  message = 'Free shipping on orders over 500 units',
  link,
  linkText = 'Learn more',
  dismissible = true,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    // Check if announcement was previously dismissed
    const dismissed = localStorage.getItem('announcement-dismissed')
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('announcement-dismissed', 'true')
    }, 300)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {!isAnimatingOut && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 40 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-accent text-white h-[40px]"
          style={{ height: isAnimatingOut ? 0 : 40 }}
        >
          <div className="container mx-auto px-6 h-full flex items-center justify-center relative">
            <div className="flex items-center gap-4 font-sans text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm font-semibold">
              <span>{message}</span>
              {link && (
                <a
                  href={link}
                  className="underline hover:no-underline transition-all duration-200"
                >
                  {linkText}
                </a>
              )}
            </div>
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="absolute right-6 w-6 h-6 flex items-center justify-center hover:bg-accent-dark rounded transition-colors"
                aria-label="Close announcement"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
