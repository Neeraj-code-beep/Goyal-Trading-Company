'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProductFamily, ProductCategory, Product, ProductFamilySlug } from '@/types/product'
import { ProductCard } from '@/components/products/ProductCard'
import { CategoryCard } from '@/components/products/CategoryCard'
import { ProductImageFallback } from '@/components/ui/ProductImageFallback'
import { Search, X, Layers, Package, ArrowRight, Sparkles, Filter } from 'lucide-react'

export interface ProductCatalogueExplorerProps {
  families: ProductFamily[]
  allCategories: ProductCategory[]
  allProducts: Product[]
}

type ViewMode = 'families' | 'products'

export function ProductCatalogueExplorer({
  families,
  allCategories,
  allProducts,
}: ProductCatalogueExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFamilySlug, setSelectedFamilySlug] = useState<string>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('families')

  // Search matches
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return null

    const matchedProducts = allProducts.filter((p) => {
      const inName = p.name.toLowerCase().includes(q)
      const inDesc = p.description.toLowerCase().includes(q)
      const inCategory = p.categorySlug.toLowerCase().includes(q)
      const inFamily = p.familySlug.toLowerCase().includes(q)
      const inTags = p.tags?.some((t) => t.toLowerCase().includes(q))
      const inFabric = p.specifications?.fabric?.toLowerCase().includes(q)
      const inGsm = p.specifications?.gsm?.toLowerCase().includes(q)
      const inFeatures = p.specifications?.features?.some((f) => f.toLowerCase().includes(q))
      return inName || inDesc || inCategory || inFamily || inTags || inFabric || inGsm || inFeatures
    })

    const matchedCategories = allCategories.filter((c) => {
      const inName = c.name.toLowerCase().includes(q)
      const inDesc = c.description.toLowerCase().includes(q)
      const inFamily = c.familySlug.toLowerCase().includes(q)
      return inName || inDesc || inFamily
    })

    const matchedFamilies = families.filter((f) => {
      const inName = f.name.toLowerCase().includes(q)
      const inShort = f.shortName.toLowerCase().includes(q)
      const inDesc = f.description.toLowerCase().includes(q)
      return inName || inShort || inDesc
    })

    return {
      products: matchedProducts,
      categories: matchedCategories,
      families: matchedFamilies,
      totalCount: matchedProducts.length + matchedCategories.length + matchedFamilies.length,
    }
  }, [searchQuery, allProducts, allCategories, families])

  // Filtered families by family slug selector when not searching
  const filteredFamilies = useMemo(() => {
    if (selectedFamilySlug === 'all') return families
    return families.filter((f) => f.slug === selectedFamilySlug)
  }, [selectedFamilySlug, families])

  // Filtered concrete products by family slug selector
  const filteredProducts = useMemo(() => {
    if (selectedFamilySlug === 'all') return allProducts
    return allProducts.filter((p) => p.familySlug === selectedFamilySlug)
  }, [selectedFamilySlug, allProducts])

  // Reset helper
  const handleClear = () => {
    setSearchQuery('')
    setSelectedFamilySlug('all')
  }

  return (
    <div className="space-y-12">
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Functional Search Bar */}
          <div className="relative flex-1">
            <label htmlFor="catalogue-search" className="sr-only">
              Search catalogue products, categories, fabrics, or specifications
            </label>
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              id="catalogue-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, categories, fabrics, or specs (e.g. Polo, Track Suit, Cotton, GSM)..."
              className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all text-primary placeholder-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* View Mode Switcher (when not searching and on all ranges) */}
          {!searchResults && selectedFamilySlug === 'all' && (
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('families')}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all ${
                  viewMode === 'families'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Product Families ({families.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('products')}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all ${
                  viewMode === 'products'
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Concrete Products ({allProducts.length})
              </button>
            </div>
          )}

          {/* Reset button when a family is active */}
          {!searchResults && selectedFamilySlug !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedFamilySlug('all')}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition-colors self-start md:self-auto"
            >
              <X size={14} />
              <span>Show All 13 Families</span>
            </button>
          )}
        </div>

        {/* Quick Family Filter Chips */}
        <div className="pt-2 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter size={14} className="text-gray-400 flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex-shrink-0 mr-1">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setSelectedFamilySlug('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium whitespace-nowrap transition-all ${
              selectedFamilySlug === 'all'
                ? 'bg-primary text-white shadow-xs'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Ranges ({families.length})
          </button>
          {families.map((fam) => (
            <button
              key={fam.slug}
              type="button"
              onClick={() => setSelectedFamilySlug(fam.slug)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium whitespace-nowrap transition-all ${
                selectedFamilySlug === fam.slug
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {fam.shortName} <span className="opacity-60 text-[10px]">({fam.categories.length})</span>
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH RESULTS VIEW */}
      {searchResults !== null ? (
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="font-sans text-xl font-bold text-primary">
              Search Results for &ldquo;{searchQuery}&rdquo;
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-gray-500">
                Found {searchResults.totalCount} {searchResults.totalCount === 1 ? 'match' : 'matches'}
              </span>
              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-semibold text-accent hover:underline"
              >
                Clear Search
              </button>
            </div>
          </div>

          {/* Empty Search State */}
          {searchResults.totalCount === 0 && (
            <div className="text-center py-16 px-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <Search size={22} />
              </div>
              <h4 className="font-sans text-lg font-bold text-primary mb-2">
                No matching products or categories found
              </h4>
              <p className="font-body text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                We couldn&rsquo;t find anything matching &ldquo;{searchQuery}&rdquo;. Try checking the spelling, or search for broader garment terms like <strong>Track Suit</strong>, <strong>Cotton</strong>, <strong>Polo</strong>, <strong>Polyester</strong>, or <strong>Uniform</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-5 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Reset Search
                </button>
                <Link
                  href="/contact/request-quote"
                  className="px-5 py-2.5 bg-white border border-gray-300 text-primary hover:bg-gray-50 font-sans text-sm font-semibold rounded-lg transition-colors"
                >
                  Submit Custom OEM Enquiry
                </Link>
              </div>
            </div>
          )}

          {/* Matching Products */}
          {searchResults.products.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Package size={18} className="text-accent" />
                <h4 className="font-sans text-base font-bold text-primary uppercase tracking-wider">
                  Products ({searchResults.products.length})
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {searchResults.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    familySlug={product.familySlug as ProductFamilySlug}
                    categorySlug={product.categorySlug}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Matching Categories */}
          {searchResults.categories.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers size={18} className="text-accent" />
                <h4 className="font-sans text-base font-bold text-primary uppercase tracking-wider">
                  Product Categories ({searchResults.categories.length})
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.categories.map((category) => (
                  <CategoryCard
                    key={category.slug}
                    category={category}
                    familySlug={category.familySlug as ProductFamilySlug}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Matching Families */}
          {searchResults.families.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers size={18} className="text-accent" />
                <h4 className="font-sans text-base font-bold text-primary uppercase tracking-wider">
                  Product Families ({searchResults.families.length})
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.families.map((family) => (
                  <FamilyCard key={family.slug} family={family} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : selectedFamilySlug !== 'all' ? (
        /* FOCUSED FAMILY EXPLORER VIEW */
        (() => {
          const activeFamily = families.find((f) => f.slug === selectedFamilySlug)
          if (!activeFamily) return null

          return (
            <div className="space-y-12">
              {/* Active Family Header */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    <span>Product Family Range</span>
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-primary mb-2">
                    {activeFamily.name}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
                    {activeFamily.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-primary">
                      {activeFamily.categories.length} {activeFamily.categories.length === 1 ? 'Category' : 'Categories'}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-primary">
                      {filteredProducts.length} {filteredProducts.length === 1 ? 'Concrete Product' : 'Concrete Products'} Available
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                  <Link
                    href={`/products/${activeFamily.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white font-sans text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-xs"
                  >
                    <span>View Dedicated Family Page</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={`/contact/request-quote?family=${encodeURIComponent(activeFamily.slug)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-accent text-white font-sans text-xs font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-xs"
                  >
                    <span>Request Family Quote</span>
                  </Link>
                </div>
              </div>

              {/* Categories in this family */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-sans text-xl font-bold text-primary">
                    {activeFamily.shortName} Categories ({activeFamily.categories.length})
                  </h4>
                  <span className="text-xs text-gray-500">Select a category to view subcategories</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeFamily.categories.map((category) => (
                    <CategoryCard
                      key={category.slug}
                      category={category}
                      familySlug={activeFamily.slug}
                    />
                  ))}
                </div>
              </div>

              {/* Concrete products in this family */}
              {filteredProducts.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-sans text-xl font-bold text-primary">
                      Available Products in {activeFamily.shortName} ({filteredProducts.length})
                    </h4>
                    <span className="text-xs text-gray-500">Ready for instant quote and sample enquiry</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        familySlug={activeFamily.slug}
                        categorySlug={product.categorySlug}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 px-6 bg-white rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-sans text-base font-bold text-primary mb-1">
                    Custom OEM Manufacturing for {activeFamily.name}
                  </h4>
                  <p className="font-body text-xs text-gray-500 max-w-md mx-auto mb-4 leading-relaxed">
                    Products in this family are manufactured to custom buyer specifications. Submit your fabric, GSM, and branding requirements.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href={`/contact/request-quote?family=${encodeURIComponent(activeFamily.slug)}`}
                      className="px-4 py-2 bg-accent text-white font-sans text-xs font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Request Custom Quotation
                    </Link>
                    <Link
                      href={`/contact/request-sample?family=${encodeURIComponent(activeFamily.slug)}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 font-sans text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Request Fabric Sample
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )
        })()
      ) : viewMode === 'products' ? (
        /* CONCRETE PRODUCTS VIEW */
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-sans text-2xl font-bold text-primary">
                Individual Products ({filteredProducts.length})
              </h3>
              <p className="font-body text-sm text-gray-500 mt-1">
                Concrete product specifications available for immediate institutional quotation and sampling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                familySlug={product.familySlug as ProductFamilySlug}
                categorySlug={product.categorySlug}
              />
            ))}
          </div>
        </div>
      ) : (
        /* PRODUCT FAMILIES VIEW (Default) */
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFamilies.map((family) => (
              <FamilyCard key={family.slug} family={family} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Clean, robust Product Family Card component with accurate category counts
 */
function FamilyCard({ family }: { family: ProductFamily }) {
  const [imageError, setImageError] = useState(false)
  const categoryCount = family.categories.length
  const familyProducts = family.categories.flatMap((c) => c.subcategories.flatMap((s) => s.products))
  const concreteCount = familyProducts.length
  const hasValidImage = Boolean(family.heroImage && family.heroImage.trim() !== '' && !imageError)

  return (
    <Link
      href={`/products/${family.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-accent/50 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
        {hasValidImage ? (
          <Image
            src={family.heroImage!}
            alt={family.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            onError={() => setImageError(true)}
          />
        ) : (
          <ProductImageFallback
            categoryName={family.slug}
            aspectRatio="landscape"
            className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Dynamic Verified Stats Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-primary font-sans text-xs font-semibold rounded-md shadow-xs">
            <Layers size={11} className="text-accent" />
            <span>{categoryCount} {categoryCount === 1 ? 'Category' : 'Categories'}</span>
          </span>
          {concreteCount > 0 ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/90 text-white font-sans text-xs font-semibold rounded-md shadow-xs">
              <Package size={11} className="text-accent" />
              <span>{concreteCount} {concreteCount === 1 ? 'Product' : 'Products'}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent/90 text-white font-sans text-xs font-semibold rounded-md shadow-xs">
              <Sparkles size={11} />
              <span>Custom OEM</span>
            </span>
          )}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-white font-semibold">
            <ArrowRight size={16} />
            <span className="font-body text-sm">Explore {family.shortName}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-sans text-xl font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
          {family.name}
        </h3>
        <p className="font-body text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
          {family.description}
        </p>

        {/* Category tags preview */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
          {family.categories.slice(0, 3).map((cat) => (
            <span
              key={cat.slug}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[11px] font-medium"
            >
              {cat.name}
            </span>
          ))}
          {family.categories.length > 3 && (
            <span className="px-1.5 py-0.5 text-gray-400 text-[11px]">
              +{family.categories.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
