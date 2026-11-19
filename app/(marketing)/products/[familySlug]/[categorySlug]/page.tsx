import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategory, getAllProductFamilies, getProductFamily } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { CategoryProductFilter } from '@/components/products/CategoryProductFilter'
import { generateBreadcrumbJsonLd } from '@/lib/seo/jsonLd'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react'

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
      title: 'Category Not Found - Goyal Trading Company',
    }
  }

  return {
    title: `${category.name} Manufacturing & Wholesale - Goyal Trading Company`,
    description: category.description,
    alternates: {
      canonical: `/products/${familySlug}/${categorySlug}`,
    },
  }
}

export async function generateStaticParams() {
  const families = getAllProductFamilies()
  const params: Array<{ familySlug: string; categorySlug: string }> = []

  for (const family of families) {
    for (const category of family.categories) {
      params.push({
        familySlug: family.slug,
        categorySlug: category.slug,
      })
    }
  }

  return params
}

export default async function CategoryPage({ params }: PageProps) {
  const { familySlug, categorySlug } = await params
  const family = getProductFamily(familySlug as ProductFamilySlug)
  const category = getCategory(familySlug as ProductFamilySlug, categorySlug)

  if (!family || !category) {
    notFound()
  }

  const allProducts = category.subcategories.flatMap((sub) => sub.products)

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: family.shortName || family.name, url: `/products/${family.slug}` },
    { name: category.name, url: `/products/${family.slug}/${category.slug}` },
  ])

  const quoteUrl = `/contact/request-quote?category=${encodeURIComponent(category.slug)}&family=${encodeURIComponent(family.slug)}`
  const sampleUrl = `/contact/request-sample?category=${encodeURIComponent(category.slug)}&family=${encodeURIComponent(family.slug)}`

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
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <Link href={`/products/${family.slug}`} className="hover:text-primary transition-colors">
              {family.shortName || family.name}
            </Link>
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
            <span className="text-primary font-semibold truncate">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[42vh] lg:min-h-[48vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 40%',
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-accent/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        <div className="container mx-auto px-6 relative z-20 py-14">
          <div className="max-w-4xl">
            <Link
              href={`/products/${familySlug}`}
              className="inline-flex items-center gap-1.5 text-accent hover:text-white mb-4 transition-colors font-sans text-xs font-semibold tracking-wide uppercase"
            >
              <ArrowLeft size={14} />
              <span>Back to {family.shortName || family.name}</span>
            </Link>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              {category.name}
            </h1>

            <p className="font-body text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
              {category.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={quoteUrl}
                className="px-6 py-3.5 bg-accent text-white font-sans text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
              >
                Request Category Quote
              </Link>
              <Link
                href={sampleUrl}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold rounded-lg transition-all border border-white/30 backdrop-blur-xs"
              >
                Request Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories & Products Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-gray-100 gap-4">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                  Garment Collection
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-primary">
                  {category.name} Range
                </h2>
              </div>
              <p className="font-body text-xs text-gray-500 max-w-md">
                {allProducts.length > 0
                  ? `Showing ${allProducts.length} concrete items across ${category.subcategories.length} subcategories.`
                  : `Custom manufacturing and OEM orders available for ${category.name}.`}
              </p>
            </div>

            {/* Interactive Subcategory Filter Component Island */}
            <CategoryProductFilter
              subcategories={category.subcategories}
              allProducts={allProducts}
              familySlug={familySlug}
              categorySlug={categorySlug}
              categoryName={category.name}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Custom {category.name} Manufacturing
          </h2>
          <p className="font-body text-base text-gray-200 mb-8 leading-relaxed">
            We provide custom OEM manufacturing for institutional and corporate bulk orders. Contact us to discuss your fabric compositions, colorways, custom embroidery, and delivery milestones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={quoteUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
            >
              <FileText size={16} />
              <span>Request Quote for {category.name}</span>
            </Link>
            <Link
              href={sampleUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              <span>Order Sample</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
