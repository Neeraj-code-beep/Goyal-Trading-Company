'use client'

import { createContext, useContext, ReactNode } from 'react'

interface MobileMenuContextType {
  isMobileMenuOpen: boolean
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined)

export function MobileMenuProvider({ children, isMobileMenuOpen }: { children: ReactNode; isMobileMenuOpen: boolean }) {
  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return context
}
