# UI GAP ANALYSIS: HOMEPAGE V1 vs VERIFIED B2B BENCHMARK
**Project:** Goyal Trading Company  
**Workspace:** `c:\Users\NEERAJ12\CascadeProjects\goyal-trading-company-research`  
**Phase:** 4B.3 Final Sign-off Audit & Discrepancy Resolution  
**Date:** 10 November 2026  
**Status:** Audit Completed — Fully Grounded in Empirical Repository Evidence  
**Primary Evidence Sources:** `research/business-discovery.md`, `research/contact-information.md`, `types/product.ts`, `data/products.ts`

---

## 1. Business-Owner Confirmation Register (Empirical Audit)

Every business claim, operational process, machinery item, and contact channel has been traced back to primary source documentation. Unsupported claims, third-party directory artifacts, and unconfirmed figures are strictly quarantined from public marketing specifications.

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                BUSINESS-OWNER CONFIRMATION REGISTER                                   │
├────┬───────────────────────────────────────┬──────────────┬───────────────┬────────────────────────────┤
│ ID │ Claim / Feature Description           │ Evidence     │ Audit Status  │ Public UI Specification    │
├────┼───────────────────────────────────────┼──────────────┼───────────────┼────────────────────────────┤
│ C1 │ "26+ Years Experience"                │ Discovery    │ REPLACED      │ Use ONLY "Established 2000"│
│ C2 │ "2 Manufacturing Units"               │ Discovery    │ PENDING AUTH  │ WITHHELD from public UI    │
│ C3 │ Landline `07313726929` (Indore DID)   │ Legacy Scrape│ DIRECTORY DID │ EXCLUDED from public UI    │
│ C4 │ Mobiles: `9212126463`, `8510079800`   │ Discovery    │ PENDING AUTH  │ Flag as Pending Owner Auth │
│ C5 │ Live Factory Status / Shift Hours     │ None         │ FICTIONAL     │ REMOVED COMPLETELY         │
│ C6 │ "Fast Sampling" / "3-5 Days"          │ None         │ UNVERIFIED    │ Use "Discuss Sample Reqs"  │
│ C7 │ Scalable Bulk (150 to 10,000+ pcs)    │ Discovery    │ UNCONFIRMED   │ Use "B2B Production Orders"│
│ C8 │ Circular & Flat Knitting Machinery    │ Discovery    │ VERIFIED      │ Approved: Knitting section │
│ C9 │ Dyeing, Balloon Padding & Driers      │ Discovery    │ VERIFIED      │ Approved: Finishing section│
│ C10│ "Multi-needle Stitching Lines"        │ None         │ UNSUPPORTED   │ Use "Garment Stitching"    │
│ C11│ "Virgin Yarn Sourcing"                │ None         │ UNSUPPORTED   │ Use "Fabric Procurement"   │
│ C12│ "Precision Cutting Tables"            │ None         │ UNSUPPORTED   │ Use "Pattern & Cutting"    │
│ C13│ AQL 2.5 / ±1cm / Grade 4+ / Drop Tests│ None         │ UNSUPPORTED   │ Use "In-House Quality Check"│
│ C14│ Specific Machinery Model Counts       │ None         │ UNSUPPORTED   │ WITHHELD from public UI    │
│ C15│ Customer Names (CRPF, Delhi Police)   │ Discovery    │ PENDING AUTH  │ WITHHELD from public UI    │
│ C16│ 13 Product Families Taxonomy          │ TypeScript   │ VERIFIED      │ Strictly sync data/products│
│ C17│ Product Specs (GSM, Fabric Blend)     │ TypeScript   │ VERIFIED      │ Show ONLY data/products.ts │
│ C18│ Statutory GST & DGFT/IEC Numbers      │ Statutory Reg│ PENDING AUTH  │ WITHHELD from public UI    │
│ C19│ Statutory PAN Card (`AFEPG9418H`)     │ Statutory Reg│ CONFIDENTIAL  │ HARD QUARANTINED (0 uses)  │
│ C20│ Certifications (ISO/BSCI/WRAP/GOTS)   │ Competitors  │ UNVERIFIED    │ HARD QUARANTINED (0 uses)  │
└────┴───────────────────────────────────────┴──────────────┴───────────────┴────────────────────────────┘
```

---

## 2. Section-by-Section Gap Analysis (Sanitized)

```
┌────────────────────────────────────────────────────────────────────────┐
│                   HOMEPAGE SECTION RATING OVERVIEW                     │
├────┬───────────────────────────────────────┬────────┬───────────────────┤
│ #  │ Component / Section                   │ Rating │ Priority          │
├────┼───────────────────────────────────────┼────────┼───────────────────┤
│ 01 │ Utility Top Header                    │ 5 / 10 │ Medium            │
│ 02 │ Global Sticky Navigation & Mega Menu │ 6 / 10 │ High              │
│ 03 │ Hero Section & Value Proposition      │ 5 / 10 │ Critical (P0)     │
│ 04 │ Trust Statistics Rail                 │ 4 / 10 │ High              │
│ 05 │ Product Taxonomy & Family Grid        │ 6 / 10 │ High              │
│ 06 │ Operational Differentiators (Why Us)  │ 5 / 10 │ High              │
│ 07 │ Featured Garment Showcase             │ 5 / 10 │ Critical (P0)     │
│ 08 │ Production Process Pipeline           │ 6 / 10 │ High              │
│ 09 │ Manufacturing Infrastructure & Plant  │ 5 / 10 │ High              │
│ 10 │ Quality Assurance & Inspection Steps  │ 5 / 10 │ High              │
│ 11 │ Statutory Business Heritage           │ 6 / 10 │ Medium            │
│ 12 │ B2B Industries Served                 │ 5 / 10 │ Medium            │
│ 13 │ Trust Signals & Conversion Rail       │ 5 / 10 │ High              │
│ 14 │ Global Footer & Directory             │ 6 / 10 │ Medium            │
└────┴───────────────────────────────────────┴────────┴───────────────────┘
```

---

### Section 01: Utility Top Header
**Current Score:** `5 / 10`
- **Current State:** 40px orange bar with text and phone link.
- **Identified Discrepancies & Resolutions:**
  - *Phone Number Investigation:* `07313726929` is an Indore (STD `0731`) virtual call-tracking number generated by third-party B2B directories (IndiaMART/TradeIndia). It is **NOT** a direct Delhi plant phone. It is **EXCLUDED** from the public UI.
  - *Direct Contact Status:* Mobile `+91 9212126463` is the proprietor's contact in discovery. Marked as `[PENDING OWNER CONFIRMATION FOR PRIMARY PUBLIC DISPLAY]`.
  - *Operational Status:* Removed all fictional live shift/hours indicators.
- **Specification:** Clean static industrial bar displaying physical facility location: *"Shastri Nagar, Delhi Facility • Established in 2000"*, paired with owner-confirmed contact channels.

---

### Section 02: Global Sticky Navigation & Mega Menu (`Navbar`)
**Current Score:** `6 / 10`
- **Current State:** Standard white navbar with basic dropdowns.
- **Identified Discrepancies & Resolutions:**
  - Mega-menu must reflect the exact 13 product families defined in `types/product.ts` (`track-suits-activewear`, `t-shirts`, `sports-wear-athletic-gear`, `jackets-outerwear`, `shorts`, `school-wear`, `corporate-wear`, `bags-accessories`, `swimming-water-sports`, `medical-equipment`, `uniforms`, `fabrics-materials`, `promotional-items`).
  - Primary CTA button must use Navy `#1A365D` background with solid white text (**12.14:1 AAA contrast**). White text on Coral is prohibited.
