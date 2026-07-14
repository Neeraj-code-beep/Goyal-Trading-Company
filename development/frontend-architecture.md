# Frontend Architecture
## Goyal Trading Company - Complete Engineering Specification

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Frontend Architecture for Implementation  
**Framework:** Next.js 14+ App Router  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Animations:** Framer Motion  
**Forms:** React Hook Form + Zod

---

# 1 Project Folder Structure

## Root Structure

```
goyal-trading-company/
├── app/                          # Next.js App Router (pages and layouts)
│   ├── (marketing)/              # Marketing pages group
│   │   ├── layout.tsx            # Marketing layout wrapper
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # About pages
│   │   ├── products/             # Product pages
│   │   ├── capabilities/         # Capability pages
│   │   ├── quality/              # Quality process pages
│   │   ├── factory/              # Factory pages
│   │   ├── clients/              # Client pages
│   │   └── contact/              # Contact pages
│   ├── (auth)/                   # Auth pages group (future CMS)
│   ├── api/                      # API routes
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── not-found.tsx             # 404 page
├── components/                   # React components
│   ├── layout/                   # Layout components
│   ├── shared/                   # Shared components
│   ├── homepage/                 # Homepage-specific components
│   ├── products/                 # Product components
│   ├── animations/               # Animation components
│   ├── forms/                    # Form components
│   └── ui/                       # UI primitives
├── lib/                          # Utility libraries
│   ├── utils.ts                  # General utilities
│   ├── validations.ts            # Zod schemas
│   ├── constants.ts              # Constants and config
│   └── helpers.ts               # Helper functions
├── hooks/                        # Custom React hooks
│   ├── useScroll.ts              # Scroll hooks
│   ├── useAnimation.ts           # Animation hooks
│   ├── useForm.ts                # Form hooks
│   └── useAnalytics.ts           # Analytics hooks
├── data/                         # Static data (pre-CMS)
│   ├── products.ts               # Product data
│   ├── testimonials.ts           # Testimonial data
│   ├── certifications.ts        # Certification data
│   ├── team.ts                   # Team data
│   └── seo.ts                    # SEO metadata
├── types/                        # TypeScript types
│   ├── product.ts                # Product types
│   ├── testimonial.ts            # Testimonial types
│   ├── certification.ts         # Certification types
│   └── common.ts                 # Common types
├── styles/                       # Additional styles
│   └── animations.css             # Animation-specific styles
├── public/                       # Static assets
│   ├── images/                   # Images
│   │   ├── factory/              # Factory images
│   │   ├── products/             # Product images
│   │   ├── team/                 # Team photos
│   │   └── clients/              # Client logos
│   ├── icons/                    # SVG icons
│   └── fonts/                    # Custom fonts
├── config/                       # Configuration files
│   ├── site.ts                   # Site configuration
│   ├── navigation.ts             # Navigation configuration
│   └── analytics.ts              # Analytics configuration
├── middleware.ts                 # Next.js middleware
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                 # Dependencies
```

## Folder Explanations

### app/
**Purpose:** Next.js App Router directory for pages, layouts, and API routes  
**Why:** App Router is the modern Next.js routing system with built-in optimizations, server components, and streaming support.

### app/(marketing)/
**Purpose:** Route group for marketing pages  
**Why:** Route groups allow shared layouts without affecting URL structure. All marketing pages share the same layout (navbar, footer).

### app/(auth)/
**Purpose:** Route group for authentication pages (future CMS)  
**Why:** Separates auth pages from marketing pages with different layouts and security requirements.

### components/
**Purpose:** All React components organized by category  
**Why:** Component organization by responsibility makes the codebase maintainable and scalable.

### components/layout/
**Purpose:** Layout components (Navbar, Footer, Sidebar)  
**Why:** Layout components are reused across pages and provide consistent structure.

### components/shared/
**Purpose:** Shared components used across multiple pages (Buttons, Cards, Modals)  
**Why:** Shared components reduce duplication and ensure consistency.

### components/homepage/
**Purpose:** Homepage-specific components (Hero, Stats, Featured Products)  
**Why:** Homepage components are unique to the homepage and not reused elsewhere.

### components/products/
**Purpose:** Product-related components (ProductCard, ProductGrid, ProductFilter)  
**Why:** Product components handle product display and filtering logic.

### components/animations/
**Purpose:** Animation components (ScrollReveal, Counter, Parallax)  
**Why:** Animation components encapsulate Framer Motion logic for reusability.

### components/forms/
**Purpose:** Form components (ContactForm, QuoteForm, InquiryForm)  
**Why:** Form components handle validation, submission, and error states.

### components/ui/
**Purpose:** UI primitives (Input, Button, Select, Checkbox)  
**Why:** UI primitives are the building blocks for other components and ensure design system consistency.

### lib/
**Purpose:** Utility libraries and helper functions  
**Why:** Utilities keep components clean by extracting reusable logic.

### hooks/
**Purpose:** Custom React hooks  
**Why:** Custom hooks encapsulate reusable stateful logic (scroll, animation, form state).

### data/
**Purpose:** Static data files (pre-CMS phase)  
**Why:** Static data allows development without a CMS. Will be replaced by CMS API calls in the future.

### types/
**Purpose:** TypeScript type definitions  
**Why:** TypeScript types ensure type safety and improve developer experience.

### styles/
**Purpose:** Additional CSS files beyond Tailwind  
**Why:** Some styles (animations, custom fonts) are better expressed in CSS.

### public/
**Purpose:** Static assets served directly  
**Why:** Public assets are served at the root URL and are cached by default.

### config/
**Purpose:** Configuration files for site settings  
**Why:** Centralized configuration makes it easy to update site-wide settings.

---

# 2 Component Architecture

## Layout Components

### Navbar
**Location:** `components/layout/Navbar.tsx`  
**Responsibilities:**
- Primary site navigation
- Sticky positioning on scroll
- Mega menu for Products and Capabilities
- Mobile menu toggle
- CTA button (Request a Quote)

**Props:**
```typescript
interface NavbarProps {
  isSticky?: boolean;
  currentPath?: string;
}
```

**Dependencies:**
- `config/navigation.ts` - Navigation structure
- `components/ui/Button` - CTA button
- `components/shared/MegaMenu` - Mega menu component

---

### Footer
**Location:** `components/layout/Footer.tsx`  
**Responsibilities:**
- Site footer with links
- Contact information
- Social media links
- Copyright notice
- Newsletter signup

**Props:**
```typescript
interface FooterProps {
  showNewsletter?: boolean;
}
```

**Dependencies:**
- `config/navigation.ts` - Footer links
- `components/forms/NewsletterForm` - Newsletter signup

---

### AnnouncementBar
**Location:** `components/layout/AnnouncementBar.tsx`  
**Responsibilities:**
- Display announcements at top of page
- Close functionality with localStorage persistence
- Optional link to announcement details

**Props:**
```typescript
interface AnnouncementBarProps {
  message: string;
  link?: string;
  linkText?: string;
  dismissible?: boolean;
}
```

---

## Shared Components

### Button
**Location:** `components/ui/Button.tsx`  
**Responsibilities:**
- Primary, secondary, and tertiary button variants
- Hover, active, disabled states
- Loading state with spinner
- Full width option for mobile

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

---

### Card
**Location:** `components/shared/Card.tsx`  
**Responsibilities:**
- Card container with consistent styling
- Hover lift effect
- Border radius and shadow
- Responsive padding

