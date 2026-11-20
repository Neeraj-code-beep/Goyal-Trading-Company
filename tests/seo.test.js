/**
 * Goyal Trading Company — Technical SEO Test Suite
 *
 * Verifies:
 * - Production URL management (rejects localhost, avoids fake/unverified domains)
 * - Behavior when production domain is missing (returns empty sitemap, omits URL-dependent JSON-LD, NO relative URLs)
 * - Behavior when production domain is verified (75 sitemap URLs, full absolute JSON-LD URLs)
 * - Next.js 15 App Router sitemap and robots.txt configuration
 * - Schema.org JSON-LD generation (Organization, WebSite, BreadcrumbList, Product)
 * - Strict business accuracy and privacy compliance (zero phone leaks, zero fake reviews/pricing)
 *
 * Run with:
 *   node --test tests/seo.test.js
 */

const fs = require('fs')
const path = require('path')
const assert = require('assert')
const { describe, it, beforeEach, afterEach } = require('node:test')

// -------------------------------------------------------------------
// 1. Hook TypeScript compilation using the project's installed tooling
// -------------------------------------------------------------------
const ts = require('typescript')
const Module = require('module')

const origResolve = Module._resolveFilename
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request.startsWith('@/')) {
    const relPath = request.slice(2)
    const fullPath = path.resolve(__dirname, '..', relPath)
    return origResolve.call(this, fullPath, parent, isMain, options)
  }
  return origResolve.call(this, request, parent, isMain, options)
}

require.extensions['.ts'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8')
  const compiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filename,
  })
  module._compile(compiled.outputText, filename)
}

// -------------------------------------------------------------------
// 2. Import Production Implementations
// -------------------------------------------------------------------
const { getVerifiedProductionUrl, SEO_CONFIG, constructMetadata } = require('../config/seo')
const {
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
  generateBreadcrumbJsonLd,
  generateProductJsonLd,
} = require('../lib/seo/jsonLd')
const sitemap = require('../app/sitemap').default
const robots = require('../app/robots').default
const {
  getAllProductFamilies,
  getAllCategories,
  getAllProducts,
  getProductByHierarchy,
} = require('../data/products')
const { siteConfig } = require('../config/site')

// -------------------------------------------------------------------
// 3. Test Suites
// -------------------------------------------------------------------
describe('Technical SEO — URL Management', () => {
  const originalEnvUrl = process.env.NEXT_PUBLIC_SITE_URL

  afterEach(() => {
    if (originalEnvUrl !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnvUrl
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL
    }
  })

  it('rejects undefined/empty NEXT_PUBLIC_SITE_URL', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    assert.strictEqual(getVerifiedProductionUrl(), undefined)
  })

  it('rejects localhost and 127.0.0.1 in NEXT_PUBLIC_SITE_URL', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000'
    assert.strictEqual(getVerifiedProductionUrl(), undefined)

    process.env.NEXT_PUBLIC_SITE_URL = 'http://127.0.0.1:3000'
    assert.strictEqual(getVerifiedProductionUrl(), undefined)
  })

  it('accepts and cleans valid production domain', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://verified-custom-domain.com///'
    assert.strictEqual(getVerifiedProductionUrl(), 'https://verified-custom-domain.com')
  })
})

