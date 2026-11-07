import { LucideIcon, Package, Shirt, Briefcase, Backpack, Droplets, Shield, Scissors, Layers } from 'lucide-react'

interface ProductImageFallbackProps {
  categoryName?: string
  productName?: string
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video'
  className?: string
}

const categoryIcons: Record<string, LucideIcon> = {
  'track-suits': Shirt,
  't-shirts': Shirt,
  'sports-wear': Shirt,
  'jackets': Layers,
  'shorts': Shirt,
  'school-wear': Shield,
  'corporate-wear': Briefcase,
  'bags': Backpack,
  'swimming': Droplets,
  'medical': Shield,
  'uniforms': Shield,
  'fabrics': Scissors,
  'promotional': Briefcase,
}

export function ProductImageFallback({ 
  categoryName, 
  productName, 
  aspectRatio = 'square',
  className = '' 
}: ProductImageFallbackProps) {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/9]',
    video: 'aspect-[16/9]',
  }

  const Icon = categoryIcons[categoryName?.toLowerCase() || ''] || Package

  const initials = productName
    ? productName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
    : categoryName
    ? categoryName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
    : 'NA'

  return (
    <div 
      className={`
        ${aspectClasses[aspectRatio]}
        bg-gradient-to-br from-gray-100 to-gray-200
        flex flex-col items-center justify-center
        border border-gray-300
        ${className}
      `}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl" />
        <Icon 
          size={48} 
          className="text-primary/40 relative z-10" 
          strokeWidth={1.5}
        />
      </div>
      {initials && (
        <div className="mt-3">
          <span className="font-sans text-2xl font-bold text-primary/30">
            {initials}
          </span>
        </div>
      )}
      {categoryName && (
        <p className="mt-2 font-body text-xs text-gray-500 text-center px-4 line-clamp-2">
          {categoryName}
        </p>
      )}
    </div>
  )
}