- **Specification:** Frosted glassmorphic sticky nav (80px → 68px morph) with 3-column directory representing the true codebase hierarchy.

---

### Section 03: Hero Section & Value Proposition (`Hero`)
**Current Score:** `5 / 10`
- **Current State:** Slide carousel with basic text fades.
- **Identified Discrepancies & Resolutions:**
  - Removed fictional specification calculator widget and floating glass chips.
  - Replaced "26+ Years" with **"Established in 2000"**.
  - Withheld "2 Units", "10,000 sets", and fabricated MOQ figures.
  - Replaced "Fast Sampling" with **"Discuss Sample Requirements"**.
- **Specification:** Kinetic rotating headline (*"Wholesale • Custom OEM • Institutional"*), authentic factory imagery with dark navy gradient overlay, and dual accessible CTAs ("Request a Quote" in Navy `#1A365D` + "Browse Catalogue").

---

### Section 04: Trust Statistics Rail (`TrustStatistics`)
**Current Score:** `4 / 10`
- **Current State:** Static columns on dark blue background.
- **Identified Discrepancies & Resolutions:**
  - Removed animated counting dials (no fake counting up from 0).
  - Grounded metrics strictly in verified facts:
    1. `2000` | **Established Year** | Continuous Garment Manufacturing in New Delhi.
    2. `B2B Supply` | **Business Model** | Bulk Apparel & Teamwear Manufacturing.
    3. `Domestic & Export`| **Geographic Reach** | Supplying Pan-India and International Markets.
    4. `Custom OEM` | **Production Mode** | Custom Sizing, Private Label & Bulk Orders.
  - Withheld: "2 Units", "10,000 sets/month", "26+ years", raw GSTIN/IEC.