describe('Technical SEO — Metadata Configuration', () => {
  it('defines valid centralized SEO constants', () => {
    assert.strictEqual(SEO_CONFIG.brandName, 'Goyal Trading Company')
    assert.ok(SEO_CONFIG.titleTemplate.includes('%s'))
    assert.ok(SEO_CONFIG.defaultDescription.includes('2000'))
    assert.strictEqual(SEO_CONFIG.defaultRobots.index, true)
    assert.strictEqual(SEO_CONFIG.defaultRobots.follow, true)
  })

  it('constructMetadata generates consistent metadata for routes', () => {
    const meta = constructMetadata({
      title: 'Track Suits',
      description: 'Performance activewear track suits',
      canonicalPath: '/products/track-suits-activewear',
    })

    assert.strictEqual(meta.title, 'Track Suits')
    assert.strictEqual(meta.description, 'Performance activewear track suits')
    assert.strictEqual(meta.alternates.canonical, '/products/track-suits-activewear')
    assert.strictEqual(meta.openGraph.title, 'Track Suits | Goyal Trading Company')
    assert.strictEqual(meta.twitter.title, 'Track Suits | Goyal Trading Company')
    assert.strictEqual(meta.robots.index, true)
  })

  it('constructMetadata correctly handles noIndex for 404 or missing pages', () => {
    const meta = constructMetadata({
      title: 'Not Found',
      noIndex: true,
    })

    assert.deepStrictEqual(meta.robots, { index: false, follow: false })
  })
})

describe('Technical SEO — Dynamic Sitemap (app/sitemap.ts)', () => {
  const originalEnvUrl = process.env.NEXT_PUBLIC_SITE_URL

  afterEach(() => {
    if (originalEnvUrl !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnvUrl
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL
    }
  })

  it('returns empty sitemap when production domain is not configured or is localhost', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    assert.deepStrictEqual(sitemap(), [], 'Expected empty sitemap when NEXT_PUBLIC_SITE_URL is missing')

    process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000'
    assert.deepStrictEqual(sitemap(), [], 'Expected empty sitemap when NEXT_PUBLIC_SITE_URL is localhost')
  })

  it('generates exactly 75 public routes dynamically when a valid production domain is configured', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://verified-production-domain.com'
    const entries = sitemap()
    assert.strictEqual(entries.length, 75, `Expected 75 total routes, got ${entries.length}`)

    // Verify all URLs are unique (no duplicates)
    const urlSet = new Set(entries.map((e) => e.url))
    assert.strictEqual(urlSet.size, 75, 'Found duplicate URLs in sitemap')

    // Verify every URL starts with the configured origin
    for (const e of entries) {
      assert.ok(
        e.url.startsWith('https://verified-production-domain.com/'),
        `URL does not start with verified origin: ${e.url}`
      )
    }

    // Verify presence of 11 static routes
    const expectedStaticPaths = [
      '/',
      '/products',
      '/about',
      '/contact',
      '/contact/request-quote',
      '/contact/request-sample',
      '/faq',
      '/gallery',
      '/capabilities/manufacturing',
      '/capabilities/quality-assurance',
      '/capabilities/infrastructure',
    ]

    for (const p of expectedStaticPaths) {
      const match = entries.find((e) => e.url.endsWith(p === '/' ? '/' : p))
      assert.ok(match, `Missing static path in sitemap: ${p}`)
    }

    // Verify 13 product families
    const families = getAllProductFamilies()
    assert.strictEqual(families.length, 13)
    for (const f of families) {
      const match = entries.find((e) => e.url.endsWith(`/products/${f.slug}`))
      assert.ok(match, `Missing product family path: /products/${f.slug}`)
    }

    // Verify 35 categories
    const categories = getAllCategories()
    assert.strictEqual(categories.length, 35)
    for (const c of categories) {
      const match = entries.find((e) => e.url.endsWith(`/products/${c.familySlug}/${c.slug}`))
      assert.ok(match, `Missing category path: /products/${c.familySlug}/${c.slug}`)
    }

    // Verify 16 products
    const products = getAllProducts()
    assert.strictEqual(products.length, 16)
    for (const pr of products) {
      const match = entries.find((e) =>
        e.url.endsWith(`/products/${pr.familySlug}/${pr.categorySlug}/${pr.slug}`)
      )
      assert.ok(
        match,
        `Missing product path: /products/${pr.familySlug}/${pr.categorySlug}/${pr.slug}`
      )
    }
  })
})

