# High-Fidelity UI Specification
## Goyal Trading Company - Complete Visual Implementation Guide

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final UI Specification for Frontend Implementation

---

# Design System Reference

This specification references the following documents as the single source of truth:
- Website Blueprint (planning/website-blueprint.md)
- Homepage UX Blueprint (design/homepage-ux-blueprint.md)
- Wireframes (design/wireframes.md)
- Design System (design/design-system.md)
- Motion System (design/motion-design-system.md)
- Component Library (design/component-library.md)
- Design Direction (strategy/design-direction.md)
- Brand Guidelines (strategy/brand-guidelines.md)
- Design DNA (design-dna.md)

---

# Global Visual Standards

## Typography Scale

### H1 - Page Title
- **Font Family:** Inter
- **Font Weight:** 700 (Bold)
- **Font Size:** 40px (desktop), 32px (tablet), 28px (mobile)
- **Line Height:** 1.2
- **Letter Spacing:** -0.02em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Main page titles, hero headlines

### H2 - Section Title
- **Font Family:** Inter
- **Font Weight:** 600 (Semi-Bold)
- **Font Size:** 32px (desktop), 28px (tablet), 24px (mobile)
- **Line Height:** 1.3
- **Letter Spacing:** -0.01em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Section headers

### H3 - Subsection Title
- **Font Family:** Inter
- **Font Weight:** 600 (Semi-Bold)
- **Font Size:** 24px (desktop), 20px (tablet), 18px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Subsection headers, card titles

### H4 - Card Title
- **Font Family:** Inter
- **Font Weight:** 600 (Semi-Bold)
- **Font Size:** 18px (desktop), 16px (tablet), 16px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Product names, equipment names

### Body Text
- **Font Family:** Open Sans
- **Font Weight:** 400 (Regular)
- **Font Size:** 16px (desktop), 15px (tablet), 14px (mobile)
- **Line Height:** 1.5
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Descriptions, general content