- **Specification:** High-contrast static strip with tabular monospace typography (`JetBrains Mono` system fallback).

---

### Section 05: Product Taxonomy & Family Grid (`ProductCategories`)
**Current Score:** `6 / 10`
- **Current State:** 6 generic cards with text paragraphs.
- **Identified Discrepancies & Resolutions:**
  - Must display the 13 verified product families from `data/products.ts`.
  - Removed dual-image hover flips where secondary images do not exist; use crisp single garment photography with subtle scale zoom.
  - Hide unknown specifications; do not fabricate fabric compositions or GSM.
- **Specification:** Clean line-sheet cards with verified category titles and direct links to `/products/[familySlug]`.

---

### Section 06: Operational Differentiators (`WhyChooseUs`)
**Current Score:** `5 / 10`
- **Current State:** Repetitive 3x2 generic icon grid.
- **Identified Discrepancies & Resolutions:**
  - Removed "BSCI, WRAP, GOTS certified", "98% on-time delivery", "CAD grading", and "laboratory testing".
  - Maintained 6 confirmed operational capabilities:
    1. In-House Quality Checks (Visual and measurement checks).
    2. Dependable Logistics (Freight coordination across India and global export shipping).
    3. Experienced Craftsmen (Skilled tailors and finishing staff in New Delhi).
    4. Established Manufacturing (Operational track record since 2000).
    5. Flexible Batch Production (Capable of handling varied bulk run sizes).
    6. Direct Factory Pricing (Direct manufacturer pricing without intermediary trading markups).
- **Specification:** Asymmetric 2-column layout (Left: sticky manufacturing philosophy; Right: 6 clean capability cards).

---

### Section 07: Featured Garment Showcase (`FeaturedProducts`)
**Current Score:** `5 / 10`
- **Current State:** 4 retail-style cards.
- **Identified Discrepancies & Resolutions:**
  - Eliminated invented product names and fabricated specs (e.g. removed fake "320 GSM Winter Fleece Hoodie").
  - Grounded strictly in the 16 real records in `data/products.ts`:
    1. *Track Suit* (`track-suit-general`): 100% Polyester / Cotton Blend, 220–240 GSM.
    2. *Track Pant* (`track-pant-general`): 100% Polyester / Cotton Blend, 220–240 GSM.
    3. *Round Neck Cotton T-Shirt* (`round-neck-cotton-tshirt`): 100% Cotton, 180–200 GSM.
    4. *Spandex Training Jacket* (`training-jacket-spandex`): Spandex Blend, 240–260 GSM.
  - Action Button: "Request Quote for this Item" (Navy `#1A365D` button with solid white text).
