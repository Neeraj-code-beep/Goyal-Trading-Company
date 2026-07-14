import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategory } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  params: Promise<{
    familySlug: string
    categorySlug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { familySlug, categorySlug } = await params
  const category = getCategory(familySlug as ProductFamilySlug, categorySlug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} - Goyal Trading Company`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { familySlug, categorySlug } = await params
  const category = getCategory(familySlug as ProductFamilySlug, categorySlug)

  if (!category) {
    notFound()
  }

  const allProducts = category.subcategories.flatMap(sub => sub.products)

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 40%'
            }}
          />
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient overlays - lighter for better image visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary-dark/45 to-accent/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/20 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <Link 
              href={`/products/${familySlug}`}
              className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors font-sans text-sm font-semibold tracking-wide"
            >
              ← Back to {familySlug}
            </Link>
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              Product Category
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
              {category.name}
            </h1>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-10">
              {category.description}
            </p>
            <Link 
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {allProducts.length > 0 ? (
              <>
                <div className="text-center mb-16">
                  <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                    Products
                  </span>
                  <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                    {category.name} Collection
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {allProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${familySlug}/${categorySlug}/${product.slug}`}
                      className="group block"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/50 hover:-translate-y-2">
                        <div className="aspect-[4/5] relative overflow-hidden">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              quality={85}
                              loading="lazy"
                            />
                          ) : (
                            <ProductImageFallback
                              categoryName={categorySlug}
                              productName={product.name}
                              aspectRatio="portrait"
                              className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-sans text-h3-mobile md:text-h3-tablet lg:text-h3 text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                          {product.inquiryLabel && (
                            <div className="font-body text-body-sm-mobile md:text-body-sm-tablet lg:text-body-sm text-accent font-semibold pt-2">
                              {product.inquiryLabel}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-24">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10L4 17" />
                    </svg>
                  </div>
                  <h3 className="font-sans text-display-3 text-primary mb-4">Products Coming Soon</h3>
                  <p className="font-body text-body-lg text-gray-600 mb-8 leading-relaxed">
                    We&apos;re expanding our {category.name} collection. Contact us for custom manufacturing inquiries.
                  </p>
                  <Link
                    href="/contact/request-quote"
                    className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-white mb-4 leading-tight">
            Custom {category.name} Manufacturing
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            We offer custom manufacturing for bulk orders. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact/request-quote"
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request Quote
            </Link>
            <Link 
              href="/contact/request-sample"
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Request Sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
