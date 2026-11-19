# Master Project Audit & Technical Architecture Baseline
**Goyal Trading Company — B2B Garment Manufacturing Platform**
**Date:** 2026-11-15
**Audit Baseline:** Commit `ca1fedc` on branch `feature/catalogue-functionality`
**Status Key:** `COMPLETED` | `PARTIALLY COMPLETED` | `NOT STARTED` | `BLOCKED` | `NEEDS VERIFICATION`

---

## 1. Executive Summary & Git Repository State

| Metric | Inspected Value | Status |
|---|---|---|
| **Active Branch** | `feature/catalogue-functionality` | ACTIVE |
| **Baseline Commit** | `ca1fedc chore: establish approved homepage v2 design baseline` | VERIFIED |
| **Staged Working Changes** | 20 files staged (Sprint 2 implementation + tests) | STAGED / UNDER REVIEW |
| **Unstaged Working Changes** | 0 files | CLEAN |
| **Untracked Files** | 0 files | CLEAN |
| **Production Build** | Next.js 15.0.0 — 78 static routes compiled cleanly | PASS (Exit code 0) |
| **TypeScript Typecheck** | `npx tsc --noEmit` — 0 errors | PASS (Exit code 0) |
| **ESLint Check** | `npm run lint` — 0 warnings, 0 errors | PASS (Exit code 0) |
| **Test Suite** | `node tests/inquiry-validation.test.js` — 35 tests / 7 suites | PASS (Exit code 0) |

---

## 2. Comprehensive Subsystem Audit

### 2.1 Product Catalogue & Routing Data
* **Status:** `COMPLETED` (Core Data & Routes) / `PARTIALLY COMPLETED` (B2B Buyer Details & Search Filtering)
* **Verified Counts in `data/products.ts`:**
  - **13 Product Families:** `track-suits-activewear`, `t-shirts`, `sports-wear-athletic-gear`, `corporate-promotional-wear`, `school-uniforms-accessories`, `winter-wear-jackets`, `workwear-industrial-uniforms`, `hospital-medical-uniforms`, `hotel-hospitality-uniforms`, `fitness-compression-wear`, `custom-sports-jerseys-kits`, `sublimation-printed-garments`, `bags-luggage`.
  - **35 Categories:** Complete hierarchy mapped to parent families.
  - **16 Products:** Initial seed products with verified names, fabric details, and specifications.
* **Routing Implementation:**
  - `/products` (catalogue landing with family grid).
  - `/products/[familySlug]` (SSG for all 13 families).
  - `/products/[familySlug]/[categorySlug]` (SSG for all 35 categories with `CategoryProductFilter`).
  - `/products/[familySlug]/[categorySlug]/[productSlug]` (SSG for all 16 products with dynamic metadata and breadcrumbs).
* **Missing / Incomplete Work:**
  - Additional product entries to expand beyond the initial 16 seed products across all 35 categories.
  - Search functionality currently limited; needs cross-category keyword search without external search engines.
  - Related product recommendations on product detail pages currently use basic static slice rather than category/fabric matching.

### 2.2 WhatsApp Click-to-Chat Integration
* **Status:** `PARTIALLY COMPLETED` (Basic floating button & server action fallback exist) / `NOT STARTED` (Central utility & dynamic templating)
* **Current Implementation:**
  - `components/ui/WhatsAppButton.tsx` renders a floating widget with hardcoded number `919212126463` and static message.
  - `app/actions/inquiry.ts` generates an inline fallback URL using hardcoded constants.
* **Missing Work:**
  - Centralized utility `lib/whatsapp/` to encapsulate URL generation, phone validation, encoding, and templating.
  - Product-specific WhatsApp enquiry CTAs with prefilled product title, category, and canonical URL.
  - Category-specific WhatsApp enquiry links.
  - Quote-to-WhatsApp and Sample-to-WhatsApp message formatters with explicit customer trigger (never auto-opening).
  - Copy-to-clipboard fallback when WhatsApp cannot be opened directly.
  - Free click-to-chat limitation disclosure (truthful non-automated manual messaging).

