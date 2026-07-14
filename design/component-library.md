# Component Library
## Goyal Trading Company - Detailed Component Specifications

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Component Library for Implementation

---

# Announcement Bar

## Purpose
Display important announcements, promotions, or time-sensitive information at the top of the page.

## Visual Specifications

### Default State
- **Background:** Manufacturing Orange (#ED8936)
- **Text Color:** White (#FFFFFF)
- **Height:** 40px
- **Padding:** 0 24px
- **Font Size:** 14px
- **Font Weight:** 500 (Medium)
- **Text Alignment:** Center

### Content Structure
- **Announcement Text:** Center-aligned, maximum 120 characters
- **Close Button:** Right-aligned, 24px × 24px, white X icon
- **Link:** Optional, white with underline

### States

#### Hover State
- **Link:** Underline animation (200ms, ease-out)

#### Close State
- **Animation:** Fade out and collapse height (300ms, ease-out)
- **Height:** 40px → 0px

### Responsive Behavior
- **Desktop:** Full width, centered text
- **Tablet:** Full width, centered text
- **Mobile:** Full width, centered text, font size 12px

### Animation Specifications
- **Close Animation:** 300ms, ease-out, height and opacity
- **Fade In:** 200ms, ease-out, opacity only

### Implementation Notes
- Use localStorage to remember closed state
- Show on first visit, hide after close
- Optional: Show again after 7 days
- Ensure close button is accessible (44px touch target on mobile)

---

# Navbar

## Purpose
Primary site navigation, providing access to all main pages and sections.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Border Bottom:** 1px solid #E2E8F0 (Medium Grey)
- **Height:** 80px
- **Padding:** 0 24px
- **Max Width:** 1200px
- **Logo:** Left-aligned, 40px height
- **Navigation Links:** Right-aligned, uppercase, 14px
- **CTA Button:** "Request a Quote", Manufacturing Orange

### Content Structure
```
[Logo] [Navigation Links] [CTA Button] [Hamburger (mobile)]
```

### Navigation Links
- **Products** (with mega-menu)
- **Capabilities** (with mega-menu)
- **Quality Process**
- **Our Factory**
- **Clients**
- **About Us**
- **Contact**

### States

#### Sticky State (Scroll > 100px)
- **Background:** White (#FFFFFF) with 0.95 opacity
- **Shadow:** 0 2px 8px rgba(0, 0, 0, 0.1)
- **Height:** 72px (subtle compression)
- **Logo:** Scale 0.95
- **Animation:** 300ms, ease-in-out

#### Link Hover State
- **Color:** Manufacturing Orange (#ED8936)
- **Text Decoration:** Underline
- **Animation:** 200ms, ease-out

#### Link Active State
- **Color:** Manufacturing Orange (#ED8936)
- **Text Decoration:** Underline
- **Border Bottom:** 2px solid Manufacturing Orange

### Mega Menu
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Padding:** 32px
- **Grid:** 4 columns
- **Animation:** 200ms, ease-out, fade and slide down

### Responsive Behavior
- **Desktop:** Full navigation with mega-menus
- **Tablet:** Simplified navigation, mega-menus disabled
- **Mobile:** Hamburger menu, full-screen overlay

### Mobile Menu
- **Background:** Deep Navy Blue (#1A365D)
- **Text:** White (#FFFFFF)
- **Height:** 100vh
- **Animation:** 300ms, ease-in-out, slide from right
- **Accordion-style:** Collapsible sections

### Animation Specifications
- **Sticky Transition:** 300ms, ease-in-out
- **Mega Menu:** 200ms, ease-out
- **Mobile Menu:** 300ms, ease-in-out
- **Link Hover:** 200ms, ease-out

### Implementation Notes
- Use sticky positioning for navbar
- Implement mega-menu with hover intent (100ms delay)
- Mobile menu uses accordion pattern
- Ensure keyboard navigation (Tab, Enter, Escape)
- Skip to content link for accessibility

---

# Hero

## Purpose
Primary section to communicate value proposition, guide user attention, and drive conversions.

## Visual Specifications

### Default State
- **Background:** Authentic factory image (1920×1080px)
- **Overlay:** Dark gradient (linear-gradient(to bottom, rgba(26,54,93,0.4), rgba(26,54,93,0.8)))
- **Height:** 80vh minimum, 100vh preferred
- **Padding:** 80px 24px
- **Text Alignment:** Center
- **Max Width:** 1000px

### Content Structure
```
H1: Premium Wholesale Textile Manufacturing for Global Retailers
P: Custom manufacturing with transparent pricing, verified quality, and direct factory access
Primary CTA: Request a Quote
Secondary CTA: View Capabilities
Secondary CTA: Schedule Factory Tour
Trust Signals: Certification badges, capacity metrics
```

### Typography
- **H1:** 40px (desktop), 32px (tablet), 28px (mobile), bold, white
- **P:** 18px (desktop), 16px (tablet), 14px (mobile), regular, white
- **CTAs:** 16px (desktop), 15px (tablet), 14px (mobile), semi-bold, uppercase

### Trust Signals
- **Certification Badges:** BSCI, WRAP, GOTS with verification links
- **Capacity Metrics:** "50,000 units/month capacity"
- **Years Badge:** "Established [Year]"

### States

#### Parallax State
- **Background:** translateY based on scroll (0.5x speed)
- **Continuous:** Scroll-based animation

### Responsive Behavior
- **Desktop:** Full-width background, centered content
- **Tablet:** Full-width background, centered content
- **Mobile:** Full-width background, stacked content, smaller text

### Animation Specifications
- **Content Fade In:** 500ms, ease-out, staggered (100ms delay)
- **Parallax:** Continuous, scroll-based, 0.5x speed
- **CTA Hover:** 200ms, ease-out

### Implementation Notes
- Use WebP format for background image with JPEG fallback
- Implement lazy loading for background
- Ensure text contrast meets WCAG AA (4.5:1)
- Skip parallax on mobile for performance
- Use prefers-reduced-motion to disable animations

---

# Buttons

## Purpose
Interactive elements to trigger actions, navigate pages, and drive conversions.

## Visual Specifications

### Primary Button
- **Background:** Manufacturing Orange (#ED8936)
- **Text:** White (#FFFFFF)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px

### Secondary Button
- **Background:** Transparent
- **Text:** Deep Navy Blue (#1A365D)
- **Border:** 2px solid Deep Navy Blue
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px

### Tertiary Button
- **Background:** Transparent
- **Text:** Industrial Grey (#4A5568)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)

### States

#### Primary Button Hover
- **Background:** #DD6B20 (Darker Orange)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Animation:** 200ms, ease-out

#### Primary Button Active
- **Background:** #C05621 (Darkest Orange)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Animation:** 150ms, ease-out

#### Primary Button Disabled
- **Background:** #CBD5E0 (Light Grey)
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6

#### Secondary Button Hover
- **Background:** #2C5282 (Light Navy)
- **Text:** White (#FFFFFF)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Animation:** 200ms, ease-out

#### Tertiary Button Hover
- **Text:** #2D3748 (Darker Grey)
- **Text Decoration:** Underline
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** Standard sizing
- **Tablet:** Standard sizing
- **Mobile:** Full width for primary CTAs, 44px minimum height

### Animation Specifications
- **Hover:** 200ms, ease-out
- **Active:** 150ms, ease-out
- **Loading:** Continuous spinner, 1s rotation

### Implementation Notes
- Use button element for actions, link for navigation
- Ensure 44px minimum touch target on mobile
- Provide focus indicator for keyboard navigation
- Use aria-disabled for disabled state
- Include loading state for async actions

---

# Stats

## Purpose
Display key metrics and data points to build credibility and communicate capacity.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Text Alignment:** Center

### Content Structure
```
[Icon] [Number] [Label] [Description (optional)]
```

### Stat Item
- **Icon:** 48px, Manufacturing Orange or Quality Green
- **Number:** 48px (desktop), 40px (tablet), 32px (mobile), bold, Deep Navy Blue
- **Label:** 16px (desktop), 14px (tablet), 14px (mobile), semi-bold, Industrial Grey
- **Description:** 14px (desktop), 13px (tablet), 12px (mobile), regular, Industrial Grey

### Example Stats
- "50,000" - "Units/Month" - "Production Capacity"
- "15+" - "Years" - "Industry Experience"
- "100+" - "Clients" - "Global Reach"
- "98%" - "On-Time" - "Delivery Rate"

### States

#### Counter Animation
- **Number:** Count from 0 to final value
- **Duration:** 2000ms
- **Easing:** ease-out
- **Trigger:** Scroll into view

#### Hover State
- **Icon:** Scale 1.1
- **Number:** Scale 1.05
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Counter:** 2000ms, ease-out, scroll-triggered
- **Hover:** 200ms, ease-out
- **Staggered Reveal:** 100ms delay between items

### Implementation Notes
- Use requestAnimationFrame for smooth counting
- Format numbers with commas (e.g., 50,000)
- Trigger animation once per viewport entry
- Use Intersection Observer for scroll trigger
- Skip animation on prefers-reduced-motion

---

# Product Categories

## Purpose
Organize products by type, fabric, application, and capacity for easy discovery.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px

### Content Structure
```
[Category Image] [Category Name] [Product Count] [View All Link]
```

### Category Card
- **Image:** 300×200px, 4:3 aspect ratio, rounded corners 8px
- **Category Name:** 18px (desktop), 16px (tablet), 16px (mobile), bold, Deep Navy Blue
- **Product Count:** 14px (desktop), 13px (tablet), 12px (mobile), regular, Industrial Grey
- **View All Link:** 14px (desktop), 13px (tablet), 12px (mobile), Manufacturing Orange

### Categories
- Shirting
- Suiting
- Bottoms
- Ethnic Wear
- Uniforms
- Technical Fabrics

### States

#### Hover State
- **Image:** Scale 1.05
- **Card:** Lift 4px
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Animation:** 300ms, ease-out

#### Active State
- **Border:** 2px solid Manufacturing Orange
- **Animation:** 150ms, ease-out

### Responsive Behavior
- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Hover:** 300ms, ease-out
- **Staggered Reveal:** 100ms delay between cards

### Implementation Notes
- Use WebP format for images with JPEG fallback
- Implement lazy loading for images
- Include product count for transparency
- Use consistent image aspect ratio
- Ensure keyboard navigation for category cards

---

# Product Cards

## Purpose
Display product information with technical specifications for B2B buyers.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px
- **Padding:** 24px
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Aspect Ratio:** 4:5

### Content Structure
```
[Product Image (60%)]
[Product Title (15%)]
[Technical Specs (10%)]
[Price/MOQ (10%)]
[CTA Button (5%)]
```

### Product Image
- **Size:** 800×1000px minimum
- **Aspect Ratio:** 4:5
- **Border Radius:** 8px top
- **Hover:** Zoom 5%

### Product Title
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)
- **Lines:** 2 maximum, ellipsis for overflow

### Technical Specs
- **Font Size:** 14px
- **Font Family:** JetBrains Mono (monospace)
- **Color:** Industrial Grey (#4A5568)
- **Format:** "Fabric: Cotton, GSM: 120"

### Price/MOQ
- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Manufacturing Orange (#ED8936)
- **Format:** "₹150-250 | MOQ: 100"

### CTA Button
- **Text:** "Request Sample"
- **Style:** Primary button, full width

### States

#### Hover State
- **Transform:** Lift 4px (translateY(-4px))
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Image:** Scale 1.05
- **Animation:** 300ms, ease-out

#### Active State
- **Transform:** Lift 2px (translateY(-2px))
- **Animation:** 150ms, ease-out

### Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, full width

### Animation Specifications
- **Hover:** 300ms, ease-out
- **Staggered Reveal:** 100ms delay between cards

### Implementation Notes
- Use WebP format with JPEG fallback
- Implement lazy loading for images
- Include technical specs for B2B buyers
- Use monospace font for technical data
- Ensure keyboard navigation

---

# Feature Cards

## Purpose
Display value propositions, services, or capabilities with icons.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Border:** None
- **Border Radius:** 8px
- **Padding:** 32px
- **Shadow:** None
- **Text Alignment:** Center

### Content Structure
```
[Icon] [Title] [Description] [Link (optional)]
```

### Icon
- **Size:** 48px
- **Color:** Manufacturing Orange (#ED8936) or Quality Green (#48BB78)
- **Style:** Line icon, 2px stroke

### Title
- **Font Size:** 18px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)

### Description
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)
- **Color:** Industrial Grey (#4A5568)
- **Lines:** 3 maximum

### Link
- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Manufacturing Orange (#ED8936)

### States

#### Hover State
- **Transform:** Lift 2px (translateY(-2px))
- **Background:** #EDF2F7 (Medium Grey)
- **Icon:** Scale 1.1
- **Animation:** 300ms, ease-out

### Responsive Behavior
- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Hover:** 300ms, ease-out
- **Staggered Reveal:** 100ms delay between cards

### Implementation Notes
- Use SVG icons for scalability
- Ensure icons are accessible (aria-label)
- Keep descriptions concise
- Use consistent icon style
- Ensure keyboard navigation

---

# Timeline

## Purpose
Display company history, project milestones, or process steps chronologically.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Layout:** Vertical timeline (desktop/tablet), stacked (mobile)

### Content Structure
```
[Year/Date] [Title] [Description] [Image (optional)]
```

### Timeline Item
- **Date:** 24px (desktop), 20px (tablet), 18px (mobile), bold, Manufacturing Orange
- **Title:** 18px (desktop), 16px (tablet), 16px (mobile), semi-bold, Deep Navy Blue
- **Description:** 14px (desktop), 13px (tablet), 13px (mobile), regular, Industrial Grey
- **Image:** Optional, 400×300px, rounded corners 8px

### Timeline Line
- **Color:** #E2E8F0 (Medium Grey)
- **Width:** 2px
- **Position:** Left (desktop), center (tablet), hidden (mobile)

### Timeline Dot
- **Size:** 12px
- **Color:** Manufacturing Orange (#ED8936)
- **Border:** 3px solid white
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)

### States

#### Hover State
- **Dot:** Scale 1.2
- **Card:** Lift 2px
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** Vertical timeline, left-aligned
- **Tablet:** Vertical timeline, center-aligned
- **Mobile:** Stacked cards, no timeline line

### Animation Specifications
- **Scroll Reveal:** 400ms, ease-out, staggered
- **Hover:** 200ms, ease-out

### Implementation Notes
- Use alternating layout for desktop (left/right)
- Ensure dates are clearly visible
- Include images for visual interest
- Use Intersection Observer for scroll trigger
- Ensure keyboard navigation

---

# Manufacturing Process

## Purpose
Display manufacturing steps, quality checkpoints, or production workflow.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Layout:** Horizontal process (desktop), vertical (mobile)

### Content Structure
```
[Step Number] [Icon] [Title] [Description] [Arrow/Connector]
```

### Process Step
- **Step Number:** 32px (desktop), 28px (tablet), 24px (mobile), bold, Manufacturing Orange
- **Icon:** 48px, Manufacturing Orange
- **Title:** 18px (desktop), 16px (tablet), 16px (mobile), semi-bold, Deep Navy Blue
- **Description:** 14px (desktop), 13px (tablet), 13px (mobile), regular, Industrial Grey

### Connector
- **Style:** Arrow or line
- **Color:** #E2E8F0 (Medium Grey)
- **Size:** 24px (desktop), 20px (tablet), 16px (mobile)

### States

#### Hover State
- **Step:** Scale 1.05
- **Icon:** Scale 1.1
- **Animation:** 200ms, ease-out

#### Active State
- **Step:** Background Manufacturing Orange, text white
- **Animation:** 150ms, ease-out

### Responsive Behavior
- **Desktop:** 4-6 steps horizontal
- **Tablet:** 3-4 steps horizontal
- **Mobile:** Stacked vertical

### Animation Specifications
- **Scroll Reveal:** 400ms, ease-out, staggered
- **Hover:** 200ms, ease-out

### Implementation Notes
- Use numbered steps for clarity
- Include icons for visual interest
- Show quality checkpoints prominently
- Use consistent step numbering
- Ensure keyboard navigation

---

# Factory Gallery

## Purpose
Display factory photos, equipment images, and production floor visuals.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Grid:** Masonry or uniform grid
- **Gap:** 16px

### Content Structure
```
[Gallery Image] [Caption (on hover)]
```

### Gallery Image
- **Size:** Variable (masonry) or fixed (uniform)
- **Aspect Ratio:** 4:3 or 16:9
- **Border Radius:** 8px
- **Hover:** Zoom 5%, caption reveal

### Caption
- **Background:** Dark gradient (bottom to top)
- **Text:** White (#FFFFFF)
- **Font Size:** 14px
- **Padding:** 16px
- **Position:** Bottom, overlay
- **Opacity:** 0 (default), 1 (hover)

### States

#### Hover State
- **Image:** Scale 1.05
- **Caption:** Fade in, slide up
- **Animation:** 300ms, ease-out

#### Lightbox State
- **Full-screen overlay
- **Image:** Centered, max-width 90vw
- **Navigation:** Previous/Next buttons
- **Close:** X button, top right

### Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 3 columns
- **Mobile:** 2 columns

### Animation Specifications
- **Hover:** 300ms, ease-out
- **Lightbox Open:** 300ms, ease-out
- **Lightbox Close:** 300ms, ease-out
- **Staggered Reveal:** 50ms delay between images

### Implementation Notes
- Use WebP format with JPEG fallback
- Implement lazy loading for images
- Use lightbox for full-screen view
- Include descriptive captions
- Ensure keyboard navigation (arrows, Escape)

---

# Client Logos

## Purpose
Display client logos to build trust and show industry diversity.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 48px 24px
- **Grid:** 6 columns (desktop), 4 columns (tablet), 2 columns (mobile)
- **Gap:** 24px
- **Text Alignment:** Center

### Content Structure
```
[Client Logo]
```

### Client Logo
- **Size:** 120px width (desktop), 100px (tablet), 80px (mobile)
- **Style:** Grayscale
- **Opacity:** 0.6 (default)
- **Border Radius:** 4px

### States

#### Hover State
- **Color:** Color reveal
- **Opacity:** 1.0
- **Transform:** Scale 1.05
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** 6 columns
- **Tablet:** 4 columns
- **Mobile:** 2 columns

### Animation Specifications
- **Hover:** 200ms, ease-out
- **Infinite Scroll:** 30 seconds per cycle (optional)

### Implementation Notes
- Use SVG format for logos
- Maintain aspect ratio
- Show industry and geographic diversity
- Include client longevity indicators
- Ensure logos are accessible (alt text)

---

# Awards

## Purpose
Display industry awards, certifications, and recognition to build credibility.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 48px 24px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Text Alignment:** Center

### Content Structure
```
[Award Icon/Image] [Award Name] [Year] [Description (optional)]
```

### Award Item
- **Icon/Image:** 64px (desktop), 56px (tablet), 48px (mobile)
- **Award Name:** 16px (desktop), 14px (tablet), 14px (mobile), semi-bold, Deep Navy Blue
- **Year:** 14px (desktop), 13px (tablet), 12px (mobile), regular, Manufacturing Orange
- **Description:** 13px (desktop), 12px (tablet), 11px (mobile), regular, Industrial Grey

### States

#### Hover State
- **Icon/Image:** Scale 1.1
- **Card:** Lift 2px
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Hover:** 200ms, ease-out
- **Staggered Reveal:** 100ms delay between items

### Implementation Notes
- Use SVG icons or images
- Include year for context
- Link to verification if available
- Ensure accessibility (alt text)
- Show most recent awards first

---

# Certifications

## Purpose
Display verifiable certifications with license numbers and verification links.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 48px 24px
- **Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px
- **Text Alignment:** Center

### Content Structure
```
[Certification Badge] [Certification Name] [License Number] [Validity Date] [Verification Link]
```

### Certification Badge
- **Size:** 80px (desktop), 64px (tablet), 56px (mobile)
- **Style:** Color-coded (green for certified, blue for pending, red for expired)

### Certification Name
- **Font Size:** 16px (desktop), 14px (tablet), 14px (mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)

### License Number
- **Font Size:** 14px (desktop), 13px (tablet), 12px (mobile)
- **Font Family:** JetBrains Mono (monospace)
- **Color:** Industrial Grey (#4A5568)

### Validity Date
- **Font Size:** 13px (desktop), 12px (tablet), 11px (mobile)
- **Color:** Industrial Grey (#4A5568)

### Verification Link
- **Font Size:** 13px (desktop), 12px (tablet), 11px (mobile)
- **Color:** Manufacturing Orange (#ED8936)
- **Style:** Underlined

### States

#### Certified State
- **Badge:** Quality Green (#48BB78)
- **Background:** #C6F6D5 (Light Green)
- **Text:** #276749 (Dark Green)

#### Pending State
- **Badge:** Info Blue (#4299E1)
- **Background:** #BEE3F8 (Light Blue)
- **Text:** #2A4365 (Dark Blue)

#### Expired State
- **Badge:** Error Red (#F56565)
- **Background:** #FED7D7 (Light Red)
- **Text:** #742A2A (Dark Red)

#### Hover State
- **Badge:** Scale 1.05
- **Link:** Underline animation
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Hover:** 200ms, ease-out
- **Staggered Reveal:** 100ms delay between items

### Implementation Notes
- Use SVG badges for scalability
- Include verification links
- Show license numbers for verifiability
- Display validity dates
- Ensure accessibility (alt text, link descriptions)

---

# Testimonials

## Purpose
Display client testimonials with quantifiable results to build trust.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 64px 24px
- **Grid:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- **Gap:** 24px

### Content Structure
```
[Quote] [Author] [Company] [Location] [Metrics] [Client Since] [Logo]
```

### Testimonial Card
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px
- **Padding:** 32px
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)

### Quote
- **Font Size:** 18px (desktop), 16px (tablet), 16px (mobile)
- **Font Weight:** 400 (Regular)
- **Font Style:** Italic
- **Color:** Dark Grey (#2D3748)
- **Lines:** 4 maximum

### Author
- **Font Size:** 16px (desktop), 14px (tablet), 14px (mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)

### Company
- **Font Size:** 14px (desktop), 13px (tablet), 13px (mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)

### Location
- **Font Size:** 13px (desktop), 12px (tablet), 12px (mobile)
- **Font Weight:** 400 (Regular)
- **Color:** Industrial Grey (#4A5568)

### Metrics
- **Font Size:** 14px (desktop), 13px (tablet), 13px (mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Manufacturing Orange (#ED8936)
- **Format:** "Reduced lead time by 30%"

### Client Since
- **Font Size:** 13px (desktop), 12px (tablet), 11px (mobile)
- **Font Weight:** 400 (Regular)
- **Color:** Industrial Grey (#4A5568)
- **Format:** "Client since 2018"

### Logo
- **Size:** 60px width (desktop), 50px (tablet), 40px (mobile)
- **Style:** Grayscale

### States

#### Hover State
- **Card:** Lift 2px
- **Shadow:** 0 8px 12px rgba(0, 0, 0, 0.15)
- **Logo:** Color reveal
- **Animation:** 300ms, ease-out

### Carousel (Optional)
- **Auto-rotate:** Every 8 seconds
- **Pause:** On hover
- **Navigation:** Dots or arrows

### Responsive Behavior
- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Hover:** 300ms, ease-out
- **Carousel:** 300ms, ease-out, auto-rotate
- **Staggered Reveal:** 100ms delay between cards

### Implementation Notes
- Include quantifiable results
- Show company logos for credibility
- Display client longevity
- Use carousel for space efficiency (optional)
- Ensure keyboard navigation

---

# FAQ

## Purpose
Display frequently asked questions with expandable answers for information access.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Layout:** Single column

### Content Structure
```
[Question] [Icon] [Answer (expandable)]
```

### FAQ Item
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px
- **Padding:** 16px vertical, 24px horizontal
- **Margin Bottom:** 16px

### Question
- **Font Size:** 16px (desktop), 15px (tablet), 14px (mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)

### Icon
- **Size:** 24px
- **Style:** Plus/minus indicator
- **Color:** Manufacturing Orange (#ED8936)

### Answer
- **Font Size:** 14px (desktop), 13px (tablet), 13px (mobile)
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Line Height:** 1.5
- **Padding Top:** 16px

### States

#### Default State
- **Icon:** Plus (+)
- **Answer:** Hidden
- **Height:** Auto (collapsed)

#### Open State
- **Icon:** Minus (-)
- **Answer:** Visible
- **Height:** Auto (expanded)
- **Animation:** 300ms, ease-out, height and opacity

#### Hover State
- **Header Background:** #F7FAFC (Light Grey)
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** Single column, max width 800px
- **Tablet:** Single column, max width 600px
- **Mobile:** Single column, full width

### Animation Specifications
- **Expand/Collapse:** 300ms, ease-out
- **Hover:** 200ms, ease-out

### Implementation Notes
- Use accordion pattern
- Ensure keyboard navigation (Enter, Space)
- Include ARIA attributes (aria-expanded, aria-controls)
- Group related FAQs by category
- Provide search functionality (optional)

---

# Contact Form

## Purpose
Capture user inquiries with validation and clear feedback.

## Visual Specifications

### Default State
- **Background:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Max Width:** 600px
- **Layout:** Single column

### Content Structure
```
[Form Group: Name]
[Form Group: Email]
[Form Group: Phone]
[Form Group: Company]
[Form Group: Inquiry Type]
[Form Group: Message]
[Submit Button]
```

### Form Group
- **Label:** 14px, bold, Dark Grey (#2D3748), 8px margin bottom
- **Input:** 16px padding, 1px border #E2E8F0, 4px border radius
- **Error Message:** 14px, Error Red (#F56565), 8px margin top
- **Spacing:** 24px margin bottom

### Input Fields
- **Name:** Text input, required
- **Email:** Email input, required, email validation
- **Phone:** Tel input, optional, phone validation
- **Company:** Text input, optional
- **Inquiry Type:** Select dropdown, required
- **Message:** Textarea, required, minimum 10 characters

### Submit Button
- **Style:** Primary button
- **Text:** "Send Message"
- **Full Width:** On mobile

### States

#### Focus State
- **Border Color:** Manufacturing Orange (#ED8936)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Animation:** 200ms, ease-out

#### Error State
- **Border Color:** Error Red (#F56565)
- **Box Shadow:** 0 0 0 3px rgba(245, 101, 101, 0.1)
- **Error Message:** Visible
- **Animation:** Shake (400ms, ease-out-back)

#### Success State
- **Border Color:** Quality Green (#48BB78)
- **Success Message:** Visible with checkmark
- **Animation:** 500ms, ease-out

#### Loading State
- **Button:** Spinner, text change to "Sending..."
- **Disabled:** True
- **Animation:** Continuous spinner

### Responsive Behavior
- **Desktop:** Centered, max width 600px
- **Tablet:** Centered, max width 500px
- **Mobile:** Full width, stacked

### Animation Specifications
- **Focus:** 200ms, ease-out
- **Error Shake:** 400ms, ease-out-back
- **Success Checkmark:** 500ms, ease-out
- **Loading:** Continuous spinner

### Implementation Notes
- Use real-time validation
- Provide clear error messages
- Show success state with confirmation
- Use accessible form labels
- Ensure keyboard navigation
- Include CAPTCHA if needed (optional)

---

# Google Map

## Purpose
Display physical location with interactive map for accessibility.

## Visual Specifications

### Default State
- **Background:** Light Grey (#F7FAFC)
- **Padding:** 0
- **Height:** 400px (desktop), 300px (tablet), 250px (mobile)
- **Width:** 100%

### Content Structure
```
[Google Map Embed] [Address Info (overlay or below)]
```

### Map Embed
- **Provider:** Google Maps Embed API
- **Style:** Custom (brand colors)
- **Zoom:** 15
- **Marker:** Custom brand marker
- **Controls:** Minimal (zoom, fullscreen)

### Address Info
- **Address:** 16px, bold, Deep Navy Blue
- **Phone:** 14px, regular, Manufacturing Orange
- **Email:** 14px, regular, Manufacturing Orange
- **Hours:** 14px, regular, Industrial Grey

### States

#### Hover State
- **Marker:** Scale 1.1
- **Animation:** 200ms, ease-out

### Responsive Behavior
- **Desktop:** 400px height
- **Tablet:** 300px height
- **Mobile:** 250px height

### Animation Specifications
- **Marker Hover:** 200ms, ease-out
- **Map Load:** Fade in, 400ms, ease-out

### Implementation Notes
- Use Google Maps Embed API
- Include custom marker
- Show address info overlay or below
- Ensure keyboard accessibility
- Provide text-based alternative
- Include "Get Directions" link

---

# Footer

## Purpose
Provide site information, navigation access, legal compliance, and contact information.

## Visual Specifications

### Default State
- **Background:** Dark Grey (#2D3748)
- **Text Color:** White (#FFFFFF)
- **Padding:** 64px 24px
- **Border Top:** 1px solid #4A5568 (Industrial Grey)
- **Grid:** 5 columns (desktop), 3 columns (tablet), 1 column (mobile)
- **Gap:** 24px

### Content Structure
```
[Column 1: Company]
[Column 2: Products]
[Column 3: Resources]
[Column 4: Support]
[Column 5: Contact]
[Bottom Row: Copyright, Legal, Certifications]
```

### Column Sections

#### Company
- Logo
- About Us
- Our Story
- Team
- Careers

#### Products
- Product Categories
- Capabilities
- Custom Services
- Technical Fabrics

#### Resources
- Blog
- Case Studies
- Industry Insights
- FAQ

#### Support
- Contact Us
- Help Center
- Shipping Info
- Sample Policy

#### Contact
- Phone
- Email
- Address
- Social Media
- "Request a Quote" CTA

### Section Title
- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** White (#FFFFFF)
- **Margin Bottom:** 16px

### Link
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)
- **Color:** #A0AEC0 (Muted Grey)
- **Margin Bottom:** 8px

### Link Hover State
- **Color:** White (#FFFFFF)
- **Text Decoration:** Underline
- **Animation:** 200ms, ease-out

### Bottom Row
- **Padding Top:** 32px
- **Border Top:** 1px solid #4A5568
- **Layout:** Flex, space-between
- **Copyright:** 14px, regular, #A0AEC0
- **Legal Links:** 14px, regular, #A0AEC0
- **Certifications:** 32px height badges

### States

#### CTA Button
- **Style:** Primary button, Manufacturing Orange
- **Full Width:** On mobile

### Responsive Behavior
- **Desktop:** 5 columns
- **Tablet:** 3 columns
- **Mobile:** 1 column, stacked

### Animation Specifications
- **Link Hover:** 200ms, ease-out
- **CTA Hover:** 200ms, ease-out

### Implementation Notes
- Use consistent link styling
- Include social media icons
- Show certification badges
- Ensure keyboard navigation
- Include copyright with dynamic year
- Provide legal compliance links

---

# Component Implementation Guidelines

## General Principles

### Consistency
- Use components consistently across pages
- Follow defined specifications exactly
- Maintain visual hierarchy
- Ensure accessibility

### Performance
- Optimize images and assets
- Use efficient CSS
- Minimize JavaScript
- Test on all devices

### Accessibility
- Meet WCAG AA standards
- Ensure keyboard navigation
- Provide screen reader support
- Test with assistive technologies

### Responsive
- Design mobile-first
- Test at all breakpoints
- Ensure touch targets
- Optimize for performance

## Component Selection

### When to Use Components

#### Navbar
- All pages
- Sticky on scroll
- Mobile hamburger menu

#### Announcement Bar
- Homepage only
- Time-sensitive announcements
- Dismissible

#### Hero
- Homepage
- Category pages (simplified)
- Key landing pages

#### Buttons
- Primary CTAs (most important actions)
- Secondary CTAs (alternative actions)
- Tertiary CTAs (low importance)
- Icon buttons (compact actions)

#### Stats
- Homepage
- About page
- Capabilities page

#### Product Categories
- Homepage
- Products page
- Category pages

#### Product Cards
- Product grid pages
- Featured products sections
- Related products

#### Feature Cards
- Value proposition sections
- Service sections
- Capability sections

#### Timeline
- About page (company history)
- Project pages (milestones)
- Process pages (workflow)

#### Manufacturing Process
- Quality Process page
- Capabilities page
- About page

#### Factory Gallery
- Our Factory page
- Homepage (featured)
- About page

#### Client Logos
- Homepage
- Clients page
- About page

#### Awards
- About page
- Homepage (featured)
- Trust sections

#### Certifications
- Quality Process page
- About page
- Homepage (featured)

#### Testimonials
- Homepage
- Clients page
- About page

#### FAQ
- FAQ page
- Contact page
- Help Center

#### Contact Form
- Contact page
- Quote request page
- Sample request page

#### Google Map
- Contact page
- About page
- Footer (optional)

#### Footer
- All pages

---

## Implementation Notes

### CSS Variables
Use CSS custom properties for:
- Colors
- Spacing
- Border radius
- Shadows
- Typography

### Component Classes
Use BEM or utility-first naming:
- Component: `.component-name`
- Modifier: `.component-name--modifier`
- Element: `.component-name__element`

### Responsive Design
Use mobile-first approach:
- Base styles: Mobile
- Media queries: Tablet and desktop
- Breakpoints: 768px, 992px, 1200px

### Accessibility
Ensure:
- Color contrast ratios
- Keyboard navigation
- Screen reader support
- Focus indicators
- Alt text for images

### Performance
Optimize:
- Image compression
- CSS minification
- JavaScript bundling
- Lazy loading
- Code splitting

---

## Conclusion

This component library provides a comprehensive framework for implementing all UI components for the Goyal Trading Company website. All components are designed to support the brand's core principles of operational transparency, verifiability, and technical authority.

**Key Design Principles:**
- Professional and premium aesthetic
- Trust through transparency
- Technical authority display
- Manufacturing focus
- B2B buyer needs
- Accessibility-first approach
- Mobile-first responsive design
- Performance optimization

**Implementation Priority:**
1. Core components (Navbar, Hero, Buttons, Forms)
2. Content components (Stats, Product Cards, Feature Cards)
3. Trust components (Testimonials, Certifications, Client Logos)
4. Specialized components (Timeline, Manufacturing Process, Factory Gallery)

This component library ensures consistency, scalability, and maintainability across all digital touchpoints while supporting the business objectives of lead generation and brand positioning.
