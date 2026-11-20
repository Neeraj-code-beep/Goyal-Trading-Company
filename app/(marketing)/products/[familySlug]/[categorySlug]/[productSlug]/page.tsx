import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductByHierarchy, getAllProductFamilies } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import { ProductCard } from '@/components/products/ProductCard'
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import { constructMetadata } from '@/config/seo'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight, MessageSquare, ChevronRight, FileText, Package, Sparkles } from 'lucide-react'

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
    return constructMetadata({
      title: 'Product Not Found',
      noIndex: true,
    })
  }

  const { product, category } = result

  return constructMetadata({
    title: `${product.name} - ${category.name}`,
    description: product.description,
    canonicalPath: `/products/${familySlug}/${categorySlug}/${productSlug}`,
    image: product.image,
  })
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
  const quoteUrl = `/contact/request-quote?product=${encodeURIComponent(product.id)}&family=${encodeURIComponent(family.slug)}&category=${encodeURIComponent(category.slug)}`
  const sampleUrl = `/contact/request-sample?product=${encodeURIComponent(product.id)}&family=${encodeURIComponent(family.slug)}&category=${encodeURIComponent(category.slug)}`

  // WhatsApp click-to-chat inquiry link with prefilled B2B context (conditional on owner approval)
  const isWhatsAppApproved = siteConfig.contact.publicWhatsAppApproved && siteConfig.contact.publicPhoneApproved
  const waMessage = `Hello Goyal Trading Company, I would like to inquire regarding wholesale procurement of *${product.name}* (Category: ${category.name}, Family: ${family.shortName || family.name}). Please share quotation details and production lead times.`
  const whatsappUrl = `https://wa.me/${siteConfig.links.whatsapp}?text=${encodeURIComponent(waMessage)}`

  // Related products from the same category or family (excluding current product, deduplicated)
  const categoryProducts = category.subcategories
    .flatMap((sub) => sub.products)
    .filter((p) => p.id !== product.id && p.slug !== product.slug)

  const familyProducts = family.categories
    .flatMap((c) => c.subcategories.flatMap((s) => s.products))
    .filter((p) => p.id !== product.id && p.slug !== product.slug)

  const relatedProducts = Array.from(
    new Map(
      (categoryProducts.length > 0 ? categoryProducts : familyProducts).map((p) => [p.id, p])
    ).values()
  ).slice(0, 3)

  const productJsonLd = generateProductJsonLd(product, family, category)
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: family.shortName || family.name, url: `/products/${family.slug}` },
    { name: category.name, url: `/products/${family.slug}/${category.slug}` },
    { name: product.name, url: `/products/${family.slug}/${category.slug}/${product.slug}` },
  ])

  return (
    <div className="min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-3.5 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <Link href={`/products/${familySlug}`} className="hover:text-primary transition-colors">
              {family.shortName || family.name}
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <Link href={`/products/${familySlug}/${categorySlug}`} className="hover:text-primary transition-colors">
              {category.name}
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <span className="text-primary font-semibold truncate">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Product Visual */}
              <div className="lg:col-span-5 aspect-square relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-200 sticky top-28">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
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
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-sans text-xs font-semibold uppercase tracking-wider rounded-md">
                      {category.name}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-sans text-xs font-medium rounded-md">
                      {family.name}
                    </span>
                  </div>

                  <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-3 leading-tight tracking-tight">
                    {product.name}
                  </h1>

                  <p className="font-body text-base text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Available Technical Specifications */}
                {product.specifications && (
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h2 className="font-sans text-base font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles size={16} className="text-accent" />
                      <span>Technical Specifications</span>
                    </h2>
                    <div className="space-y-3">
                      {product.specifications.fabric && (
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Fabric Composition</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.fabric}</span>
                        </div>
                      )}
                      {product.specifications.gsm && (
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Fabric Weight</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.gsm} GSM</span>
                        </div>
                      )}
                      {product.specifications.threadCount && (
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Thread Count</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.threadCount}</span>
                        </div>
                      )}
                      {product.specifications.material && (
                        <div className="flex justify-between py-2 border-b border-gray-200 text-sm">
                          <span className="font-body text-gray-500">Material Type</span>
                          <span className="font-body text-gray-900 font-semibold">{product.specifications.material}</span>
                        </div>
                      )}
                      {product.specifications.features && product.specifications.features.length > 0 && (
                        <div className="pt-3">
                          <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-2.5">
                            Key Garment Features
                          </span>
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
                  <div>
                    <span className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Applications &amp; Sectors
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary Pre-filled Inquire Actions */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="primary" size="lg" fullWidth asChild>
                      <Link href={quoteUrl}>
                        <FileText size={16} className="mr-2" />
                        <span>{product.inquiryLabel || 'Request Bulk Quote'}</span>
                      </Link>
                    </Button>
                    <Button variant="secondary" size="lg" fullWidth asChild>
                      <Link href={sampleUrl}>
                        <Package size={16} className="mr-2" />
                        <span>Request Garment Sample</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Inquire Action: WhatsApp when approved, otherwise General Contact */}
                  {isWhatsAppApproved ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold rounded-lg transition-colors shadow-xs"
                    >
                      <MessageSquare size={16} />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  ) : (
                    <Button variant="secondary" size="lg" fullWidth asChild>
                      <Link href="/contact">
                        <MessageSquare size={16} className="mr-2 text-accent" />
                        <span>General Business Inquiry</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                    Related Items
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-primary">
                    More in {category.name}
                  </h3>
                </div>
                <Link
                  href={`/products/${familySlug}/${categorySlug}`}
                  className="text-xs font-semibold text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>View All {category.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 3).map((relProduct) => (
                  <ProductCard
                    key={relProduct.id}
                    product={relProduct}
                    familySlug={relProduct.familySlug as ProductFamilySlug}
                    categorySlug={relProduct.categorySlug}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Order Custom {product.name}
          </h2>
          <p className="font-body text-base text-gray-200 mb-8 leading-relaxed">
            We supply sports clubs, athletic academies, schools, and corporate organizations with customized garment manufacturing, embroidery, and bulk sizing options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Request Quote for this Product</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href={sampleUrl}
              className="inline-block px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              <span>Request Sample</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
