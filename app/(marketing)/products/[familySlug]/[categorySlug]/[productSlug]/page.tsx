import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug } from '@/data/products'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface PageProps {
  params: Promise<{
    familySlug: string
    categorySlug: string
    productSlug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productSlug } = await params
  const product = getProductBySlug(productSlug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Goyal Trading Company`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { familySlug, categorySlug, productSlug } = await params
  const product = getProductBySlug(productSlug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href={`/products/${familySlug}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {familySlug}
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href={`/products/${familySlug}/${categorySlug}`} 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {categorySlug}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Product Image */}
              <div className="aspect-square relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
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

              {/* Product Info */}
              <div>
                <div className="mb-6">
                  <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider">
                    {categorySlug}
                  </span>
                </div>
                
                <h1 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary mb-6 leading-tight">
                  {product.name}
                </h1>
                
                <p className="font-body text-body-lg text-gray-600 mb-10 leading-relaxed">
                  {product.description}
                </p>

                {product.specifications && (
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
                    <h3 className="font-sans text-h3 text-primary mb-6">Specifications</h3>
                    <div className="space-y-4">
                      {product.specifications.fabric && (
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="font-body text-body text-gray-500">Fabric</span>
                          <span className="font-body text-body text-gray-900 font-medium">{product.specifications.fabric}</span>
                        </div>
                      )}
                      {product.specifications.gsm && (
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="font-body text-body text-gray-500">GSM</span>
                          <span className="font-body text-body text-gray-900 font-medium">{product.specifications.gsm}</span>
                        </div>
                      )}
                      {product.specifications.threadCount && (
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="font-body text-body text-gray-500">Thread Count</span>
                          <span className="font-body text-body text-gray-900 font-medium">{product.specifications.threadCount}</span>
                        </div>
                      )}
                      {product.specifications.material && (
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="font-body text-body text-gray-500">Material</span>
                          <span className="font-body text-body text-gray-900 font-medium">{product.specifications.material}</span>
                        </div>
                      )}
                      {product.specifications.features && product.specifications.features.length > 0 && (
                        <div className="pt-4">
                          <span className="font-body text-body text-gray-500 block mb-3">Features</span>
                          <ul className="space-y-2">
                            {product.specifications.features.map((feature, index) => (
                              <li key={index} className="font-body text-body text-gray-900 flex items-start">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {product.tags && product.tags.length > 0 && (
                  <div className="mb-10">
                    <h3 className="font-sans text-h3 text-primary mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-accent hover:text-white transition-colors duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" fullWidth asChild>
                    <Link href="/contact/request-quote">
                      {product.inquiryLabel || 'Request Quote'}
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" fullWidth asChild>
                    <Link href="/contact/request-sample">
                      Request Sample
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
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
            Interested in {product.name}?
          </h2>
          <p className="font-body text-body-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us for custom manufacturing, bulk pricing, and sample requests for this product.
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