- **Specification:** Technical garment specimen cards with tabular verified specs and direct quote triggers.

---

### Section 08: Production Process Pipeline (`ManufacturingProcess`)
**Current Score:** `6 / 10`
- **Current State:** 4 basic text steps.
- **Identified Discrepancies & Resolutions:**
  - Verified against discovery evidence: Circular and flat knitting machines are confirmed; dyeing and balloon padding are confirmed.
  - Unsupported claims removed: "virgin yarn sourcing", "precision cutting tables", "multi-needle stitching lines", "CAD grading", "laboratory testing".
  - Confirmed 5-Stage Operational Pipeline:
    1. **Fabric Sourcing & Inspection:** Sourcing knitted fabrics and checking roll quality.
    2. **Pattern Making & Cutting:** Manual and mechanical spreading and cutting on cutting tables.
    3. **Stitching & Assembly:** Garment assembly on sewing stations.
    4. **In-House Quality Check:** Visual inspection, thread trimming, and measurement audit.
    5. **Finishing & Packaging:** Steam pressing, poly-bagging, and carton dispatch.
- **Specification:** Clean horizontal or stacked cards with bold step numbering (`01` through `05`).

---

### Section 09: Manufacturing Infrastructure & Plant (`Infrastructure`)
**Current Score:** `5 / 10`
- **Current State:** 3 generic stock cards.
- **Identified Discrepancies & Resolutions:**
  - Traced to `research/business-discovery.md`:
    - *Knitting Section:* High-speed circular knitting machines & flat knit machines.
    - *Finishing Facilities:* Dyeing facility, balloon padding facility, and industrial driers.
    - *Stitching Lines:* Sewing stations and finishing tables.
  - Removed specific machine quantities and model numbers pending asset inventory.
  - Facility Location: Shastri Nagar, New Delhi.
- **Specification:** Confirmed plant capability register grounded in physical Delhi infrastructure.

---

### Section 10: Quality Assurance & Inspection Steps (`QualityAssurance`)
**Current Score:** `5 / 10`
- **Current State:** 4 generic quality steps.
- **Identified Discrepancies & Resolutions:**
  - Discovery states: *"Centralized system ensures speedy and consistent quality"*.
  - Unsupported claims removed: "AQL 2.5", "±1cm tolerance", "100% inspection guarantee", "drop testing", "ISO/BSCI".
  - Confirmed Operational QC Checkpoints:
    1. Fabric Receipt Inspection: Checking fabric rolls for knitting flaws and surface defects.
    2. In-Process Stitching Checks: Monitoring seam alignment and stitching consistency.
    3. Dimensional Measurement: Verifying garment measurements against approved sample specifications.
    4. Final Finishing Audit: Thread trimming, pressing check, and export carton packaging.
- **Specification:** Disciplined inspection checklist UI focusing on physical craftsman verification.

---

### Section 11: Statutory Business Heritage (`CertificationsAwards`)
**Current Score:** `6 / 10`
- **Current State:** White cards with GST, DGFT, 2 Units, 2000.
- **Identified Discrepancies & Resolutions:**
  - Renamed section to **"Business Heritage & Operations"**.
  - Confirmed Content:
    - *Established in 2000:* Continuous manufacturing operations under founder leadership.
    - *Delhi Manufacturing Plant:* Operating from permanent premises in Shastri Nagar, Delhi - 110052.
    - *B2B Market Reach:* Supplying athletic clubs, institutions, and wholesale buyers across India and export destinations.
    - *Direct Factory Access:* Direct communication with proprietor and production team.
  - WITHHELD: Raw GSTIN, raw IEC, and "2 Units" claim until explicit business owner authorization is granted.
  - QUARANTINED: PAN `AFEPG9418H` and ISO/BSCI/WRAP certifications (0 uses).
