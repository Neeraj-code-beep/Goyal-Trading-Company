# Homepage UX Blueprint
## Goyal Trading Company - Definitive Homepage Specification

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Homepage UX Blueprint for Implementation

---

# Announcement Bar

## Purpose
Display time-sensitive announcements, promotions, or critical information that requires immediate user attention.

## Business Goal
Drive urgency for limited-time offers, communicate important operational updates, or highlight new capabilities that can lead to immediate inquiries.

## User Goal
Quickly understand if there are any time-sensitive opportunities or important announcements relevant to their sourcing needs.

## Content
- **Primary Text:** "Free Sample Offer: Request a sample of any product this month. Limited to first 50 inquiries."
- **Link:** "Request Sample" (links to sample request form)
- **Close Button:** X icon to dismiss

## Visual Layout
- Full-width bar at top of page
- Centered text with link on right
- Close button on far right
- Height: 40px
- Background: Manufacturing Orange (#ED8936)
- Text: White (#FFFFFF)

## Required Components
- Announcement Bar (from Component Library)

## CTA
- **Primary:** "Request Sample" (text link with underline)

## Trust Signals
- None (this is promotional)

## Images Required
- None

## Icons Required
- Close icon (X) - 24px × 24px

## Suggested Microinteractions
- **Close Animation:** Fade out and collapse height (300ms, ease-out)
- **Link Hover:** Underline animation (200ms, ease-out)

## Accessibility Notes
- Use aria-live="polite" for screen reader announcements
- Ensure close button has 44px minimum touch target on mobile
- Use localStorage to remember dismissed state
- Provide keyboard access to close button (Enter, Space)

## Mobile Layout
- Full width, centered text
- Font size: 12px
- Close button: 32px × 32px
- Link: Tap-friendly size

## SEO Notes
- Keep text concise and keyword-relevant
- Use semantic HTML (<aside> or <div role="banner">)
- Ensure dismissible content doesn't hide important SEO content

---

# Sticky Navbar

## Purpose
Provide persistent navigation access throughout the page, enabling users to navigate to key sections without scrolling back to top.

## Business Goal
Reduce friction in navigation, ensure "Request a Quote" CTA is always visible, maintain accessibility to conversion points.

## User Goal
Navigate to different sections of the site, access key information, and initiate contact without losing context.

## Content
- **Logo:** Goyal Trading Company logo (left)
- **Navigation Links:** Products, Capabilities, Quality Process, Our Factory, Clients, About Us, Contact
- **CTA Button:** "Request a Quote" (right)
- **Hamburger Menu:** Mobile only (right)

## Visual Layout
- Sticky positioning (fixed at top after scroll)
- Background: White (#FFFFFF) with 0.95 opacity when sticky
- Height: 80px (72px when sticky)
- Logo: Left-aligned, 40px height
- Navigation: Right-aligned, uppercase, 14px
- CTA: Manufacturing Orange button, prominent
- Border bottom: 1px solid #E2E8F0
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.1) when sticky

## Required Components
- Sticky Navbar (from Component Library)
- Mega Menu (for Products and Capabilities)
- Mobile Menu (hamburger with accordion)

## CTA
- **Primary:** "Request a Quote" (always visible, Manufacturing Orange button)

## Trust Signals
- Logo (brand credibility)
- Professional navigation structure

## Images Required
- Logo (SVG or PNG, transparent background)

## Icons Required
- Hamburger icon (3 lines)
- Close icon (X) for mobile menu
- Chevron/down icons for mega-menu indicators

## Suggested Microinteractions
- **Sticky Transition:** Background change, shadow appear, height compression (300ms, ease-in-out)
- **Link Hover:** Color change to Manufacturing Orange, underline animation (200ms, ease-out)
- **Mega Menu:** Fade in and slide down (200ms, ease-out)
- **Mobile Menu:** Slide from right (300ms, ease-in-out)

## Accessibility Notes
- Skip to content link (hidden until focused)
- Full keyboard navigation (Tab, Enter, Escape)
- ARIA labels for mobile menu
- Focus indicators visible
- Mega menu keyboard accessible

## Mobile Layout
- Hamburger menu icon (right)
- Logo (left)
- Full-screen overlay when open
- Deep Navy Blue (#1A365D) background
- White text
- Accordion-style navigation
- 44px minimum touch targets

## SEO Notes
- Use semantic HTML (<nav>)
- Include descriptive link text
- Ensure logo has alt text
- Provide clear navigation hierarchy

---

# Hero Section

## Purpose
Communicate the primary value proposition, establish manufacturing credibility immediately, and drive the first conversion action.

## Business Goal
Capture visitor attention within 3 seconds, communicate manufacturing excellence, and drive quote requests or factory tour scheduling.

## User Goal
Quickly understand if this is a legitimate manufacturing operation, verify capabilities, and determine how to initiate contact.

## Content
- **Headline:** "Premium Wholesale Textile Manufacturing for Global Retailers"
- **Subheadline:** "Custom manufacturing with transparent pricing, verified quality, and direct factory access. No hidden costs, no surprises."
- **Primary CTA:** "Request a Quote"
- **Secondary CTA:** "View Capabilities"
- **Tertiary CTA:** "Schedule Factory Tour"
- **Trust Signals:**
  - Certification badges (BSCI, WRAP, GOTS) with verification links
  - "Established 2008" badge
  - "50,000 units/month capacity" metric
  - "Serving 100+ clients globally" metric

## Visual Layout
- Full-width background (authentic factory photo showing production floor)
- Dark gradient overlay (linear-gradient(to bottom, rgba(26,54,93,0.4), rgba(26,54,93,0.8)))
- Centered content container (max-width 1000px)
- Text alignment: Center
- Height: 80vh minimum, 100vh preferred
- Vertical padding: 80px
- Trust signals below CTAs in horizontal row

## Required Components
- Hero Section (from Component Library)
- Primary Button
- Secondary Button
- Tertiary Button
- Certification Badges

## CTA
- **Primary:** "Request a Quote" (Manufacturing Orange button, most prominent)
- **Secondary:** "View Capabilities" (outlined button, Deep Navy Blue)
- **Tertiary:** "Schedule Factory Tour" (outlined button, Deep Navy Blue)

## Trust Signals
- **Certifications:** BSCI, WRAP, GOTS badges with verification links
- **Capacity Metric:** "50,000 units/month capacity"
- **Client Metric:** "Serving 100+ clients globally"
- **Years Badge:** "Established 2008"
- **Factory Image:** Authentic production floor photo (background)

## Images Required
- **Hero Background:** Authentic factory photo showing production floor with workers (1920×1080px, WebP with JPEG fallback)
- **Certification Badges:** BSCI, WRAP, GOTS logos (SVG or PNG, 80×80px)

## Icons Required
- None (use text badges for metrics)

## Suggested Microinteractions
- **Content Fade In:** Staggered reveal (500ms, ease-out, 100ms delay between elements)
- **Parallax:** Background moves at 0.5x scroll speed (continuous, scroll-based)
- **CTA Hover:** Standard button hover states (200ms, ease-out)
- **Badge Hover:** Scale 1.05, verification link underline (200ms, ease-out)

## Accessibility Notes
- Ensure text contrast meets WCAG AA (4.5:1 minimum)
- Provide alt text for background image
- Ensure CTAs have descriptive text
- Skip parallax on prefers-reduced-motion
- Ensure keyboard navigation to CTAs

## Mobile Layout
- Full-width background
- Stacked content (headline, subheadline, CTAs stacked)
- Smaller text (H1: 28px, P: 14px, CTAs: 14px)
- CTAs: Full width, stacked
- Trust signals: 2 per row, stacked
- Disable parallax for performance

## SEO Notes
- H1: "Premium Wholesale Textile Manufacturing for Global Retailers"
- Include primary keywords in headline
- Descriptive alt text for background image
- Semantic heading structure
- Internal links in CTAs

---

# Trust Statistics

## Purpose
Build immediate credibility through quantifiable metrics that demonstrate manufacturing scale, experience, and reliability.

## Business Goal
 Establish trust through data, differentiate from competitors with specific metrics, and provide verification points for serious buyers.

## User Goal
Quickly assess the scale and reliability of the manufacturing operation through concrete numbers.

## Content
- **Stat 1:** "50,000" - "Units/Month" - "Production Capacity"
- **Stat 2:** "15+" - "Years" - "Industry Experience"
- **Stat 3:** "100+" - "Clients" - "Global Reach"
- **Stat 4:** "98%" - "On-Time" - "Delivery Rate"

## Visual Layout
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Center-aligned content
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Each stat: Icon (48px), Number (48px bold), Label (16px semi-bold), Description (14px regular)

## Required Components
- Stats (from Component Library)
- Counter Animation

## CTA
- None (this is informational)

## Trust Signals
- **Quantifiable Metrics:** All numbers are specific, not generic
- **Icons:** Manufacturing Orange and Quality Green for visual hierarchy
- **Counter Animation:** Numbers count up from 0 for engagement

## Images Required
- None (use icons)

## Icons Required
- **Production Icon:** Factory/machinery icon (48px, Manufacturing Orange)
- **Experience Icon:** Clock/calendar icon (48px, Manufacturing Orange)
- **Clients Icon:** Globe/users icon (48px, Quality Green)
- **Delivery Icon:** Truck/check icon (48px, Quality Green)

## Suggested Microinteractions
- **Counter Animation:** Count from 0 to final value (2000ms, ease-out, scroll-triggered)
- **Hover State:** Icon scale 1.1, number scale 1.05 (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between stats (400ms per stat, ease-out)

## Accessibility Notes
- Use aria-label for screen readers to read full metric
- Ensure numbers are formatted with commas
- Skip counter animation on prefers-reduced-motion
- Provide text alternative for icons

## Mobile Layout
- 2-column grid (tablet), 1-column (mobile)
- Smaller icons (40px tablet, 32px mobile)
- Smaller numbers (40px tablet, 32px mobile)
- Stacked vertically on mobile

## SEO Notes
- Use semantic HTML (<section>, <dl> for definition lists)
- Include numbers in text for search engines
- Use descriptive icon alt text
- Schema markup for Organization data

---

# Why Choose Goyal Trading Company

## Purpose
Communicate unique differentiators and value propositions that separate Goyal Trading Company from competitors.

## Business Goal
Differentiate from competitors, communicate unique value propositions, and address key buyer concerns proactively.

## User Goal
Understand why they should choose Goyal Trading Company over other manufacturers, and what unique benefits they offer.

## Content
- **Feature 1:** "Transparent Pricing" - "Clear price ranges by quantity. No hidden costs. Know exactly what you're paying for."
- **Feature 2:** "Verified Quality" - "AQL 2.5 standards, verifiable certifications, documented quality processes."
- **Feature 3:** "Direct Factory Access" - "Named contacts, factory tours, video audits. Direct access to decision-makers."
- **Link:** "Learn More About Our Approach"

## Visual Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Center-aligned content
- Gap: 24px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Each feature: Icon (48px), Title (18px bold), Description (14px regular), Link (14px semi-bold)

## Required Components
- Feature Cards (from Component Library)

## CTA
- **Secondary:** "Learn More About Our Approach" (text link, Manufacturing Orange)

## Trust Signals
- **Specific Claims:** Not generic "quality" but "AQL 2.5 standards"
- **Verifiable:** Mentions certifications and documentation
- **Direct Access:** Highlights named contacts and factory tours

## Images Required
- None (use icons)

## Icons Required
- **Pricing Icon:** Price tag/money icon (48px, Manufacturing Orange)
- **Quality Icon:** Shield/check icon (48px, Quality Green)
- **Access Icon:** Phone/factory icon (48px, Manufacturing Orange)

## Suggested Microinteractions
- **Hover State:** Card lift 2px, background change to #EDF2F7, icon scale 1.1 (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Ensure icons have aria-labels
- Provide descriptive link text
- Ensure keyboard navigation

## Mobile Layout
- 2-column grid (tablet), 1-column (mobile)
- Smaller icons (40px tablet, 32px mobile)
- Stacked vertically on mobile
- Full width cards

## SEO Notes
- Use H3 for feature titles
- Include keywords in descriptions
- Internal link to About page
- Schema markup for Feature

---

# Product Categories

## Purpose
Organize products by type for easy discovery and enable users to quickly find relevant product categories.

## Business Goal
Reduce friction in product discovery, guide users to relevant products, and increase product page click-through rates.

## User Goal
Quickly find the product category they're interested in and navigate to detailed product information.

## Content
- **Category 1:** Shirting - "Dress shirts, casual shirts, formal shirts" - 45 products
- **Category 2:** Suiting - "Business suits, formal suits, blazers" - 32 products
- **Category 3:** Bottoms - "Trousers, jeans, shorts" - 28 products
- **Category 4:** Ethnic Wear - "Kurtis, sarees, lehengas" - 38 products
- **Category 5:** Uniforms - "Corporate, hospitality, healthcare" - 25 products
- **Category 6:** Technical Fabrics - "Performance, waterproof, fire-resistant" - 18 products

## Visual Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Our Products" (H2, 32px, Deep Navy Blue, centered)
- Each category: Image (300×200px, 4:3 aspect ratio), Category Name (18px bold), Product Count (14px regular), "View All" link (14px, Manufacturing Orange)

## Required Components
- Product Categories (from Component Library)
- Category Cards

## CTA
- **Secondary:** "View All Products" (text link below grid, centered, Manufacturing Orange)

## Trust Signals
- **Product Counts:** Shows scale and variety
- **Category Images:** Authentic product photos, not stock
- **Clear Organization:** Logical categorization

## Images Required
- **Category Images:** 6 images (300×200px each, 4:3 aspect ratio, WebP with JPEG fallback)
  - Shirting category image
  - Suiting category image
  - Bottoms category image
  - Ethnic Wear category image
  - Uniforms category image
  - Technical Fabrics category image

## Icons Required
- None (use category images)

## Suggested Microinteractions
- **Hover State:** Image scale 1.05, card lift 4px, shadow increase (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for images
- Ensure links have descriptive text
- Ensure keyboard navigation

## Mobile Layout
- 2-column grid (tablet), 1-column (mobile)
- Smaller images (250×167px tablet, 200×133px mobile)
- Stacked vertically on mobile
- Full width cards

## SEO Notes
- Use H2 for section title
- Use H3 for category names
- Internal links to category pages
- Descriptive alt text for images
- Schema markup for ProductCategory

---

# Featured Products

## Purpose
Showcase specific products with technical specifications to demonstrate manufacturing capability and drive product inquiries.

## Business Goal
Demonstrate product quality and technical specifications, drive sample requests, and increase quote requests for specific products.

## User Goal
See specific product examples with technical details to assess manufacturing capability and determine if products meet their requirements.

## Content
- **Product 1:** Premium Cotton Dress Shirt - Fabric: 100% Cotton, GSM: 120, MOQ: 100, Price: ₹150-250
- **Product 2:** Business Suit - Fabric: Wool Blend, GSM: 280, MOQ: 50, Price: ₹1,500-2,500
- **Product 3:** Corporate Uniform Shirt - Fabric: Polyester-Cotton Blend, GSM: 140, MOQ: 200, Price: ₹180-300
- **Product 4:** Hospitality Linen Set - Fabric: 100% Cotton, GSM: 160, MOQ: 50, Price: ₹800-1,200

## Visual Layout
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Section title: "Featured Products" (H2, 32px, Deep Navy Blue, centered)
- Each product: Image (800×1000px, 4:5 aspect ratio, 60% height), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), "Request Sample" CTA (full width button)

## Required Components
- Product Cards (from Component Library)
- Primary Button

## CTA
- **Primary:** "Request Sample" (on each product card, full width)
- **Secondary:** "View All Products" (text link below grid, centered, Manufacturing Orange)

## Trust Signals
- **Technical Specs:** Fabric, GSM, MOQ (B2B-specific data)
- **Authentic Images:** Real product photos, not stock
- **Transparent Pricing:** Price ranges by quantity
- **Sample Availability:** Clear sample request option

## Images Required
- **Product Images:** 4 images (800×1000px each, 4:5 aspect ratio, WebP with JPEG fallback)
  - Premium Cotton Dress Shirt (front view)
  - Business Suit (front view)
  - Corporate Uniform Shirt (front view)
  - Hospitality Linen Set (flat lay)

## Icons Required
- None (use product images)

## Suggested Microinteractions
- **Hover State:** Card lift 4px, image zoom 5%, shadow increase (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for images
- Ensure technical specs are readable (monospace font)
- Ensure keyboard navigation

## Mobile Layout
- 2-column grid (tablet), 1-column (mobile)
- Smaller images (600×750px tablet, 400×500px mobile)
- Stacked vertically on mobile
- Full width cards

## SEO Notes
- Use H2 for section title
- Use H3 for product names
- Internal links to product detail pages
- Descriptive alt text for images
- Schema markup for Product

---

# Manufacturing Process

## Purpose
Demonstrate the manufacturing workflow and quality checkpoints to build confidence in production capability and quality control.

## Business Goal
Show manufacturing expertise, demonstrate quality processes, and address production anxiety for serious buyers.

## User Goal
Understand the manufacturing process, quality checkpoints, and production timeline to assess capability and reliability.

## Content
- **Step 1:** Fabric Inspection - Raw material quality check, GSM verification, color fastness testing
- **Step 2:** Cutting - Precision cutting with single-needle lockstitch machines, edge guide folders
- **Step 3:** Sewing - 50+ industrial sewing machines, skilled operators, quality checkpoints
- **Step 4:** Finishing - Continuous fusing press, steam finishing, final inspection
- **Step 5:** Quality Control - AQL 2.5 inspection, tolerance ±2mm, defect rate <1%
- **Step 6:** Packaging - Custom packaging options, quality verification before shipment

## Visual Layout
- Horizontal process (desktop), vertical (mobile)
- 6 steps (desktop), 3 steps per tablet row, stacked (mobile)
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Our Manufacturing Process" (H2, 32px, Deep Navy Blue, centered)
- Each step: Step Number (32px bold, Manufacturing Orange), Icon (48px), Title (18px semi-bold), Description (14px regular), Arrow/Connector (24px)

## Required Components
- Manufacturing Process (from Component Library)
- Process Steps

## CTA
- **Secondary:** "View Detailed Process" (text link below process, centered, Manufacturing Orange)

## Trust Signals
- **Specific Equipment:** Machine types mentioned
- **Quality Standards:** AQL 2.5, tolerance ±2mm
- **Quality Metrics:** Defect rate <1%
- **Process Documentation:** Step-by-step workflow

## Images Required
- None (use icons)

## Icons Required
- **Step 1 Icon:** Fabric/magnifying glass icon (48px, Manufacturing Orange)
- **Step 2 Icon:** Scissors/cutting icon (48px, Manufacturing Orange)
- **Step 3 Icon:** Sewing machine icon (48px, Manufacturing Orange)
- **Step 4 Icon:** Iron/finishing icon (48px, Manufacturing Orange)
- **Step 5 Icon:** Shield/QC icon (48px, Quality Green)
- **Step 6 Icon:** Box/package icon (48px, Manufacturing Orange)
- **Connector Icon:** Arrow/chevron-right (24px, #E2E8F0)

## Suggested Microinteractions
- **Hover State:** Step scale 1.05, icon scale 1.1 (200ms, ease-out)
- **Active State:** Step background Manufacturing Orange, text white (150ms, ease-out)
- **Staggered Reveal:** 100ms delay between steps (400ms per step, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>, <ol>)
- Provide aria-label for process steps
- Ensure icons have aria-labels
- Ensure keyboard navigation

## Mobile Layout
- Stacked vertically
- 3 steps per row (tablet), 1 step per row (mobile)
- Smaller icons (40px tablet, 32px mobile)
- Connectors hidden on mobile
- Full width steps

## SEO Notes
- Use H2 for section title
- Use H3 for step titles
- Include keywords in descriptions
- Schema markup for HowTo
- Internal link to detailed process page

---

# Factory Infrastructure

## Purpose
Showcase factory equipment, capacity, and infrastructure to demonstrate manufacturing capability and technical authority.

## Business Goal
Demonstrate manufacturing scale and technical capability, provide verification data for serious buyers, and build confidence through transparency.

## User Goal
Verify manufacturing equipment, capacity, and infrastructure to assess if the factory can handle their requirements.

## Content
- **Equipment Showcase:**
  - Cutting: 10 single-needle lockstitch machines, 5 edge guide folders
  - Sewing: 50+ industrial sewing machines (Juki, Brother)
  - Finishing: 3 continuous fusing presses, 5 steam finishing units
  - Quality: 2 QC light tables, AQL inspection stations
- **Capacity Data:**
  - Monthly Production: 50,000 units
  - Custom Capacity: Small batch (100-500), Medium (500-2000), Large (2000+)
  - Lead Time: 2-4 weeks depending on quantity

## Visual Layout
- 2-column layout (text left, image gallery right)
- Gap: 60px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Section title: "Factory Infrastructure" (H2, 32px, Deep Navy Blue, left-aligned)
- Left column: Equipment list (table format), Capacity data (progress bars)
- Right column: Equipment image gallery (2×2 grid, 4 images)

## Required Components
- Capability Cards (from Component Library)
- Technical Data Table
- Progress Bar Animation

## CTA
- **Primary:** "View All Equipment" (button, Manufacturing Orange)
- **Secondary:** "Schedule Factory Tour" (outlined button, Deep Navy Blue)

## Trust Signals
- **Specific Equipment:** Machine types and models
- **Capacity Data:** Specific numbers, not "large capacity"
- **Equipment Photos:** Authentic equipment images
- **Technical Authority:** Detailed specifications

## Images Required
- **Equipment Images:** 4 images (600×600px each, square aspect ratio, WebP with JPEG fallback)
  - Cutting department equipment
  - Sewing department equipment
  - Finishing department equipment
  - Quality control equipment

## Icons Required
- None (use equipment images)

## Suggested Microinteractions
- **Image Hover:** Scale 1.05, border color change to Manufacturing Orange (300ms, ease-out)
- **Progress Bar:** Animate width on scroll (1500ms, ease-out)
- **Staggered Reveal:** 100ms delay between images (400ms per image, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h2>, <table>)
- Provide descriptive alt text for images
- Ensure table is accessible (captions, headers)
- Ensure keyboard navigation

## Mobile Layout
- Stacked vertically (text top, images bottom)
- Equipment gallery: 2×2 grid (tablet), 1 column (mobile)
- Smaller images (400×400px tablet, 300×300px mobile)
- Full width content

## SEO Notes
- Use H2 for section title
- Include equipment names in text
- Descriptive alt text for images
- Schema markup for Organization
- Internal link to equipment page

---

# Quality Assurance

## Purpose
Document quality standards, inspection processes, and certifications to build trust and address quality concerns.

## Business Goal
Demonstrate commitment to quality, provide verifiable quality standards, and address production anxiety for serious buyers.

## User Goal
Understand quality standards, inspection processes, and certifications to assess if quality meets their requirements.

## Content
- **Quality Standards:**
  - AQL Level: 2.5
  - Tolerance: ±2mm for measurements
  - Defect Rate: <1%
  - Inspection Frequency: 100% for critical dimensions, 10% random for general
- **Quality Process:**
  - In-process inspection at each stage
  - Final inspection before packaging
  - QC light table for defect detection
  - Measurement tolerance verification
- **Certifications:**
  - BSCI Certification (License: XXXXX, Valid until 2027)
  - WRAP Certification (License: XXXXX, Valid until 2026)
  - GOTS Certification (License: XXXXX, Valid until 2027)

## Visual Layout
- 3-column layout (standards, process, certifications)
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Quality Assurance" (H2, 32px, Deep Navy Blue, centered)
- Each column: Icon (48px), Title (18px semi-bold), Content (14px regular, list format)

## Required Components
- Feature Cards (from Component Library)
- Certification Badges
- Technical Data Table

## CTA
- **Primary:** "View Quality Process" (button, Manufacturing Orange)
- **Secondary:** "Download Quality Certificate" (text link, Manufacturing Orange)

## Trust Signals
- **Specific Standards:** AQL 2.5, tolerance ±2mm
- **Verifiable Certifications:** License numbers and validity dates
- **Quality Metrics:** Defect rate <1%
- **Process Documentation:** Detailed QC process

## Images Required
- **Certification Badges:** 3 images (80×80px each, SVG or PNG)
  - BSCI certification badge
  - WRAP certification badge
  - GOTS certification badge

## Icons Required
- **Standards Icon:** Shield/check icon (48px, Quality Green)
- **Process Icon:** Gear/process icon (48px, Manufacturing Orange)
- **Certifications Icon:** Award/certificate icon (48px, Quality Green)

## Suggested Microinteractions
- **Hover State:** Card lift 2px, icon scale 1.1 (200ms, ease-out)
- **Badge Hover:** Scale 1.05, verification link underline (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between columns (400ms per column, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for badges
- Ensure links have descriptive text
- Ensure keyboard navigation

## Mobile Layout
- Stacked vertically (1 column)
- Smaller icons (40px tablet, 32px mobile)
- Full width cards
- Badges: 2 per row on tablet, 1 per row on mobile

## SEO Notes
- Use H2 for section title
- Use H3 for column titles
- Include certification names in text
- Schema markup for Organization
- Internal links to verification pages

---

# Certifications & Awards

## Purpose
Display verifiable certifications and industry awards to build credibility and demonstrate compliance.

## Business Goal
Build trust through verifiable credentials, demonstrate industry recognition, and address compliance requirements for serious buyers.

## User Goal
Verify certifications and awards to assess compliance, industry standing, and credibility.

## Content
- **Certifications:**
  - BSCI Certification - Social Compliance (License: XXXXX, Valid until Dec 2027)
  - WRAP Certification - Responsible Production (License: XXXXX, Valid until June 2026)
  - GOTS Certification - Organic Textile (License: XXXXX, Valid until Dec 2027)
  - ISO 9001:2015 - Quality Management (License: XXXXX, Valid until Mar 2028)
- **Awards:**
  - Excellence in Manufacturing 2023 - Indian Textile Association
  - Quality Leadership Award 2022 - Textile Council of India
  - Export Excellence Award 2021 - Export Promotion Council

## Visual Layout
- 2 sections (Certifications and Awards)
- Certifications: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Awards: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Section titles: "Certifications" and "Awards" (H3, 24px, Deep Navy Blue)
- Each certification: Badge (80px), Name (16px semi-bold), License Number (14px monospace), Validity Date (13px regular), Verification Link (13px, Manufacturing Orange)
- Each award: Icon (64px), Name (16px semi-bold), Year (14px, Manufacturing Orange), Description (13px regular)

## Required Components
- Certification Badges (from Component Library)
- Awards (from Component Library)

## CTA
- **Secondary:** "View All Certifications" (text link below certifications, Manufacturing Orange)

## Trust Signals
- **Verifiable Certifications:** License numbers and verification links
- **Validity Dates:** Clear expiration dates
- **Industry Recognition:** Awards from reputable organizations
- **Compliance:** Demonstrates adherence to standards

## Images Required
- **Certification Badges:** 4 images (80×80px each, SVG or PNG)
  - BSCI badge
  - WRAP badge
  - GOTS badge
  - ISO 9001 badge

## Icons Required
- **Award Icons:** 3 icons (64px each)
  - Excellence award icon (trophy/medal)
  - Quality award icon (star/ribbon)
  - Export award icon (globe/ship)

## Suggested Microinteractions
- **Certification Hover:** Badge scale 1.05, link underline (200ms, ease-out)
- **Award Hover:** Icon scale 1.1, card lift 2px (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between items (400ms per item, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for badges and icons
- Ensure links have descriptive text
- Ensure keyboard navigation

## Mobile Layout
- Certifications: 2-column (tablet), 1-column (mobile)
- Awards: 2-column (tablet), 1-column (mobile)
- Smaller badges (64px tablet, 56px mobile)
- Smaller award icons (56px tablet, 48px mobile)
- Full width cards

## SEO Notes
- Use H3 for section titles
- Include certification names in text
- Include award names in text
- Schema markup for Organization
- External links to verification pages

---

# Industries Served

## Purpose
Demonstrate industry expertise and versatility by showing the range of industries served.

## Business Goal
Demonstrate industry expertise, show versatility, and address specific industry requirements for different buyer types.

## User Goal
Understand if the manufacturer has experience in their specific industry and can meet their industry-specific requirements.

## Content
- **Industry 1:** Retail - "Boutiques, retail chains, fashion brands"
- **Industry 2:** Corporate - "Uniforms, workwear, branded apparel"
- **Industry 3:** Hospitality - "Hotels, restaurants, linens, uniforms"
- **Industry 4:** Healthcare - "Scrubs, medical uniforms, hospital linens"
- **Industry 5:** Education - "School uniforms, institutional apparel"
- **Industry 6:** Government - "Uniforms, ceremonial wear, institutional"

## Visual Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Industries We Serve" (H2, 32px, Deep Navy Blue, centered)
- Each industry: Icon (48px), Industry Name (18px semi-bold), Description (14px regular)

## Required Components
- Feature Cards (from Component Library)

## CTA
- **Secondary:** "View Industry Case Studies" (text link below grid, centered, Manufacturing Orange)

## Trust Signals
- **Industry Expertise:** Demonstrates experience in multiple industries
- **Versatility:** Shows capability to handle diverse requirements
- **Specific Applications:** Lists specific use cases

## Images Required
- None (use icons)

## Icons Required
- **Retail Icon:** Shopping/store icon (48px, Manufacturing Orange)
- **Corporate Icon:** Building/office icon (48px, Manufacturing Orange)
- **Hospitality Icon:** Hotel/bed icon (48px, Quality Green)
- **Healthcare Icon:** Medical/cross icon (48px, Quality Green)
- **Education Icon:** School/book icon (48px, Manufacturing Orange)
- **Government Icon:** Building/shield icon (48px, Manufacturing Orange)

## Suggested Microinteractions
- **Hover State:** Card lift 2px, icon scale 1.1 (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Ensure icons have aria-labels
- Ensure links have descriptive text
- Ensure keyboard navigation

## Mobile Layout
- 2-column grid (tablet), 1-column (mobile)
- Smaller icons (40px tablet, 32px mobile)
- Stacked vertically on mobile
- Full width cards

## SEO Notes
- Use H2 for section title
- Use H3 for industry names
- Include industry keywords in descriptions
- Schema markup for Organization
- Internal link to case studies page

---

# Export Presence

## Purpose
Demonstrate global reach and international capability to build confidence in serving international buyers.

## Business Goal
Demonstrate global capability, show international experience, and address logistics concerns for international buyers.

## User Goal
Understand if the manufacturer can serve their geographic location and has international experience.

## Content
- **Export Countries:** 25+ countries across 4 continents
- **Key Markets:**
  - Middle East: UAE, Saudi Arabia, Qatar
  - Southeast Asia: Singapore, Malaysia, Thailand
  - Europe: UK, Germany, France
  - Africa: Kenya, South Africa, Nigeria
- **Export Metrics:**
  - 40% of revenue from exports
  - 15+ years of export experience
  - International shipping partners

## Visual Layout
- 2-column layout (text left, map right)
- Gap: 60px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Section title: "Global Export Presence" (H2, 32px, Deep Navy Blue, left-aligned)
- Left column: Export statistics, key markets list
- Right column: World map with highlighted countries

## Required Components
- Stats (from Component Library)
- Interactive Map (Google Maps or custom SVG)

## CTA
- **Primary:** "Request International Quote" (button, Manufacturing Orange)
- **Secondary:** "View Export Case Studies" (text link, Manufacturing Orange)

## Trust Signals
- **Global Reach:** 25+ countries
- **Export Experience:** 15+ years
- **International Partners:** Shipping partners
- **Geographic Diversity:** 4 continents

## Images Required
- **World Map:** Interactive map image or SVG (800×400px, WebP with JPEG fallback)

## Icons Required
- **Location Icons:** Map pin icons for key markets (32px, Manufacturing Orange)

## Suggested Microinteractions
- **Map Hover:** Country highlight on hover (200ms, ease-out)
- **Counter Animation:** Count up for export metrics (2000ms, ease-out, scroll-triggered)
- **Pin Hover:** Scale 1.2, tooltip reveal (200ms, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h2>)
- Provide alt text for map
- Ensure map is keyboard accessible
- Provide text-based country list

## Mobile Layout
- Stacked vertically (text top, map bottom)
- Smaller map (600×300px tablet, 400×200px mobile)
- Full width content
- Country list: 2 per row on tablet, 1 per row on mobile

## SEO Notes
- Use H2 for section title
- Include country names in text
- Schema markup for Organization
- Internal link to export page
- Descriptive alt text for map

---

# Client Logos

## Purpose
Display client logos to build trust, show industry diversity, and demonstrate successful partnerships.

## Business Goal
Build social proof, show industry and geographic diversity, and demonstrate successful client relationships.

## User Goal
See if the manufacturer has worked with recognizable or similar companies to assess credibility and fit.

## Content
- **Client Logos:** 12 client logos from various industries and geographies
- **Industries Represented:** Retail, corporate, hospitality, healthcare
- **Geographic Diversity:** Local, national, international clients
- **Client Longevity:** "Client since" indicators for long-term relationships

## Visual Layout
- 6-column grid (desktop), 4-column (tablet), 2-column (mobile)
- Gap: 24px
- Background: White (#FFFFFF)
- Padding: 48px 24px
- Section title: "Trusted by Leading Brands" (H2, 32px, Deep Navy Blue, centered)
- Each logo: 120px width (desktop), 100px (tablet), 80px (mobile), grayscale, opacity 0.6
- Optional: "View All Clients" link below grid

## Required Components
- Client Logos (from Component Library)

## CTA
- **Secondary:** "View All Clients" (text link below grid, centered, Manufacturing Orange)

## Trust Signals
- **Industry Diversity:** Multiple industries represented
- **Geographic Diversity:** Local, national, international
- **Client Longevity:** Long-term relationships
- **Recognizable Brands:** When available and permitted

## Images Required
- **Client Logos:** 12 images (SVG format preferred, 120×60px each)
  - 3 retail client logos
  - 3 corporate client logos
  - 3 hospitality client logos
  - 3 healthcare client logos

## Icons Required
- None (use client logos)

## Suggested Microinteractions
- **Hover State:** Color reveal, opacity 1.0, scale 1.05 (200ms, ease-out)
- **Infinite Scroll:** Optional, 30 seconds per cycle
- **Staggered Reveal:** 50ms delay between logos (300ms per logo, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h2>)
- Provide descriptive alt text for logos
- Ensure logos are accessible
- Provide text-based client list as alternative

## Mobile Layout
- 4-column (tablet), 2-column (mobile)
- Smaller logos (100px tablet, 80px mobile)
- Stacked vertically on mobile
- Full width logos

## SEO Notes
- Use H2 for section title
- Include client names in alt text
- Schema markup for Organization
- Internal link to clients page
- Descriptive alt text for logos

---

# Testimonials

## Purpose
Display client testimonials with quantifiable results to build trust and demonstrate successful outcomes.

## Business Goal
Build social proof, demonstrate successful outcomes, and provide evidence of capability and reliability.

## User Goal
Read about other clients' experiences to assess if the manufacturer can deliver similar results for their needs.

## Content
- **Testimonial 1:** "Reduced lead time by 30% and saved 15% on costs. Goyal Trading Company has been our trusted partner since 2018." - Rajesh Kumar, Procurement Manager, Retail Chain India
- **Testimonial 2:** "Consistent quality across 50,000 units with zero defects. Their quality process is exceptional." - Sarah Johnson, Sourcing Director, Hospitality Group UAE
- **Testimonial 3:** "Custom manufacturing with precise specifications. They delivered our corporate uniforms exactly as specified." - Ahmed Hassan, Operations Manager, Hotel Chain Saudi Arabia

## Visual Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: Light Grey (#F7FAFC)
- Padding: 64px 24px
- Section title: "What Our Clients Say" (H2, 32px, Deep Navy Blue, centered)
- Each testimonial: Quote (18px italic), Author (16px bold), Company (14px semi-bold), Location (13px regular), Metrics (14px bold, Manufacturing Orange), Client Since (13px regular), Logo (60px width, grayscale)

## Required Components
- Testimonial Cards (from Component Library)
- Carousel (optional, auto-rotate every 8 seconds)

## CTA
- **Secondary:** "View All Testimonials" (text link below grid, centered, Manufacturing Orange)

## Trust Signals
- **Quantifiable Results:** Specific metrics (30% faster, 15% savings)
- **Named Contacts:** Real people with titles
- **Company Information:** Company names and locations
- **Client Longevity:** "Client since" indicators
- **Industry Diversity:** Retail, hospitality, corporate

## Images Required
- **Client Logos:** 3 images (60px width each, SVG format)
  - Retail chain logo
  - Hospitality group logo
  - Hotel chain logo

## Icons Required
- **Quote Icon:** Quote mark icon (32px, Manufacturing Orange)

## Suggested Microinteractions
- **Hover State:** Card lift 2px, shadow increase, logo color reveal (300ms, ease-out)
- **Carousel:** 300ms, ease-out, auto-rotate every 8 seconds, pause on hover
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h3>, <blockquote>)
- Provide alt text for logos
- Ensure carousel is keyboard accessible
- Provide pause controls for carousel

## Mobile Layout
- 2-column (tablet), 1-column (mobile)
- Smaller logos (50px tablet, 40px mobile)
- Stacked vertically on mobile
- Full width cards
- Carousel: 1 card visible on mobile

## SEO Notes
- Use H2 for section title
- Use H3 for client names
- Include company names in text
- Schema markup for Review/AggregatedRating
- Internal link to testimonials page

---

# FAQ

## Purpose
Answer common questions to reduce friction in the inquiry process and address buyer concerns proactively.

## Business Goal
Reduce barriers to inquiry, address common objections, and provide information to move buyers closer to conversion.

## User Goal
Get answers to common questions about manufacturing, pricing, quality, and process without contacting sales.

## Content
- **FAQ 1:** What is your minimum order quantity (MOQ)?
  - Answer: Our MOQ varies by product type. For shirting, MOQ is 100 units per style, 50 units per color. For suits, MOQ is 50 units. We also offer small batch options for 100-500 units.
- **FAQ 2:** What is your pricing structure?
  - Answer: We provide transparent pricing ranges by quantity. For example, dress shirts range from ₹150-250 depending on fabric and quantity. We offer volume discounts for larger orders.
- **FAQ 3:** What is your production lead time?
  - Answer: Standard lead time is 2-4 weeks depending on quantity and complexity. Small batch orders (100-500 units) typically take 2 weeks, while large volume orders (2000+ units) take 3-4 weeks.
- **FAQ 4:** Do you offer samples?
  - Answer: Yes, we offer samples for product verification. Sample cost is ₹150 + shipping. Sample cost is credited against your first bulk order.
- **FAQ 5:** What quality standards do you follow?
  - Answer: We follow AQL 2.5 inspection standards with tolerance ±2mm. Our defect rate is <1%. We are BSCI, WRAP, and GOTS certified.
- **FAQ 6:** Can you customize products?
  - Answer: Yes, we offer custom manufacturing including custom labeling, packaging, and sizing. We can manufacture according to your specifications and branding requirements.

## Visual Layout
- Single column
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Frequently Asked Questions" (H2, 32px, Deep Navy Blue, centered)
- Max width: 800px
- Each FAQ: Question (16px bold), Icon (24px), Answer (14px regular, expandable)
- Accordion pattern (expand/collapse)
- Optional: "View All FAQs" link below

## Required Components
- FAQ (from Component Library)
- Accordion

## CTA
- **Secondary:** "View All FAQs" (text link below FAQs, centered, Manufacturing Orange)
- **Primary:** "Still Have Questions? Contact Us" (button below FAQs, Manufacturing Orange)

## Trust Signals
- **Transparency:** Clear MOQ and pricing information
- **Specific Data:** Specific numbers, not generic claims
- **Process Information:** Detailed lead time and sample information
- **Quality Standards:** AQL and certification information

## Images Required
- None

## Icons Required
- **Plus/Minus Icon:** 24px, Manufacturing Orange

## Suggested Microinteractions
- **Expand/Collapse:** 300ms, ease-out, height and opacity
- **Hover State:** Header background change to #F7FAFC (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between FAQs (300ms per FAQ, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <h2>, <details>, <summary>)
- Use ARIA attributes (aria-expanded, aria-controls)
- Ensure keyboard navigation (Enter, Space)
- Provide focus indicators

## Mobile Layout
- Single column, full width
- Smaller text (Question: 15px, Answer: 13px)
- Full width FAQs
- 44px minimum touch target for headers

## SEO Notes
- Use H2 for section title
- Use H3 for questions
- Include keywords in questions and answers
- Schema markup for FAQPage
- Internal link to FAQ page

---

# Bulk Inquiry CTA

## Purpose
Provide a prominent call-to-action for bulk inquiries to drive conversions from serious buyers.

## Business Goal
 Drive bulk inquiries from qualified buyers, reduce friction in the inquiry process, and capture qualified leads.

## User Goal
Easily submit a bulk inquiry without navigating to a separate page.

## Content
- **Headline:** "Ready to Discuss Your Bulk Requirements?"
- **Description:** "Get a customized quote for your bulk order within 24 hours. Our team will review your requirements and provide detailed pricing and timeline."
- **Primary CTA:** "Request Bulk Quote"
- **Secondary CTA:** "Schedule Factory Tour"
- **Trust Signals:** "Response within 24 hours", "No commitment required"

## Visual Layout
- Full-width section
- Background: Deep Navy Blue (#1A365D)
- Text Color: White (#FFFFFF)
- Padding: 80px 24px
- Text Alignment: Center
- Max Width: 800px
- CTAs: Stacked (primary top, secondary below)

## Required Components
- Primary CTA Section (from Component Library)
- Primary Button
- Secondary Button

## CTA
- **Primary:** "Request Bulk Quote" (Manufacturing Orange button, most prominent)
- **Secondary:** "Schedule Factory Tour" (outlined button, white)

## Trust Signals
- **Response Time:** "Response within 24 hours"
- **No Commitment:** "No commitment required"
- **Professional:** "Customized quote within 24 hours"

## Images Required
- None

## Icons Required
- None

## Suggested Microinteractions
- **CTA Hover:** Standard button hover states (200ms, ease-out)
- **Fade In:** 500ms, ease-out, on scroll

## Accessibility Notes
- Ensure text contrast meets WCAG AA (4.5:1 minimum)
- Ensure CTAs have descriptive text
- Ensure keyboard navigation
- Provide focus indicators

## Mobile Layout
- Stacked CTAs (full width)
- Smaller text (Headline: 24px, Description: 14px)
- Full width buttons
- 44px minimum touch target

## SEO Notes
- Use H2 for headline
- Include keywords in description
- Internal links to quote form
- Schema markup for Action

---

# Contact Form

## Purpose
Capture user inquiries with validation and clear feedback to generate qualified leads.

## Business Goal
 Capture qualified leads with specific requirements, reduce friction in the inquiry process, and enable follow-up.

## User Goal
Easily submit an inquiry with their specific requirements and get a response from the sales team.

## Content
- **Section Title:** "Get in Touch"
- **Description:** "Have questions or ready to discuss your requirements? Our team is here to help. Fill out the form below and we'll respond within 24 hours."
- **Form Fields:**
  - Name (required, text input)
  - Email (required, email input)
  - Phone (optional, tel input)
  - Company (optional, text input)
  - Inquiry Type (required, select dropdown: Product Inquiry, Quote Request, Sample Request, Factory Tour, General Inquiry)
  - Message (required, textarea, minimum 10 characters)
- **Submit Button:** "Send Message"
- **Alternative Contact:** Phone, WhatsApp, Email

## Visual Layout
- 2-column layout (form left, contact info right)
- Gap: 60px
- Background: White (#FFFFFF)
- Padding: 64px 24px
- Section title: "Get in Touch" (H2, 32px, Deep Navy Blue, left-aligned)
- Form: Single column, max width 500px
- Contact Info: Phone, WhatsApp, Email with icons

## Required Components
- Contact Form (from Component Library)
- Form Fields (Text, Email, Phone, Select, Textarea)
- Primary Button

## CTA
- **Primary:** "Send Message" (button, Manufacturing Orange)
- **Secondary:** "WhatsApp Us" (text link with icon, Manufacturing Orange)

## Trust Signals
- **Response Time:** "We respond within 24 hours"
- **Direct Contact:** Phone, WhatsApp, Email
- **Named Contacts:** Sales Manager information

## Images Required
- None

## Icons Required
- **Phone Icon:** 24px, Manufacturing Orange
- **WhatsApp Icon:** 24px, Manufacturing Orange
- **Email Icon:** 24px, Manufacturing Orange

## Suggested Microinteractions
- **Focus State:** Border color change to Manufacturing Orange, box shadow (200ms, ease-out)
- **Error State:** Shake animation, red border (400ms, ease-out-back)
- **Success State:** Green border, checkmark animation (500ms, ease-out)
- **Loading State:** Spinner, text change to "Sending..."

## Accessibility Notes
- Use semantic HTML (<form>, <label>, <input>)
- Ensure form labels are associated with inputs
- Provide clear error messages
- Ensure keyboard navigation
- Use aria-invalid for error states

## Mobile Layout
- Stacked vertically (form top, contact info bottom)
- Full width form
- Full width contact info
- 44px minimum touch target for inputs

## SEO Notes
- Use H2 for section title
- Include keywords in description
- Schema markup for ContactPage
- Ensure form is accessible to search engines

---

# Google Maps

## Purpose
Display physical location with interactive map for accessibility and verification.

## Business Goal
Provide location verification, enable visitors to find the factory, and demonstrate physical presence.

## User Goal
Verify the factory location, get directions, and understand the physical presence of the manufacturer.

## Content
- **Map Embed:** Google Maps embed showing factory location
- **Address Info:**
  - Address: 123 Industrial Area, Sector 5, Gurugram, Haryana 122001, India
  - Phone: +91 98765 43210
  - Email: sales@goyaltrading.com
  - Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST
- **Link:** "Get Directions"

## Visual Layout
- Full-width section
- Background: Light Grey (#F7FAFC)
- Height: 400px (desktop), 300px (tablet), 250px (mobile)
- Map: Full width, embedded
- Address Info: Overlay on map or below map

## Required Components
- Google Map (from Component Library)

## CTA
- **Secondary:** "Get Directions" (text link, Manufacturing Orange)

## Trust Signals
- **Physical Address:** Verifiable location
- **Business Hours:** Operating hours
- **Direct Contact:** Phone and email

## Images Required
- None (Google Maps embed)

## Icons Required
- **Location Icon:** Map pin icon (32px, Manufacturing Orange)
- **Phone Icon:** 24px, Manufacturing Orange
- **Email Icon:** 24px, Manufacturing Orange
- **Clock Icon:** 24px, Manufacturing Orange

## Suggested Microinteractions
- **Marker Hover:** Scale 1.1 (200ms, ease-out)
- **Map Load:** Fade in (400ms, ease-out)

## Accessibility Notes
- Use semantic HTML (<section>, <iframe>)
- Provide text-based address alternative
- Ensure map is keyboard accessible
- Provide "Get Directions" link

## Mobile Layout
- Smaller height (300px tablet, 250px mobile)
- Address info: Below map on mobile
- Full width map
- 44px minimum touch target for links

## SEO Notes
- Use H2 for section title (if included)
- Include address in text
- Schema markup for LocalBusiness
- Provide NAP (Name, Address, Phone) consistency

---

# Footer

## Purpose
Provide site information, navigation access, legal compliance, and contact information for comprehensive site navigation.

## Business Goal
Enable comprehensive site navigation, provide legal compliance, ensure access to all important pages, and maintain contact accessibility.

## User Goal
Navigate to any page on the site, find legal information, access contact details, and understand the company structure.

## Content
- **Column 1 - Company:**
  - Logo
  - About Us
  - Our Story
  - Team
  - Careers
- **Column 2 - Products:**
  - Product Categories
  - Capabilities
  - Custom Services
  - Technical Fabrics
- **Column 3 - Resources:**
  - Blog
  - Case Studies
  - Industry Insights
  - FAQ
- **Column 4 - Support:**
  - Contact Us
  - Help Center
  - Shipping Info
  - Sample Policy
- **Column 5 - Contact:**
  - Phone: +91 98765 43210
  - Email: sales@goyaltrading.com
  - Address: 123 Industrial Area, Sector 5, Gurugram, Haryana 122001, India
  - Social Media: LinkedIn, Twitter, Instagram
  - CTA: "Request a Quote"
- **Bottom Row:**
  - Copyright: © 2026 Goyal Trading Company. All rights reserved.
  - Legal Links: Privacy Policy, Terms of Service, Cookie Policy
  - Certification Badges: BSCI, WRAP, GOTS

## Visual Layout
- 5-column grid (desktop), 3-column (tablet), 1-column (mobile)
- Gap: 24px
- Background: Dark Grey (#2D3748)
- Text Color: White (#FFFFFF)
- Padding: 64px 24px
- Border Top: 1px solid #4A5568
- Section Title: 14px, semi-bold, white, 16px margin bottom
- Link: 14px, regular, #A0AEC0, 8px margin bottom
- Bottom Row: Padding top 32px, border top, flex space-between

## Required Components
- Footer (from Component Library)
- Social Media Icons
- Certification Badges

## CTA
- **Primary:** "Request a Quote" (Manufacturing Orange button, full width on mobile)

## Trust Signals
- **Certification Badges:** BSCI, WRAP, GOTS
- **Contact Information:** Phone, email, address
- **Social Media:** Active social presence
- **Legal Compliance:** Privacy, terms, cookies

## Images Required
- **Logo:** Company logo (SVG or PNG, white version)
- **Certification Badges:** 3 images (32px height each, SVG or PNG)
  - BSCI badge
  - WRAP badge
  - GOTS badge

## Icons Required
- **Social Media Icons:** LinkedIn, Twitter, Instagram (24px each, white)

## Suggested Microinteractions
- **Link Hover:** Color change to white, underline (200ms, ease-out)
- **CTA Hover:** Standard button hover state (200ms, ease-out)
- **Social Icon Hover:** Scale 1.1 (200ms, ease-out)

## Accessibility Notes
- Use semantic HTML (<footer>, <nav>)
- Ensure links have descriptive text
- Ensure keyboard navigation
- Provide focus indicators
- Ensure social icons have aria-labels

## Mobile Layout
- 3-column (tablet), 1-column (mobile)
- Stacked vertically
- Full width columns
- Smaller text (14px tablet, 13px mobile)
- Full width CTA button

## SEO Notes
- Use semantic HTML (<footer>, <nav>)
- Include descriptive link text
- Ensure all important pages are linked
- Schema markup for Organization
- NAP consistency

---

# Complete User Journey

## Visitor lands on homepage

**First Impressions (0-3 seconds):**
- Announcement bar (if active) displays time-sensitive offer
- Sticky navbar appears with "Request a Quote" CTA always visible
- Hero section loads with authentic factory background
- Headline: "Premium Wholesale Textile Manufacturing for Global Retailers"
- Subheadline communicates transparent pricing and verified quality
- Trust signals visible: Certification badges, capacity metrics, years in business

**What do they notice first?**
1. **Authentic Factory Image:** Real production floor photo (not stock) builds immediate credibility
2. **Clear Value Proposition:** "Transparent pricing, verified quality, direct factory access"
3. **Trust Signals:** Certification badges with verification links, specific capacity metrics
4. **Prominent CTA:** "Request a Quote" button in Manufacturing Orange

↓

**What builds trust?**

**Scroll to Trust Statistics (3-10 seconds):**
- Counter animation draws attention to metrics
- "50,000 units/month capacity" - specific, not generic
- "15+ Years" - demonstrates experience
- "100+ Clients" - shows market acceptance
- "98% On-Time Delivery" - reliability indicator

**Scroll to Why Choose Goyal Trading Company (10-20 seconds):**
- "Transparent Pricing" - addresses cost concerns
- "Verified Quality" - addresses quality concerns
- "Direct Factory Access" - addresses verification concerns
- Specific claims (AQL 2.5, not "quality assured")

**Scroll to Manufacturing Process (20-30 seconds):**
- 6-step process demonstrates workflow
- Specific equipment mentioned (single-needle lockstitch, Juki machines)
- Quality checkpoints highlighted
- Technical authority established

**Scroll to Factory Infrastructure (30-40 seconds):**
- Equipment photos with specific models
- Capacity data with progress bars
- Technical specifications table
- Verification through transparency

**Scroll to Quality Assurance (40-50 seconds):**
- AQL 2.5 standard (specific)
- Tolerance ±2mm (specific)
- Defect rate <1% (specific)
- Verifiable certifications with license numbers

**Scroll to Certifications & Awards (50-60 seconds):**
- BSCI, WRAP, GOTS badges with verification links
- License numbers and validity dates
- Industry awards from recognized organizations
- Compliance demonstrated

↓

**What convinces them?**

**Scroll to Industries Served (60-70 seconds):**
- Industry expertise demonstrated (retail, corporate, hospitality, healthcare)
- Versatility shown
- Specific applications listed

**Scroll to Export Presence (70-80 seconds):**
- 25+ countries across 4 continents
- 15+ years export experience
- International capability verified
- Global reach established

**Scroll to Client Logos (80-90 seconds):**
- 12 client logos from various industries
- Industry and geographic diversity
- Social proof through recognizable brands
- Trust through association

**Scroll to Testimonials (90-100 seconds):**
- Quantifiable results: "Reduced lead time by 30%, saved 15% on costs"
- Named contacts with titles and companies
- Client longevity indicators ("Client since 2018")
- Industry diversity (retail, hospitality, corporate)

**Scroll to FAQ (100-110 seconds):**
- Common questions answered proactively
- Specific MOQ information (100 units for shirting)
- Transparent pricing ranges (₹150-250)
- Lead time information (2-4 weeks)
- Sample policy clear (₹150 + shipping)
- Quality standards detailed (AQL 2.5)

↓

**Where do they click?**

**Primary Conversion Paths:**

**Path 1: Direct Quote Request (from Hero or Navbar)**
- Click "Request a Quote" in hero or navbar
- Scroll to Contact Form section
- Fill form with specific requirements
- Submit inquiry

**Path 2: Product Exploration**
- Click "View Capabilities" in hero
- Scroll to Product Categories
- Click relevant category
- Browse products
- Click "Request Sample" on specific product
- Submit sample request

**Path 3: Factory Tour Request**
- Click "Schedule Factory Tour" in hero
- Scroll to Contact Form section
- Select "Factory Tour" as inquiry type
- Submit inquiry

**Path 4: FAQ to Contact**
- Scroll to FAQ section
- Find relevant question
- If answer insufficient, click "Still Have Questions? Contact Us"
- Scroll to Contact Form section
- Submit inquiry

**Path 5: Bulk Inquiry CTA**
- Scroll to Bulk Inquiry CTA section
- Click "Request Bulk Quote"
- Scroll to Contact Form section
- Submit inquiry

↓

**How do they submit an inquiry?**

**Contact Form Submission Process:**

1. **Form Entry:**
   - Name: Enter full name
   - Email: Enter email address (validated for format)
   - Phone: Enter phone number (optional, validated for format)
   - Company: Enter company name (optional)
   - Inquiry Type: Select from dropdown (Product Inquiry, Quote Request, Sample Request, Factory Tour, General Inquiry)
   - Message: Enter detailed requirements (minimum 10 characters)

2. **Validation:**
   - Real-time validation on blur
   - Error states: Red border, shake animation, error message below field
   - Success states: Green border, checkmark animation
   - Form cannot be submitted with errors

3. **Submission:**
   - Click "Send Message" button
   - Button changes to loading state (spinner, "Sending...")
   - Form disabled during submission

4. **Success State:**
   - Success message appears: "Thank you for your inquiry. We'll respond within 24 hours."
   - Reference number provided: "Your inquiry reference number: GTQ-2026-XXXXX"
   - Confirmation email sent automatically

↓

**What happens after submission?**

**Immediate Follow-up:**

1. **Automated Email Confirmation:**
   - Sent immediately after submission
   - Includes: Reference number, inquiry summary, expected response time (24 hours)
   - Includes: Contact information for direct follow-up
   - Includes: Link to schedule factory tour (if relevant)

2. **Sales Team Notification:**
   - Sales team receives notification with complete inquiry details
   - Inquiry assigned to appropriate sales representative
   - Lead qualification based on inquiry type and specificity

3. **Lead Qualification:**
   - **Hot Lead:** Specific product, quantity, timeline, company information
   - **Warm Lead:** General inquiry with some specifics
   - **Cold Lead:** Information gathering, no specific requirements

**Follow-up Process:**

1. **Within 24 Hours:**
   - Sales representative responds via email
   - Personalized response with specific pricing/timeline
   - Offer for phone call or factory tour
   - Additional information requested if needed

2. **If Sample Requested:**
   - Sample request processed
   - Sample pricing confirmed (₹150 + shipping)
   - Sample prepared and shipped
   - Tracking information provided
   - Sample cost credited against first bulk order

3. **If Factory Tour Requested:**
   - Calendar invitation sent for factory tour
   - Tour agenda customized based on interests
   - Pre-tour information packet provided
   - Named contact assigned for tour

4. **Nurture Sequence (if not converted immediately):**
   - Educational content about manufacturing capabilities
   - Case studies relevant to their industry
   - Industry insights and trends
   - New product announcements
   - Special offers (if applicable)

**Conversion to Order:**

1. **After Verification:**
   - Quote provided with specific pricing
   - Sample approved (if requested)
   - Factory tour completed (if scheduled)
   - Negotiation on pricing and timeline

2. **Order Placement:**
   - Purchase order received
   - Production scheduled
   - Timeline provided with milestones
   - Progress tracking enabled

3. **Ongoing Relationship:**
   - Regular updates during production
   - Quality checkpoints communicated
   - Delivery tracking provided
   - Post-delivery follow-up
   - Long-term relationship established

---

# Homepage Success Metrics

## Primary Metrics

### Quote Request Rate
- **Definition:** Percentage of visitors who submit a quote request form
- **Target:** 3-5% of homepage visitors
- **Measurement:** Form submissions / unique visitors
- **Benchmark:** Industry average 1-2%

### Contact Form Submission Rate
- **Definition:** Percentage of visitors who submit any contact form
- **Target:** 4-6% of homepage visitors
- **Measurement:** Total form submissions / unique visitors
- **Benchmark:** Industry average 2-3%

### Sample Request Rate
- **Definition:** Percentage of visitors who request a sample
- **Target:** 1-2% of homepage visitors
- **Measurement:** Sample requests / unique visitors
- **Benchmark:** Industry average 0.5-1%

### Factory Tour Request Rate
- **Definition:** Percentage of visitors who request a factory tour
- **Target:** 0.5-1% of homepage visitors
- **Measurement:** Tour requests / unique visitors
- **Benchmark:** Industry average 0.2-0.5%

## Secondary Metrics

### Product Page Click-through Rate
- **Definition:** Percentage of visitors who click through to product pages
- **Target:** 15-20% of homepage visitors
- **Measurement:** Product page clicks / unique visitors
- **Benchmark:** Industry average 10-15%

### WhatsApp Click Rate
- **Definition:** Percentage of visitors who click WhatsApp link
- **Target:** 2-3% of homepage visitors
- **Measurement:** WhatsApp clicks / unique visitors
- **Benchmark:** Industry average 1-2%

### CTA Click Rate
- **Definition:** Percentage of visitors who click any primary CTA
- **Target:** 8-10% of homepage visitors
- **Measurement:** Primary CTA clicks / unique visitors
- **Benchmark:** Industry average 5-7%

## Engagement Metrics

### Scroll Depth
- **Definition:** Average percentage of page scrolled
- **Target:** 60-70% average scroll depth
- **Measurement:** Scroll tracking / unique visitors
- **Benchmark:** Industry average 40-50%

### Time on Page
- **Definition:** Average time spent on homepage
- **Target:** 2-3 minutes average
- **Measurement:** Time on page / unique visitors
- **Benchmark:** Industry average 1-2 minutes

### Bounce Rate
- **Definition:** Percentage of visitors who leave without interaction
- **Target:** <40% bounce rate
- **Measurement:** Single-page sessions / total sessions
- **Benchmark:** Industry average 50-60%

## Trust Metrics

### Capability Page Views
- **Definition:** Percentage of visitors who view capability pages
- **Target:** 20-25% of homepage visitors
- **Measurement:** Capability page views / unique visitors
- **Benchmark:** Industry average 10-15%

### Quality Page Views
- **Definition:** Percentage of visitors who view quality process pages
- **Target:** 15-20% of homepage visitors
- **Measurement:** Quality page views / unique visitors
- **Benchmark:** Industry average 5-10%

### Factory Page Views
- **Definition:** Percentage of visitors who view factory pages
- **Target:** 10-15% of homepage visitors
- **Measurement:** Factory page views / unique visitors
- **Benchmark:** Industry average 5-8%

## Conversion Funnel Metrics

### Homepage to Quote Request
- **Definition:** Percentage of homepage visitors who submit a quote request
- **Target:** 3-5%
- **Measurement:** Quote requests / homepage visitors

### Quote Request to Order
- **Definition:** Percentage of quote requests that convert to orders
- **Target:** 20-30%
- **Measurement:** Orders / quote requests

### Sample Request to Order
- **Definition:** Percentage of sample requests that convert to orders
- **Target:** 40-50%
- **Measurement:** Orders / sample requests

### Factory Tour to Order
- **Definition:** Percentage of factory tour requests that convert to orders
- **Target:** 60-70%
- **Measurement:** Orders / factory tour requests

## Lead Quality Metrics

### Qualified Lead Rate
- **Definition:** Percentage of inquiries with specific requirements
- **Target:** 70% of inquiries
- **Measurement:** Qualified leads / total inquiries

### Hot Lead Rate
- **Definition:** Percentage of inquiries ready to order within 30 days
- **Target:** 30% of qualified leads
- **Measurement:** Hot leads / qualified leads

### Response Time
- **Definition:** Average time to respond to inquiries
- **Target:** <24 hours
- **Measurement:** Average response time

## Technical Metrics

### Page Load Time
- **Definition:** Time to fully load homepage
- **Target:** <3 seconds
- **Measurement:** Page load time

### First Contentful Paint
- **Definition:** Time to first visual content
- **Target:** <1.5 seconds
- **Measurement:** FCP metric

### Largest Contentful Paint
- **Definition:** Time to load largest element
- **Target:** <2.5 seconds
- **Measurement:** LCP metric

### Cumulative Layout Shift
- **Definition:** Visual stability score
- **Target:** <0.1
- **Measurement:** CLS metric

## Mobile Metrics

### Mobile Conversion Rate
- **Definition:** Percentage of mobile visitors who convert
- **Target:** 40% of total conversions
- **Measurement:** Mobile conversions / total conversions

### Mobile Scroll Depth
- **Definition:** Average scroll depth on mobile
- **Target:** 50-60% average
- **Measurement:** Mobile scroll tracking

### Mobile Time on Page
- **Definition:** Average time on page on mobile
- **Target:** 1.5-2 minutes average
- **Measurement:** Mobile time on page

---

## Conclusion

This Homepage UX Blueprint provides a comprehensive specification for building a high-converting homepage for Goyal Trading Company. The homepage is designed to:

1. **Build Immediate Trust:** Through authentic factory imagery, specific metrics, and verifiable certifications
2. **Demonstrate Capability:** Through detailed manufacturing process, equipment showcase, and quality documentation
3. **Reduce Friction:** Through clear navigation, comprehensive FAQ, and multiple contact options
4. **Drive Conversions:** Through strategic CTAs, trust-building content, and streamlined inquiry process
5. **Support B2B Buyers:** Through technical specifications, capacity data, and verification mechanisms

**Key Differentiators:**
- Operational transparency over aesthetic polish
- Specific data over generic claims
- Verifiable credentials over hidden information
- Direct access over complex forms
- Manufacturing focus over marketplace positioning

**Implementation Priority:**
1. Core sections (Hero, Navbar, Contact Form, Footer)
2. Trust sections (Stats, Process, Quality, Certifications)
3. Engagement sections (Products, Testimonials, FAQ)
4. Polish and optimization (Animations, Performance, Accessibility)

This blueprint ensures that UI designers and frontend developers have all the information needed to build a world-class homepage without requiring additional questions.