**Props:**
```typescript
interface CardProps {
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

---

### Modal
**Location:** `components/shared/Modal.tsx`  
**Responsibilities:**
- Modal overlay and container
- Open/close animations
- Close on backdrop click
- Close on Escape key
- Focus trap for accessibility

**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

---

### Breadcrumb
**Location:** `components/shared/Breadcrumb.tsx`  
**Responsibilities:**
- Display navigation breadcrumb
- Schema.org structured data
- Mobile-friendly display

**Props:**
```typescript
interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}
```

---

## Homepage Components

### Hero
**Location:** `components/homepage/Hero.tsx`  
**Responsibilities:**
- Hero section with background image
- Overlay gradient
- Staggered content animation
- Parallax background effect
- Primary and secondary CTAs
- Trust signals (certifications, capacity metrics)

**Props:**
```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTAs: Array<{ text: string; href: string }>;
  backgroundImage: string;
}
```

**Dependencies:**
- `components/animations/ScrollReveal` - Content animation
- `components/animations/Parallax` - Background parallax
- `components/ui/Button` - CTAs

---

### Stats
**Location:** `components/homepage/Stats.tsx`  
**Responsibilities:**
- Display key metrics (capacity, years, clients, delivery rate)
- Counter animation on scroll
- Icon display
- Responsive grid layout

**Props:**
```typescript
interface StatsProps {
  stats: Array<{
    icon: string;
    number: number;
    label: string;
    description?: string;
  }>;
}
```

**Dependencies:**
- `components/animations/Counter` - Counter animation
- `components/animations/ScrollReveal` - Staggered reveal

---

### FeaturedProducts
**Location:** `components/homepage/FeaturedProducts.tsx`  
**Responsibilities:**
- Display featured products grid
- Product cards with technical specs
- Hover effects on cards
- Link to full products page

**Props:**
```typescript
interface FeaturedProductsProps {
  products: Product[];
  maxItems?: number;
}
```

**Dependencies:**
- `components/products/ProductCard` - Product card component
- `components/animations/ScrollReveal` - Staggered reveal

---

### ValuePropositions
**Location:** `components/homepage/ValuePropositions.tsx`  
**Responsibilities:**
- Display three value propositions
- Icon, title, description, link
- Hover effects
- Responsive grid

**Props:**
```typescript
interface ValuePropositionsProps {
  propositions: Array<{
    icon: string;
    title: string;
    description: string;
    link: { text: string; href: string };
  }>;
}
```

---

## Product Components

### ProductCard
**Location:** `components/products/ProductCard.tsx`  
**Responsibilities:**
- Display product information
- Product image with zoom on hover
- Technical specs (fabric, GSM, thread count)
- Price range and MOQ
- CTA button (Request Sample)

**Props:**
```typescript
interface ProductCardProps {
  product: Product;
  onQuoteRequest?: (product: Product) => void;
}
```

**Dependencies:**
- `components/ui/Button` - CTA button
- `components/animations/ImageZoom` - Image zoom effect

---

### ProductGrid
**Location:** `components/products/ProductGrid.tsx`  
**Responsibilities:**
- Grid layout for products
- Responsive columns (4 desktop, 2 tablet, 1 mobile)
- Staggered reveal animation
- Empty state handling

**Props:**
```typescript
interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}
```

**Dependencies:**
- `components/products/ProductCard` - Product card
- `components/animations/ScrollReveal` - Staggered reveal

---

### ProductFilter
**Location:** `components/products/ProductFilter.tsx`  
**Responsibilities:**
- Filter products by category, fabric, application
- Filter state management
- Active filter display
- Clear filters button

**Props:**
```typescript
interface ProductFilterProps {
  categories: Category[];
  fabrics: Fabric[];
  applications: Application[];
  onFilterChange: (filters: ProductFilters) => void;
}
```

---

### ProductDetail
**Location:** `components/products/ProductDetail.tsx`  
**Responsibilities:**
- Full product detail view
- Image gallery
- Technical specifications
- Related products
- Quote request form

**Props:**
```typescript
interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}
```

---

## Animation Components

### ScrollReveal
**Location:** `components/animations/ScrollReveal.tsx`  
**Responsibilities:**
- Reveal content on scroll
- Staggered children animation
- Configurable delay and duration
- One-time animation trigger

**Props:**
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
}
```

**Implementation:**
```typescript
// Uses Framer Motion useInView hook
// Variants: hidden (opacity: 0, y: 30), visible (opacity: 1, y: 0)
// Transition: duration 0.5s, ease-out
```

---

### Counter
**Location:** `components/animations/Counter.tsx`  
**Responsibilities:**
- Animate number from 0 to target
- Comma formatting
- Scroll-triggered animation
- One-time trigger

**Props:**
```typescript
interface CounterProps {
  end: number;
  duration?: number;
  format?: (value: number) => string;
}
```

**Implementation:**
```typescript
// Uses requestAnimationFrame for smooth counting
// Duration: 2000ms default
// Format: toLocaleString() default
```

---

### Parallax
**Location:** `components/animations/Parallax.tsx`  
**Responsibilities:**
- Parallax scroll effect
- Configurable speed
- Performance optimized
- Disabled on mobile

**Props:**
```typescript
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  disabled?: boolean;
}
```

**Implementation:**
```typescript
// Uses scroll position to calculate translateY
// Speed: 0.5 default
// Disabled on mobile for performance
```

---

### ImageZoom
**Location:** `components/animations/ImageZoom.tsx`  
**Responsibilities:**
- Zoom image on hover
- Overflow hidden on container
- Smooth transition
- Configurable zoom level

**Props:**
```typescript
interface ImageZoomProps {
  src: string;
  alt: string;
  zoom?: number;
}
```

---

## Form Components

### ContactForm
**Location:** `components/forms/ContactForm.tsx`  
**Responsibilities:**
- General inquiry form
- Validation (React Hook Form + Zod)
- Error handling
- Success state
- Loading state

**Props:**
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}
```

**Dependencies:**
- `react-hook-form` - Form state
- `zod` - Validation schema
- `components/ui/Input` - Input components
- `components/ui/Button` - Submit button

---

### QuoteForm
**Location:** `components/forms/QuoteForm.tsx`  
**Responsibilities:**
- Detailed quote request form
- Product selection
- Quantity and specifications
- Timeline requirements
- Validation

**Props:**
```typescript
interface QuoteFormProps {
  products: Product[];
  onSubmit: (data: QuoteFormData) => Promise<void>;
}
```

---

### InquiryForm
**Location:** `components/forms/InquiryForm.tsx`  
**Responsibilities:**
- Quick inquiry form
- Minimal fields
- Fast validation
- Mobile-optimized

**Props:**
```typescript
interface InquiryFormProps {
  inquiryType: 'sample' | 'tour' | 'general';
  onSubmit: (data: InquiryFormData) => Promise<void>;
}
```

---

### NewsletterForm
**Location:** `components/forms/NewsletterForm.tsx`  
**Responsibilities:**
- Email subscription form
- Email validation
- Success message
- Minimal footprint

**Props:**
```typescript
interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
}
```

---

## UI Components

### Input
**Location:** `components/ui/Input.tsx`  
**Responsibilities:**
- Text input with label
- Focus state
- Error state
- Disabled state
- Helper text

**Props:**
```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  [key: string]: any;
}
```

---

### Textarea
**Location:** `components/ui/Textarea.tsx`  
**Responsibilities:**
- Multi-line text input
- Resizable
- Focus, error, disabled states
- Character count (optional)

**Props:**
```typescript
interface TextareaProps {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
  disabled?: boolean;
}
```

---

### Select
**Location:** `components/ui/Select.tsx`  
**Responsibilities:**
- Dropdown select
- Label and error states
- Custom styling
- Keyboard navigation

**Props:**
```typescript
interface SelectProps {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  disabled?: boolean;
}
```

---

### Checkbox
**Location:** `components/ui/Checkbox.tsx`  
**Responsibilities:**
- Checkbox with label
- Checked, unchecked, indeterminate states
- Focus state
- Group support

**Props:**
```typescript
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}
```

---

---

# 3 Routing Structure

## Page Routes

### Homepage
**Route:** `/`  
**File:** `app/(marketing)/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Homepage metadata, structured data

---

### About Pages
**Route:** `/about`  
**File:** `app/(marketing)/about/page.tsx`  
**Layout:** Marketing layout  
**SEO:** About page metadata

**Sub-routes:**
- `/about/our-story` - Company history
- `/about/mission-vision` - Mission and vision
- `/about/values` - Company values
- `/about/team` - Team profiles

---

### Products Pages
**Route:** `/products`  
**File:** `app/(marketing)/products/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Products listing metadata

**Category Routes:**
- `/products/shirting` - Shirting products
- `/products/suiting` - Suiting products
- `/products/bottoms` - Bottoms products
- `/products/ethnic-wear` - Ethnic wear products
- `/products/uniforms` - Uniforms products
- `/products/technical-fabrics` - Technical fabrics

**Product Detail Routes:**
- `/products/[category]/[slug]` - Individual product page
- Example: `/products/shirting/dress-shirt-001`

---

### Capabilities Pages
**Route:** `/capabilities`  
**File:** `app/(marketing)/capabilities/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Capabilities overview metadata

**Sub-routes:**
- `/capabilities/equipment` - Equipment showcase
- `/capabilities/capacity` - Production capacity
- `/capabilities/fabrics` - Fabric capabilities
- `/capabilities/services` - Custom services

---

### Quality Process Pages
**Route:** `/quality`  
**File:** `app/(marketing)/quality/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Quality process metadata

**Sub-routes:**
- `/quality/quality-assurance` - QA documentation
- `/quality/certifications` - Certifications
- `/quality/testing` - Testing procedures
- `/quality/sample-policy` - Sample policy

---

### Factory Pages
**Route:** `/factory`  
**File:** `app/(marketing)/factory/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Factory overview metadata

**Sub-routes:**
- `/factory/overview` - Factory overview
- `/factory/production-floor` - Production floor
- `/factory/equipment-showcase` - Equipment showcase
- `/factory/quality-stations` - Quality stations
- `/factory/team` - Factory team
- `/factory/virtual-tour` - Virtual tour

