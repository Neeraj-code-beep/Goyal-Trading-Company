# Goyal Trading Company — Sprint 1 Typed Component Contracts
- **Document:** Technical Interface Contracts & Coordination Specification
- **Author:** Technical Lead
- **Consumer:** UI/UX Lead (Ashmita) & Frontend Developers
- **Scope:** Shared B2B Presentation & Interaction Components
- **Version:** 1.0.0-Sprint-1

---

## 1. Collaboration & Ownership Model

To prevent merge conflicts and preserve separation of concerns between branches:
- **Ashmita (UI/UX Lead):** Owns component JSX markup, styling (Tailwind CSS classes), responsive visual layout, hover states, animations (Framer Motion), and theme tokens. She works on `feature/design-system-ui`.
- **Technical Lead:** Owns TypeScript interface definitions, prop validation, data fetching/lookup adapters, form action handlers, query parameter parsers, and route integration. Works on `feature/catalogue-functionality`.

---

## 2. Component Contract 1: `ProductCard`

### 2.1 Description
Displays a single B2B product card within product listings, category pages, and search/filter grids. Must gracefully handle missing images and provide direct links to product detail and quote flows.

### 2.2 TypeScript Interface
```typescript
import { Product, ProductFamilySlug } from '@/types/product'

export interface ProductCardProps {
  /**
   * The core product data object.
   */
  product: Product

  /**
   * Parent family slug for deterministic URL building.
   */
  familySlug: ProductFamilySlug

  /**
   * Parent category slug for deterministic URL building.
   */
  categorySlug: string

  /**
   * Visual density mode.
   * - 'standard': Default 4:5 aspect ratio card with specs summary.
   * - 'compact': Minimal card for dense catalog grids or sidebars.
   * - 'featured': Highlighted editorial presentation with badge.
   * @default 'standard'
   */
  variant?: 'standard' | 'compact' | 'featured'

  /**
   * Image loading priority for LCP optimization.
   * @default false
   */
  priority?: boolean

  /**
   * Optional custom CSS class name for grid alignment.
   */
  className?: string

  /**
   * Optional analytics or interaction callback.
   */
  onCardClick?: (product: Product) => void
}
```

### 2.3 Behavior & State Contract
- **Link URL:** Always resolves to `/products/${familySlug}/${categorySlug}/${product.slug}`.
- **Image Handling & Fallback:**
  - If `product.image` is defined and valid: renders `<Image src={product.image} alt={product.name} fill className="object-cover" />`.
  - If `product.image` is `undefined`, `null`, or empty: **MUST** render `<ProductImageFallback categoryName={categorySlug} productName={product.name} aspectRatio="portrait" />`.
  - Must never pass an empty string `""` to `next/image`.
- **Inquiry Action:**
  - Secondary quick-action link opens `/contact/request-quote?product=${encodeURIComponent(product.name)}&family=${familySlug}&category=${categorySlug}`.
- **Loading State:** Skeleton card with `animate-pulse`, grey image box, and two skeleton text bars.
- **Error State:** In case of image load error (`onError`), toggles internal state to show `ProductImageFallback`.

---

## 3. Component Contract 2: `CategoryCard`

### 3.1 Description
Displays an industrial category tile within a product family page or homepage category overview, indicating manufacturing capability, subcategory count, and product volume.

### 3.2 TypeScript Interface
```typescript
import { ProductCategory, ProductFamilySlug } from '@/types/product'

export interface CategoryCardProps {
  /**
   * Category data object.
   */
  category: ProductCategory

  /**
   * Parent family slug for routing.
   */
  familySlug: ProductFamilySlug

  /**
   * Total count of available concrete products in this category.
   * If omitted, derived from subcategories.flatMap(s => s.products).length.
   */
  productCount?: number

  /**
   * Display mode.
   * - 'card': Standard 4:3 card with title, description, and hover zoom.
   * - 'pill': Compact horizontal badge for quick navigation lists.
   * @default 'card'
   */
  variant?: 'card' | 'pill'

  /**
   * Optional custom styling.
   */
  className?: string
}
```

### 3.3 Behavior & State Contract
- **Link URL:** Always resolves to `/products/${familySlug}/${category.slug}`.
- **Image Handling:**
  - If `category.heroImage` or `category.image` exists: renders `<Image src={src} alt={category.name} fill className="object-cover" />`.
  - If missing (currently true for all 35 categories): renders `<ProductImageFallback categoryName={category.slug} aspectRatio="landscape" />`.
