import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductFamily, getAllProductFamilies } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { CategoryCard } from '@/components/products/CategoryCard'
import { ProductCard } from '@/components/products/ProductCard'
import { generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

interface PageProps {
  params: Promise<{
    familySlug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { familySlug } = await params
  const family = getProductFamily(familySlug as ProductFamilySlug)

  if (!family) {
    return {
      title: 'Product Family Not Found - Goyal Trading Company',
    }
  }

  return {
    title: `${family.name} Manufacturing & Wholesale - Goyal Trading Company`,
    description: family.description,
    alternates: {
      canonical: `/products/${familySlug}`,
    },
  }
}

export async function generateStaticParams() {
  const families = getAllProductFamilies()
  return families.map((family) => ({
    familySlug: family.slug,
  }))
}

export default async function FamilyPage({ params }: PageProps) {
  const { familySlug } = await params
  const family = getProductFamily(familySlug as ProductFamilySlug)

  if (!family) {
    notFound()
  }

  // Derived concrete products in this family
  const familyProducts = family.categories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  )

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: family.shortName || family.name, url: `/products/${family.slug}` },
  ])

  const quoteUrl = `/contact/request-quote?family=${encodeURIComponent(family.slug)}`
  const sampleUrl = `/contact/request-sample?family=${encodeURIComponent(family.slug)}`

  return (
    <div className="min-h-screen">
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Visual Breadcrumb Navigation */}
      <section className="bg-gray-50 py-3.5 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-primary font-semibold">{family.name}</span>
          </nav>
        </div>
      </section>

      {/* Premium Hero */}
      <section className="relative min-h-[45vh] lg:min-h-[50vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 40%',
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-accent/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        <div className="container mx-auto px-6 relative z-20 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-sans text-xs font-bold text-accent uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                Product Family
              </span>
              <span className="text-xs text-gray-300 font-medium">
                {family.categories.length} {family.categories.length === 1 ? 'Category' : 'Categories'}
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {family.name}
            </h1>

            <p className="font-body text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
              {family.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={quoteUrl}
                className="px-6 py-3.5 bg-accent text-white font-sans text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
              >
                Request Family Quote
              </Link>
              <Link
                href={sampleUrl}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold rounded-lg transition-all border border-white/30 backdrop-blur-xs"
              >
                Request Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-gray-100 gap-4">
              <div>
                <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  Manufacturing Lines
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-primary">
                  {family.shortName} Categories ({family.categories.length})
                </h2>
              </div>
              <p className="font-body text-xs text-gray-500 max-w-md">
                Select a category to view specifications, available subcategories, or submit tailored quotation requests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {family.categories.map((category) => (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  familySlug={family.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Products in this Family (if any exist) */}
      {familyProducts.length > 0 && (
        <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
                <div>
                  <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                    Ready For Quotation
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-primary">
                    Featured {family.shortName} Products
                  </h3>
                </div>
                <p className="font-body text-xs text-gray-500 max-w-md">
                  Concrete garment items with verified fabric compositions and specification profiles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {familyProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    familySlug={family.slug}
                    categorySlug={product.categorySlug}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* B2B Call to Action */}
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
            Institutional Procurement for {family.name}
          </h2>
          <p className="font-body text-base text-gray-200 mb-8 leading-relaxed">
            We manufacture customized bulk orders for sports teams, corporate brands, and institutions. Connect with our production desk to review fabrics, trims, and production timelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Request Quote for {family.shortName}</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              <span>Back to All Product Families</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