---

### Clients Pages
**Route:** `/clients`  
**File:** `app/(marketing)/clients/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Client showcase metadata

**Sub-routes:**
- `/clients/case-studies` - Case studies
- `/clients/testimonials` - Testimonials
- `/clients/industries` - Industry breakdown

---

### Contact Pages
**Route:** `/contact`  
**File:** `app/(marketing)/contact/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Contact page metadata

**Sub-routes:**
- `/contact/request-quote` - Quote request form
- `/contact/request-sample` - Sample request form
- `/contact/schedule-factory-tour` - Factory tour scheduling

---

## Nested Routes

### Product Category with Filters
**Route:** `/products/[category]`  
**File:** `app/(marketing)/products/[category]/page.tsx`  
**Layout:** Marketing layout  
**Features:**
- Category-specific products
- Filter sidebar
- Sort options
- Pagination

---

### Blog Routes (Future)
**Route:** `/blog`  
**File:** `app/(marketing)/blog/page.tsx`  
**Layout:** Marketing layout  
**SEO:** Blog listing metadata

**Blog Post Routes:**
- `/blog/[slug]` - Individual blog post
- `/blog/category/[category]` - Category filter
- `/blog/tag/[tag]` - Tag filter

---

## SEO Routes

### Sitemap
**Route:** `/sitemap.xml`  
**File:** `app/sitemap.ts`  
**Purpose:** Generate XML sitemap for search engines  
**Features:**
- Dynamic sitemap generation
- Include all pages
- Include product pages
- Include blog posts (future)

---

### Robots
**Route:** `/robots.txt`  
**File:** `app/robots.ts`  
**Purpose:** Configure crawler access  
**Features:**
- Allow all crawlers
- Disallow admin routes
- Sitemap reference

---

---

# 4 State Management

## Local State

### Component State
**Tool:** React useState  
**Use Cases:**
- UI toggles (mobile menu, modals, accordions)
- Form input values
- Hover states
- Active tabs

**Example:**
```typescript
const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState(0);
```

---

### Context State
**Tool:** React Context  
**Use Cases:**
- Theme (future)
- User authentication (future CMS)
- Global notifications
- Cart state (future e-commerce)

**Example:**
```typescript
// context/NotificationContext.tsx
const NotificationContext = createContext<NotificationContextType>();

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  // ...
};
```

---

## Server State

### Data Fetching
**Tool:** Next.js Server Components + fetch  
**Use Cases:**
- Product data
- Testimonials
- Certifications
- Team data
- SEO metadata

**Example:**
```typescript
// app/products/page.tsx (Server Component)
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductGrid products={products} />;
}
```

---

### Client-side Data Fetching
**Tool:** SWR or React Query (**Future**)  
**Use Cases:**
- Real-time data (future)
- User-specific data (future CMS)
- Frequently changing data

**Example:**
```typescript
// Future implementation with SWR
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function ProductList() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);
  // ...
}
```

---

## Form State

### Form Management
**Tool:** React Hook Form  
**Use Cases:**
- Contact forms
- Quote request forms
- Inquiry forms
- Newsletter signup

**Example:**
```typescript
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

---

### Validation
**Tool:** Zod  
**Use Cases:**
- Form validation
- Data validation
- Type safety

**Example:**
```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+\s-]+$/, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
```

---

## Animation State

### Scroll State
**Tool:** Custom hook (useScroll)  
**Use Cases:**
- Navbar sticky state
- Scroll-triggered animations
- Parallax effects

**Example:**
```typescript
// hooks/useScroll.ts
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}
```

---

### Animation State
**Tool:** Framer Motion  
**Use Cases:**
- Hover animations
- Scroll animations
- Page transitions
- Modal animations

**Example:**
```typescript
const [isInView, setInView] = useState(false);
const ref = useRef(null);

useInView(ref, { once: true }, (inView) => setInView(inView));
```

---

## Future CMS State

### Content Management
**Tool:** TBD (Sanity, Contentful, or Strapi)  
**Use Cases:**
- Dynamic product data
- Dynamic testimonials
- Dynamic team profiles
- Dynamic blog posts
- Dynamic pages

**Migration Plan:**
1. Replace static data files with CMS API calls
2. Implement preview mode for editors
3. Add webhook revalidation
4. Implement on-demand revalidation

---

---

# 5 Data Layer

## Product Data

### Location
**File:** `data/products.ts` (pre-CMS)  
**Future:** CMS API endpoint

### Structure
```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  specifications: {
    fabric: string;
    gsm: number;
    threadCount: number;
    shrinkage: string;
  };
  pricing: {
    minPrice: number;
    maxPrice: number;
    currency: string;
  };
  moq: number;
  leadTime: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
```

### Usage
```typescript
// Server Component
import { products } from '@/data/products';

export default function ProductsPage() {
  return <ProductGrid products={products} />;
}
```

---

## Testimonials Data

### Location
**File:** `data/testimonials.ts` (pre-CMS)  
**Future:** CMS API endpoint

### Structure
```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    location: string;
  };
  metrics?: string;
  clientSince: string;
  logo: string;
  industry: string;
}
```

---

## Certifications Data

### Location
**File:** `data/certifications.ts` (pre-CMS)  
**Future:** CMS API endpoint

### Structure
```typescript
interface Certification {
  id: string;
  name: string;
  licenseNumber: string;
  issuingBody: string;
  validFrom: string;
  validUntil: string;
  status: 'active' | 'pending' | 'expired';
  verificationUrl?: string;
  badge: string;
}
```

---

## Team Data

### Location
**File:** `data/team.ts` (pre-CMS)  
**Future:** CMS API endpoint

### Structure
```typescript
interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  photo: string;
  email: string;
  phone?: string;
  bio: string;
  linkedin?: string;
}
```

---

## SEO Data

### Location
**File:** `data/seo.ts` (pre-CMS)  
**Future:** CMS API endpoint or page-level metadata

### Structure
```typescript
interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}
```

---

## Data Access Patterns

### Static Data (Pre-CMS)
```typescript
// Direct import
import { products } from '@/data/products';

// Helper function
export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}
```

### CMS Data (Future)
```typescript
// Server Component with fetch
async function getProducts() {
  const res = await fetch(`${CMS_API_URL}/products`, {
    headers: { Authorization: `Bearer ${CMS_API_TOKEN}` },
    next: { revalidate: 3600 },
  });
  return res.json();
}

// On-demand revalidation
async function revalidateProduct(slug: string) {
  await fetch(`/api/revalidate?path=/products/${slug}`, { method: 'POST' });
}
```

---

---

# 6 Animation Architecture

## Framer Motion Organization

### Animation Variants
**Location:** `lib/animations/variants.ts`  
**Purpose:** Centralized animation variants for consistency

```typescript
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
```

---

### Animation Presets
**Location:** `lib/animations/presets.ts`  
**Purpose:** Pre-configured animation combinations

```typescript
export const cardHover = {
  whileHover: { y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: 'easeOut' },
};

export const imageZoom = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3, ease: 'easeOut' },
};
```

---

## Reusable Animation Components

### ScrollReveal
**Location:** `components/animations/ScrollReveal.tsx`

**Usage:**
```typescript
<ScrollReveal stagger={0.1}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</ScrollReveal>
```

**Implementation:**
```typescript
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { slideUp, staggerContainer } from '@/lib/animations/variants';

export function ScrollReveal({ children, stagger = 0.1, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div key={i} variants={slideUp} transition={{ delay: i * stagger }}>
          {child}
        </motion.div>
      )) : children}
    </motion.div>
  );
}
```

---

### Counter
**Location:** `components/animations/Counter.tsx`

**Usage:**
```typescript
<Counter end={50000} duration={2000} />
```

**Implementation:**
```typescript
import { useEffect, useRef, useState } from 'react';

export function Counter({ end, duration = 2000, format }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const formattedCount = format ? format(count) : count.toLocaleString();

  return <span ref={ref}>{formattedCount}</span>;
}
```

---

## Scroll Animations

### Section Reveal
**Trigger:** Intersection Observer (10% threshold)  
**Animation:** Fade up (opacity 0→1, y 30px→0)  
**Duration:** 500ms  
**Easing:** ease-out  
**Once:** True (trigger only once)

**Usage:**
```typescript
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={slideUp}
>
  {/* Section content */}
