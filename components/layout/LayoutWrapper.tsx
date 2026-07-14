'use client'

import { useState, ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <Navbar onMobileMenuChange={setIsMobileMenuOpen} />
      <div className="pt-20 lg:pt-24">
        {children}
      </div>
      <WhatsAppButton hidden={isMobileMenuOpen} />
    </>
  )
}
