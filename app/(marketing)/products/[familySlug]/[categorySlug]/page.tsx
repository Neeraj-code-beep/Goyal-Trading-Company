import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategory, getAllProductFamilies, getProductFamily } from '@/data/products'
import { type ProductFamilySlug } from '@/types/product'
import { CategoryProductFilter } from '@/components/products/CategoryProductFilter'
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
      title: 'Category Not Found - Goyal Trading Company',
    }
  }

  return {
    title: `${category.name} Manufacturing - Goyal Trading Company`,
    description: category.description,
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

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary-dark/45 to-accent/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/20 to-black/25" />
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-primary/60 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <Link 
              href={`/products/${familySlug}`}
              className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors font-sans text-sm font-semibold tracking-wide"
            >
              ← Back to {family.name}
            </Link>
            <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
              {family.name}
            </span>
            <h1 className="font-sans text-display-1-mobile md:text-display-1-tablet lg:text-display-1 text-white mb-6 leading-tight">
              {category.name}
            </h1>
            <p className="font-body text-body-lg-mobile md:text-body-lg-tablet lg:text-body-lg text-gray-200 max-w-2xl leading-relaxed mb-10">
              {category.description}
            </p>
            <Link 
              href={`/contact/request-quote?category=${encodeURIComponent(category.slug)}&family=${encodeURIComponent(family.slug)}`}
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Request Category Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Subcategories & Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-sans text-caption font-semibold text-accent uppercase tracking-wider mb-4 inline-block">
                Catalog
              </span>
              <h2 className="font-sans text-display-2-mobile md:text-display-2-tablet lg:text-display-2 text-primary leading-tight">
                {category.name} Collection
              </h2>
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
            We provide custom OEM manufacturing for institutional and corporate bulk orders. Contact us to discuss your garment specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href={`/contact/request-quote?category=${encodeURIComponent(category.slug)}&family=${encodeURIComponent(family.slug)}`}
              className="inline-block px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request Quote
            </Link>
            <Link 
              href={`/contact/request-sample?category=${encodeURIComponent(category.slug)}&family=${encodeURIComponent(family.slug)}`}
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