</motion.section>
```

---

### Staggered Grid
**Trigger:** Intersection Observer (10% threshold)  
**Animation:** Staggered fade up  
**Delay:** 100ms between items  
**Duration:** 400ms per item  
**Easing:** ease-out

**Usage:**
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={staggerContainer}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={slideUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Hover Animations

### Card Hover
**Animation:** Lift 4px, shadow increase  
**Duration:** 300ms  
**Easing:** ease-out

**Implementation:**
```typescript
<motion.div
  whileHover={{ y: -4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  {/* Card content */}
</motion.div>
```

---

### Button Hover
**Animation:** Scale 1.02, color change  
**Duration:** 200ms  
**Easing:** ease-out

**Implementation:**
```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
  {/* Button content */}
</motion.button>
```

---

### Image Zoom
**Animation:** Scale 1.05  
**Duration:** 300ms  
**Easing:** ease-out

**Implementation:**
```typescript
<div style={{ overflow: 'hidden' }}>
  <motion.img
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    src={src}
    alt={alt}
  />
</div>
```

---

## Accessibility Considerations

### prefers-reduced-motion
**Implementation:**
```typescript
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

<motion.div
  animate={prefersReducedMotion ? 'visible' : 'hidden'}
  transition={prefersReducedMotion ? { duration: 0 } : undefined}
>
  {/* Content */}
</motion.div>
```

---

### Performance Optimization
- Use GPU-accelerated properties (transform, opacity)
- Avoid animating height, width, margin, padding
- Use will-change sparingly
- Debounce scroll events
- Use requestAnimationFrame for smooth animations

---

---

# 7 Performance Strategy

## Image Optimization

### Next.js Image Component
**Usage:** All images use `next/image`  
**Features:**
- Automatic WebP conversion
- Lazy loading by default
- Responsive images
- Blur placeholder

**Implementation:**
```typescript
import Image from 'next/image';

<Image
  src="/images/factory/production.jpg"
  alt="Production floor"
  width={1920}
  height={1080}
  priority={false} // Set true for above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

---

### Image Formats
**Primary:** WebP  
**Fallback:** JPEG  
**Icons:** SVG  
**Logos:** SVG or PNG with transparency

---

### Image Sizing
**Hero Images:** 1920×1080px  
**Product Images:** 800×1000px  
**Team Photos:** 400×400px  
**Thumbnails:** 400×300px  
**Logos:** 200×200px max

---

## Lazy Loading

### Component Lazy Loading
**Usage:** Dynamic imports for non-critical components

**Implementation:**
```typescript
// Lazy load heavy components
const TestimonialCarousel = dynamic(() => import('@/components/homepage/TestimonialCarousel'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Client-side only
});

// Lazy load modals
const QuoteModal = dynamic(() => import('@/components/modals/QuoteModal'), {
  ssr: false,
});
```

---

### Route Lazy Loading
**Usage:** Next.js automatic code splitting by route  
**Benefit:** Each page loads only its own JavaScript

---

## Dynamic Imports

### Third-party Libraries
**Usage:** Import heavy libraries only when needed

**Implementation:**
```typescript
// Load Google Maps only on contact page
const loadGoogleMaps = async () => {
  const { Loader } = await import('@googlemaps/js-api-loader');
  const loader = new Loader({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
  await loader.load();
};

// Load analytics only after consent
const loadAnalytics = async () => {
  const { default: ReactGA } = await import('react-ga4');
  ReactGA.initialize(process.env.GA_MEASUREMENT_ID);
};
```

---

## Code Splitting

### Automatic Splitting
**Next.js:** Automatic code splitting by route  
**Benefit:** Reduced initial bundle size

### Manual Splitting
**Usage:** Split large components into smaller chunks

**Implementation:**
```typescript
// Split product grid
const ProductGrid = dynamic(() => import('@/components/products/ProductGrid'));

// Split form components
const ContactForm = dynamic(() => import('@/components/forms/ContactForm'));
```

---

## Prefetching

### Link Prefetching
**Usage:** Next.js Link component with prefetch

**Implementation:**
```typescript
import Link from 'next/link';

// Prefetch on hover (default)
<Link href="/products" prefetch={true}>
  Products
</Link>

// Prefetch on viewport entry
<Link href="/contact" prefetch={true}>
  Contact
</Link>
```

---

### Data Prefetching
**Usage:** Prefetch data for likely next pages

**Implementation:**
```typescript
// Prefetch product data on hover
const prefetchProduct = async (slug: string) => {
  await fetch(`/api/products/${slug}`, { cache: 'force-cache' });
};
```

---

## Caching

### Static Data Caching
**Strategy:** ISR (Incremental Static Regeneration)  
**Revalidation:** 1 hour for products, 24 hours for static content

**Implementation:**
```typescript
// app/products/page.tsx
export const revalidate = 3600; // Revalidate every hour

async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 },
  });
  return res.json();
}
```

---

### Client-side Caching
**Strategy:** localStorage for user preferences  
**Usage:** Theme, language, dismissed banners

**Implementation:**
```typescript
// Save dismissed announcement
localStorage.setItem('announcement-dismissed', 'true');

// Save user preferences
localStorage.setItem('theme', 'dark');
```

---

## Core Web Vitals

### Largest Contentful Paint (LCP)
**Target:** < 2.5s  
**Strategy:**
- Optimize hero images (WebP, lazy load)
- Priority loading for above-fold content
- Use Next.js Image component
- Minimize render-blocking resources

---

### First Input Delay (FID)
**Target:** < 100ms  
**Strategy:**
- Minimize JavaScript execution
- Use code splitting
- Defer non-critical JavaScript
- Optimize event handlers

---

### Cumulative Layout Shift (CLS)
**Target:** < 0.1  
**Strategy:**
- Reserve space for images (aspect ratio)
- Avoid dynamic content injection
- Use skeleton loaders
- Stable font loading

---

### First Contentful Paint (FCP)
**Target:** < 1.8s  
**Strategy:**
- Minimize CSS
- Critical CSS inlining
- Optimize font loading
- Server-side rendering

---

### Time to Interactive (TTI)
**Target:** < 3.8s  
**Strategy:**
- Minimize main thread work
- Reduce JavaScript bundle size
- Optimize third-party scripts
- Use web workers for heavy tasks

---

## Performance Monitoring

### Web Vitals Reporting
**Implementation:**
```typescript
// app/layout.tsx
import { WebVitals } from '@/components/WebVitals';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <WebVitals />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

### Lighthouse CI
**Integration:** GitHub Actions  
**Thresholds:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

---

---

# 8 Accessibility Strategy

## ARIA Attributes

### Semantic HTML
**Principle:** Use semantic HTML elements first, ARIA as enhancement

**Examples:**
```typescript
// Use semantic elements
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/products">Products</a></li>
  </ul>
</nav>

// Use ARIA for dynamic content
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>

<div id="menu" role="menu" hidden={!isOpen}>
  {/* Menu items */}
</div>
```

---

### Live Regions
**Usage:** Announce dynamic content changes

**Implementation:**
```typescript
<div role="status" aria-live="polite">
  {formMessage}
</div>
```

---

## Keyboard Navigation

### Focus Management
**Strategy:** Logical tab order, visible focus indicators

**Implementation:**
```typescript
// Focus trap in modals
useEffect(() => {
  if (isOpen) {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }
}, [isOpen]);
```

---

### Keyboard Shortcuts
**Implementation:**
```typescript
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [isOpen, onClose]);
```

---

## Screen Readers

### Alt Text
**Strategy:** Descriptive alt text for all images

**Implementation:**
```typescript
<Image
  src="/images/factory/production.jpg"
  alt="Workers operating sewing machines on the production floor"
  // Decorative images: alt=""
/>
```

---

### Hidden Text
**Usage:** Provide context for screen readers

**Implementation:**
```typescript
<span className="sr-only">Skip to main content</span>
<a href="#main" className="skip-link">
  Skip to main content
</a>
```

---

### Form Labels
**Strategy:** Explicit labels for all form inputs

**Implementation:**
```typescript
<label htmlFor="email">Email Address</label>
<input id="email" type="email" required aria-describedby="email-hint" />
<span id="email-hint" className="text-sm">We'll never share your email</span>
```

---

## Contrast

### Color Contrast
**Standard:** WCAG AA (4.5:1 for normal text, 3:1 for large text)  
**Implementation:**
- All text meets WCAG AA
- Focus indicators meet 3:1 contrast
- Interactive elements meet 3:1 contrast

**Testing:**
- Use axe DevTools
- Use WAVE browser extension
- Manual testing with color blindness simulators

---

## Focus States

### Visible Focus
**Strategy:** Clear focus indicators on all interactive elements

**Implementation:**
```css
/* globals.css */
*:focus-visible {
  outline: 2px solid #ED8936;
  outline-offset: 2px;
}

button:focus-visible {
  box-shadow: 0 0 0 3px rgba(237, 137, 54, 0.3);
}
```

---

### Focus Order
**Strategy:** Logical tab order matching visual order

**Implementation:**
```typescript
// Use tabindex="0" for elements not in tab order by default
<div tabIndex={0} role="button" onClick={handleClick}>
  Custom button
</div>
```

---

## Skip Links
**Implementation:**
```typescript
// components/layout/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
```

---

## Accessibility Testing

### Automated Testing
**Tools:**
- axe DevTools
- ESLint jsx-a11y plugin
- Lighthouse accessibility audit

**Implementation:**
```typescript
// jest.setup.js
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Component test
it('should have no accessibility violations', async () => {
  const { container } = render(<Navbar />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

### Manual Testing
**Tools:**
- NVDA (Windows)
- VoiceOver (Mac)
- JAWS (Windows)
- Keyboard-only navigation

**Checklist:**
- All functionality available via keyboard
- Screen reader announces all content
- Forms have proper labels
- Images have alt text
- Focus order is logical
- Color contrast meets WCAG AA

---

---

# 9 SEO Architecture

## Metadata

### Page Metadata
**Implementation:** Next.js Metadata API

**Example:**
```typescript
// app/products/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Goyal Trading Company',
  description: 'Premium textile manufacturing for global retailers. Browse our extensive collection of shirting, suiting, bottoms, ethnic wear, uniforms, and technical fabrics.',
  keywords: ['textile manufacturing', 'wholesale textiles', 'custom manufacturing', 'B2B textiles'],
  openGraph: {
    title: 'Products | Goyal Trading Company',
    description: 'Premium textile manufacturing for global retailers.',
    images: ['/images/og-products.jpg'],
    type: 'website',
  },
};
```

---

### Dynamic Metadata
**Implementation:** Generate metadata based on data

**Example:**
```typescript
// app/products/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  
  return {
    title: `${product.name} | Goyal Trading Company`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images.thumbnail],
    },
  };
}
```

---

## Open Graph

### OG Tags
**Implementation:** Next.js OpenGraph API

**Example:**
```typescript
export const metadata: Metadata = {
  openGraph: {
    title: 'Goyal Trading Company',
    description: 'Premium wholesale textile manufacturing',
    url: 'https://goyaltrading.com',
    siteName: 'Goyal Trading Company',
    images: [
      {
        url: 'https://goyaltrading.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Goyal Trading Company Factory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
```

---

## Twitter Cards

### Twitter Card Tags
**Implementation:** Next.js Twitter API

**Example:**
```typescript
export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Goyal Trading Company',
    description: 'Premium wholesale textile manufacturing',
    images: ['/images/og-home.jpg'],
  },
};
```

---

## Structured Data

### JSON-LD Implementation
**Strategy:** Add structured data to pages

**Organization Schema:**
```typescript
// app/layout.tsx
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Goyal Trading Company',
  url: 'https://goyaltrading.com',
  logo: 'https://goyaltrading.com/images/logo.png',
  description: 'Premium wholesale textile manufacturing for global retailers',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Industrial Area',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '123456',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-1234567890',
    contactType: 'sales',
  },
};
```

---

### Product Schema
```typescript
// app/products/[slug]/page.tsx
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.images.gallery,
  offers: {
    '@type': 'Offer',
    price: product.pricing.minPrice,
    priceCurrency: product.pricing.currency,
    availability: 'https://schema.org/InStock',
  },
};
```

---

### Breadcrumb Schema
```typescript
// components/shared/Breadcrumb.tsx
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href,
  })),
};
```

---

## Breadcrumbs

### Breadcrumb Component
**Implementation:** Schema.org structured data included

**Example:**
```typescript
// components/shared/Breadcrumb.tsx
export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <a href={item.href} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
```

---

## Canonical URLs

### Canonical Tag
**Implementation:** Next.js canonical API

**Example:**
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://goyaltrading.com/products',
  },
};
```

---

### Dynamic Canonical
```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://goyaltrading.com/products/${params.slug}`,
    },
  };
}
```

---

## Sitemap

### Dynamic Sitemap
**Implementation:** Next.js sitemap generation

**Example:**
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goyaltrading.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Add all pages dynamically
  ];
}
```