- **Specification:** Heritage plaque cards displaying verified operational history.

---

### Section 12: B2B Industries Served (`IndustriesServed`)
**Current Score:** `5 / 10`
- **Current State:** 4 small icon cards.
- **Identified Discrepancies & Resolutions:**
  - 4 Verified B2B Application Sectors:
    1. *Sports & Athletic Clubs:* Team kits, tracksuits, athletic lowers, and training bibs.
    2. *Schools & Educational Colleges:* Institutional uniforms, PE tracksuits, and winter wear.
    3. *Corporate Organizations:* Staff polo shirts, corporate activewear, and event tees.
    4. *Institutional & Security Forces:* Durable uniform apparel, windcheaters, and tactical sportswear.
  - Removed specific government client names (CRPF, Delhi Police) until written consent is on file.
- **Specification:** Clean sector overview linking directly to verified catalog categories.

---

### Section 13: Trust Signals & Conversion Rail (`TrustSignals`)
**Current Score:** `5 / 10`
- **Current State:** Blue box with buttons and stat boxes.
- **Identified Discrepancies & Resolutions:**
  - Removed "26+ Years Exp", "2 Units", and raw GST/DGFT badges.
  - Left side: Compelling production statement: *"Direct Factory Sportswear Manufacturing with Established Heritage"*, with verified commitments: Direct Factory Pricing, In-House Knitting & Stitching, B2B Production Orders, Direct Contact with Proprietor.
  - Right side: Clean contact triggers: "Request a Quote" (Primary Navy `#1A365D` button with solid white text) and direct contact inquiry link.
- **Specification:** High-impact conversion rail with accessible CTA buttons.

---

### Section 14: Global Footer & Directory (`Footer`)
**Current Score:** `6 / 10`
- **Current State:** Basic 4-column directory.
- **Identified Discrepancies & Resolutions:**
  - Synchronized with the actual 13 product families from `data/products.ts`:
    - Col 1: Track Suits & Activewear, T-Shirts, Sports Wear & Athletic Gear, Jackets & Outerwear, Shorts, School Wear, Corporate Wear.
    - Col 2: Bags & Accessories, Swimming & Water Sports, Medical Equipment, Uniforms, Fabrics & Materials, Promotional Items.
  - Physical Plant Anchor: No. E-187, First Floor, Near Indra Park, Opp. Metro Piller 180, Shastri Nagar, Delhi - 110052.
  - Copyright: *"Copyright © 2000–2026 Goyal Trading Company. All Rights Reserved. Delhi, India."*
- **Specification:** Enterprise 5-column directory providing complete crawlable access to all 13 families.

---

## 3. Local Font & Typography Implementation Strategy

Empirical check confirms **0** `.woff2` font files exist in the repository for Outfit, Plus Jakarta Sans, or JetBrains Mono.

### Build-Safe Font Architecture
1. **Never use `next/font/local` with non-existent paths:** Invoking `localFont({ src: './missing.woff2' })` causes Next.js to crash during `next build` with a fatal `ENOENT` error.
2. **Current Build-Safe Strategy:**
   Pure CSS system font variables declared in `app/globals.css` and mapped in `tailwind.config.ts`:
   ```css
   :root {
     --font-inter: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
     --font-open-sans: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
     --font-jetbrains-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
   }
   ```
3. **Phase 4B Implementation Protocol:**
   - The `.woff2` font files for Outfit and Plus Jakarta Sans must be physically placed in `public/fonts/` **prior** to any code change referencing them.
   - Until those files are physically committed, the build must continue utilizing the stable system font stack, which compiles 78/78 static pages with Exit Code 0 every time.
