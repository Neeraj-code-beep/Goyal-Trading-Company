import { Metadata } from 'next'
import { getAllProductFamilies, getAllCategories, getAllProducts, getCatalogueStats } from '@/data/products'
import Link from 'next/link'
import { ProductCatalogueExplorer } from '@/components/products/ProductCatalogueExplorer'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { constructMetadata } from '@/config/seo'

export const metadata: Metadata = constructMetadata({
  title: 'B2B Product Catalogue',
  description:
    'Explore our complete B2B manufacturing catalogue: 13 product families, 35 garment categories, including sportswear, track suits, uniforms, and corporate apparel.',
  canonicalPath: '/products',
})

export default function ProductsPage() {
  const families = getAllProductFamilies()
  const allCategories = getAllCategories()
  const allProducts = getAllProducts()
  const stats = getCatalogueStats()

  return (
    <div className="min-h-screen">
      {/* Premium Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80)',
              objectPosition: 'center 35%',
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-accent/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 relative z-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left - Content */}
            <div className="lg:col-span-7">
              <span className="font-sans text-xs font-bold text-accent uppercase tracking-widest mb-3 inline-block bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                B2B Manufacturer & Supplier Catalogue
              </span>
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                B2B Garment &amp; Apparel Manufacturing Catalogue
              </h1>
              <p className="font-body text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8">
                Comprehensive manufacturing catalogue covering sports activewear, institutional uniforms, corporate apparel, and custom OEM bulk orders based on client specifications.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/request-quote"
                  className="px-6 py-3.5 bg-accent text-white font-sans text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Request Bulk Quotation
                </Link>
                <Link
                  href="/contact/request-sample"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold rounded-lg transition-all border border-white/30 backdrop-blur-xs"
                >
                  Request Fabric Sample
                </Link>
              </div>
            </div>

            {/* Right - Verified Catalogue Stats */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl space-y-6">
                <h3 className="font-sans text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck size={18} className="text-accent" />
                  <span>Catalogue Scope</span>
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                    <div className="font-sans text-3xl font-extrabold text-white">{stats.familyCount}</div>
                    <div className="font-body text-xs text-gray-300 mt-1">Product Families</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                    <div className="font-sans text-3xl font-extrabold text-accent">{stats.categoryCount}</div>
                    <div className="font-body text-xs text-gray-300 mt-1">Categories</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                    <div className="font-sans text-3xl font-extrabold text-white">{stats.productCount}</div>
                    <div className="font-body text-xs text-gray-300 mt-1">Concrete Items</div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-gray-300 leading-relaxed border-t border-white/10">
                  <p>
                    All items support custom GSM, embroidery, heat-transfer printing, and institutional bulk grading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalogue Explorer Section */}
      <section className="py-16 sm:py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                Discovery &amp; Specifications
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
                Explore Product Families &amp; Categories
              </h2>
              <p className="font-body text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                Filter by apparel family, search by garment specifications, or browse concrete products ready for wholesale order inquiries.
              </p>
            </div>

            <ProductCatalogueExplorer
              families={families}
              allCategories={allCategories}
              allProducts={allProducts}
            />
          </div>
        </div>
      </section>

      {/* All Categories Quick Access Directory */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-100 gap-4">
              <div>
                <span className="font-sans text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  Directory
                </span>
                <h3 className="font-sans text-2xl font-bold text-primary">
                  All 35 Manufacturing Categories
                </h3>
              </div>
              <p className="font-body text-xs text-gray-500 max-w-sm">
                Direct access to specialized garment categories across our 13 industrial product families.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {allCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.familySlug}/${category.slug}`}
                  className="p-4 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-accent/40 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="min-w-0">
                      <h4 className="font-sans text-sm font-semibold text-primary truncate group-hover:text-accent transition-colors">
                        {category.name}
                      </h4>
                      <p className="font-body text-xs text-gray-400 capitalize truncate mt-0.5">
                        {category.familySlug.replace(/-/g, ' ')}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Custom OEM Callout */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <span className="font-sans text-xs font-bold text-accent uppercase tracking-widest mb-3 inline-block">
            Institutional Procurement &amp; Bulk Supply
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Need Custom Apparel Specifications?
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-200 mb-8 leading-relaxed">
            We manufacture customized garments for sports clubs, educational institutions, academies, and corporate organizations. Share your fabric specifications, GSM requirements, and target schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-sans font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Request Wholesale Quotation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact/request-sample"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-sans font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              <span>Order Fabric Swatch or Sample</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