---

## Robots

### Robots.txt
**Implementation:** Next.js robots generation

**Example:**
```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://goyaltrading.com/sitemap.xml',
  };
}
```

---

## SEO Best Practices

### Heading Structure
**Strategy:** Logical H1-H6 hierarchy

**Example:**
```typescript
// H1: Page title (one per page)
<h1>Premium Wholesale Textile Manufacturing</h1>

// H2: Section titles
<h2>Our Products</h2>
<h2>Manufacturing Capabilities</h2>

// H3: Subsection titles
<h3>Shirting</h3>
<h3>Suiting</h3>

// H4: Card titles
<h4>Dress Shirt 001</h4>
```

---

### Internal Linking
**Strategy:** Logical internal linking structure

**Implementation:**
```typescript
// Link from homepage to category pages
<Link href="/products/shirting">Shirting</Link>

// Link from category to product pages
<Link href="/products/shirting/dress-shirt-001">Dress Shirt 001</Link>

// Link from product to related products
<Link href="/products/suiting/business-suit-001">Business Suit</Link>
```

---

### URL Structure
**Strategy:** Descriptive, hyphenated URLs

**Examples:**
- `/products/shirting` (category)
- `/products/shirting/dress-shirt-001` (product)
- `/capabilities/equipment` (capability)
- `/quality/certifications` (quality)

---

### Image SEO
**Strategy:** Descriptive file names and alt text

**Implementation:**
```typescript
<Image
  src="/images/factory/production-floor-sewing-machines.jpg"
  alt="Production floor with sewing machines and workers"
  width={1920}
  height={1080}
/>
```

---

---

# 10 Form Architecture

## Inquiry Form

### Purpose
Capture general inquiries from potential buyers

### Fields
- Name (required, text)
- Email (required, email)
- Phone (optional, tel)
- Company (optional, text)
- Inquiry Type (required, select: General, Quote, Sample, Tour)
- Message (required, textarea, min 10 characters)

### Validation
```typescript
const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+\s-]+$/, 'Invalid phone number').optional(),
  company: z.string().min(2, 'Company name required').optional(),
  inquiryType: z.enum(['general', 'quote', 'sample', 'tour']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
```

### Submission Flow
1. User fills form
2. Client-side validation (Zod)
3. Show loading state
4. Submit to API route
5. Server-side validation
6. Send email to sales team
7. Show success message
8. Reset form

### Success State
- Display success message
- Show estimated response time (24 hours)
- Provide next steps (schedule call, view products)

### Error Handling
- Display validation errors
- Show server error message
- Allow resubmission
- Log errors for debugging

---

## Contact Form

### Purpose
Capture contact form submissions from contact page

### Fields
- Name (required, text)
- Email (required, email)
- Phone (optional, tel)
- Company (optional, text)
- Subject (required, select: General, Sales, Support, Partnership)
- Message (required, textarea, min 10 characters)

### Validation
```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+\s-]+$/, 'Invalid phone number').optional(),
  company: z.string().min(2, 'Company name required').optional(),
  subject: z.enum(['general', 'sales', 'support', 'partnership']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
```

### Submission Flow
1. User fills form
2. Client-side validation
3. Show loading state
4. Submit to API route
5. Server-side validation
6. Route to appropriate team
7. Send confirmation email
8. Show success message

### Success State
- Display success message
- Send confirmation email to user
- Provide direct contact options

### Error Handling
- Display validation errors
- Show server error message
- Provide fallback contact options

---

## Quote Request Form

### Purpose
Capture detailed quote requests with product specifications

### Fields
- Name (required, text)
- Email (required, email)
- Phone (required, tel)
- Company (required, text)
- Product Category (required, select)
- Product (required, select, based on category)
- Quantity (required, number, min 100)
- Specifications (optional, textarea: fabric, GSM, colors)
- Timeline (required, select: ASAP, 1-2 weeks, 1 month, 2+ months)
- Additional Requirements (optional, textarea)
- Preferred Contact Method (required, select: Email, Phone, WhatsApp)

### Validation
```typescript
const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+\s-]+$/, 'Invalid phone number'),
  company: z.string().min(2, 'Company name required'),
  productCategory: z.string(),
  product: z.string(),
  quantity: z.number().min(100, 'Minimum order quantity is 100'),
  specifications: z.string().optional(),
  timeline: z.enum(['asap', '1-2-weeks', '1-month', '2-plus-months']),
  additionalRequirements: z.string().optional(),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']),
});
```

### Submission Flow
1. User fills form
2. Client-side validation
3. Show loading state
4. Submit to API route
5. Server-side validation
6. Calculate preliminary pricing
7. Route to sales team
8. Send confirmation email with quote reference
9. Show success message with reference number

### Success State
- Display success message
- Show quote reference number
- Send confirmation email with details
- Provide estimated response time (48 hours)
- Show next steps (sample request, factory tour)

### Error Handling
- Display validation errors
- Show server error message
- Save form data to localStorage for recovery
- Provide direct contact option

---

## Newsletter Form

### Purpose
Capture email subscriptions for newsletters

### Fields
- Email (required, email)
- Consent (required, checkbox: agree to receive marketing emails)