### 2.3 Quotation & Sample Enquiry Forms
* **Status:** `COMPLETED` (Forms, Validation, & Honeypot) / `PARTIALLY COMPLETED` (Email submission pending provider)
* **Current Implementation:**
  - `components/forms/QuoteForm.tsx` & `components/forms/SampleRequestForm.tsx`: Accessible React 18 client components with ARIA labels, live error announcements, honeypot spam protection (`_hp_company_url`), and query parameter prefilling via `lib/catalogue/prefill.ts`.
  - `lib/validation/inquiry.ts`: Server-side sanitization preserving procurement symbols (e.g. `Tolerance <1cm`), strict delivery date validation (YYYY-MM-DD, leap years, calendar boundaries, future dates), hierarchical family/category validation, and Indian/international phone validation.
  - `app/actions/inquiry.ts`: Server actions return `provider_unavailable` status honestly with verified sales desk details and WhatsApp link.
* **Missing Work:**
  - Seamless toggle between Email Dispatch (when provider configured) and WhatsApp Click-to-Chat.
  - Persistent enquiry logging/storage if offline backup is requested.

### 2.4 Email Delivery Infrastructure
* **Status:** `NOT STARTED` / `BLOCKED` (Awaiting Provider Credentials)
* **Current Implementation:**
  - Server actions deliberately return `status: 'provider_unavailable'` to prevent false-success reporting.
* **Requirements:**
  - Evaluate zero-cost/low-cost transactional email providers (e.g. Resend, Brevo, or SMTP).
  - Configure via secure server-side environment variables (`RESEND_API_KEY`, `EMAIL_FROM`, `SALES_EMAIL_TO`).
  - No secret exposure in frontend client code.

### 2.5 SEO, Metadata & Structured Data
* **Status:** `PARTIALLY COMPLETED`
* **Current Implementation:**
  - `lib/seo/jsonLd.ts`: Generates Schema.org `BreadcrumbList` and `Product` JSON-LD.
  - Zero-price / fake `offers` and fake inventory availability have been completely eliminated.
* **Missing Work:**
  - `Organization` / `LocalBusiness` JSON-LD for company address, phone, and manufacturing profile.
  - `app/sitemap.ts` and `app/robots.ts` dynamic generators.
  - OpenGraph image generation (`og:image`) and social cards.
  - Verification of canonical URLs across marketing routes.

### 2.6 UI/UX, Design System & Responsive Layouts
* **Status:** `PARTIALLY COMPLETED`
* **Current Implementation:**
  - Approved navy/orange palette, Tailwind CSS configuration, accessible buttons, skip-link, mega menu, and announcement bar.
  - High-fidelity visual specifications documented in `design/homepage-v2-visual-spec.md` and `design/component-contracts.md`.
* **Missing Work:**
  - Coordination with Ashmita's branch (`feature/design-system-ui` / `integration/homepage-v2`) to verify mega menu mobile behavior, drawer accessibility, and component styling consistency.
  - Responsive audit across 320px (mobile), 768px (tablet), 1024px (desktop), and 1440px (wide desktop).

### 2.7 Media, Assets & Image Handling
* **Status:** `NOT STARTED` / `NEEDS VERIFICATION`
* **Current State:**
  - **`public/` directory does not exist on disk**; images currently rely on external CDN URLs or `ProductImageFallback` placeholder SVG.
  - Catalogue PDFs exist in research directory, but high-res optimized garment photography has not been placed in `public/images/`.
* **Missing Work:**
  - Create organized asset structure in `public/images/products/[family]/`.
  - Convert approved catalogue imagery to modern formats (WebP/AVIF).
  - Configure Next.js Image component with explicit dimensions and descriptive alt text.

### 2.8 Quality Assurance & Testing
* **Status:** `COMPLETED` (Validation & Structural Audits) / `PARTIALLY COMPLETED` (End-to-End Route Audits)
* **Current Implementation:**
  - `tests/inquiry-validation.test.js` exercises the production code directly via TypeScript hook.
  - 35 registered tests across 7 test suites pass in Node test runner.
