import type { MetadataRoute } from 'next'
import { getAllProductFamilies, getAllCategories, getAllProducts } from '@/data/products'
import { getVerifiedProductionUrl } from '@/config/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getVerifiedProductionUrl()

  // If a verified production domain is not configured, do not emit guessed or localhost URLs
  if (!baseUrl) {
    return []
  }

  const lastModified = new Date()

  // 11 Core Marketing and Content Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/request-quote`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/request-sample`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/capabilities/manufacturing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/capabilities/quality-assurance`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/capabilities/infrastructure`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // 13 Product Families
  const families = getAllProductFamilies()
  const familyRoutes: MetadataRoute.Sitemap = families.map((family) => ({
    url: `${baseUrl}/products/${family.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 35 Product Categories
  const categories = getAllCategories()
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/products/${category.familySlug}/${category.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 16 Concrete Products
  const products = getAllProducts()
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.familySlug}/${product.categorySlug}/${product.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...familyRoutes, ...categoryRoutes, ...productRoutes]
}