### Validation
```typescript
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  consent: z.boolean().refine(val => val === true, 'Consent required'),
});
```

### Submission Flow
1. User enters email
2. Checks consent checkbox
3. Client-side validation
4. Submit to API route
5. Add to mailing list
6. Send confirmation email
7. Show success message

### Success State
- Display success message
- Send confirmation email
- Show unsubscribe link in footer

### Error Handling
- Display validation errors
- Show server error message
- Allow retry

---

## Form State Management

### React Hook Form
**Usage:** Form state and validation

**Implementation:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
  resolver: zodResolver(schema),
  defaultValues: {
    name: '',
    email: '',
    // ...
  },
});
```

---

### Loading State
**Implementation:**
```typescript
const [isSubmitting, setIsSubmitting] = useState(false);

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  try {
    await submitForm(data);
    // Show success
  } catch (error) {
    // Show error
  } finally {
    setIsSubmitting(false);
  }
};
```

---

### Error State
**Implementation:**
```typescript
const [error, setError] = useState<string | null>(null);

const onSubmit = async (data: FormData) => {
  try {
    await submitForm(data);
  } catch (err) {
    setError('Failed to submit form. Please try again.');
  }
};
```

---

### Success State
**Implementation:**
```typescript
const [success, setSuccess] = useState(false);

const onSubmit = async (data: FormData) => {
  await submitForm(data);
  setSuccess(true);
  reset();
};
```

---

## API Routes

### Form Submission Endpoint
**Location:** `app/api/contact/route.ts`

**Implementation:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Send email
    await sendEmail(validatedData);
    
    // Log to database (future)
    // await saveToDatabase(validatedData);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 400 }
    );
  }
}
```

---

---

# 11 Third Party Integrations

## Google Maps

### Purpose
Display factory location on contact page

### Implementation
**Location:** `components/contact/GoogleMap.tsx`

**Code:**
```typescript
'use client';

import { useEffect, useRef } from 'react';

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = async () => {
      const { Loader } = await import('@googlemaps/js-api-loader');
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      });

      const google = await loader.load();
      
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 28.6139, lng: 77.2090 }, // New Delhi
        zoom: 15,
        styles: [], // Custom map styles
      });

      new google.maps.Marker({
        position: { lat: 28.6139, lng: 77.2090 },
        map: map,
        title: 'Goyal Trading Company',
      });
    };

    loadMap();
  }, []);

  return <div ref={mapRef} className="w-full h-96" />;
}
```

**Lazy Loading:**
- Load only on contact page
- Load after user interaction or scroll

---

## WhatsApp

### Purpose
Enable direct WhatsApp communication

### Implementation
**Location:** `components/shared/WhatsAppButton.tsx`

**Code:**
```typescript
export function WhatsAppButton({ phone, message }: { phone: string; message: string }) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
```

**Usage:**
- Floating button on all pages
- Pre-filled message based on page context

---

## Google Analytics

### Purpose
Track user behavior and conversions

### Implementation
**Location:** `lib/analytics/ga.ts`

**Code:**
```typescript
import ReactGA from 'react-ga4';

export function initGA() {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
}

export function trackPageView(path: string) {
  ReactGA.send({ hitType: 'pageview', page: path });
}

export function trackEvent(category: string, action: string, label?: string) {
  ReactGA.event({ category, action, label });
}
```

**Integration:**
```typescript
// app/layout.tsx
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, trackPageView } from '@/lib/analytics/ga';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return <html><body>{children}</body></html>;
}
```

**Events to Track:**
- Form submissions (contact, quote, inquiry)
- CTA clicks (Request Quote, Schedule Tour)
- Page views (product pages, capability pages)
- File downloads (capabilities PDF)

---

## Google Tag Manager

### Purpose
Manage marketing tags without code changes

### Implementation
**Location:** `app/layout.tsx`

**Code:**
```typescript
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Google Search Console

### Purpose
Monitor search performance and indexing

### Implementation
**Verification:**
- Add meta tag to layout
- Verify domain in GSC

**Code:**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  verification: {
    google: 'verification-code-from-gsc',
  },
};
```

**Sitemap Submission:**
- Submit sitemap.xml to GSC
- Monitor indexing status

---

## Schema Markup

### Purpose
Enhance search results with rich snippets

### Implementation
**Location:** Page components

**Organization Schema:**
```typescript
// app/layout.tsx
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Goyal Trading Company',
  // ... (full schema)
};
```

**Product Schema:**
```typescript
// app/products/[slug]/page.tsx
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  // ... (full schema)
};
```

**Local Business Schema:**
```typescript
// app/contact/page.tsx
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Goyal Trading Company',
  address: {
    '@type': 'PostalAddress',
    // ... address details
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.6139,
    longitude: 77.2090,
  },
};
```

---

---

# 12 Development Roadmap

## Phase 1: Project Setup

### Components Involved
- Project initialization
- Dependencies installation
- Configuration files
- Folder structure creation

### Dependencies
- None (first phase)

### Estimated Complexity
**Low** - 2-3 days

### Tasks
1. Initialize Next.js project with TypeScript
2. Install dependencies (Tailwind, Framer Motion, React Hook Form, Zod)
3. Configure Tailwind CSS
4. Configure TypeScript
5. Create folder structure
6. Set up ESLint and Prettier
7. Configure Git repository
8. Set up environment variables template

### Testing Requirements
- Project builds successfully
- TypeScript compiles without errors
- Tailwind CSS works
- ESLint passes

### Definition of Done
- [ ] Next.js project initialized
- [ ] All dependencies installed
- [ ] Folder structure created
- [ ] Configuration files set up
- [ ] Project builds successfully
- [ ] TypeScript compiles without errors
- [ ] ESLint configured
- [ ] Environment variables template created

---

## Phase 2: Design System Implementation

### Components Involved
- Global styles
- Typography scale
- Color palette
- Spacing system
- UI primitives (Button, Input, Select, Checkbox)

### Dependencies
- Phase 1 complete

### Estimated Complexity
**Medium** - 3-4 days

### Tasks
1. Implement global styles (globals.css)
2. Configure Tailwind with design tokens
3. Create typography scale in Tailwind config
4. Create color palette in Tailwind config
5. Create spacing system in Tailwind config
6. Build Button component (primary, secondary, tertiary)
7. Build Input component
8. Build Textarea component
9. Build Select component
10. Build Checkbox component
11. Build Radio component
12. Test all components with Storybook or test pages

### Testing Requirements
- All components render correctly
- Hover states work
- Focus states work
- Disabled states work
- Mobile responsive
- Accessibility (keyboard navigation, screen readers)

### Definition of Done
- [ ] Global styles implemented
- [ ] Tailwind configured with design tokens
- [ ] Typography scale implemented
- [ ] Color palette implemented
- [ ] Spacing system implemented
- [ ] Button component built and tested
- [ ] Input component built and tested
- [ ] Textarea component built and tested
- [ ] Select component built and tested
- [ ] Checkbox component built and tested
- [ ] Radio component built and tested
- [ ] All components accessible
- [ ] All components responsive

---

## Phase 3: Layout Components

### Components Involved
- Navbar
- Footer
- Announcement Bar
- Root layout
- Marketing layout

### Dependencies
- Phase 2 complete

### Estimated Complexity
**Medium** - 4-5 days

### Tasks
1. Build Navbar component
2. Implement sticky navbar logic
3. Build mega menu for Products
4. Build mega menu for Capabilities
5. Build mobile menu
6. Build Footer component
7. Build Announcement Bar component
8. Create root layout
9. Create marketing layout
10. Implement navigation configuration
11. Test responsive behavior
12. Test keyboard navigation

### Testing Requirements
- Navbar renders on all pages
- Sticky navbar works on scroll
- Mega menus open/close correctly
- Mobile menu works
- Footer renders on all pages
- Announcement bar dismisses correctly
- Keyboard navigation works
- Mobile responsive

### Definition of Done
- [ ] Navbar component built
- [ ] Sticky navbar implemented
- [ ] Mega menus built
- [ ] Mobile menu built
- [ ] Footer component built
- [ ] Announcement bar built
- [ ] Root layout created
- [ ] Marketing layout created
- [ ] Navigation configuration created
- [ ] Responsive behavior tested
- [ ] Keyboard navigation tested
- [ ] Accessibility verified

---

## Phase 4: Homepage

### Components Involved
- Hero
- Value Propositions
- Stats
- Featured Products
- Testimonials
- CTA Section

### Dependencies
- Phase 3 complete

### Estimated Complexity
**High** - 5-7 days

### Tasks
1. Build Hero component
2. Implement hero background with parallax
3. Build Value Propositions component
4. Build Stats component with counter animation
5. Build Featured Products component
6. Build Testimonials component (carousel)
7. Build CTA Section component
8. Create homepage page
9. Implement scroll reveal animations
10. Optimize images
11. Test responsive behavior
12. Test animations