* **Missing Work:**
  - Automated tests for WhatsApp URL generation utility.
  - Integration tests for Server Action state transitions.

---

## 3. Risk & Dependency Matrix

| Area | Risk / Dependency | Impact | Mitigation Strategy |
|---|---|:---:|---|
| **WhatsApp Free Tier** | Business expectation of automated replies or read receipts | High | Explicitly document and UI-disclose that click-to-chat requires the customer to tap Send in WhatsApp. |
| **Email Delivery** | No SMTP/API credentials provided | Medium | Preserve honest `provider_unavailable` fallback to WhatsApp/Phone until credentials are provided. |
| **Image Assets** | Missing `public/` directory and unverified stock images | High | Create `public/images/` structure; utilize SVG product placeholders until approved photography is placed. |
| **Business Verification** | Unverified claims (machinery count, capacity, certifications) | Critical | Enforce strict content guidelines: use only verified address (E-187 Shastri Nagar) and established year (2000). |
| **Branch Safety** | Parallel development on `feature/design-system-ui` | High | Do not switch branches, merge, or rebase without explicit approval. Maintain component contracts. |

---

## 4. Prioritized Phased Development Plan

```
Phase 0: Project Audit & Technical Architecture Baseline (CURRENT - COMPLETED)
   ├── Full working tree & Git inspection
   ├── Compilation of design/master-project-audit.md
   └── Presentation of baseline findings for review

Phase 1: Sprint 2 Review & Stabilization Approval
   ├── Formal approval of the 20 staged Sprint 2 files
   ├── Verification of TypeScript (0 errors), Lint (0 warnings), Build (78 static pages)
   └── Atomic commit of Sprint 2 baseline upon explicit approval

Phase 2: Product Catalogue & B2B Discovery Enhancement
   ├── Audit and expand product records across all 35 categories in data/products.ts
   ├── Implement local in-memory product search & category filtering
   ├── Implement related products resolver based on shared family/category
   └── Enhance product detail pages with verified specifications and enquiry CTAs

Phase 3: Centralized Free WhatsApp Click-to-Chat Architecture
   ├── Create lib/whatsapp/ utility (phone validation, URL builder, template engine)
   ├── Implement dynamic product-specific WhatsApp messages with canonical URLs
   ├── Implement category-specific and form-specific message templates
   ├── Refactor floating WhatsApp button to use central utility and responsive positioning
   └── Implement copy-to-clipboard fallback and client-side click event tracking

Phase 4: Quotation & Sample Enquiry Workflow with Email Provider
   ├── Refactor Server Actions in app/actions/inquiry.ts to integrate central WhatsApp utility
   ├── Implement email provider integration (e.g. Resend/SMTP) behind server-only env vars
   ├── Validate end-to-end form submissions with honest status reporting
   └── Ensure zero data loss with instant WhatsApp fallback on provider failure

Phase 5: UI/UX & Responsive Design Integration
   ├── Coordinate component contracts with Ashmita's design system
   ├── Verify Navbar, MegaMenu, and Footer responsiveness and keyboard navigation
   └── Conduct responsive cross-device layout testing (mobile, tablet, desktop)

Phase 6: Technical SEO, Structured Data & Performance
   ├── Implement Organization and LocalBusiness JSON-LD for Shastri Nagar facility
   ├── Implement dynamic app/sitemap.ts and app/robots.ts
   ├── Add OpenGraph / Twitter metadata and social preview cards
   └── Run Lighthouse audits for Core Web Vitals, accessibility, and contrast

Phase 7: Media Management & Business Content Verification
   ├── Establish public/images/ directory structure and optimize garment assets
   ├── Replace temporary placeholders with approved catalogue imagery
   └── Conduct strict content audit to ensure zero unverified business claims

Phase 8: Final QA, End-to-End Testing & Launch Readiness
   ├── Execute complete automated test suite (build, lint, typecheck, unit tests)
   ├── Validate all 78 static routes and 404 error handling
   ├── Final production build verification
   └── Compile final launch report
```
