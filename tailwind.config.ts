import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Primary Colors from V2 Spec
        'primary': '#1A365D',
        'primary-light': '#2C5282',
        'primary-dark': '#102A4E',
        
        // Accent Colors from V2 Spec
        'accent': '#ED8936',
        'accent-light': '#F6AD55',
        'accent-dark': '#DD6B20',
        
        // Legacy brand colors (for compatibility)
        'brand-navy': '#1A365D',
        'brand-navy-light': '#2C5282',
        'brand-navy-lighter': '#4A5568',
        'brand-navy-lightest': '#EBF8FF',
        'brand-navy-darker': '#1A365D',
        'brand-orange': '#ED8936',
        'brand-orange-light': '#F6AD55',
        'brand-orange-lighter': '#FBD38D',
        'brand-orange-lightest': '#FEEBC8',
        'brand-orange-dark': '#DD6B20',
        'brand-orange-darker': '#C05621',
        'brand-orange-darkest': '#9C4221',
        'brand-grey': '#4A5568',
        'brand-grey-light': '#718096',
        'brand-grey-lighter': '#A0AEC0',
        'brand-grey-lightest': '#F7FAFC',
        'brand-grey-darker': '#2D3748',
        'brand-grey-darkest': '#1A202C',
        'brand-bg': '#F7FAFC',
        'brand-bg-dark': '#EDF2F7',
        'brand-bg-darker': '#E2E8F0',
        'brand-border': '#E2E8F0',
        'brand-border-dark': '#CBD5E0',
        
        // Neutral Colors from V2 Spec
        'gray-50': '#F7FAFC',
        'gray-100': '#EDF2F7',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E0',
        'gray-400': '#A0AEC0',
        'gray-500': '#718096',
        'gray-600': '#4A5568',
        'gray-700': '#2D3748',
        'gray-800': '#1A202C',
        'gray-900': '#171923',
        
        // Legacy neutral colors (for compatibility)
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        
        // Warm Neutrals (for premium feel)
        'warm-50': '#FFFBF5',
        'warm-100': '#FFF4E6',
        'warm-200': '#FFE8CC',
        'warm-300': '#FFD9A6',
        'warm-400': '#FFC27A',
        'warm-500': '#FFA94D',
        'warm-600': '#FF8C33',
        'warm-700': '#E67326',
        'warm-800': '#CC5A1A',
        'warm-900': '#B3440D',
        
        // Semantic Colors
        'success': '#48BB78',
        'success-light': '#68D391',
        'success-dark': '#38A169',
        'success-lightest': '#C6F6D5',
        'warning': '#ECC94B',
        'error': '#F56565',
        'info': '#4299E1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['var(--font-open-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Display 1 - Hero headline (Bold 700)
        'display-1': ['64px', { lineHeight: '1.125', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-1-tablet': ['48px', { lineHeight: '1.125', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-1-mobile': ['36px', { lineHeight: '1.125', letterSpacing: '-0.02em', fontWeight: '700' }],
        
        // Display 2 - Section headings (Bold 700)
        'display-2': ['48px', { lineHeight: '1.167', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-2-tablet': ['36px', { lineHeight: '1.167', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-2-mobile': ['30px', { lineHeight: '1.167', letterSpacing: '-0.01em', fontWeight: '700' }],
        
        // Display 3 - Subsection headings (SemiBold 600)
        'display-3': ['36px', { lineHeight: '1.222', letterSpacing: '0em', fontWeight: '600' }],
        'display-3-tablet': ['28px', { lineHeight: '1.222', letterSpacing: '0em', fontWeight: '600' }],
        'display-3-mobile': ['24px', { lineHeight: '1.222', letterSpacing: '0em', fontWeight: '600' }],
        
        // Heading 1 - Page titles (SemiBold 600)
        'h1': ['30px', { lineHeight: '1.267', letterSpacing: '0em', fontWeight: '600' }],
        'h1-tablet': ['26px', { lineHeight: '1.267', letterSpacing: '0em', fontWeight: '600' }],
        'h1-mobile': ['22px', { lineHeight: '1.267', letterSpacing: '0em', fontWeight: '600' }],
        
        // Heading 2 - Section headings (SemiBold 600)
        'h2': ['24px', { lineHeight: '1.333', letterSpacing: '0em', fontWeight: '600' }],
        'h2-tablet': ['20px', { lineHeight: '1.333', letterSpacing: '0em', fontWeight: '600' }],
        'h2-mobile': ['18px', { lineHeight: '1.333', letterSpacing: '0em', fontWeight: '600' }],
        
        // Heading 3 - Card headings (SemiBold 600)
        'h3': ['20px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        'h3-tablet': ['18px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        'h3-mobile': ['16px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '600' }],
        
        // Heading 4 - Card titles (SemiBold 600)
        'h4': ['18px', { lineHeight: '1.444', letterSpacing: '0em', fontWeight: '600' }],
        'h4-tablet': ['16px', { lineHeight: '1.444', letterSpacing: '0em', fontWeight: '600' }],
        'h4-mobile': ['16px', { lineHeight: '1.444', letterSpacing: '0em', fontWeight: '600' }],
        
        // Body Large - Lead paragraphs (Regular 400)
        'body-lg': ['18px', { lineHeight: '1.556', letterSpacing: '0em', fontWeight: '400' }],
        'body-lg-tablet': ['16px', { lineHeight: '1.556', letterSpacing: '0em', fontWeight: '400' }],
        'body-lg-mobile': ['16px', { lineHeight: '1.556', letterSpacing: '0em', fontWeight: '400' }],
        
        // Body - Standard body text (Regular 400)
        'body': ['16px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        'body-tablet': ['15px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        'body-mobile': ['14px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        
        // Body Small - Secondary text (Regular 400)
        'body-sm': ['14px', { lineHeight: '1.429', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm-tablet': ['13px', { lineHeight: '1.429', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm-mobile': ['12px', { lineHeight: '1.429', letterSpacing: '0em', fontWeight: '400' }],
        
        // Caption - Footnotes, metadata (Regular 400)
        'caption': ['12px', { lineHeight: '1.333', letterSpacing: '0.02em', fontWeight: '400' }],
        'caption-tablet': ['11px', { lineHeight: '1.333', letterSpacing: '0.02em', fontWeight: '400' }],
        'caption-mobile': ['11px', { lineHeight: '1.333', letterSpacing: '0.02em', fontWeight: '400' }],
        
        // Overline - Section labels, category headers (SemiBold 600, Uppercase)
        'overline': ['11px', { lineHeight: '1.455', letterSpacing: '0.1em', fontWeight: '600' }],
        'overline-tablet': ['10px', { lineHeight: '1.455', letterSpacing: '0.1em', fontWeight: '600' }],
        'overline-mobile': ['10px', { lineHeight: '1.455', letterSpacing: '0.1em', fontWeight: '600' }],
        
        // Technical Data (Regular 400, Mono)
        'technical': ['14px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
        'technical-tablet': ['13px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
        'technical-mobile': ['12px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
        
        // Navigation (SemiBold 600, Uppercase, 0.5px letter-spacing)
        'nav': ['14px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '600' }],
        'nav-tablet': ['13px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '600' }],
        'nav-mobile': ['12px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '600' }],
      },
      spacing: {
        // Design System Spacing Scale
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
        '40': '10rem',    // 160px
        '48': '12rem',    // 192px
        '56': '14rem',    // 224px
        '64': '16rem',    // 256px
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '50%',
      },
      boxShadow: {
        'none': 'none',
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'xl': '0 16px 32px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