### Testing Requirements
- Hero renders correctly
- Parallax works (desktop)
- Counter animation works
- Product cards display correctly
- Testimonial carousel works
- Scroll animations trigger correctly
- Mobile responsive
- Performance (LCP < 2.5s)

### Definition of Done
- [ ] Hero component built
- [ ] Parallax implemented
- [ ] Value Propositions built
- [ ] Stats component built with counter
- [ ] Featured Products built
- [ ] Testimonials built with carousel
- [ ] CTA Section built
- [ ] Homepage page created
- [ ] Scroll animations implemented
- [ ] Images optimized
- [ ] Responsive behavior tested
- [ ] Animations tested
- [ ] Performance tested

---

## Phase 5: Products Pages

### Components Involved
- Product Card
- Product Grid
- Product Filter
- Product Detail
- Category pages
- Product listing page

### Dependencies
- Phase 4 complete

### Estimated Complexity
**High** - 7-10 days

### Tasks
1. Create product data structure
2. Build Product Card component
3. Build Product Grid component
4. Build Product Filter component
5. Build Product Detail component
6. Create products listing page
7. Create category pages
8. Create product detail pages
9. Implement dynamic routing
10. Implement filtering logic
11. Implement image gallery
12. Optimize images
13. Test responsive behavior
14. Test filtering

### Testing Requirements
- Product cards display correctly
- Product grid responsive
- Filtering works correctly
- Product detail pages render
- Dynamic routing works
- Image gallery works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Product data structure created
- [ ] Product Card built
- [ ] Product Grid built
- [ ] Product Filter built
- [ ] Product Detail built
- [ ] Products listing page created
- [ ] Category pages created
- [ ] Product detail pages created
- [ ] Dynamic routing implemented
- [ ] Filtering logic implemented
- [ ] Image gallery implemented
- [ ] Images optimized
- [ ] Responsive behavior tested
- [ ] Filtering tested
- [ ] SEO metadata tested

---

## Phase 6: Capability Pages

### Components Involved
- Feature Cards
- Manufacturing Process
- Equipment Showcase
- Capacity Display
- Capability listing page
- Capability detail pages

### Dependencies
- Phase 5 complete

### Estimated Complexity
**Medium** - 5-7 days

### Tasks
1. Create capability data structure
2. Build Feature Cards component
3. Build Manufacturing Process component
4. Build Equipment Showcase component
5. Build Capacity Display component
6. Create capabilities listing page
7. Create capability detail pages
8. Implement dynamic routing
9. Optimize images
10. Test responsive behavior

### Testing Requirements
- Feature cards display correctly
- Manufacturing process renders
- Equipment showcase works
- Capacity display works
- Detail pages render
- Dynamic routing works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Capability data structure created
- [ ] Feature Cards built
- [ ] Manufacturing Process built
- [ ] Equipment Showcase built
- [ ] Capacity Display built
- [ ] Capabilities listing page created
- [ ] Capability detail pages created
- [ ] Dynamic routing implemented
- [ ] Images optimized
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 7: Quality Pages

### Components Involved
- Certifications
- Quality Process
- Testing Procedures
- Sample Policy
- Quality listing page
- Quality detail pages

### Dependencies
- Phase 6 complete

### Estimated Complexity
**Medium** - 4-5 days

### Tasks
1. Create quality data structure
2. Build Certifications component
3. Build Quality Process component
4. Build Testing Procedures component
5. Build Sample Policy component
6. Create quality listing page
7. Create quality detail pages
8. Implement dynamic routing
9. Test responsive behavior

### Testing Requirements
- Certifications display correctly
- Quality process renders
- Testing procedures display
- Sample policy displays
- Detail pages render
- Dynamic routing works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Quality data structure created
- [ ] Certifications built
- [ ] Quality Process built
- [ ] Testing Procedures built
- [ ] Sample Policy built
- [ ] Quality listing page created
- [ ] Quality detail pages created
- [ ] Dynamic routing implemented
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 8: Factory Pages

### Components Involved
- Factory Gallery
- Timeline
- Team Profiles
- Virtual Tour
- Factory listing page
- Factory detail pages

### Dependencies
- Phase 7 complete

### Estimated Complexity
**Medium** - 5-6 days

### Tasks
1. Create factory data structure
2. Build Factory Gallery component with lightbox
3. Build Timeline component
4. Build Team Profiles component
5. Build Virtual Tour component
6. Create factory listing page
7. Create factory detail pages
8. Implement dynamic routing
9. Optimize images
10. Test responsive behavior

### Testing Requirements
- Gallery displays correctly
- Lightbox works
- Timeline renders
- Team profiles display
- Virtual tour works
- Detail pages render
- Dynamic routing works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Factory data structure created
- [ ] Factory Gallery built with lightbox
- [ ] Timeline built
- [ ] Team Profiles built
- [ ] Virtual Tour built
- [ ] Factory listing page created
- [ ] Factory detail pages created
- [ ] Dynamic routing implemented
- [ ] Images optimized
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 9: Client Pages

### Components Involved
- Client Logos
- Testimonials
- Case Studies
- Client listing page
- Client detail pages

### Dependencies
- Phase 8 complete

### Estimated Complexity
**Low** - 3-4 days

### Tasks
1. Create client data structure
2. Build Client Logos component
3. Build Testimonials component
4. Build Case Studies component
5. Create client listing page
6. Create client detail pages
7. Implement dynamic routing
8. Test responsive behavior

### Testing Requirements
- Client logos display correctly
- Testimonials render
- Case studies display
- Detail pages render
- Dynamic routing works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Client data structure created
- [ ] Client Logos built
- [ ] Testimonials built
- [ ] Case Studies built
- [ ] Client listing page created
- [ ] Client detail pages created
- [ ] Dynamic routing implemented
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 10: About Pages

### Components Involved
- Timeline
- Team Profiles
- Values
- Mission/Vision
- About listing page
- About detail pages

### Dependencies
- Phase 9 complete

### Estimated Complexity
**Low** - 3-4 days

### Tasks
1. Create about data structure
2. Build Timeline component (reuse)
3. Build Team Profiles component (reuse)
4. Build Values component
5. Build Mission/Vision component
6. Create about listing page
7. Create about detail pages
8. Implement dynamic routing
9. Test responsive behavior

### Testing Requirements
- Timeline renders
- Team profiles display
- Values display
- Mission/Vision renders
- Detail pages render
- Dynamic routing works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] About data structure created
- [ ] Timeline built (reuse)
- [ ] Team Profiles built (reuse)
- [ ] Values built
- [ ] Mission/Vision built
- [ ] About listing page created
- [ ] About detail pages created
- [ ] Dynamic routing implemented
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 11: Contact Pages

### Components Involved
- Contact Form
- Quote Form
- Inquiry Form
- Google Maps
- WhatsApp button
- Contact listing page
- Contact detail pages

### Dependencies
- Phase 10 complete

### Estimated Complexity
**Medium** - 5-6 days

### Tasks
1. Build Contact Form component
2. Build Quote Form component
3. Build Inquiry Form component
4. Implement form validation (Zod)
5. Create API routes for form submission
6. Build Google Maps component
7. Build WhatsApp button component
8. Create contact listing page
9. Create contact detail pages
10. Implement email sending
11. Test form submissions
12. Test responsive behavior

### Testing Requirements
- Contact form validates correctly
- Quote form validates correctly
- Inquiry form validates correctly
- API routes work
- Email sending works
- Google Maps renders
- WhatsApp button works
- Form submissions succeed
- Error handling works
- Mobile responsive
- SEO metadata correct

### Definition of Done
- [ ] Contact Form built
- [ ] Quote Form built
- [ ] Inquiry Form built
- [ ] Form validation implemented
- [ ] API routes created
- [ ] Google Maps built
- [ ] WhatsApp button built
- [ ] Contact listing page created
- [ ] Contact detail pages created
- [ ] Email sending implemented
- [ ] Form submissions tested
- [ ] Error handling tested
- [ ] Responsive behavior tested
- [ ] SEO metadata tested

---

## Phase 12: Animation System

### Components Involved
- ScrollReveal
- Counter
- Parallax
- ImageZoom
- Animation variants
- Animation presets

### Dependencies
- Phase 11 complete

### Estimated Complexity
**Medium** - 4-5 days

### Tasks
1. Create animation variants
2. Create animation presets
3. Build ScrollReveal component
4. Build Counter component
5. Build Parallax component
6. Build ImageZoom component
7. Implement scroll hooks
8. Implement animation hooks
9. Add animations to all pages
10. Test performance
11. Test prefers-reduced-motion

### Testing Requirements
- ScrollReveal works correctly
- Counter animates smoothly
- Parallax works (desktop)
- ImageZoom works
- Animations trigger correctly
- Performance is good (60fps)
- prefers-reduced-motion respected

