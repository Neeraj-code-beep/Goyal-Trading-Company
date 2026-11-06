import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductByHierarchy, getAllProductFamilies } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{
    familySlug: string
    categorySlug: string
    productSlug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { familySlug, categorySlug, productSlug } = await params
  const result = getProductByHierarchy(familySlug as ProductFamilySlug, categorySlug, productSlug)
  
  if (!result) {
    return {
      title: 'Product Not Found - Goyal Trading Company',
    }
  }

  const { product, category } = result

  return {
    title: `${product.name} - ${category.name} | Goyal Trading Company`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  const families = getAllProductFamilies()
  const params: Array<{ familySlug: string; categorySlug: string; productSlug: string }> = []
  
  for (const family of families) {
    for (const category of family.categories) {
      for (const subcategory of category.subcategories) {
        for (const product of subcategory.products) {
          params.push({
            familySlug: family.slug,
            categorySlug: category.slug,
            productSlug: product.slug,
          })
        }
      }
    }
  }
  
  return params
}

export default async function ProductPage({ params }: PageProps) {
  const { familySlug, categorySlug, productSlug } = await params
  const result = getProductByHierarchy(familySlug as ProductFamilySlug, categorySlug, productSlug)

  if (!result) {
    notFound()
  }

  const { product, category, family } = result
  const quoteUrl = `/contact/request-quote?product=${encodeURIComponent(product.name)}&family=${encodeURIComponent(family.slug)}&category=${encodeURIComponent(category.slug)}`
  const sampleUrl = `/contact/request-sample?product=${encodeURIComponent(product.name)}&family=${encodeURIComponent(family.slug)}&category=${encodeURIComponent(category.slug)}`

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href={`/products/${familySlug}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {family.shortName || family.name}
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href={`/products/${familySlug}/${categorySlug}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-semibold">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Product Visual */}
              <div className="aspect-square relative bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 sticky top-28">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                ) : (
                  <ProductImageFallback
                    categoryName={categorySlug}
                    productName={product.name}
                    aspectRatio="square"
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Product Specifications & Details */}
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-sans text-xs font-semibold uppercase tracking-wider rounded-md">
                    {category.name}
                  </span>
                </div>
                
                <h1 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-4 leading-tight">
                  {product.name}
                </h1>
                
                <p className="font-body text-body-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Available Technical Specifications */}
                {product.specifications && (
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                    <h2 className="font-sans text-h3 text-primary mb-4">Technical Specifications</h2>
                    <div className="space-y-3">
                      {product.specifications.fabric && (
                        <div className="flex justify-between py-2.5 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Fabric Composition</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.fabric}</span>
                        </div>
                      )}
                      {product.specifications.gsm && (
                        <div className="flex justify-between py-2.5 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Fabric Weight</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.gsm} GSM</span>
                        </div>
                      )}
                      {product.specifications.threadCount && (
                        <div className="flex justify-between py-2.5 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Thread Count</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.threadCount}</span>
                        </div>
                      )}
                      {product.specifications.material && (
                        <div className="flex justify-between py-2.5 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Material Type</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.material}</span>
                        </div>
                      )}
                      {product.specifications.features && product.specifications.features.length > 0 && (
                        <div className="pt-3">
                          <span className="font-body text-sm font-semibold text-gray-700 block mb-2">Key Garment Features</span>
                          <ul className="space-y-2">
                            {product.specifications.features.map((feature, index) => (
                              <li key={index} className="font-body text-sm text-gray-800 flex items-center gap-2">
                                <Check size={16} className="text-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-8">
                    <span className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">Categories & Applications</span>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary Pre-filled Inquire Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button variant="primary" size="lg" fullWidth asChild>
                    <Link href={quoteUrl}>
                      {product.inquiryLabel || 'Request Bulk Quote'}
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" fullWidth asChild>
                    <Link href={sampleUrl}>
                      Request Garment Sample
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Order Custom {product.name}
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            We manufacture for sports clubs, institutions, academies, and corporate brands with custom embroidery, printing, and bespoke sizing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href={quoteUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-sm"
            >
              <span>Request Quote for this Product</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              href={sampleUrl}
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Order Sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
