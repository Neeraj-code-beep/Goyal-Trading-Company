'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'dark-surface' | 'light-surface' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      asChild = false,
      icon,
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-offset-2'
    
    const variants = {
      primary: 'bg-accent text-white border-none focus:ring-accent hover:bg-accent-light hover:shadow-lg hover:-translate-y-0.5 active:bg-accent-dark active:translate-y-0 active:shadow-md',
      secondary: 'bg-transparent text-primary border-2 border-primary focus:ring-primary hover:bg-primary/5 hover:border-primary-light hover:shadow-md hover:-translate-y-0.5 active:bg-primary/10 active:translate-y-0 active:shadow-sm',
      tertiary: 'bg-transparent text-gray-500 border-none focus:ring-gray-500 hover:text-primary hover:underline hover:underline-offset-4',
      'dark-surface': 'bg-accent text-white border-none focus:ring-accent hover:bg-accent-light hover:shadow-lg hover:-translate-y-0.5 active:bg-accent-dark active:translate-y-0 active:shadow-md',
      'light-surface': 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 focus:ring-white hover:bg-white/20 hover:border-white/50 hover:shadow-md hover:-translate-y-0.5 active:bg-white/30 active:translate-y-0 active:shadow-sm',
      text: 'bg-transparent text-accent border-none focus:ring-accent hover:text-accent-light hover:underline hover:underline-offset-4',
    }
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm min-h-[40px] rounded-lg',
      md: 'px-7 py-3 text-base min-h-[48px] rounded-xl',
      lg: 'px-9 py-4 text-lg min-h-[56px] rounded-xl',
    }
    
    const textTransform = variant !== 'tertiary' && variant !== 'text' ? 'uppercase' : ''
    
    const buttonContent = (
      <>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    )

    const MotionComponent = asChild ? motion.span : motion.button

    const motionProps: HTMLMotionProps<'button'> = {
      whileHover: variant !== 'tertiary' && variant !== 'text' ? { scale: 1.02, y: -2 } : undefined,
      whileTap: variant !== 'tertiary' && variant !== 'text' ? { scale: 0.98, y: 0 } : undefined,
      transition: { duration: 0.2, ease: 'easeOut' },
    }

    return (
      <MotionComponent
        ref={ref as any}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          textTransform,
          'tracking-wider',
          className
        )}
        disabled={disabled || loading}
        {...motionProps}
        {...(props as any)}
      >
        {buttonContent}
      </MotionComponent>
    )
  }
)

Button.displayName = 'Button'

export { Button }