- **Empty Category Indication:** If `productCount === 0`, displays a discrete "Custom OEM Orders" capability badge instead of a misleading "0 Products" label.
- **Hover Motion:** Subtle card lift (`-translate-y-1.5`) and border glow in `#ED8936` (accent) with 300ms transition.

---

## 4. Component Contract 3: `ProductGallery`

### 4.1 Description
Interactive media viewer for product detail pages (`/products/[familySlug]/[categorySlug]/[productSlug]`). Supports single hero view, multiple gallery thumbnails, zoom trigger, and robust placeholder when no physical photography is yet available.

### 4.2 TypeScript Interface
```typescript
export interface ProductGalleryProps {
  /**
   * Product display name for accessible alt tags.
   */
  productName: string

  /**
   * Category identifier for contextual fallback icon selection.
   */
  categorySlug: string

  /**
   * Primary hero image URL (optional).
   */
  primaryImage?: string

  /**
   * Additional gallery images (optional).
   */
  galleryImages?: string[]

  /**
   * Aspect ratio constraint.
   * @default 'square'
   */
  aspectRatio?: 'square' | 'portrait' | 'landscape'

  /**
   * Optional custom CSS class.
   */
  className?: string
}
```

### 4.3 Behavior & State Contract
- **No Images Case (Current Codebase Reality):**
  - If neither `primaryImage` nor `galleryImages` has entries: renders an elegant full-bleed `ProductImageFallback` with garment category icon, dynamic product monogram initials, and a subtle "Industrial Sample Preview" watermark.
  - Thumbnails tray is completely hidden when total available images is $\le 1$.
- **Multiple Images Case:**
  - Thumbnails row below or to the side. Clicking a thumbnail activates it with animated fade/slide.
  - Keyboard accessible: Arrow keys navigate between active gallery items.
  - Active thumbnail highlighted with `ring-2 ring-accent`.
- **Loading State:** Shimmering placeholder box with 1:1 aspect ratio.

---

## 5. Component Contract 4: `QuoteForm`

### 5.1 Description
B2B institutional inquiry and wholesale quote request form. Captures buyer contact details, organization name, target product/family, estimated order quantity, and custom specifications.

### 5.2 TypeScript Interface
```typescript
export interface QuoteFormData {
  name: string
  company: string
  email: string
  phone: string
  productInterest: string
  familySlug?: string
  categorySlug?: string
  estimatedQuantity: string
  specificationsMessage: string
  targetDeliveryDate?: string
}

export interface QuoteFormProps {
  /**
   * Pre-filled initial values derived from URL query parameters.
   * e.g., ?product=Track+Suit&family=track-suits-activewear&category=track-suits
   */
  initialData?: Partial<QuoteFormData>

  /**
   * Server action or async submit handler.
   */
  onSubmit?: (data: QuoteFormData) => Promise<{ success: boolean; message?: string }>

  /**
   * Form layout style.
   * - 'full': Multi-column layout for standalone /contact/request-quote page.
   * - 'modal': Compact layout for quick quote modal dialogs.
   * @default 'full'
   */
  variant?: 'full' | 'modal'

  /**
   * Callback fired on successful submission.
   */
  onSuccess?: () => void

  /**
   * Optional custom container styling.
   */
  className?: string
}
```

### 5.3 Behavior & State Contract
- **Pre-fill Synchronization:** On mount, automatically populates `productInterest`, `familySlug`, and `categorySlug` if present in `initialData` or `useSearchParams()`.
- **Validation Rules:**
  - `name`: Required, min 2 chars.
  - `email`: Required, valid email format.
  - `phone`: Required, 10-digit Indian standard or valid international format.
  - `company`: Required for B2B institutional records.
  - `estimatedQuantity`: Required dropdown or number input (e.g., "50-100", "100-500", "500-1000", "1000+").
  - `specificationsMessage`: Required, min 10 chars.
- **States:**
  - **Submitting:** Submit button displays spinning loader, all fields disabled.
  - **Success:** Replaces form with confirmed submission card: "Quote Request Received — Our technical sales team will review your specifications and contact you within 24-48 hours."
  - **Error:** Inline accessible error callout (`role="alert"`) with actionable instructions.

---

## 6. Component Contract 5: `SampleRequestForm`