### Definition of Done
- [ ] Animation variants created
- [ ] Animation presets created
- [ ] ScrollReveal built
- [ ] Counter built
- [ ] Parallax built
- [ ] ImageZoom built
- [ ] Scroll hooks implemented
- [ ] Animation hooks implemented
- [ ] Animations added to all pages
- [ ] Performance tested
- [ ] prefers-reduced-motion tested

---

## Phase 13: SEO Implementation

### Components Involved
- Metadata
- Sitemap
- Robots
- Structured data
- Breadcrumbs
- Canonical URLs

### Dependencies
- Phase 12 complete

### Estimated Complexity
**Medium** - 4-5 days

### Tasks
1. Implement metadata for all pages
2. Create dynamic metadata for product pages
3. Generate sitemap
4. Generate robots.txt
5. Add structured data (Organization, Product, LocalBusiness)
6. Build Breadcrumb component
7. Implement canonical URLs
8. Add Open Graph tags
9. Add Twitter Card tags
10. Test with Google Rich Results Test
11. Test with Google Search Console

### Testing Requirements
- Metadata renders correctly
- Sitemap generates correctly
- Robots.txt generates correctly
- Structured data validates
- Breadcrumbs work
- Canonical URLs correct
- Open Graph tags render
- Twitter Card tags render
- Rich Results Test passes
- Search Console verifies

### Definition of Done
- [ ] Metadata implemented for all pages
- [ ] Dynamic metadata implemented
- [ ] Sitemap generated
- [ ] Robots.txt generated
- [ ] Structured data added
- [ ] Breadcrumb built
- [ ] Canonical URLs implemented
- [ ] Open Graph tags added
- [ ] Twitter Card tags added
- [ ] Rich Results Test passes
- [ ] Search Console verified

---

## Phase 14: Performance Optimization

### Components Involved
- Image optimization
- Lazy loading
- Code splitting
- Caching
- Core Web Vitals

### Dependencies
- Phase 13 complete

### Estimated Complexity
**High** - 5-7 days

### Tasks
1. Optimize all images (WebP, compression)
2. Implement lazy loading for images
3. Implement lazy loading for components
4. Implement code splitting
5. Configure caching strategy
6. Optimize bundle size
7. Minimize JavaScript
8. Optimize CSS
9. Test Core Web Vitals
10. Fix LCP issues
11. Fix FID issues
12. Fix CLS issues

### Testing Requirements
- Images optimized
- Lazy loading works
- Code splitting works
- Caching works
- Bundle size minimized
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse score 90+

### Definition of Done
- [ ] Images optimized
- [ ] Lazy loading implemented
- [ ] Code splitting implemented
- [ ] Caching configured
- [ ] Bundle size minimized
- [ ] JavaScript minimized
- [ ] CSS optimized
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Lighthouse score 90+

---

## Phase 15: Accessibility

### Components Involved
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Focus states
- Color contrast

### Dependencies
- Phase 14 complete

### Estimated Complexity
**Medium** - 4-5 days

### Tasks
1. Add ARIA attributes to all components
2. Implement keyboard navigation
3. Add skip links
4. Ensure focus states visible
5. Check color contrast
6. Add alt text to all images
7. Add form labels
8. Test with screen readers
9. Test keyboard-only navigation
10. Run accessibility audits

### Testing Requirements
- ARIA attributes correct
- Keyboard navigation works
- Screen readers announce content
- Focus states visible
- Color contrast meets WCAG AA
- Alt text present
- Form labels present
- Screen reader test passes
- Keyboard test passes
- Accessibility audit passes

### Definition of Done
- [ ] ARIA attributes added
- [ ] Keyboard navigation implemented
- [ ] Skip links added
- [ ] Focus states visible
- [ ] Color contrast verified
- [ ] Alt text added
- [ ] Form labels added
- [ ] Screen reader tested
- [ ] Keyboard navigation tested
- [ ] Accessibility audit passed

---

## Phase 16: Third-Party Integrations

### Components Involved
- Google Analytics
- Google Tag Manager
- Google Maps
- WhatsApp
- Google Search Console

### Dependencies
- Phase 15 complete

### Estimated Complexity
**Low** - 2-3 days

### Tasks
1. Set up Google Analytics
2. Set up Google Tag Manager
3. Implement Google Maps
4. Implement WhatsApp button
5. Verify Google Search Console
6. Add event tracking
7. Test integrations

### Testing Requirements
- Google Analytics tracks page views
- Google Tag Manager loads
- Google Maps renders
- WhatsApp button works
- Search Console verified
- Events tracked correctly

### Definition of Done
- [ ] Google Analytics set up
- [ ] Google Tag Manager set up
- [ ] Google Maps implemented
- [ ] WhatsApp button implemented
- [ ] Search Console verified
- [ ] Event tracking implemented
- [ ] Integrations tested

---

## Phase 17: Testing & QA

### Components Involved
- All components
- All pages
- All integrations

### Dependencies
- Phase 16 complete

### Estimated Complexity
**High** - 5-7 days

### Tasks
1. Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. Cross-device testing (Desktop, Tablet, Mobile)
3. Responsive testing
4. Performance testing
5. Accessibility testing
6. SEO testing
7. Form testing
8. Animation testing
9. Integration testing
10. Bug fixing

### Testing Requirements
- Works in all browsers
- Works on all devices
- Responsive on all breakpoints
- Performance meets targets
- Accessibility meets WCAG AA
- SEO metadata correct
- Forms submit correctly
- Animations work smoothly
- Integrations work correctly
- No critical bugs

### Definition of Done
- [ ] Cross-browser tested
- [ ] Cross-device tested
- [ ] Responsive tested
- [ ] Performance tested
- [ ] Accessibility tested
- [ ] SEO tested
- [ ] Forms tested
- [ ] Animations tested
- [ ] Integrations tested
- [ ] Critical bugs fixed

---

## Phase 18: Deployment

### Components Involved
- Build process
- Deployment configuration
- Environment variables
- Domain configuration

### Dependencies
- Phase 17 complete

### Estimated Complexity
**Medium** - 3-4 days

### Tasks
1. Configure production build
2. Set up deployment (Vercel/Netlify)
3. Configure environment variables
4. Configure domain
5. Set up SSL
6. Test production build
7. Deploy to production
8. Verify deployment
9. Set up monitoring
10. Set up error tracking

### Testing Requirements
- Production build succeeds
- Deployment succeeds
- Domain works
- SSL configured
- Site loads correctly
- Monitoring works
- Error tracking works

### Definition of Done
- [ ] Production build configured
- [ ] Deployment set up
- [ ] Environment variables configured
- [ ] Domain configured
- [ ] SSL configured
- [ ] Production build tested
- [ ] Deployed to production
- [ ] Deployment verified
- [ ] Monitoring set up
- [ ] Error tracking set up

---

## Phase 19: Documentation

### Components Involved
- Code documentation
- User documentation
- Deployment documentation

### Dependencies
- Phase 18 complete

### Estimated Complexity
**Low** - 2-3 days

### Tasks
1. Document code (JSDoc comments)
2. Create README
3. Document deployment process
4. Document environment variables
5. Document component usage
6. Document API routes
7. Document data structures

### Testing Requirements
- Documentation is clear
- Documentation is accurate
- Documentation is complete

### Definition of Done
- [ ] Code documented
- [ ] README created
- [ ] Deployment documented
- [ ] Environment variables documented
- [ ] Component usage documented
- [ ] API routes documented
- [ ] Data structures documented

---

## Phase 20: Handoff

### Components Involved
- Complete codebase
- Documentation
- Deployment access

### Dependencies
- Phase 19 complete

### Estimated Complexity
**Low** - 1-2 days

### Tasks
1. Final code review
2. Final testing
3. Handoff to development team
4. Transfer deployment access
5. Transfer repository access
6. Knowledge transfer session

### Testing Requirements
- Code review complete
- Final testing complete
- Handoff complete
- Access transferred
- Knowledge transferred

### Definition of Done
- [ ] Final code review complete
- [ ] Final testing complete
- [ ] Handoff to development team
- [ ] Deployment access transferred
- [ ] Repository access transferred
- [ ] Knowledge transfer session complete

---

## Summary

**Total Phases:** 20  
**Total Estimated Time:** 60-85 days (12-17 weeks)  
**Team Size:** 1-2 senior frontend developers  
**Complexity:** Medium-High

**Critical Path:**
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 14 → Phase 15 → Phase 17 → Phase 18

**Parallel Opportunities:**
- Phases 6-11 can be worked on in parallel by multiple developers
- Phase 12 (Animations) can be done alongside phase development
- Phase 13 (SEO) can be done alongside page development

**Risk Mitigation:**
- Regular code reviews
- Continuous integration testing
- Early performance testing
- Early accessibility testing
- Regular stakeholder demos