describe('Technical SEO — Robots Configuration (app/robots.ts)', () => {
  const originalEnvUrl = process.env.NEXT_PUBLIC_SITE_URL

  afterEach(() => {
    if (originalEnvUrl !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnvUrl
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL
    }
  })

  it('omits sitemap property when production domain is unavailable', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    const rob = robots()
    assert.ok(rob.rules)
    assert.strictEqual(rob.rules[0].allow, '/')
    assert.strictEqual(rob.sitemap, undefined, 'Sitemap should not be defined without verified domain')
  })

  it('includes verified sitemap when production domain is configured', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://verified-domain.com'
    const rob = robots()
    assert.strictEqual(rob.sitemap, 'https://verified-domain.com/sitemap.xml')
  })
})

describe('Technical SEO — Schema.org JSON-LD Verification', () => {
  const originalEnvUrl = process.env.NEXT_PUBLIC_SITE_URL

  afterEach(() => {
    if (originalEnvUrl !== undefined) {
      process.env.NEXT_PUBLIC_SITE_URL = originalEnvUrl
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL
    }
  })

  // -----------------------------------------------------------------
  // Scenario A: No verified production domain (omits URL properties, no relative URLs)
  // -----------------------------------------------------------------
  describe('Scenario A: When production domain is unavailable', () => {
    beforeEach(() => {
      delete process.env.NEXT_PUBLIC_SITE_URL
    })

    it('Organization: omits url property, preserves verified business information', () => {
      const org = generateOrganizationJsonLd()
      assert.strictEqual(org['@context'], 'https://schema.org')
      assert.strictEqual(org['@type'], 'Organization')
      assert.strictEqual(org.name, 'Goyal Trading Company')
      assert.strictEqual(org.legalName, 'Goyal Trading Company')
      assert.strictEqual(org.foundingDate, '2000')
      assert.strictEqual(org.email, 'Goyals27@yahoo.in')
      assert.strictEqual(org.address['@type'], 'PostalAddress')
      assert.strictEqual(org.address.postalCode, '110052')

      // Must omit url property
      assert.strictEqual(org.url, undefined, 'Organization url must be omitted when domain is missing')

      // Strict privacy rule: if publicPhoneApproved is false, telephone MUST NOT be present
      if (!siteConfig.contact.publicPhoneApproved) {
        assert.strictEqual(org.telephone, undefined, 'Phone leaked in Organization JSON-LD!')
      }

      // Strict verification rule: no unverified GSTIN or PAN keys
      assert.strictEqual(org.taxID, undefined)
      assert.strictEqual(org.vatID, undefined)
    })

    it('WebSite: omits url on both WebSite and publisher', () => {
      const web = generateWebSiteJsonLd()
      assert.strictEqual(web['@context'], 'https://schema.org')
      assert.strictEqual(web['@type'], 'WebSite')
      assert.strictEqual(web.name, 'Goyal Trading Company')
      assert.strictEqual(web.url, undefined, 'WebSite url must be omitted when domain is missing')
      assert.strictEqual(web.publisher.name, 'Goyal Trading Company')
      assert.strictEqual(web.publisher.url, undefined, 'Publisher url must be omitted when domain is missing')
    })

    it('BreadcrumbList: preserves names and positions, omits item URLs (no relative URLs)', () => {
      const breadcrumbs = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Catalogue', url: '/products' },
        { name: 'Track Suits', url: '/products/track-suits-activewear' },
      ])

      assert.strictEqual(breadcrumbs['@context'], 'https://schema.org')
      assert.strictEqual(breadcrumbs['@type'], 'BreadcrumbList')
      assert.strictEqual(breadcrumbs.itemListElement.length, 3)

      for (let i = 0; i < breadcrumbs.itemListElement.length; i++) {
        const item = breadcrumbs.itemListElement[i]
        assert.strictEqual(item.position, i + 1)
        assert.ok(item.name, 'Breadcrumb item must have a name')
        assert.strictEqual(item.item, undefined, `Breadcrumb item[${i}].item must be omitted rather than emitting relative URLs`)
      }
    })

    it('Product: omits url and manufacturer.url, preserves product specs (no fake offers/ratings)', () => {
      const sample = getProductByHierarchy(
        'track-suits-activewear',
        'track-suits',
        'track-suit-general'
      )
      assert.ok(sample, 'Sample product not found')

      const productJson = generateProductJsonLd(sample.product, sample.family, sample.category)
      assert.strictEqual(productJson['@context'], 'https://schema.org')
      assert.strictEqual(productJson['@type'], 'Product')
      assert.strictEqual(productJson.name, sample.product.name)
      assert.strictEqual(productJson.category, sample.category.name)
      assert.strictEqual(productJson.brand.name, 'Goyal Trading Company')
      assert.strictEqual(productJson.manufacturer.name, 'Goyal Trading Company')

      // Must omit url and manufacturer.url (no relative URLs)
      assert.strictEqual(productJson.url, undefined, 'Product url must be omitted when domain is missing')
      assert.strictEqual(productJson.manufacturer.url, undefined, 'Manufacturer url must be omitted when domain is missing')

      // Relative image path must not be emitted as relative URL
      if (productJson.image) {
        assert.ok(productJson.image.startsWith('http'), 'If image is present, it must be an absolute URL')
      }

      // Strict rule: No fake offers, ratings, reviews
      assert.strictEqual(productJson.offers, undefined, 'Offers/prices must be omitted in B2B catalog schema')
      assert.strictEqual(productJson.aggregateRating, undefined, 'No fake ratings allowed')
      assert.strictEqual(productJson.review, undefined, 'No fake reviews allowed')
    })
  })

  // -----------------------------------------------------------------
  // Scenario B: Verified production domain configured (absolute URLs with configured origin)
  // -----------------------------------------------------------------
  describe('Scenario B: When verified production domain is configured', () => {
    const verifiedDomain = 'https://verified-custom-domain.com'

    beforeEach(() => {
      process.env.NEXT_PUBLIC_SITE_URL = verifiedDomain
    })

    it('Organization: includes absolute verified url', () => {
      const org = generateOrganizationJsonLd()
      assert.strictEqual(org.url, verifiedDomain)
    })

    it('WebSite: includes absolute verified url on WebSite and publisher', () => {
      const web = generateWebSiteJsonLd()
      assert.strictEqual(web.url, verifiedDomain)
      assert.strictEqual(web.publisher.url, verifiedDomain)
    })

    it('BreadcrumbList: generates absolute URLs using configured origin', () => {
      const breadcrumbs = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Catalogue', url: '/products' },
        { name: 'Track Suits', url: '/products/track-suits-activewear' },
      ])

      assert.strictEqual(breadcrumbs.itemListElement[0].item, `${verifiedDomain}/`)
      assert.strictEqual(breadcrumbs.itemListElement[1].item, `${verifiedDomain}/products`)
      assert.strictEqual(breadcrumbs.itemListElement[2].item, `${verifiedDomain}/products/track-suits-activewear`)
    })

    it('Product: generates absolute URLs for product, manufacturer, and image', () => {
      const sample = getProductByHierarchy(
        'track-suits-activewear',
        'track-suits',
        'track-suit-general'
      )
      assert.ok(sample, 'Sample product not found')

      const productJson = generateProductJsonLd(sample.product, sample.family, sample.category)
      assert.strictEqual(
        productJson.url,
        `${verifiedDomain}/products/${sample.family.slug}/${sample.category.slug}/${sample.product.slug}`
      )
      assert.strictEqual(productJson.manufacturer.url, verifiedDomain)
      if (productJson.image) {
        assert.ok(productJson.image.startsWith(verifiedDomain) || productJson.image.startsWith('http'))
      }
    })
  })
})