### 6.1 Description
Garment sample ordering form for institutional procurement teams, academies, and B2B buyers requesting fabric swatches or physical garment samples prior to bulk production.

### 6.2 TypeScript Interface
```typescript
export interface SampleFormData {
  name: string
  company: string
  email: string
  phone: string
  deliveryAddress: string
  city: string
  postalCode: string
  productInterest: string
  sampleType: 'fabric-swatch' | 'prototype-garment' | 'size-set'
  customRequirements?: string
}

export interface SampleRequestFormProps {
  /**
   * Pre-filled initial values from product context.
   */
  initialData?: Partial<SampleFormData>

  /**
   * Server submission handler.
   */
  onSubmit?: (data: SampleFormData) => Promise<{ success: boolean; message?: string }>

  /**
   * Visual density variant.
   * @default 'full'
   */
  variant?: 'full' | 'inline'

  /**
   * Callback on submission success.
   */
  onSuccess?: () => void

  /**
   * Custom styling.
   */
  className?: string
}
```

### 6.3 Behavior & State Contract
- **Conservative Turnaround Copy Rule:**
  - Must **NEVER** promise rigid claims like "guaranteed 3-5 business days" or "delivery within 5-7 days".
  - Copy must read: *"Our production coordinator will contact you to confirm sample availability, dispatch schedule, and delivery logistics."*
- **Address Validation:** Street, city, and 6-digit PIN code required for physical parcel routing.
- **Sample Type Selector:** Segmented control or radio cards allowing the buyer to select Swatch vs. Full Prototype.

---

## 7. Component Contract 6: `SectionHeading`

### 7.1 Description
Standardized editorial section header used across marketing, catalog, and capability pages to maintain visual rhythm, consistent typography scales, and uppercase tracking tags.

### 7.2 TypeScript Interface
```typescript
import { ReactNode } from 'react'

export interface SectionHeadingProps {
  /**
   * Small uppercase kicker badge/tag above the title.
   * e.g., 'Product Catalog', 'Technical Specifications', 'B2B Wholesale'
   */
  tag?: string

  /**
   * Primary section heading text or nodes.
   */
  title: ReactNode

  /**
   * Optional supporting subtitle or descriptive paragraph.
   */
  subtitle?: ReactNode

  /**
   * Text alignment.
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Theme mode for dark/light backgrounds.
   * - 'light': Dark text on light background (Navy heading, muted grey subtitle).
   * - 'dark': White text on Navy/dark background (White heading, light grey subtitle).
   * @default 'light'
   */
  theme?: 'light' | 'dark'

  /**
   * Heading HTML tag level for semantic accessibility hierarchy.
   * @default 'h2'
   */
  as?: 'h1' | 'h2' | 'h3'

  /**
   * Optional action button or link aligned with the header.
   */
  action?: ReactNode

  /**
   * Container styling.
   */
  className?: string
}
```

### 7.3 Behavior & State Contract
- **Typography Scale:**
  - `tag`: `font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent`
  - `title`: `font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary` (or `text-white` when `theme='dark'`)
  - `subtitle`: `font-body text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed`
- **Responsive Stacking:** When `action` is provided and `align='left'`, wraps on mobile (`flex-col`) and distributes horizontally on `md:` breakpoints (`flex-row justify-between items-end`).

---

## 8. Summary of Shared Component Responsibilities

| Component | Ashmita (UI/UX) Responsibility | Technical Lead Responsibility |
|---|---|---|
| **ProductCard** | Card hover effects, badge styling, fallback placeholder layout, typography | Prop typing, canonical URL formation, image error state handling, inquiry query generation |
| **CategoryCard** | Border gradients, zoom hover effects, responsive aspect ratio | Prop typing, empty category capability badge logic, family-to-category link routing |
| **ProductGallery** | Visual layout, thumbnail carousel strip, zoom cursor, transition motion | Multi-image state, fallback asset trigger, alt tag accessibility, keyboard handlers |
| **QuoteForm** | Form field layout, input styling, focus rings, submit button micro-interactions | TypeScript data contract, field validation schemas, query param parsing, server action |
| **SampleRequestForm** | Segmented sample type selectors, radio button cards, confirmation card styling | Validation, parcel address verification, conservative copy enforcement, submission handling |
| **SectionHeading** | Font size scales, tracking, kicker badge styling, light/dark theme tokens | Semantic HTML heading levels (`h1`/`h2`/`h3`), prop interface, responsive layout logic |
