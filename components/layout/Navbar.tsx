'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronLeft, ArrowRight } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
import { navigation } from '@/config/navigation'
import { Button } from '@/components/ui/Button'
import { MegaMenu } from '@/components/layout/MegaMenu'
import { getProductFamily, getFeaturedProductFamilies } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MobileNavLevel = 'main' | 'family' | 'category'

interface NavbarProps {
  onMobileMenuChange?: (isOpen: boolean) => void
}

export function Navbar({ onMobileMenuChange }: NavbarProps = {}) {
  const { isScrolled } = useScroll()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false)
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null)
  const [capabilitiesTimeout, setCapabilitiesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [mobileNavLevel, setMobileNavLevel] = useState<MobileNavLevel>('main')
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null)
  const [_selectedCategory, _setSelectedCategory] = useState<string | null>(null)
  const pathname = usePathname()
  const _megaMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow || ''
    }
    return () => {
      document.body.style.overflow = originalOverflow || ''
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    onMobileMenuChange?.(false)
    resetMobileNav()
  }

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemName)) {
        newSet.delete(itemName)
      } else {
        newSet.add(itemName)
      }
      return newSet
    })
  }

  const handleProductsHover = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
    setIsMegaMenuOpen(true)
  }

  const handleProductsLeave = () => {
    const timeout = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 300)
    setMegaMenuTimeout(timeout)
  }

  const closeMegaMenu = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
    setIsMegaMenuOpen(false)
  }

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
  }

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 300)
    setMegaMenuTimeout(timeout)
  }

  const handleCapabilitiesHover = () => {
    if (capabilitiesTimeout) {
      clearTimeout(capabilitiesTimeout)
      setCapabilitiesTimeout(null)
    }
    setIsCapabilitiesOpen(true)
  }

  const handleCapabilitiesLeave = () => {
    const timeout = setTimeout(() => {
      setIsCapabilitiesOpen(false)
    }, 300)
    setCapabilitiesTimeout(timeout)
  }

  const closeCapabilities = () => {
    if (capabilitiesTimeout) {
      clearTimeout(capabilitiesTimeout)
      setCapabilitiesTimeout(null)
    }
    setIsCapabilitiesOpen(false)
  }

  const handleCapabilitiesDropdownEnter = () => {
    if (capabilitiesTimeout) {
      clearTimeout(capabilitiesTimeout)
      setCapabilitiesTimeout(null)
    }
  }

  const handleCapabilitiesDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsCapabilitiesOpen(false)
    }, 300)
    setCapabilitiesTimeout(timeout)
  }

  const navigateToFamily = (familySlug: string) => {
    setSelectedFamily(familySlug)
    setMobileNavLevel('family')
    // Reset scroll to top when navigating to family level
    const navElement = document.querySelector('nav.flex-1')
    if (navElement) {
      navElement.scrollTop = 0
    }
  }

  const navigateToCategory = (categorySlug: string) => {
    _setSelectedCategory(categorySlug)
    setMobileNavLevel('category')
    // Reset scroll to top when navigating to category level
    const navElement = document.querySelector('nav.flex-1')
    if (navElement) {
      navElement.scrollTop = 0
    }
  }

  const navigateBack = () => {
    if (mobileNavLevel === 'category') {
      setMobileNavLevel('family')
      _setSelectedCategory(null)
    } else if (mobileNavLevel === 'family') {
      setMobileNavLevel('main')
      setSelectedFamily(null)
    }
  }

  const resetMobileNav = () => {
    setMobileNavLevel('main')
    setSelectedFamily(null)
    _setSelectedCategory(null)
  }

  const featuredFamilies = getFeaturedProductFamilies()

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: 0,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          height: isScrolled ? 72 : 80,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
        style={{ backdropFilter: isScrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="font-sans text-white font-bold text-lg">G</span>
              </div>
            </motion.div>
            <span className="font-sans font-semibold text-primary text-lg hidden sm:block group-hover:text-accent transition-colors">
              Goyal Trading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => {
              const isItemActive = item.name === 'Products' 
                ? pathname.startsWith('/products')
                : item.name === 'Capabilities'
                ? pathname.startsWith('/capabilities')
                : pathname === item.href

              const isDropdownOpen = item.name === 'Products' ? isMegaMenuOpen : item.name === 'Capabilities' ? isCapabilitiesOpen : false

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.name === 'Products' ? handleProductsHover : item.name === 'Capabilities' ? handleCapabilitiesHover : undefined}
                  onMouseLeave={item.name === 'Products' ? handleProductsLeave : item.name === 'Capabilities' ? handleCapabilitiesLeave : undefined}
                >
                  {item.children ? (
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={`
                        font-sans text-nav uppercase transition-all duration-300 relative py-2 flex items-center gap-1
                        ${isItemActive
                          ? 'text-accent font-semibold'
                          : 'text-primary hover:text-accent'
                        }
                      `}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      {isItemActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`
                        font-sans text-nav uppercase transition-all duration-300 relative py-2
                        ${isItemActive
                          ? 'text-accent font-semibold'
                          : 'text-primary hover:text-accent'
                        }
                      `}
                    >
                      {item.name}
                      {isItemActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md" asChild>
              <Link href="/contact/request-quote">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              const newState = !isMobileMenuOpen
              setIsMobileMenuOpen(newState)
              onMobileMenuChange?.(newState)
            }}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2} className="text-primary" /> : <Menu size={24} strokeWidth={2} className="text-primary" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-primary lg:hidden h-[100dvh]"
          >
            <div className="flex flex-col h-[100dvh] p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <span className="font-sans text-primary font-bold text-lg">G</span>
                  </div>
                  <span className="font-sans font-semibold text-white text-lg">
                    Goyal Trading
                  </span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-white/10 rounded transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={2} className="text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 min-h-0 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {mobileNavLevel === 'main' && (
                    <motion.div
                      key="main"
                      initial={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <ul className="space-y-4">
                        {navigation.main.map((item) => (
                          <li key={item.name}>
                            {item.name === 'Products' ? (
                              <button
                                onClick={() => navigateToFamily('products')}
                                className="w-full flex items-center justify-between font-sans text-h3-mobile text-white py-2"
                              >
                                {item.name}
                                <ChevronDown size={20} strokeWidth={2} />
                              </button>
                            ) : item.children ? (
                              <div>
                                <button
                                  onClick={() => toggleExpanded(item.name)}
                                  className="w-full flex items-center justify-between font-sans text-h3-mobile text-white py-2"
                                  aria-expanded={expandedItems.has(item.name)}
                                >
                                  {item.name}
                                  <ChevronDown
                                    size={20}
                                    strokeWidth={2}
                                    className={`transition-transform duration-200 ${
                                      expandedItems.has(item.name) ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedItems.has(item.name) && (
                                    <motion.ul
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: 'easeOut' }}
                                      className="pl-4 space-y-2 overflow-hidden"
                                    >
                                      {item.children.map((child) => (
                                        <li key={child.name}>
                                          <Link
                                            href={child.href}
                                            onClick={closeMobileMenu}
                                            className="font-body text-body-mobile text-white/80 py-2 hover:text-accent transition-colors"
                                          >
                                            {child.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={`
                                  font-sans text-h3-mobile text-white py-2
                                  ${pathname === item.href ? 'text-accent' : ''}
                                `}
                              >
                                {item.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {mobileNavLevel === 'family' && selectedFamily === 'products' && (
                    <motion.div
                      key="family"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <button
                        onClick={navigateBack}
                        className="flex items-center gap-2 font-sans text-h3-mobile text-white py-2 mb-4"
                      >
                        <ChevronLeft size={20} strokeWidth={2} />
                        Back
                      </button>
                      <h3 className="font-sans text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                        Product Families
                      </h3>
                      <ul className="space-y-2">
                        {featuredFamilies.map((family) => (
                          <li key={family.slug}>
                            <button
                              onClick={() => navigateToCategory(family.slug)}
                              className="w-full flex items-center justify-between px-3 py-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                              <span className="font-sans text-sm font-medium text-white">
                                {family.shortName}
                              </span>
                              <ArrowRight size={16} className="text-white/60" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {mobileNavLevel === 'category' && selectedFamily && (
                    <motion.div
                      key="category"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <button
                        onClick={navigateBack}
                        className="flex items-center gap-2 font-sans text-h3-mobile text-white py-2 mb-4"
                      >
                        <ChevronLeft size={20} strokeWidth={2} />
                        Back
                      </button>
                      {(() => {
                        const family = getProductFamily(selectedFamily as ProductFamilySlug)
                        if (!family) return null
                        return (
                          <>
                            <h3 className="font-sans text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
                              {family.name} Categories
                            </h3>
                            <ul className="space-y-2">
                              {family.categories.map((category) => (
                                <li key={category.slug}>
                                  <Link
                                    href={`/products/${family.slug}/${category.slug}`}
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                  >
                                    <span className="font-sans text-sm font-medium text-white">
                                      {category.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3 pb-8">
                <Button variant="primary" size="lg" fullWidth asChild>
                  <Link href="/contact/request-quote" onClick={closeMobileMenu}>
                    Request a Quote
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" fullWidth asChild>
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={closeMegaMenu}
        onMenuEnter={handleMegaMenuEnter}
        onMenuLeave={handleMegaMenuLeave}
      />

      {/* Capabilities Dropdown */}
      <AnimatePresence>
        {isCapabilitiesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg"
            onMouseEnter={handleCapabilitiesDropdownEnter}
            onMouseLeave={handleCapabilitiesDropdownLeave}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {navigation.main.find(item => item.name === 'Capabilities')?.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={closeCapabilities}
                    className="group p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <ArrowRight size={16} className="text-primary" />
                      </div>
                      <span className="font-sans text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">
                        {child.name}
                      </span>
                    </div>
                    <p className="font-body text-xs text-gray-600">
                      {'description' in child ? child.description : 'Learn more about our capabilities'}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
