// Product Hierarchy Types based on verified repository data
export type ProductFamilySlug = 
  | 'track-suits-activewear'
  | 't-shirts'
  | 'sports-wear-athletic-gear'
  | 'jackets-outerwear'
  | 'shorts'
  | 'school-wear'
  | 'corporate-wear'
  | 'bags-accessories'
  | 'swimming-water-sports'
  | 'medical-equipment'
  | 'uniforms'
  | 'fabrics-materials'
  | 'promotional-items'

export interface ProductFamily {
  id: string
  slug: ProductFamilySlug
  name: string
  shortName: string
  description: string
  heroImage?: string
  categories: ProductCategory[]
  featured: boolean
  seo: {
    title: string
    description: string
  }
}

export interface ProductCategory {
  id: string
  slug: string
  name: string
  description: string
  familySlug: ProductFamilySlug
  image?: string
  heroImage?: string
  subcategories: ProductSubcategory[]
  productCount?: number
  featured: boolean
  seo: {
    title: string
    description: string
  }
}

export interface ProductSubcategory {
  id: string
  slug: string
  name: string
  categorySlug: string
  description?: string
  products: Product[]
}

export interface Product {
  id: string
  slug: string
  name: string
  shortName?: string
  description: string
  shortDescription?: string
  familySlug: ProductFamilySlug
  categorySlug: string
  subcategorySlug?: string
  image?: string
  heroImage?: string
  images?: {
    thumbnail: string
    gallery: string[]
  }
  specifications?: {
    fabric?: string
    gsm?: string
    threadCount?: string
    shrinkage?: string
    material?: string
    features?: string[]
  }
  tags?: string[]
  featured: boolean
  inquiryLabel?: string
  seo?: {
    title: string
    description: string
    keywords?: string[]
  }
}

// Legacy compatibility - deprecated, use new hierarchy
export interface Category {
  id: string
  slug: string
  name: string
  description: string
  image: string
  productCount: number
}