### Small Text
- **Font Family:** Open Sans
- **Font Weight:** 400 (Regular)
- **Font Size:** 14px (desktop), 13px (tablet), 12px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Industrial Grey (#4A5568)
- **Usage:** Captions, labels, metadata

### Technical Data
- **Font Family:** JetBrains Mono
- **Font Weight:** 400 (Regular)
- **Font Size:** 14px (desktop), 13px (tablet), 12px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Specifications, metrics, tolerances

### Navigation Text
- **Font Family:** Inter
- **Font Weight:** 600 (Semi-Bold)
- **Font Size:** 14px (desktop), 13px (tablet), 12px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0.5px
- **Text Transform:** Uppercase
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Navigation links, menu items

### CTA Text
- **Font Family:** Inter
- **Font Weight:** 600 (Semi-Bold)
- **Font Size:** 16px (desktop), 15px (tablet), 14px (mobile)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Text Transform:** Uppercase (buttons only)
- **Color:** White (on buttons), Manufacturing Orange (links)
- **Usage:** Button text, action links

## Color Palette

### Primary Colors
- **Deep Navy Blue:** #1A365D (RGB: 26, 54, 93)
- **Industrial Grey:** #4A5568 (RGB: 74, 85, 104)

### Accent Colors
- **Manufacturing Orange:** #ED8936 (RGB: 237, 137, 54)
- **Quality Green:** #48BB78 (RGB: 72, 187, 120)

### Neutral Colors
- **Clean White:** #FFFFFF (RGB: 255, 255, 255)
- **Light Grey:** #F7FAFC (RGB: 247, 250, 252)
- **Medium Grey:** #E2E8F0 (RGB: 226, 232, 240)
- **Dark Grey:** #2D3748 (RGB: 45, 55, 72)

### Semantic Colors
- **Success:** #48BB78
- **Warning:** #ECC94B
- **Error:** #F56565
- **Info:** #4299E1

## Spacing System

### Spacing Scale
- **XS:** 4px
- **SM:** 8px
- **MD:** 16px
- **LG:** 24px
- **XL:** 32px
- **2XL:** 48px
- **3XL:** 64px
- **4XL:** 96px

### Section Spacing
- **Desktop:** 80px between sections (4XL)
- **Tablet:** 60px between sections (between 3XL and 4XL)
- **Mobile:** 40px between sections (2XL)

## Border Radius

- **None:** 0px (tables, technical data)
- **Small:** 4px (buttons, inputs, badges)
- **Medium:** 8px (cards, images)
- **Large:** 16px (large cards)
- **Circle:** 50% (team photos, avatars)

## Shadows

- **None:** No shadow
- **Small:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Medium:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Large:** 0 8px 16px rgba(0, 0, 0, 0.1)
- **Extra Large:** 0 16px 32px rgba(0, 0, 0, 0.1)

## Container Widths

- **XS Container:** 320px max
- **SM Container:** 480px max
- **MD Container:** 640px max
- **LG Container:** 960px max
- **XL Container:** 1200px max
- **Full Width:** 100%

## Grid System

### Desktop
- **Columns:** 12 columns
- **Max Width:** 1200px
- **Gutter:** 24px (LG)
- **Margins:** Auto

### Tablet
- **Columns:** 8 columns
- **Max Width:** 768px
- **Gutter:** 16px (MD)
- **Margins:** 24px (LG)

### Mobile
- **Columns:** 4 columns
- **Max Width:** 100%
- **Gutter:** 16px (MD)
- **Margins:** 16px (MD)

---

# Page Specifications

## 1. Homepage

### Visual Hierarchy
1. Announcement Bar (if active) - Top priority, dismissible
2. Sticky Navbar - Persistent, highest z-index
3. Hero Section - Full viewport impact, primary conversion
4. Trust Statistics - Immediate credibility
5. Why Choose Goyal - Value propositions
6. Product Categories - Discovery
7. Featured Products - Product showcase
8. Manufacturing Process - Technical authority
9. Factory Infrastructure - Equipment verification
10. Quality Assurance - Quality standards
11. Certifications & Awards - Credentials
12. Industries Served - Industry expertise
13. Export Presence - Global reach
14. Client Logos - Social proof
15. Testimonials - Success stories
16. FAQ - Information access
17. Bulk Inquiry CTA - Conversion focus
18. Contact Form - Lead capture
19. Google Maps - Location verification
20. Footer - Navigation and compliance

### Exact Layout

#### Announcement Bar
- **Container:** Full width
- **Height:** 40px
- **Background:** Manufacturing Orange (#ED8936)
- **Text Color:** White (#FFFFFF)
- **Padding:** 0 24px
- **Text Alignment:** Center
- **Font Size:** 14px
- **Font Weight:** 500 (Medium)
- **Close Button:** Right-aligned, 24px × 24px, white X icon
- **Animation:** Fade out and collapse height (300ms, ease-out)

#### Sticky Navbar
- **Container:** Full width, sticky positioning
- **Height:** 80px (default), 72px (sticky)
- **Background:** White (#FFFFFF) with 0.95 opacity (sticky)
- **Border Bottom:** 1px solid #E2E8F0
- **Padding:** 0 24px
- **Max Width:** 1200px
- **Logo:** Left-aligned, 40px height
- **Navigation:** Right-aligned, 6 links, uppercase, 14px, 600 weight
- **CTA:** Manufacturing Orange button, "Request Quote"
- **Hamburger:** Mobile only, right-aligned
- **Shadow:** 0 2px 8px rgba(0, 0, 0, 0.1) (sticky state)
- **Animation:** Background change, shadow appear, height compression (300ms, ease-in-out)

#### Hero Section
- **Container:** Full width
- **Height:** 80vh minimum, 100vh preferred
- **Background:** Authentic factory image (1920×1080px, WebP with JPEG fallback)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.4), rgba(26,54,93,0.8))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white, 1.2 line height
- **Subheadline:** 18px, regular, white, 1.5 line height
- **CTAs:** Stacked, centered, 24px vertical spacing
- **Trust Signals:** Horizontal row below CTAs, 32px spacing
- **Animation:** Staggered fade in (500ms, ease-out, 100ms delay)

#### Trust Statistics
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Text Alignment:** Center
- **Stat Item:** Icon (48px), Number (48px bold), Label (16px semi-bold), Description (14px regular)
- **Animation:** Counter animation (2000ms, ease-out, scroll-triggered)

#### Why Choose Goyal Trading Company
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Text Alignment:** Center
- **Feature Card:** Icon (48px), Title (18px bold), Description (14px regular), Link (14px semi-bold)
- **Card Background:** Light Grey (#F7FAFC)
- **Card Padding:** 32px
- **Animation:** Hover lift 2px (300ms, ease-out)

#### Product Categories
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Category Card:** Image (300×200px, 4:3 aspect ratio, 8px border radius), Category Name (18px bold), Product Count (14px regular), "View All" link (14px, Manufacturing Orange)
- **Card Border:** 1px solid #E2E8F0
- **Card Padding:** 24px
- **Animation:** Hover lift 4px, image zoom 5% (300ms, ease-out)

#### Featured Products
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Product Card:** Image (800×1000px, 4:5 aspect ratio, 60% height, 8px border radius), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), "Request Sample" CTA (full width button)
- **Card Background:** White (#FFFFFF)
- **Card Border:** 1px solid #E2E8F0
- **Card Padding:** 24px
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Animation:** Hover lift 4px, image zoom 5% (300ms, ease-out)

#### Manufacturing Process
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal process (desktop), vertical (mobile)
- **Grid:** 6 steps (desktop), 3 per row (tablet), stacked (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Process Step:** Step Number (32px bold, Manufacturing Orange), Icon (48px), Title (18px semi-bold), Description (14px regular), Arrow/Connector (24px, #E2E8F0)
- **Animation:** Hover scale 1.05 (200ms, ease-out)

#### Factory Infrastructure
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, images right)
- **Gap:** 60px
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Text Column:** Equipment list (table format), Capacity data (progress bars)
- **Image Gallery:** 2×2 grid, 4 images (600×600px each, square, 8px border radius)
- **Animation:** Image hover scale 1.05, border color change (300ms, ease-out)

#### Quality Assurance
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Column:** Icon (48px), Title (18px semi-bold), Content (14px regular, list format)
- **Animation:** Hover lift 2px, icon scale 1.1 (200ms, ease-out)

#### Certifications & Awards
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Certifications:** 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Awards:** 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Certification Badge:** Badge (80px), Name (16px semi-bold), License Number (14px monospace), Validity Date (13px regular), Verification Link (13px, Manufacturing Orange)
- **Award:** Icon (64px), Name (16px semi-bold), Year (14px, Manufacturing Orange), Description (13px regular)
- **Animation:** Badge hover scale 1.05 (200ms, ease-out)

#### Industries Served
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Industry Card:** Icon (48px), Industry Name (18px semi-bold), Description (14px regular)
- **Card Background:** Light Grey (#F7FAFC)
- **Card Padding:** 32px
- **Animation:** Hover lift 2px (200ms, ease-out)

#### Export Presence
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, map right)
- **Gap:** 60px
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Text Column:** Export statistics, key markets list
- **Map:** Interactive map (800×400px)
- **Animation:** Map hover country highlight (200ms, ease-out)

#### Client Logos
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 48px 24px
- **Max Width:** 1200px
- **Grid:** 6 columns (desktop), 4-column (tablet), 2-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Client Logo:** 120px width (desktop), 100px (tablet), 80px (mobile), grayscale, opacity 0.6
- **Animation:** Hover color reveal, opacity 1.0, scale 1.05 (200ms, ease-out)

#### Testimonials
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3 columns (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Testimonial Card:** Quote (18px italic), Author (16px bold), Company (14px semi-bold), Location (13px regular), Metrics (14px bold, Manufacturing Orange), Client Since (13px regular), Logo (60px width, grayscale)
- **Card Background:** White (#FFFFFF)
- **Card Border:** 1px solid #E2E8F0
- **Card Padding:** 32px
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Animation:** Hover lift 2px, logo color reveal (300ms, ease-out)

#### FAQ
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 800px
- **Layout:** Single column
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **FAQ Item:** Question (16px bold), Icon (24px), Answer (14px regular, expandable)
- **FAQ Border:** 1px solid #E2E8F0
- **FAQ Border Radius:** 4px
- **FAQ Padding:** 16px vertical, 24px horizontal
- **FAQ Margin Bottom:** 16px
- **Animation:** Expand/collapse (300ms, ease-out)

#### Bulk Inquiry CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Text Color:** White (#FFFFFF)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered, 32px spacing
- **Animation:** Fade in (500ms, ease-out)

#### Contact Form
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (form left, contact info right)
- **Gap:** 60px
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Form:** Single column, max width 500px
- **Form Field:** Label (14px bold, 8px margin bottom), Input (16px padding, 1px border #E2E8F0, 4px border radius), Error Message (14px, Error Red, 8px margin top), Spacing (24px margin bottom)
- **Contact Info:** Phone, WhatsApp, Email with icons
- **Animation:** Focus border color change (200ms, ease-out)

#### Google Maps
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Height:** 400px (desktop), 300px (tablet), 250px (mobile)
- **Map:** Full width, embedded
- **Address Info:** Overlay on map or below map
- **Animation:** Marker hover scale 1.1 (200ms, ease-out)

#### Footer
- **Container:** Full width
- **Background:** Dark Grey (#2D3748)
- **Text Color:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Border Top:** 1px solid #4A5568
- **Grid:** 5 columns (desktop), 3-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 14px, semi-bold, white, 16px margin bottom
- **Link:** 14px, regular, #A0AEC0, 8px margin bottom
- **Bottom Row:** Padding top 32px, border top, flex space-between
- **Copyright:** 14px, regular, #A0AEC0
- **Legal Links:** 14px, regular, #A0AEC0
- **Certification Badges:** 32px height
- **Animation:** Link hover color change (200ms, ease-out)

### Grid Usage

#### Desktop
- **Product Categories:** 3-column grid (4 columns each)
- **Featured Products:** 4-column grid (3 columns each)
- **Trust Statistics:** 4-column grid (3 columns each)
- **Why Choose Goyal:** 3-column grid (4 columns each)
- **Manufacturing Process:** 6-step horizontal (2 columns each)
- **Certifications:** 4-column grid (3 columns each)
- **Awards:** 3-column grid (4 columns each)
- **Industries Served:** 3-column grid (4 columns each)
- **Client Logos:** 6-column grid (2 columns each)
- **Testimonials:** 3-column grid (4 columns each)

#### Tablet
- **Product Categories:** 2-column grid (4 columns each)
- **Featured Products:** 2-column grid (4 columns each)
- **Trust Statistics:** 2-column grid (4 columns each)
- **Why Choose Goyal:** 2-column grid (4 columns each)
- **Manufacturing Process:** 3 per row (2 columns each)
- **Certifications:** 2-column grid (4 columns each)
- **Awards:** 2-column grid (4 columns each)
- **Industries Served:** 2-column grid (4 columns each)
- **Client Logos:** 4-column grid (2 columns each)
- **Testimonials:** 2-column grid (4 columns each)

#### Mobile
- **Product Categories:** 1-column grid (4 columns)
- **Featured Products:** 1-column grid (4 columns)
- **Trust Statistics:** 1-column grid (4 columns)
- **Why Choose Goyal:** 1-column grid (4 columns)
- **Manufacturing Process:** Stacked vertical
- **Certifications:** 1-column grid (4 columns)
- **Awards:** 1-column grid (4 columns)
- **Industries Served:** 1-column grid (4 columns)
- **Client Logos:** 2-column grid (2 columns)
- **Testimonials:** 1-column grid (4 columns)

### Container Widths

#### Desktop
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Form:** 500px max
- **FAQ:** 800px max
- **Bulk CTA:** 800px max

#### Tablet
- **Hero Content:** 800px max
- **Section Content:** 960px max
- **Form:** 400px max
- **FAQ:** 600px max
- **Bulk CTA:** 600px max

#### Mobile
- **Hero Content:** 100% width
- **Section Content:** 100% width
- **Form:** 100% width
- **FAQ:** 100% width
- **Bulk CTA:** 100% width

### Section Spacing

#### Desktop
- **Hero to Stats:** 64px (3XL)
- **Stats to Why Choose:** 64px (3XL)
- **Why Choose to Categories:** 64px (3XL)
- **Categories to Featured:** 64px (3XL)
- **Featured to Process:** 64px (3XL)
- **Process to Infrastructure:** 64px (3XL)
- **Infrastructure to Quality:** 64px (3XL)
- **Quality to Certifications:** 64px (3XL)
- **Certifications to Industries:** 64px (3XL)
- **Industries to Export:** 64px (3XL)
- **Export to Client Logos:** 48px (2XL)
- **Client Logos to Testimonials:** 64px (3XL)
- **Testimonials to FAQ:** 64px (3XL)
- **FAQ to Bulk CTA:** 64px (3XL)
- **Bulk CTA to Contact Form:** 64px (3XL)
- **Contact Form to Google Maps:** 0 (no spacing)
- **Google Maps to Footer:** 0 (no spacing)

#### Tablet
- **All Sections:** 48px (2XL)

#### Mobile
- **All Sections:** 40px (2XL)

---

# Homepage Section Specifications

## Announcement Bar

### Purpose
Display time-sensitive announcements or promotions that require immediate user attention.

### Layout
- Full-width bar at top of page
- Centered text with link on right
- Close button on far right
- Height: 40px

### Visual Hierarchy
1. Primary text (announcement message)
2. Link (action)
3. Close button (dismiss)

### Spacing
- **Padding:** 0 24px
- **Text spacing:** 8px between text and link
- **Close button spacing:** 16px from link

### Typography
- **Font Size:** 14px
- **Font Weight:** 500 (Medium)
- **Font Family:** Open Sans
- **Color:** White (#FFFFFF)
- **Link Color:** White (#FFFFFF) with underline

### Component References
- Announcement Bar (from Component Library)

### Image Placement
- None

### Icon Placement
- Close icon (X): Right-aligned, 24px × 24px

### Trust Elements
- None (promotional)

### Animations
- **Close Animation:** Fade out and collapse height (300ms, ease-out)
- **Link Hover:** Underline animation (200ms, ease-out)

### Hover Effects
- **Link:** Underline animation (200ms, ease-out)

### Microinteractions
- **Close Button:** Click to dismiss with animation
- **Link:** Hover underline

### Accessibility Notes
- Use aria-live="polite" for screen reader announcements
- Ensure close button has 44px minimum touch target on mobile
- Use localStorage to remember dismissed state
- Provide keyboard access to close button (Enter, Space)

### Responsive Behavior
- **Desktop:** Full width, centered text, 14px font
- **Tablet:** Full width, centered text, 13px font
- **Mobile:** Full width, centered text, 12px font, close button 32px × 32px

### Loading Behavior
- Load immediately on page load
- Check localStorage for dismissed state
- Hide if dismissed within last 7 days

### Empty States
- None (if no active announcement, section is hidden)

### SEO Considerations
- Keep text concise and keyword-relevant
- Use semantic HTML (<aside> or <div role="banner">)
- Ensure dismissible content doesn't hide important SEO content

---

## Sticky Navbar

### Purpose
Provide persistent navigation access throughout the page.

### Layout
- Sticky positioning (fixed at top after scroll)
- Logo left, navigation center/right, CTA right
- Height: 80px (default), 72px (sticky)

### Visual Hierarchy
1. Logo (brand identity)
2. Navigation links (navigation)
3. CTA button (conversion)

### Spacing
- **Padding:** 0 24px
- **Logo spacing:** 24px from left edge
- **Navigation spacing:** 24px between links
- **CTA spacing:** 24px from right edge

### Typography
- **Logo:** Custom size (40px height)
- **Navigation:** 14px, 600 weight, uppercase, 0.5px letter spacing
- **CTA:** 16px, 600 weight, uppercase

### Component References
- Sticky Navbar (from Component Library)
- Mega Menu (for Products and Capabilities)
- Mobile Menu (hamburger with accordion)

### Image Placement
- Logo: Left-aligned, 40px height

### Icon Placement
- Hamburger icon: Right-aligned, mobile only
- Chevron/down icons: Mega menu indicators

### Trust Elements
- Logo (brand credibility)
- Professional navigation structure

### Animations
- **Sticky Transition:** Background change, shadow appear, height compression (300ms, ease-in-out)
- **Link Hover:** Color change to Manufacturing Orange, underline animation (200ms, ease-out)
- **Mega Menu:** Fade in and slide down (200ms, ease-out)
- **Mobile Menu:** Slide from right (300ms, ease-in-out)

### Hover Effects
- **Link:** Color change to Manufacturing Orange (#ED8936), underline animation (200ms, ease-out)
- **CTA:** Standard button hover states (200ms, ease-out)

### Microinteractions
- **Mega Menu:** Hover intent with 100ms delay
- **Mobile Menu:** Accordion-style expansion

### Accessibility Notes
- Skip to content link (hidden until focused)
- Full keyboard navigation (Tab, Enter, Escape)
- ARIA labels for mobile menu
- Focus indicators visible
- Mega menu keyboard accessible

### Responsive Behavior
- **Desktop:** Full navigation with mega-menus, 80px height
- **Tablet:** Simplified navigation, mega-menus disabled, 72px height
- **Mobile:** Hamburger menu, full-screen overlay, Deep Navy Blue background

### Loading Behavior
- Load immediately on page load
- Sticky behavior activates after scroll > 100px

### Empty States
- None (always present)

### SEO Considerations
- Use semantic HTML (<nav>)
- Include descriptive link text
- Ensure logo has alt text
- Provide clear navigation hierarchy

---

## Hero Section

### Purpose
Communicate primary value proposition and drive first conversion.

### Layout
- Full-width background image with overlay
- Centered content container
- Vertical padding: 80px
- Max width: 1000px

### Visual Hierarchy
1. Headline (primary message)
2. Subheadline (supporting message)
3. Primary CTA (main action)
4. Secondary CTAs (alternative actions)
5. Trust signals (credibility)

### Spacing
- **Padding:** 80px 24px
- **Text spacing:** 24px between headline and subheadline
- **CTA spacing:** 16px between CTAs
- **Trust signal spacing:** 32px between CTAs and trust signals
- **Trust signal internal spacing:** 24px between elements

### Typography
- **Headline:** 40px, bold, white, 1.2 line height
- **Subheadline:** 18px, regular, white, 1.5 line height
- **CTA Text:** 16px, 600 weight, uppercase

### Component References
- Hero Section (from Component Library)
- Primary Button
- Secondary Button
- Tertiary Button
- Certification Badges

### Image Placement
- **Background:** Full-width, 1920×1080px, WebP with JPEG fallback
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.4), rgba(26,54,93,0.8))

### Icon Placement
- None (use text badges for metrics)

### Trust Elements
- **Certification Badges:** BSCI, WRAP, GOTS with verification links
- **Capacity Metric:** "50,000 units/month capacity"
- **Client Metric:** "Serving 100+ clients globally"
- **Years Badge:** "Established 2008"
- **Factory Image:** Authentic production floor photo (background)

### Animations
- **Content Fade In:** Staggered reveal (500ms, ease-out, 100ms delay between elements)
- **Parallax:** Background moves at 0.5x scroll speed (continuous, scroll-based)
- **CTA Hover:** Standard button hover states (200ms, ease-out)
- **Badge Hover:** Scale 1.05, verification link underline (200ms, ease-out)

### Hover Effects
- **CTA Buttons:** Standard button hover states (200ms, ease-out)
- **Certification Badges:** Scale 1.05, verification link underline (200ms, ease-out)

### Microinteractions
- **CTA Click:** Navigate to quote form
- **Badge Click:** Open verification link in new tab

### Accessibility Notes
- Ensure text contrast meets WCAG AA (4.5:1 minimum)
- Provide alt text for background image
- Ensure CTAs have descriptive text
- Skip parallax on prefers-reduced-motion
- Ensure keyboard navigation to CTAs

### Responsive Behavior
- **Desktop:** Full-width background, centered content, 40px headline
- **Tablet:** Full-width background, centered content, 32px headline
- **Mobile:** Full-width background, stacked content, 28px headline, CTAs stacked, trust signals 2 per row, disable parallax

### Loading Behavior
- Background image lazy loaded
- Content fades in after image load

### Empty States
- None (always present)

### SEO Considerations
- H1: "Premium Wholesale Textile Manufacturing for Global Retailers"
- Include primary keywords in headline
- Descriptive alt text for background image
- Semantic heading structure
- Internal links in CTAs

---

## Trust Statistics

### Purpose
Build immediate credibility through quantifiable metrics.

### Layout
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Center-aligned content
- Gap: 24px

### Visual Hierarchy
1. Icon (visual anchor)
2. Number (primary metric)
3. Label (metric category)
4. Description (metric context)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Stat internal spacing:** 8px between icon and number, 8px between number and label, 8px between label and description

### Typography
- **Number:** 48px, bold, Deep Navy Blue
- **Label:** 16px, semi-bold, Deep Navy Blue
- **Description:** 14px, regular, Industrial Grey

### Component References
- Stats (from Component Library)
- Counter Animation

### Image Placement
- None (use icons)

### Icon Placement
- **Icon:** 48px, Manufacturing Orange or Quality Green, top of stat item

### Trust Elements
- **Quantifiable Metrics:** All numbers are specific, not generic
- **Icons:** Manufacturing Orange and Quality Green for visual hierarchy
- **Counter Animation:** Numbers count up from 0 for engagement

### Animations
- **Counter Animation:** Count from 0 to final value (2000ms, ease-out, scroll-triggered)
- **Hover State:** Icon scale 1.1, number scale 1.05 (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between stats (400ms per stat, ease-out)

### Hover Effects
- **Icon:** Scale 1.1
- **Number:** Scale 1.05
- **Animation:** 200ms, ease-out

### Microinteractions
- **Scroll Trigger:** Counter animation starts when section enters viewport

### Accessibility Notes
- Use aria-label for screen readers to read full metric
- Ensure numbers are formatted with commas
- Skip counter animation on prefers-reduced-motion
- Provide text alternative for icons

### Responsive Behavior
- **Desktop:** 4 columns, 48px icons, 48px numbers
- **Tablet:** 2 columns, 40px icons, 40px numbers
- **Mobile:** 1 column, 32px icons, 32px numbers, stacked vertically

### Loading Behavior
- Counter animation triggers on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use semantic HTML (<section>, <dl> for definition lists)
- Include numbers in text for search engines
- Use descriptive icon alt text
- Schema markup for Organization data

---

## Why Choose Goyal Trading Company

### Purpose
Communicate unique differentiators and value propositions.

### Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Center-aligned content
- Gap: 24px

### Visual Hierarchy
1. Icon (visual anchor)
2. Title (feature name)
3. Description (feature benefit)
4. Link (action)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Card internal spacing:** 16px between icon and title, 8px between title and description, 16px between description and link

### Typography
- **Title:** 18px, semi-bold, Deep Navy Blue
- **Description:** 14px, regular, Industrial Grey
- **Link:** 14px, semi-bold, Manufacturing Orange

### Component References
- Feature Cards (from Component Library)

### Image Placement
- None (use icons)

### Icon Placement
- **Icon:** 48px, Manufacturing Orange or Quality Green, top of card

### Trust Elements
- **Specific Claims:** Not generic "quality" but "AQL 2.5 standards"
- **Verifiable:** Mentions certifications and documentation
- **Direct Access:** Highlights named contacts and factory tours

### Animations
- **Hover State:** Card lift 2px, background change to #EDF2F7, icon scale 1.1 (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

### Hover Effects
- **Card:** Lift 2px, background change to #EDF2F7
- **Icon:** Scale 1.1
- **Animation:** 300ms, ease-out

### Microinteractions
- **Link Click:** Navigate to detailed information

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Ensure icons have aria-labels
- Provide descriptive link text
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 3 columns, 48px icons
- **Tablet:** 2 columns, 40px icons
- **Mobile:** 1 column, 32px icons, stacked vertically

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H3 for feature titles
- Include keywords in descriptions
- Internal link to About page
- Schema markup for Feature

---

## Product Categories

### Purpose
Organize products by type for easy discovery.

### Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Category Image (visual)
2. Category Name (label)
3. Product Count (context)
4. Link (action)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Card internal spacing:** 8px between image and name, 4px between name and count, 8px between count and link

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Category Name:** 18px, bold, Deep Navy Blue
- **Product Count:** 14px, regular, Industrial Grey
- **Link:** 14px, Manufacturing Orange

### Component References
- Product Categories (from Component Library)
- Category Cards

### Image Placement
- **Category Image:** 300×200px, 4:3 aspect ratio, 8px border radius, top of card

### Icon Placement
- None (use category images)

### Trust Elements
- **Product Counts:** Shows scale and variety
- **Category Images:** Authentic product photos, not stock
- **Clear Organization:** Logical categorization

### Animations
- **Hover State:** Image scale 1.05, card lift 4px, shadow increase (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

### Hover Effects
- **Image:** Scale 1.05
- **Card:** Lift 4px
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Animation:** 300ms, ease-out

### Microinteractions
- **Link Click:** Navigate to category page

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for images
- Ensure links have descriptive text
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 3 columns, 300×200px images
- **Tablet:** 2 columns, 250×167px images
- **Mobile:** 1 column, 200×133px images, stacked vertically

### Loading Behavior
- Images lazy loaded
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for category names
- Internal links to category pages
- Descriptive alt text for images
- Schema markup for ProductCategory

---

## Featured Products

### Purpose
Showcase specific products with technical specifications.

### Layout
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Product Image (visual)
2. Product Title (name)
3. Technical Specs (data)
4. Price/MOQ (pricing)
5. CTA (action)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Card internal spacing:** 8px between image and title, 8px between title and specs, 8px between specs and price, 16px between price and CTA

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Product Title:** 16px, bold, Deep Navy Blue
- **Technical Specs:** 14px, monospace, Industrial Grey
- **Price/MOQ:** 14px, bold, Manufacturing Orange

### Component References
- Product Cards (from Component Library)
- Primary Button

### Image Placement
- **Product Image:** 800×1000px, 4:5 aspect ratio, 60% of card height, 8px border radius, top of card

### Icon Placement
- None (use product images)

### Trust Elements
- **Technical Specs:** Fabric, GSM, MOQ (B2B-specific data)
- **Authentic Images:** Real product photos, not stock
- **Transparent Pricing:** Price ranges by quantity
- **Sample Availability:** Clear sample request option

### Animations
- **Hover State:** Card lift 4px, image zoom 5%, shadow increase (300ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

### Hover Effects
- **Card:** Lift 4px
- **Image:** Scale 1.05
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Animation:** 300ms, ease-out

### Microinteractions
- **CTA Click:** Navigate to sample request form

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for images
- Ensure technical specs are readable (monospace font)
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 4 columns, 800×1000px images
- **Tablet:** 2 columns, 600×750px images
- **Mobile:** 1 column, 400×500px images, stacked vertically

### Loading Behavior
- Images lazy loaded
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for product names
- Internal links to product detail pages
- Descriptive alt text for images
- Schema markup for Product

---

## Manufacturing Process

### Purpose
Demonstrate manufacturing workflow and quality checkpoints.

### Layout
- Horizontal process (desktop), vertical (mobile)
- 6 steps (desktop), 3 per row (tablet), stacked (mobile)
- Gap: 24px

### Visual Hierarchy
1. Step Number (sequence)
2. Icon (visual)
3. Title (step name)
4. Description (step detail)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Step internal spacing:** 8px between number and icon, 8px between icon and title, 8px between title and description, 16px for connector

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Step Number:** 32px, bold, Manufacturing Orange
- **Title:** 18px, semi-bold, Deep Navy Blue
- **Description:** 14px, regular, Industrial Grey

### Component References
- Manufacturing Process (from Component Library)
- Process Steps

### Image Placement
- None (use icons)

### Icon Placement
- **Icon:** 48px, Manufacturing Orange, below step number

### Trust Elements
- **Specific Equipment:** Machine types mentioned
- **Quality Standards:** AQL 2.5, tolerance ±2mm
- **Quality Metrics:** Defect rate <1%
- **Process Documentation:** Step-by-step workflow

### Animations
- **Hover State:** Step scale 1.05, icon scale 1.1 (200ms, ease-out)
- **Active State:** Step background Manufacturing Orange, text white (150ms, ease-out)
- **Staggered Reveal:** 100ms delay between steps (400ms per step, ease-out)

### Hover Effects
- **Step:** Scale 1.05
- **Icon:** Scale 1.1
- **Animation:** 200ms, ease-out

### Microinteractions
- **Link Click:** Navigate to detailed process page

### Accessibility Notes
- Use semantic HTML (<section>, <h3>, <ol>)
- Provide aria-label for process steps
- Ensure icons have aria-labels
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 6 steps horizontal, 48px icons
- **Tablet:** 3 per row, 40px icons
- **Mobile:** Stacked vertical, 32px icons, connectors hidden

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for step titles
- Include keywords in descriptions
- Schema markup for HowTo
- Internal link to detailed process page

---

## Factory Infrastructure

### Purpose
Showcase factory equipment, capacity, and infrastructure.

### Layout
- 2-column layout (text left, image gallery right)
- Gap: 60px

### Visual Hierarchy
1. Section Title (header)
2. Equipment List (data)
3. Capacity Data (metrics)
4. Image Gallery (visual)

### Spacing
- **Padding:** 64px 24px
- **Column gap:** 60px
- **Text column spacing:** 16px between sections
- **Image gallery gap:** 16px

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Equipment Name:** 16px, semi-bold, Deep Navy Blue
- **Equipment Specs:** 14px, monospace, Industrial Grey
- **Capacity Label:** 14px, semi-bold, Deep Navy Blue
- **Capacity Value:** 14px, regular, Industrial Grey

### Component References
- Capability Cards (from Component Library)
- Technical Data Table
- Progress Bar Animation

### Image Placement
- **Equipment Images:** 600×600px each, square aspect ratio, 8px border radius, 2×2 grid in right column

### Icon Placement
- None (use equipment images)

### Trust Elements
- **Specific Equipment:** Machine types and models
- **Capacity Data:** Specific numbers, not "large capacity"
- **Equipment Photos:** Authentic equipment images
- **Technical Authority:** Detailed specifications

### Animations
- **Image Hover:** Scale 1.05, border color change to Manufacturing Orange (300ms, ease-out)
- **Progress Bar:** Animate width on scroll (1500ms, ease-out)
- **Staggered Reveal:** 100ms delay between images (400ms per image, ease-out)

### Hover Effects
- **Image:** Scale 1.05
- **Border Color:** Change to Manufacturing Orange
- **Animation:** 300ms, ease-out

### Microinteractions
- **CTA Click:** Navigate to equipment page or factory tour request

### Accessibility Notes
- Use semantic HTML (<section>, <h2>, <table>)
- Provide descriptive alt text for images
- Ensure table is accessible (captions, headers)
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 2-column, 600×600px images
- **Tablet:** Stacked, 400×400px images
- **Mobile:** Stacked, 300×300px images, full width content

### Loading Behavior
- Images lazy loaded
- Progress bars animate on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Include equipment names in text
- Descriptive alt text for images
- Schema markup for Organization
- Internal link to equipment page

---

## Quality Assurance

### Purpose
Document quality standards, inspection processes, and certifications.

### Layout
- 3-column layout (standards, process, certifications)
- Gap: 24px

### Visual Hierarchy
1. Icon (visual)
2. Title (category)
3. Content (details)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Column internal spacing:** 16px between icon and title, 8px between title and content

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Column Title:** 18px, semi-bold, Deep Navy Blue
- **Content:** 14px, regular, Industrial Grey

### Component References
- Feature Cards (from Component Library)
- Certification Badges
- Technical Data Table

### Image Placement
- **Certification Badges:** 80×80px each, in certifications column

### Icon Placement
- **Icon:** 48px, Quality Green or Manufacturing Orange, top of column

### Trust Elements
- **Specific Standards:** AQL 2.5, tolerance ±2mm
- **Verifiable Certifications:** License numbers and validity dates
- **Quality Metrics:** Defect rate <1%
- **Process Documentation:** Detailed QC process

### Animations
- **Hover State:** Card lift 2px, icon scale 1.1 (200ms, ease-out)
- **Badge Hover:** Scale 1.05, verification link underline (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between columns (400ms per column, ease-out)

### Hover Effects
- **Card:** Lift 2px
- **Icon:** Scale 1.1
- **Badge:** Scale 1.05
- **Animation:** 200ms, ease-out

### Microinteractions
- **Link Click:** Navigate to quality process page or download certificate

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for badges
- Ensure links have descriptive text
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 3 columns, 48px icons
- **Tablet:** 2 columns, 40px icons
- **Mobile:** 1 column, 32px icons, stacked vertically

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for column titles
- Include certification names in text
- Schema markup for Organization
- Internal links to verification pages

---

## Certifications & Awards

### Purpose
Display verifiable certifications and industry awards.

### Layout
- 2 sections stacked (Certifications and Awards)
- Certifications: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Awards: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Badge/Icon (visual)
2. Name (title)
3. Details (license, year)
4. Link (action)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Section gap:** 48px
- **Item internal spacing:** 8px between badge and name, 4px between name and details, 8px between details and link

### Typography
- **Section Title:** 24px, bold, Deep Navy Blue
- **Certification Name:** 16px, semi-bold, Deep Navy Blue
- **License Number:** 14px, monospace, Industrial Grey
- **Validity Date:** 13px, regular, Industrial Grey
- **Verification Link:** 13px, Manufacturing Orange
- **Award Name:** 16px, semi-bold, Deep Navy Blue
- **Award Year:** 14px, Manufacturing Orange
- **Award Description:** 13px, regular, Industrial Grey

### Component References
- Certification Badges (from Component Library)
- Awards (from Component Library)

### Image Placement
- **Certification Badges:** 80×80px each, SVG or PNG
- **Award Icons:** 64px each, SVG

### Icon Placement
- **Award Icons:** 64px, SVG, top of award card

### Trust Elements
- **Verifiable Certifications:** License numbers and verification links
- **Validity Dates:** Clear expiration dates
- **Industry Recognition:** Awards from reputable organizations
- **Compliance:** Demonstrates adherence to standards

### Animations
- **Certification Hover:** Badge scale 1.05, link underline (200ms, ease-out)
- **Award Hover:** Icon scale 1.1, card lift 2px (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between items (400ms per item, ease-out)

### Hover Effects
- **Badge:** Scale 1.05
- **Award Icon:** Scale 1.1
- **Award Card:** Lift 2px
- **Animation:** 200ms, ease-out

### Microinteractions
- **Verification Link Click:** Open verification page in new tab

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Provide descriptive alt text for badges and icons
- Ensure links have descriptive text
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** Certifications 4-column, Awards 3-column
- **Tablet:** Certifications 2-column, Awards 2-column
- **Mobile:** Certifications 1-column, Awards 1-column

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H3 for section titles
- Include certification names in text
- Include award names in text
- Schema markup for Organization
- External links to verification pages

---

## Industries Served

### Purpose
Demonstrate industry expertise and versatility.

### Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Icon (visual)
2. Industry Name (label)
3. Description (context)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Card internal spacing:** 16px between icon and name, 8px between name and description

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Industry Name:** 18px, semi-bold, Deep Navy Blue
- **Description:** 14px, regular, Industrial Grey

### Component References
- Feature Cards (from Component Library)

### Image Placement
- None (use icons)

### Icon Placement
- **Icon:** 48px, Manufacturing Orange or Quality Green, top of card

### Trust Elements
- **Industry Expertise:** Demonstrates experience in multiple industries
- **Versatility:** Shows capability to handle diverse requirements
- **Specific Applications:** Lists specific use cases

### Animations
- **Hover State:** Card lift 2px, icon scale 1.1 (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

### Hover Effects
- **Card:** Lift 2px
- **Icon:** Scale 1.1
- **Animation:** 200ms, ease-out

### Microinteractions
- **Link Click:** Navigate to industry case studies

### Accessibility Notes
- Use semantic HTML (<section>, <h3>)
- Ensure icons have aria-labels
- Ensure links have descriptive text
- Ensure keyboard navigation

### Responsive Behavior
- **Desktop:** 3 columns, 48px icons
- **Tablet:** 2 columns, 40px icons
- **Mobile:** 1 column, 32px icons, stacked vertically

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for industry names
- Include industry keywords in descriptions
- Schema markup for Organization
- Internal link to case studies page

---

## Export Presence

### Purpose
Demonstrate global reach and international capability.

### Layout
- 2-column layout (text left, map right)
- Gap: 60px

### Visual Hierarchy
1. Section Title (header)
2. Export Statistics (data)
3. Key Markets (list)
4. Map (visual)

### Spacing
- **Padding:** 64px 24px
- **Column gap:** 60px
- **Text column spacing:** 16px between sections
- **Map spacing:** 0 (full width)

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Statistic Label:** 14px, semi-bold, Deep Navy Blue
- **Statistic Value:** 14px, regular, Industrial Grey
- **Market Name:** 14px, regular, Industrial Grey

### Component References
- Stats (from Component Library)
- Interactive Map (Google Maps or custom SVG)

### Image Placement
- **World Map:** Interactive map image or SVG, 800×400px

### Icon Placement
- **Location Icons:** Map pin icons for key markets, 32px, Manufacturing Orange

### Trust Elements
- **Global Reach:** 25+ countries
- **Export Experience:** 15+ years
- **International Partners:** Shipping partners
- **Geographic Diversity:** 4 continents

### Animations
- **Map Hover:** Country highlight on hover (200ms, ease-out)
- **Counter Animation:** Count up for export metrics (2000ms, ease-out, scroll-triggered)
- **Pin Hover:** Scale 1.2, tooltip reveal (200ms, ease-out)

### Hover Effects
- **Country:** Highlight on hover
- **Pin:** Scale 1.2
- **Animation:** 200ms, ease-out

### Microinteractions
- **Country Click:** Show country-specific information
- **CTA Click:** Navigate to export case studies

### Accessibility Notes
- Use semantic HTML (<section>, <h2>)
- Provide alt text for map
- Ensure map is keyboard accessible
- Provide text-based country list

### Responsive Behavior
- **Desktop:** 2-column, 800×400px map
- **Tablet:** Stacked, 600×300px map
- **Mobile:** Stacked, 400×400px map, country list 2 per row

### Loading Behavior
- Map lazy loaded
- Counter animation on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Include country names in text
- Schema markup for Organization
- Internal link to export page
- Descriptive alt text for map

---

## Client Logos

### Purpose
Display client logos to build trust and show industry diversity.

### Layout
- 6-column grid (desktop), 4-column (tablet), 2-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Client Logo (visual)
2. Company Name (alt text)

### Spacing
- **Padding:** 48px 24px
- **Grid gap:** 24px

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered

### Component References
- Client Logos (from Component Library)

### Image Placement
- **Client Logos:** 120px width (desktop), 100px (tablet), 80px (mobile), grayscale, opacity 0.6

### Icon Placement
- None (use client logos)

### Trust Elements
- **Industry Diversity:** Multiple industries represented
- **Geographic Diversity:** Local, national, international
- **Client Longevity:** Long-term relationships
- **Recognizable Brands:** When available and permitted

### Animations
- **Hover State:** Color reveal, opacity 1.0, scale 1.05 (200ms, ease-out)
- **Infinite Scroll:** Optional, 30 seconds per cycle
- **Staggered Reveal:** 50ms delay between logos (300ms per logo, ease-out)

### Hover Effects
- **Logo:** Color reveal, opacity 1.0, scale 1.05
- **Animation:** 200ms, ease-out

### Microinteractions
- **Logo Click:** Navigate to client case study (if available)

### Accessibility Notes
- Use semantic HTML (<section>, <h2>)
- Provide descriptive alt text for logos
- Ensure logos are accessible
- Provide text-based client list as alternative

### Responsive Behavior
- **Desktop:** 6 columns, 120px logos
- **Tablet:** 4 columns, 100px logos
- **Mobile:** 2 columns, 80px logos

### Loading Behavior
- Logos lazy loaded
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Include client names in alt text
- Schema markup for Organization
- Internal link to clients page
- Descriptive alt text for logos

---

## Testimonials

### Purpose
Display client testimonials with quantifiable results.

### Layout
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Quote (content)
2. Author (person)
3. Company (organization)
4. Metrics (results)
5. Logo (brand)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Card internal spacing:** 16px between quote and author, 4px between author and company, 4px between company and location, 8px between location and metrics, 8px between metrics and logo

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Quote:** 18px, italic, Dark Grey
- **Author:** 16px, bold, Deep Navy Blue
- **Company:** 14px, semi-bold, Deep Navy Blue
- **Location:** 13px, regular, Industrial Grey
- **Metrics:** 14px, bold, Manufacturing Orange
- **Client Since:** 13px, regular, Industrial Grey

### Component References
- Testimonial Cards (from Component Library)
- Carousel (optional, auto-rotate every 8 seconds)

### Image Placement
- **Client Logos:** 60px width (desktop), 50px (tablet), 40px (mobile), grayscale

### Icon Placement
- **Quote Icon:** 32px, Manufacturing Orange, top of quote

### Trust Elements
- **Quantifiable Results:** Specific metrics (30% faster, 15% savings)
- **Named Contacts:** Real people with titles
- **Company Information:** Company names and locations
- **Client Longevity:** "Client since" indicators
- **Industry Diversity:** Retail, hospitality, corporate

### Animations
- **Hover State:** Card lift 2px, shadow increase, logo color reveal (300ms, ease-out)
- **Carousel:** 300ms, ease-out, auto-rotate every 8 seconds, pause on hover
- **Staggered Reveal:** 100ms delay between cards (400ms per card, ease-out)

### Hover Effects
- **Card:** Lift 2px
- **Shadow:** 0 8px 12px rgba(0, 0, 0, 0.15)
- **Logo:** Color reveal
- **Animation:** 300ms, ease-out

### Microinteractions
- **Logo Click:** Navigate to client case study
- **Carousel Navigation:** Previous/Next buttons

### Accessibility Notes
- Use semantic HTML (<section>, <h3>, <blockquote>)
- Provide alt text for logos
- Ensure carousel is keyboard accessible
- Provide pause controls for carousel

### Responsive Behavior
- **Desktop:** 3 columns, 60px logos
- **Tablet:** 2 columns, 50px logos
- **Mobile:** 1 column, 40px logos, carousel 1 card visible

### Loading Behavior
- Logos lazy loaded
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for client names
- Include company names in text
- Schema markup for Review/AggregatedRating
- Internal link to testimonials page

---

## FAQ

### Purpose
Answer common questions to reduce friction in inquiry process.

### Layout
- Single column
- Max width: 800px
- Accordion pattern (expand/collapse)

### Visual Hierarchy
1. Question (header)
2. Icon (indicator)
3. Answer (content)

### Spacing
- **Padding:** 64px 24px
- **FAQ spacing:** 16px margin bottom between FAQs
- **FAQ internal spacing:** 16px vertical, 24px horizontal
- **Answer padding top:** 16px

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Question:** 16px, bold, Deep Navy Blue
- **Answer:** 14px, regular, Dark Grey

### Component References
- FAQ (from Component Library)
- Accordion

### Image Placement
- None

### Icon Placement
- **Plus/Minus Icon:** 24px, Manufacturing Orange, right of question

### Trust Elements
- **Transparency:** Clear MOQ and pricing information
- **Specific Data:** Specific numbers, not generic claims
- **Process Information:** Detailed lead time and sample information
- **Quality Standards:** AQL and certification information

### Animations
- **Expand/Collapse:** 300ms, ease-out, height and opacity
- **Hover State:** Header background change to #F7FAFC (200ms, ease-out)
- **Staggered Reveal:** 100ms delay between FAQs (300ms per FAQ, ease-out)

### Hover Effects
- **Header:** Background change to #F7FAFC
- **Animation:** 200ms, ease-out

### Microinteractions
- **Question Click:** Expand/collapse answer
- **Link Click:** Navigate to detailed information

### Accessibility Notes
- Use semantic HTML (<section>, <h2>, <details>, <summary>)
- Use ARIA attributes (aria-expanded, aria-controls)
- Ensure keyboard navigation (Enter, Space)
- Provide focus indicators

### Responsive Behavior
- **Desktop:** Single column, max width 800px
- **Tablet:** Single column, max width 600px
- **Mobile:** Single column, full width, 44px minimum touch target

### Loading Behavior
- Staggered reveal on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Use H3 for questions
- Include keywords in questions and answers
- Schema markup for FAQPage
- Internal link to FAQ page

---

## Bulk Inquiry CTA

### Purpose
Provide prominent call-to-action for bulk inquiries.

### Layout
- Full-width section
- Centered content
- Max width: 800px

### Visual Hierarchy
1. Headline (message)
2. Description (context)
3. Primary CTA (main action)
4. Secondary CTA (alternative action)

### Spacing
- **Padding:** 80px 24px
- **Text spacing:** 24px between headline and description
- **CTA spacing:** 16px between CTAs

### Typography
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTA Text:** 16px, 600 weight, uppercase

### Component References
- Primary CTA Section (from Component Library)
- Primary Button
- Secondary Button

### Image Placement
- None

### Icon Placement
- None

### Trust Elements
- **Response Time:** "Response within 24 hours"
- **No Commitment:** "No commitment required"
- **Professional:** "Customized quote within 24 hours"

### Animations
- **CTA Hover:** Standard button hover states (200ms, ease-out)
- **Fade In:** 500ms, ease-out, on scroll

### Hover Effects
- **CTA Buttons:** Standard button hover states (200ms, ease-out)

### Microinteractions
- **CTA Click:** Navigate to quote form

### Accessibility Notes
- Ensure text contrast meets WCAG AA (4.5:1 minimum)
- Ensure CTAs have descriptive text
- Ensure keyboard navigation
- Provide focus indicators

### Responsive Behavior
- **Desktop:** 32px headline, 16px description
- **Tablet:** 28px headline, 15px description
- **Mobile:** 24px headline, 14px description, CTAs stacked full width

### Loading Behavior
- Fade in on scroll into view

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for headline
- Include keywords in description
- Internal links to quote form
- Schema markup for Action

---

## Contact Form

### Purpose
Capture user inquiries with validation and clear feedback.

### Layout
- 2-column layout (form left, contact info right)
- Gap: 60px

### Visual Hierarchy
1. Section Title (header)
2. Description (context)
3. Form Fields (input)
4. Contact Info (alternative)

### Spacing
- **Padding:** 64px 24px
- **Column gap:** 60px
- **Form field spacing:** 24px margin bottom
- **Contact info spacing:** 16px between items

### Typography
- **Section Title:** 32px, bold, Deep Navy Blue, left-aligned
- **Description:** 16px, regular, Industrial Grey
- **Form Label:** 14px, bold, Dark Grey
- **Form Input:** 16px, regular, Dark Grey
- **Contact Info Label:** 14px, semi-bold, Deep Navy Blue
- **Contact Info Value:** 14px, regular, Industrial Grey

### Component References
- Contact Form (from Component Library)
- Form Fields (Text, Email, Phone, Select, Textarea)
- Primary Button

### Image Placement
- None

### Icon Placement
- **Phone Icon:** 24px, Manufacturing Orange
- **WhatsApp Icon:** 24px, Manufacturing Orange
- **Email Icon:** 24px, Manufacturing Orange

### Trust Elements
- **Response Time:** "We respond within 24 hours"
- **Direct Contact:** Phone, WhatsApp, Email
- **Named Contacts:** Sales Manager information

### Animations
- **Focus State:** Border color change to Manufacturing Orange, box shadow (200ms, ease-out)
- **Error State:** Shake animation, red border (400ms, ease-out-back)
- **Success State:** Green border, checkmark animation (500ms, ease-out)
- **Loading State:** Spinner, text change to "Sending..."

### Hover Effects
- **Input:** Border color change on focus
- **Button:** Standard button hover state
- **Animation:** 200ms, ease-out

### Microinteractions
- **Form Submission:** Validation, loading state, success message
- **Field Focus:** Visual feedback

### Accessibility Notes
- Use semantic HTML (<form>, <label>, <input>)
- Ensure form labels are associated with inputs
- Provide clear error messages
- Ensure keyboard navigation
- Use aria-invalid for error states

### Responsive Behavior
- **Desktop:** 2-column, form max width 500px
- **Tablet:** Stacked, form max width 400px
- **Mobile:** Stacked, form full width, 44px minimum touch target

### Loading Behavior
- Form loads immediately
- Validation on blur
- Loading state on submit

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title
- Include keywords in description
- Schema markup for ContactPage
- Ensure form is accessible to search engines

---

## Google Maps

### Purpose
Display physical location with interactive map.

### Layout
- Full-width section
- Height: 400px (desktop), 300px (tablet), 250px (mobile)

### Visual Hierarchy
1. Map (visual)
2. Address Info (context)
3. CTA (action)

### Spacing
- **Map:** Full width
- **Address Info:** Overlay on map or below map
- **CTA:** Below address info

### Typography
- **Address:** 16px, bold, Dark Grey
- **Phone:** 14px, regular, Manufacturing Orange
- **Email:** 14px, regular, Manufacturing Orange
- **Hours:** 14px, regular, Industrial Grey

### Component References
- Google Map (from Component Library)

### Image Placement
- **Map Embed:** Full width, Google Maps embed

### Icon Placement
- **Location Icon:** Map pin icon, 32px, Manufacturing Orange
- **Phone Icon:** 24px, Manufacturing Orange
- **Email Icon:** 24px, Manufacturing Orange
- **Clock Icon:** 24px, Manufacturing Orange

### Trust Elements
- **Physical Address:** Verifiable location
- **Business Hours:** Operating hours
- **Direct Contact:** Phone and email

### Animations
- **Marker Hover:** Scale 1.1 (200ms, ease-out)
- **Map Load:** Fade in (400ms, ease-out)

### Hover Effects
- **Marker:** Scale 1.1
- **Animation:** 200ms, ease-out

### Microinteractions
- **Marker Click:** Show location details
- **CTA Click:** Open directions in Google Maps

### Accessibility Notes
- Use semantic HTML (<section>, <iframe>)
- Provide text-based address alternative
- Ensure map is keyboard accessible
- Provide "Get Directions" link

### Responsive Behavior
- **Desktop:** 400px height
- **Tablet:** 300px height
- **Mobile:** 250px height, address info below map

### Loading Behavior
- Map loads immediately
- Fade in animation on load

### Empty States
- None (always present)

### SEO Considerations
- Use H2 for section title (if included)
- Include address in text
- Schema markup for LocalBusiness
- Provide NAP (Name, Address, Phone) consistency

---

## Footer

### Purpose
Provide site information, navigation access, legal compliance.

### Layout
- 5-column grid (desktop), 3-column (tablet), 1-column (mobile)
- Gap: 24px

### Visual Hierarchy
1. Section Title (column header)
2. Links (navigation)
3. Contact Info (contact)
4. CTA (conversion)
5. Bottom Row (legal)

### Spacing
- **Padding:** 64px 24px
- **Grid gap:** 24px
- **Section Title spacing:** 16px margin bottom
- **Link spacing:** 8px margin bottom
- **Bottom Row spacing:** 32px padding top

### Typography
- **Section Title:** 14px, semi-bold, white
- **Link:** 14px, regular, #A0AEC0
- **Copyright:** 14px, regular, #A0AEC0
- **Contact Info:** 14px, regular, #A0AEC0

### Component References
- Footer (from Component Library)
- Social Media Icons
- Certification Badges

### Image Placement
- **Logo:** Company logo, white version
- **Certification Badges:** 32px height each, SVG or PNG

### Icon Placement
- **Social Media Icons:** LinkedIn, Twitter, Instagram, 24px each, white

### Trust Elements
- **Certification Badges:** BSCI, WRAP, GOTS
- **Contact Information:** Phone, email, address
- **Social Media:** Active social presence
- **Legal Compliance:** Privacy, terms, cookies

### Animations
- **Link Hover:** Color change to white, underline (200ms, ease-out)
- **CTA Hover:** Standard button hover state (200ms, ease-out)
- **Social Icon Hover:** Scale 1.1 (200ms, ease-out)

### Hover Effects
- **Link:** Color change to white, underline
- **CTA:** Standard button hover state
- **Social Icon:** Scale 1.1
- **Animation:** 200ms, ease-out

### Microinteractions
- **Link Click:** Navigate to linked page
- **Social Icon Click:** Open social media profile

### Accessibility Notes
- Use semantic HTML (<footer>, <nav>)
- Ensure links have descriptive text
- Ensure keyboard navigation
- Provide focus indicators
- Ensure social icons have aria-labels

### Responsive Behavior
- **Desktop:** 5 columns
- **Tablet:** 3 columns
- **Mobile:** 1 column, stacked vertically

### Loading Behavior
- Footer loads immediately

### Empty States
- None (always present)

### SEO Considerations
- Use semantic HTML (<footer>, <nav>)
- Include descriptive link text
- Ensure all important pages are linked
- Schema markup for Organization
- NAP consistency

---

# Page Specifications

## 2. About Page

### Visual Hierarchy
1. Hero Section (brand introduction)
2. Company Overview (information)
3. Company History Timeline (story)
4. Mission & Vision (purpose)
5. Values (principles)
6. Leadership Team (people)
7. Company Milestones (achievements)
8. Certifications (credentials)
9. Contact CTA (conversion)
10. Footer (navigation)

### Exact Layout

#### Hero Section
- **Container:** Full width
- **Height:** 60vh minimum
- **Background:** Authentic company image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **Animation:** Fade in (500ms, ease-out)

#### Company Overview
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, images right)
- **Gap:** 60px
- **Text Column:** Section Title (32px), Description (16px), Key Facts (list format)
- **Image Column:** Company Photo (600×400px), Additional Image (300×200px)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Company History Timeline
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Layout:** Vertical timeline (desktop), stacked (mobile)
- **Timeline Line:** Vertical line, 2px width, Manufacturing Orange
- **Timeline Item:** Year (32px bold), Title (18px semi-bold), Description (14px regular), Image (optional, 400×300px)
- **Animation:** Staggered reveal (400ms per item, ease-out)

#### Mission & Vision
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Layout:** 2-column (Mission left, Vision right)
- **Gap:** 60px
- **Column:** Icon (64px), Title (24px bold), Description (16px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Values
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Value Card:** Icon (48px), Title (18px bold), Description (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Leadership Team
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Team Card:** Photo (200×200px, circle), Name (18px bold), Title (16px semi-bold), Bio (14px regular), Contact Link (14px, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Company Milestones
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Milestone Card:** Icon (48px), Title (18px bold), Metric (32px bold, Manufacturing Orange), Year (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Certifications
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Certification Badge:** Badge (80px), Name (16px semi-bold), License Number (14px monospace), Validity Date (13px regular), Verification Link (13px, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Company Overview:** 2-column (text left, images right)
- **Values:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Leadership Team:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Milestones:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Certifications:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Timeline:** 1000px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 3. Products Page

### Visual Hierarchy
1. Hero Section (product introduction)
2. Product Categories (discovery)
3. Featured Products (showcase)
4. Filter Bar (refinement)
5. All Products Grid (catalog)
6. Pagination (navigation)
7. Contact CTA (conversion)
8. Footer (navigation)

### Exact Layout

#### Hero Section
- **Container:** Full width
- **Height:** 50vh minimum
- **Background:** Product collage image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Product Categories
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Category Card:** Image (300×200px), Category Name (18px bold), Product Count (14px regular), Link (14px, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Featured Products
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Product Card:** Image (800×1000px), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), CTA (full width button)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Filter Bar
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Horizontal filters, results count right-aligned
- **Filters:** Category Filter, Fabric Filter, Price Filter, Sort By
- **Filter Style:** Select dropdown, 16px padding, 4px border radius
- **Results Count:** 14px, regular, Industrial Grey
- **Animation:** None

#### All Products Grid
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Product Card:** Image (800×1000px), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), CTA (full width button)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Pagination
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Centered
- **Pagination Buttons:** Previous, Page Numbers (1, 2, 3, 4), Next
- **Button Style:** 40px × 40px, 4px border radius, Deep Navy Blue border, Manufacturing Orange text for active
- **Animation:** None

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Product Categories:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Featured Products:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **All Products Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 4. Product Category Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Category Hero (category introduction)
3. Category Description (information)
4. Filter Bar (refinement)
5. Products Grid (catalog)
6. Pagination (navigation)
7. Related Categories (discovery)
8. Contact CTA (conversion)
9. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Products > [Category Name]
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Category Hero
- **Container:** Full width
- **Height:** 40vh minimum
- **Background:** Category-specific image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Category Description
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, images right)
- **Gap:** 60px
- **Text Column:** Section Title (32px), Description (16px), Key Information (list format)
- **Image Column:** Category Image (600×400px), Additional Image (300×200px)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Filter Bar
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Horizontal filters, results count right-aligned
- **Filters:** Fabric Filter, Price Filter, MOQ Filter, Sort By
- **Filter Style:** Select dropdown, 16px padding, 4px border radius
- **Results Count:** 14px, regular, Industrial Grey
- **Animation:** None

#### Products Grid
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Product Card:** Image (800×1000px), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), CTA (full width button)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Pagination
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Centered
- **Pagination Buttons:** Previous, Page Numbers (1, 2, 3, 4), Next
- **Button Style:** 40px × 40px, 4px border radius, Deep Navy Blue border, Manufacturing Orange text for active
- **Animation:** None

#### Related Categories
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Category Card:** Image (300×200px), Category Name (18px bold), Product Count (14px regular), Link (14px, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Category Description:** 2-column (text left, images right)
- **Products Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Related Categories:** 3-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 5. Product Detail Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Product Gallery (visual)
3. Product Information (details)
4. Technical Specifications (data)
5. Custom Options (customization)
6. Production Timeline (timeline)
7. Sample Request (conversion)
8. Related Products (discovery)
9. Contact CTA (conversion)
10. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Products > [Category] > [Product]
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Product Gallery
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (main image left, thumbnails right)
- **Gap:** 24px
- **Main Image:** 800×1000px, 4:5 aspect ratio, 8px border radius
- **Thumbnail Gallery:** 6 thumbnails, 100×125px each, 4px border radius, 8px gap
- **Active Thumbnail:** 2px border, Manufacturing Orange
- **Animation:** Thumbnail click updates main image (200ms, ease-out)

#### Product Information
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (gallery left, info right)
- **Gap:** 60px
- **Info Column:** Product Title (32px bold), SKU (14px monospace), Description (16px), Key Features (list), Pricing & MOQ (table), CTAs
- **CTAs:** Stacked, 16px spacing
- **Animation:** Fade in (500ms, ease-out)

#### Technical Specifications
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 4-column grid (Fabric Composition, GSM, Thread Count, Shrinkage, Color Fastness, Tolerance, Available Sizes, Available Colors)
- **Gap:** 24px
- **Spec Item:** Label (14px semi-bold), Value (14px regular)
- **Color Swatches:** 32px × 32px, 4px border radius, 8px gap
- **Animation:** Staggered reveal (400ms, ease-out)

#### Custom Options
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 3-column (Custom Labeling, Custom Packaging, Custom Sizing)
- **Gap:** 24px
- **Option Card:** Checkbox (24px), Title (18px bold), Description (14px regular)
- **CTA:** Centered below options
- **Animation:** Staggered reveal (400ms, ease-out)

#### Production Timeline
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Layout:** Horizontal process (desktop), vertical (mobile)
- **Process Steps:** Sample (5-7 days) → Approval (2-3 days) → Production (2-3 weeks) → QC (2-3 days) → Shipping (5-7 days)
- **Total Lead Time:** 3-4 weeks (32px bold, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Sample Request
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 800px
- **Layout:** Centered
- **Section Title:** 32px, bold, Deep Navy Blue
- **Description:** 16px, regular, Industrial Grey
- **Sample Cost:** ₹150 + shipping (18px bold, Manufacturing Orange)
- **Sample Credit:** "Sample cost credited against first bulk order" (14px regular)
- **CTA:** Centered
- **Animation:** Fade in (500ms, ease-out)

#### Related Products
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Product Card:** Image (800×1000px), Product Title (16px bold), Technical Specs (14px monospace), Price/MOQ (14px bold, Manufacturing Orange), CTA (full width button)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Product Gallery:** 2-column (main image left, thumbnails right)
- **Product Information:** 2-column (gallery left, info right)
- **Technical Specifications:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Custom Options:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Related Products:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Gallery & Info:** 1200px max
- **Technical Specs:** 1200px max
- **Custom Options:** 1200px max
- **Timeline:** 800px max
- **Sample Request:** 800px max
- **Related Products:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 6. Manufacturing Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Hero Section (introduction)
3. Manufacturing Process (workflow)
4. Equipment Showcase (equipment)
5. Capacity Information (capacity)
6. Quality Integration (quality)
7. Contact CTA (conversion)
8. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Manufacturing
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Hero Section
- **Container:** Full width
- **Height:** 50vh minimum
- **Background:** Factory production image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Manufacturing Process
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal process (desktop), vertical (mobile)
- **Grid:** 6 steps (desktop), 3 per row (tablet), stacked (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Process Step:** Step Number (32px bold, Manufacturing Orange), Icon (48px), Title (18px semi-bold), Description (14px regular), Arrow/Connector (24px, #E2E8F0)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Equipment Showcase
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Equipment Card:** Image (400×300px), Name (16px bold), Model (14px monospace), Quantity (14px regular), Specs (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Capacity Information
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, visual right)
- **Gap:** 60px
- **Text Column:** Section Title (32px), Description (16px), Capacity Metrics (list), Lead Time Matrix (table)
- **Visual Column:** Capacity Chart (bar chart), Progress Bars
- **Animation:** Staggered reveal (400ms, ease-out)

#### Quality Integration
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **QC Checkpoint:** Icon (48px), Stage (18px semi-bold), Standard (14px regular), Tolerance (14px monospace)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Manufacturing Process:** 6-step horizontal (desktop), 3 per row (tablet), stacked (mobile)
- **Equipment Showcase:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Capacity Information:** 2-column (text left, visual right)
- **Quality Integration:** 3-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 7. Infrastructure Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Hero Section (introduction)
3. Facility Overview (information)
4. Equipment by Department (equipment)
5. Production Capacity (capacity)
6. Infrastructure Gallery (visual)
7. Contact CTA (conversion)
8. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Infrastructure
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Hero Section
- **Container:** Full width
- **Height:** 50vh minimum
- **Background:** Factory building image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Facility Overview
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, images right)
- **Gap:** 60px
- **Text Column:** Section Title (32px), Description (16px), Key Information (list)
- **Image Column:** Facility Photo (600×400px), Additional Image (300×200px)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Equipment by Department
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** Organized by department (Cutting, Sewing, Finishing, QC)
- **Department Section:** Department Title (24px bold), Equipment Grid
- **Equipment Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Equipment Card:** Image (300×200px), Name (16px bold), Model (14px monospace), Quantity (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Production Capacity
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (text left, visual right)
- **Gap:** 60px
- **Text Column:** Section Title (32px), Capacity Metrics (list), Capacity by Product Type (list), Lead Time Matrix (table)
- **Visual Column:** Capacity Chart (bar chart), Progress Bars
- **Animation:** Staggered reveal (400ms, ease-out)

#### Infrastructure Gallery
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 16px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Gallery Images:** 16 images (600×600px each, square, 8px border radius)
- **CTA:** Centered below gallery
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Facility Overview:** 2-column (text left, images right)
- **Equipment by Department:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Production Capacity:** 2-column (text left, visual right)
- **Infrastructure Gallery:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 8. Quality Assurance Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Hero Section (introduction)
3. Quality Standards (standards)
4. Quality Process (process)
5. Quality Equipment (equipment)
6. Certifications (credentials)
7. Quality Metrics (metrics)
8. Contact CTA (conversion)
9. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Quality Assurance
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Hero Section
- **Container:** Full width
- **Height:** 50vh minimum
- **Background:** Quality control image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 80px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Quality Standards
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Standard Card:** Icon (48px), Title (18px bold), Value (16px semi-bold), Description (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Quality Process
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 6-step horizontal process (desktop), 3 per row (tablet), stacked (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Process Step:** Step Number (32px bold, Manufacturing Orange), Icon (48px), Stage (18px semi-bold), Standard (14px regular), Tolerance (14px monospace)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Quality Equipment
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Equipment Card:** Image (400×300px), Name (16px bold), Purpose (14px regular), Specs (14px monospace)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Certifications
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Certification Badge:** Badge (80px), Name (16px semi-bold), License Number (14px monospace), Validity Date (13px regular), Verification Link (13px, Manufacturing Orange)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Quality Metrics
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **Metric Card:** Icon (48px), Title (18px bold), Value (32px bold, Manufacturing Orange), Target (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Quality Standards:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Quality Process:** 6-step horizontal (desktop), 3 per row (tablet), stacked (mobile)
- **Quality Equipment:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Certifications:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Quality Metrics:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Section Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 9. Gallery Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Hero Section (introduction)
3. Gallery Filters (refinement)
4. Gallery Grid (images)
5. Load More (pagination)
6. Contact CTA (conversion)
7. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Gallery
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Hero Section
- **Container:** Full width
- **Height:** 40vh minimum
- **Background:** Factory collage image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Gallery Filters
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Horizontal filters, results count right-aligned
- **Filters:** Category Filter, Department Filter, Year Filter, Sort By
- **Filter Style:** Select dropdown, 16px padding, 4px border radius
- **Results Count:** 14px, regular, Industrial Grey
- **Animation:** None

#### Gallery Grid
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 16px
- **Gallery Images:** 24 images (600×600px each, square, 8px border radius)
- **Caption:** 14px, regular, Industrial Grey, 8px margin top
- **Animation:** Staggered reveal (400ms, ease-out)

#### Load More
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 24px
- **Max Width:** 1200px
- **Layout:** Centered
- **Button Style:** Secondary button
- **Animation:** None

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Gallery Grid:** 4-column (desktop), 2-column (tablet), 1-column (mobile)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Gallery Content:** 1200px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

## 10. Contact Page

### Visual Hierarchy
1. Breadcrumb (navigation)
2. Hero Section (introduction)
3. Contact Information (information)
4. Contact Form (conversion)
5. Google Maps (location)
6. FAQ (information)
7. Contact CTA (conversion)
8. Footer (navigation)

### Exact Layout

#### Breadcrumb
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 16px 24px
- **Max Width:** 1200px
- **Layout:** Horizontal
- **Breadcrumb Items:** Home > Contact
- **Separator:** > (Manufacturing Orange)
- **Link Style:** 14px, regular, Deep Navy Blue
- **Current Page:** 14px, bold, Deep Navy Blue
- **Animation:** None

#### Hero Section
- **Container:** Full width
- **Height:** 40vh minimum
- **Background:** Contact-related image (1920×1080px)
- **Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.3), rgba(26,54,93,0.7))
- **Padding:** 64px 24px
- **Max Width:** 1000px
- **Text Alignment:** Center
- **Headline:** 40px, bold, white
- **Subheadline:** 18px, regular, white
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

#### Contact Information
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Grid:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Gap:** 24px
- **Contact Info Card:** Icon (48px), Title (18px bold), Value (16px regular), Description (14px regular)
- **Animation:** Staggered reveal (400ms, ease-out)

#### Contact Form
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Max Width:** 1200px
- **Layout:** 2-column (form left, contact info right)
- **Gap:** 60px
- **Form Column:** Section Title (32px), Description (16px), Form Fields (Name, Email, Phone, Company, Inquiry Type, Message), CTA
- **Contact Info Column:** Phone, WhatsApp, Email with icons
- **Animation:** Staggered reveal (400ms, ease-out)

#### Google Maps
- **Container:** Full width
- **Background:** Light Grey (#F7FAFC)
- **Height:** 400px (desktop), 300px (tablet), 250px (mobile)
- **Map:** Full width, embedded
- **Address Info:** Overlay on map or below map
- **CTA:** "Get Directions" button
- **Animation:** Map load fade in (400ms, ease-out)

#### FAQ
- **Container:** Full width
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 800px
- **Layout:** Single column
- **Section Title:** 32px, bold, Deep Navy Blue, centered
- **FAQ Item:** Question (16px bold), Icon (24px), Answer (14px regular, expandable)
- **FAQ Border:** 1px solid #E2E8F0
- **FAQ Border Radius:** 4px
- **FAQ Padding:** 16px vertical, 24px horizontal
- **FAQ Margin Bottom:** 16px
- **Animation:** Expand/collapse (300ms, ease-out)

#### Contact CTA
- **Container:** Full width
- **Background:** Deep Navy Blue (#1A365D)
- **Padding:** 80px 24px
- **Max Width:** 800px
- **Text Alignment:** Center
- **Headline:** 32px, bold, white
- **Description:** 16px, regular, #A0AEC0
- **CTAs:** Stacked, centered
- **Animation:** Fade in (500ms, ease-out)

### Grid Usage
- **Contact Information:** 3-column (desktop), 2-column (tablet), 1-column (mobile)
- **Contact Form:** 2-column (form left, contact info right)

### Container Widths
- **Breadcrumb:** 1200px max
- **Hero Content:** 1000px max
- **Contact Information:** 1200px max
- **Contact Form:** 1200px max
- **FAQ:** 800px max
- **Contact CTA:** 800px max

### Section Spacing
- **Desktop:** 64px between sections
- **Tablet:** 48px between sections
- **Mobile:** 40px between sections

---

# Component Specifications

## Primary Button

### Desktop Appearance
- **Background:** Manufacturing Orange (#ED8936)
- **Text:** White (#FFFFFF)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px
- **Shadow:** None
- **Cursor:** Pointer

### Tablet Appearance
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 15px
- **Same as desktop otherwise**

### Mobile Appearance
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full Width:** On mobile for primary CTAs
- **Minimum Height:** 44px

### Hover State
- **Background:** #DD6B20 (Darker Orange)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 200ms, ease-out

### Focus State
- **Border:** 2px solid #DD6B20
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms, ease-out

### Active State
- **Background:** #C05621 (Darkest Orange)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms, ease-out

### Disabled State
- **Background:** #CBD5E0 (Light Grey)
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Animation
- **Hover:** 200ms, ease-out
- **Active:** 150ms, ease-out
- **Loading:** Continuous spinner, 1s rotation

---

## Secondary Button

### Desktop Appearance
- **Background:** Transparent
- **Text:** Deep Navy Blue (#1A365D)
- **Border:** 2px solid Deep Navy Blue (#1A365D)
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px
- **Shadow:** None
- **Cursor:** Pointer

### Tablet Appearance
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 15px
- **Same as desktop otherwise**

### Mobile Appearance
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full Width:** On mobile when stacked
- **Minimum Height:** 44px

### Hover State
- **Background:** #2C5282 (Light Navy)
- **Text:** White (#FFFFFF)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 200ms, ease-out

### Focus State
- **Border:** 2px solid #2C5282
- **Box Shadow:** 0 0 0 3px rgba(44, 82, 130, 0.1)
- **Outline:** None
- **Transition:** 200ms, ease-out

### Active State
- **Background:** #1A365D (Deep Navy)
- **Text:** White (#FFFFFF)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms, ease-out

### Disabled State
- **Background:** Transparent
- **Text:** #A0AEC0 (Muted Grey)
- **Border Color:** #CBD5E0 (Light Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Animation
- **Hover:** 200ms, ease-out
- **Active:** 150ms, ease-out

---

## Tertiary Button

### Desktop Appearance
- **Background:** Transparent
- **Text:** Industrial Grey (#4A5568)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Text Transform:** None
- **Shadow:** None
- **Cursor:** Pointer

### Tablet Appearance
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 15px
- **Same as desktop otherwise**

### Mobile Appearance
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full Width:** On mobile when stacked
- **Minimum Height:** 44px

### Hover State
- **Text:** #2D3748 (Darker Grey)
- **Text Decoration:** Underline
- **Transition:** 200ms, ease-out

### Focus State
- **Text Decoration:** Underline
- **Transition:** 200ms, ease-out

### Active State
- **Text:** #1A365D (Deep Navy)
- **Text Decoration:** Underline
- **Transition:** 150ms, ease-out

### Disabled State
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Animation
- **Hover:** 200ms, ease-out
- **Active:** 150ms, ease-out

---

## Product Card

### Desktop Appearance
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px
- **Padding:** 24px
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Aspect Ratio:** 4:5

### Tablet Appearance
- **Padding:** 20px
- **Same as desktop otherwise**

### Mobile Appearance
- **Padding:** 20px
- **Full Width:** On mobile
- **Same as desktop otherwise**

### Hover State
- **Transform:** Lift 4px (translateY(-4px))
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 300ms, ease-out

### Focus State
- **Border:** 2px solid #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Transition:** 200ms, ease-out

### Active State
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms, ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Animation
- **Hover:** 300ms, ease-out
- **Image Zoom:** 300ms, ease-out

---

## Form Input

### Desktop Appearance
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px
- **Padding:** 12px vertical, 16px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Placeholder:** Industrial Grey (#4A5568)
- **Height:** 44px minimum

### Tablet Appearance
- **Padding:** 12px vertical, 16px horizontal
- **Font Size:** 15px
- **Same as desktop otherwise**

### Mobile Appearance
- **Padding:** 14px vertical, 16px horizontal
- **Font Size:** 16px (prevents zoom on iOS)
- **Height:** 48px minimum
- **Full Width:** On mobile

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms, ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms, ease-out

### Active State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Transition:** 150ms, ease-out

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Color:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed

### Animation
- **Focus:** 200ms, ease-out
- **Error Shake:** 400ms, ease-out-back
- **Success Checkmark:** 500ms, ease-out

---

# Motion Design Specifications

## Navbar Sticky Transition

### Animation
- Background color change
- Shadow appearance
- Height compression
- Logo scale

### Duration
- 300ms

### Delay
- 0ms (immediate on scroll > 100px)

### Trigger
- Scroll position > 100px

### Easing
- ease-in-out

### Purpose
- Maintain navigation accessibility while scrolling
- Provide visual feedback of scroll position

---

## Hero Content Fade In

### Animation
- Opacity: 0 → 1
- Transform: translateY(30px) → translateY(0)

### Duration
- 500ms

### Delay
- Staggered: 0ms (headline), 100ms (subheadline), 200ms (CTAs), 300ms (trust signals)

### Trigger
- Page load

### Easing
- ease-out

### Purpose
- Reveal hero content smoothly
- Guide user attention to primary message

---

## Counter Animation

### Animation
- Number: Count from 0 to final value

### Duration
- 2000ms

### Delay
- Staggered: 0ms (stat 1), 100ms (stat 2), 200ms (stat 3), 300ms (stat 4)

### Trigger
- Scroll into view (Intersection Observer)

### Easing
- ease-out

### Purpose
- Draw attention to key metrics
- Make data engaging

---

## Card Hover Lift

### Animation
- Transform: translateY(0) → translateY(-4px)
- Shadow: 0 2px 4px → 0 4px 8px rgba(0, 0, 0, 0.15)

### Duration
- 300ms

### Delay
- 0ms (immediate on hover)

### Trigger
- Mouse enter

### Easing
- ease-out

### Purpose
- Indicate interactivity
- Provide depth

---

## Image Zoom

### Animation
- Transform: scale(1.0) → scale(1.05)

### Duration
- 300ms

### Delay
- 0ms (immediate on hover)

### Trigger
- Card hover

### Easing
- ease-out

### Purpose
- Add visual interest
- Provide product detail preview

---

## Accordion Expand

### Animation
- Height: 0 → auto
- Opacity: 0 → 1
- Icon: Rotate 0deg → 180deg

### Duration
- 300ms

### Delay
- 0ms (immediate on click)

### Trigger
- Click on accordion header

### Easing
- ease-out

### Purpose
- Reveal content smoothly
- Maintain user context

---

# Visual Style

## Photography Style

### Factory Photography Direction
- **Authentic:** Real factory photos, not stock images
- **Lighting:** Natural lighting, bright and clear
- **Composition:** Wide shots showing production floor, equipment, workers
- **Color Temperature:** Neutral to warm (5000-5500K)
- **Focus:** Sharp focus on equipment and workers
- **Perspective:** Eye-level, documentary style
- **Editing:** Minimal color correction, no heavy filters
- **Format:** 1920×1080px for backgrounds, 800×1000px for products
- **File Type:** WebP with JPEG fallback

### Product Photography Direction
- **Clean Background:** White or light grey background
- **Lighting:** Soft, even lighting
- **Composition:** Front view, 4:5 aspect ratio
- **Focus:** Sharp focus on product details
- **Styling:** Professional presentation, no props
- **Editing:** Color correction, background removal
- **Format:** 800×1000px
- **File Type:** WebP with JPEG fallback

## Illustration Style
- **None:** No illustrations used, prefer authentic photography

## Icon Style
- **Style:** Line icons, 2px stroke
- **Weight:** Medium
- **Corner Radius:** 4px
- **Color:** Manufacturing Orange (#ED8936) or Quality Green (#48BB78)
- **Size:** 24px (small), 32px (medium), 48px (large), 64px (extra large)
- **Source:** Custom SVG icons or Lucide icon library

## Glass Effects
- **None:** No glass effects used

## Gradients
- **Hero Overlay:** Linear gradient (to bottom, rgba(26,54,93,0.4), rgba(26,54,93,0.8))
- **CTA Section Background:** Solid colors, no gradients

## Shadows
- **Small:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Medium:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Large:** 0 8px 16px rgba(0, 0, 0, 0.1)
- **Subtle:** No harsh shadows, professional appearance

## Depth
- **Subtle:** Cards have slight lift on hover
- **Professional:** No excessive depth or 3D effects
- **Flat Design:** Modern, clean aesthetic

## Cards
- **Background:** White (#FFFFFF) or Light Grey (#F7FAFC)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px
- **Padding:** 24px
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)

## Section Backgrounds
- **White:** White (#FFFFFF) - Most sections
- **Light Grey:** Light Grey (#F7FAFC) - Alternate sections
- **Deep Navy Blue:** Deep Navy Blue (#1A365D) - CTA sections, Footer

---

# Premium Feel

## Trust

### How Visual Decisions Contribute
- **Authentic Photography:** Real factory images build credibility
- **Specific Data:** Quantifiable metrics (50,000 units, 98% on-time) demonstrate transparency
- **Verifiable Certifications:** License numbers and verification links enable verification
- **Technical Authority:** Detailed specifications (AQL 2.5, tolerance ±2mm) show expertise
- **Professional Typography:** Inter and Open Sans convey professionalism
- **Consistent Spacing:** 8px grid system creates organized, trustworthy appearance

## Luxury

### How Visual Decisions Contribute
- **Premium Colors:** Deep Navy Blue and Manufacturing Orange create premium palette
- **Subtle Animations:** 300ms animations with ease-out create smooth, premium feel
- **High-Quality Imagery:** Professional photography conveys quality
- **Generous Spacing:** 64px section padding creates spacious, premium feel
- **Refined Typography:** Inter font with careful letter spacing creates premium typography
- **Subtle Shadows:** Soft shadows create depth without harshness

## Professionalism

### How Visual Decisions Contribute
- **Clean Layout:** Organized grid system creates professional appearance
- **Consistent Components:** Reusable components ensure consistency
- **Clear Hierarchy:** Typography scale creates clear information hierarchy
- **Business-Focused Colors:** Navy blue and orange convey business professionalism
- **Technical Data Display:** Monospace font for specifications shows attention to detail
- **Responsive Design:** Professional appearance across all devices

## Manufacturing Expertise

### How Visual Decisions Contribute
- **Equipment Photography:** Authentic equipment images demonstrate manufacturing capability
- **Technical Specifications:** Detailed specs (GSM, thread count, tolerance) show technical knowledge
- **Process Documentation:** Step-by-step process shows manufacturing workflow
- **Quality Standards:** AQL and certification badges show quality commitment
- **Capacity Data:** Specific capacity metrics demonstrate scale
- **Factory Images:** Production floor photos show operational transparency

## Lead Generation

### How Visual Decisions Contribute
- **Strategic CTA Placement:** CTAs distributed throughout page for multiple conversion points
- **High-Contrast CTAs:** Manufacturing Orange buttons stand out against white backgrounds
- **Clear Value Proposition:** Hero headline clearly communicates value
- **Trust Signals:** Early trust building reduces conversion friction
- **Progressive Disclosure:** Information revealed progressively to guide to conversion
- **Mobile-Optimized Forms:** Full-width forms on mobile for easy conversion

---

This High-Fidelity UI Specification provides complete visual implementation guidance for frontend engineers to build the exact UI without opening Figma. All specifications are based on the single source of truth documents and are designed to support the brand's core principles of operational transparency, verifiability, and technical authority.
