import { ProductFamilySlug } from '@/types/product'
import { getAllProductFamilies, getAllCategories, getAllProducts } from '@/data/products'

export interface VerifiedCataloguePrefill {
  isValid: boolean
  product?: {
    id: string
    slug: string
    name: string
  }
  family?: {
    slug: ProductFamilySlug
    name: string
  }
  category?: {
    slug: string
    name: string
  }
}

/**
 * Resolves and validates URL query parameters against actual catalogue records.
 * Never trusts arbitrary URL inputs. Unrecognized values are safely discarded.
 */
export function resolveCataloguePrefill(
  rawParams: Record<string, string | string[] | undefined>
): VerifiedCataloguePrefill {
  const getParam = (key: string): string | undefined => {
    const val = rawParams[key]
    if (Array.isArray(val)) return val[0]
    return typeof val === 'string' ? val.trim() : undefined
  }

  const rawProduct = getParam('product')
  const rawFamily = getParam('family')
  const rawCategory = getParam('category')

  let matchedProduct: { id: string; slug: string; name: string } | undefined
  let matchedFamily: { slug: ProductFamilySlug; name: string } | undefined
  let matchedCategory: { slug: string; name: string } | undefined

  const allProducts = getAllProducts()
  const allFamilies = getAllProductFamilies()
  const allCategories = getAllCategories()

  // 1. Resolve product if specified
  if (rawProduct) {
    const p = allProducts.find(
      prod =>
        prod.slug === rawProduct ||
        prod.name.toLowerCase() === rawProduct.toLowerCase() ||
        prod.id === rawProduct
    )
    if (p) {
      matchedProduct = { id: p.id, slug: p.slug, name: p.name }
      const f = allFamilies.find(fam => fam.slug === p.familySlug)
      if (f) matchedFamily = { slug: f.slug, name: f.name }
      const c = allCategories.find(cat => cat.slug === p.categorySlug && cat.familySlug === p.familySlug)
      if (c) matchedCategory = { slug: c.slug, name: c.name }
    }
  }

  // 2. Resolve family if not yet bound
  if (!matchedFamily && rawFamily) {
    const f = allFamilies.find(fam => fam.slug === rawFamily)
    if (f) {
      matchedFamily = { slug: f.slug, name: f.name }
    }
  }

  // 3. Resolve category if not yet bound
  if (!matchedCategory && rawCategory) {
    const c = matchedFamily
      ? allCategories.find(cat => cat.slug === rawCategory && cat.familySlug === matchedFamily!.slug)
      : allCategories.find(cat => cat.slug === rawCategory)

    if (c) {
      matchedCategory = { slug: c.slug, name: c.name }
      if (!matchedFamily) {
        const parentFam = allFamilies.find(fam => fam.slug === c.familySlug)
        if (parentFam) {
          matchedFamily = { slug: parentFam.slug, name: parentFam.name }
        }
      }
    }
  }

  const isValid = Boolean(matchedProduct || matchedFamily || matchedCategory)

  return {
    isValid,
    product: matchedProduct,
    family: matchedFamily,
    category: matchedCategory,
  }
}
