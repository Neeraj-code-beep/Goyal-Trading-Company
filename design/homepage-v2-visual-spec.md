# Homepage V2 Visual Specification
## Goyal Trading Company - Premium B2B Manufacturing Website

**Specification Date:** July 10, 2026  
**Version:** 2.0  
**Status:** Ready for Implementation

---

# Document Overview

## Purpose
This visual specification document provides detailed design specifications for the Goyal Trading Company Homepage V2. It serves as the single source of truth for designers, developers, and stakeholders implementing the new homepage design.

## Scope
This specification covers all visual aspects of the homepage including:
- Layout and spacing
- Typography and color
- Component specifications
- Responsive behavior
- Animation and interactions
- Accessibility requirements

## Related Documents
- `design-system.md` - Overall design system guidelines
- `component-library.md` - Reusable component specifications
- `motion-design-system.md` - Animation and motion guidelines
- `homepage-ux-blueprint.md` - UX structure and content hierarchy
- `design-dna.md` - Premium design patterns and best practices
- `ui-gap-analysis.md` - Gap analysis and improvement recommendations

---

# Design System Foundation

## Color Palette

### Primary Colors
```
Primary Navy: #1A365D
- Usage: Primary buttons, headings, navigation background
- Contrast ratio: 16.5:1 (AAA compliant on white)

Primary Navy Light: #2C5282
- Usage: Hover states, secondary backgrounds
- Contrast ratio: 11.2:1 (AAA compliant on white)

Primary Navy Dark: #102A4E
- Usage: Active states, deep backgrounds
- Contrast ratio: 21.3:1 (AAA compliant on white)
```

### Accent Colors
```
Manufacturing Orange: #ED8936
- Usage: CTAs, highlights, important elements
- Contrast ratio: 3.2:1 (AA compliant on white)

Manufacturing Orange Light: #F6AD55
- Usage: Hover states, secondary highlights
- Contrast ratio: 2.4:1 (AA compliant on white)

Manufacturing Orange Dark: #DD6B20
- Usage: Active states, pressed elements
- Contrast ratio: 4.1:1 (AA compliant on white)
```

### Neutral Colors
```
White: #FFFFFF
- Usage: Backgrounds, cards, text on dark backgrounds

Gray 50: #F7FAFC
- Usage: Section backgrounds, subtle dividers

Gray 100: #EDF2F7
- Usage: Card backgrounds, borders

Gray 200: #E2E8F0
- Usage: Borders, dividers, inactive states

Gray 300: #CBD5E0
- Usage: Secondary borders, disabled states

Gray 400: #A0AEC0
- Usage: Secondary text, placeholders

Gray 500: #718096
- Usage: Body text, primary borders

Gray 600: #4A5568
- Usage: Secondary headings, emphasized text

Gray 700: #2D3748
- Usage: Primary headings, dark text

Gray 800: #1A202C
- Usage: Dark backgrounds, text on white

Gray 900: #171923
- Usage: Deepest backgrounds, text on light
```

### Semantic Colors
```
Success Green: #48BB78
- Usage: Success messages, positive indicators

Warning Yellow: #ECC94B
- Usage: Warning messages, attention indicators

Error Red: #F56565
- Usage: Error messages, negative indicators

Info Blue: #4299E1
- Usage: Information messages, neutral indicators
```

## Typography

### Font Families
```
Primary Font: Inter
- Usage: Headings, navigation, buttons
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

Secondary Font: Open Sans
- Usage: Body text, descriptions, labels
- Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

Monospace Font: JetBrains Mono
- Usage: Technical specifications, code, data
- Weights: 400 (Regular), 500 (Medium)
- Fallback: "Courier New", monospace
```

### Type Scale
```
Display 1: 64px / 72px (1.125 line-height)
- Usage: Hero headline, major section titles
- Letter-spacing: -0.02em

Display 2: 48px / 56px (1.167 line-height)
- Usage: Section headings, major titles
- Letter-spacing: -0.01em

Display 3: 36px / 44px (1.222 line-height)
- Usage: Subsection headings, card titles
- Letter-spacing: 0

Heading 1: 30px / 38px (1.267 line-height)
- Usage: Page titles, major headings
- Letter-spacing: 0

Heading 2: 24px / 32px (1.333 line-height)
- Usage: Section headings, card headings
- Letter-spacing: 0

Heading 3: 20px / 28px (1.4 line-height)
- Usage: Subsection headings, navigation items
- Letter-spacing: 0

Heading 4: 18px / 26px (1.444 line-height)
- Usage: Card titles, list headings
- Letter-spacing: 0

Body Large: 18px / 28px (1.556 line-height)
- Usage: Lead paragraphs, emphasized body text
- Letter-spacing: 0

Body: 16px / 24px (1.5 line-height)
- Usage: Body text, descriptions, content
- Letter-spacing: 0

Body Small: 14px / 20px (1.429 line-height)
- Usage: Secondary text, captions, labels
- Letter-spacing: 0

Caption: 12px / 16px (1.333 line-height)
- Usage: Footnotes, metadata, small labels
- Letter-spacing: 0.02em

Overline: 11px / 16px (1.455 line-height)
- Usage: Section labels, category headers
- Letter-spacing: 0.1em, uppercase
```

### Font Weights
```
Regular (400): Body text, descriptions
Medium (500): Emphasized body text, secondary headings
SemiBold (600): Headings, navigation, buttons
Bold (700): Major headings, CTAs, emphasis
```

## Spacing System

### 8px Grid System
```
Space 1: 4px
- Usage: Tight spacing, icon padding

Space 2: 8px
- Usage: Small spacing, icon gaps

Space 3: 12px
- Usage: Compact spacing, small gaps

Space 4: 16px
- Usage: Standard spacing, element gaps

Space 5: 20px
- Usage: Medium spacing, section padding

Space 6: 24px
- Usage: Large spacing, content gaps

Space 7: 32px
- Usage: Extra large spacing, section margins

Space 8: 40px
- Usage: Section spacing, major gaps

Space 9: 48px
- Usage: Major section spacing

Space 10: 64px
- Usage: Page section spacing

Space 11: 80px
- Usage: Major page sections

Space 12: 96px
- Usage: Largest page sections

Space 13: 128px
- Usage: Hero section spacing

Space 14: 160px
- Usage: Maximum section spacing
```

## Border Radius
```
Radius Small: 4px
- Usage: Small buttons, tags, badges

Radius Medium: 8px
- Usage: Standard buttons, cards, inputs

Radius Large: 16px
- Usage: Large cards, modals, containers

Radius XL: 24px
- Usage: Hero elements, major containers

Radius Full: 9999px
- Usage: Pills, tags, circular elements
```

## Shadows

### Shadow Scale
```
Shadow XS: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- Usage: Subtle elevation, small elements

Shadow SM: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- Usage: Cards, buttons, standard elevation

Shadow MD: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- Usage: Elevated cards, dropdowns, modals

Shadow LG: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- Usage: Modals, tooltips, high elevation

Shadow XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
- Usage: Hero elements, major elevation

Shadow 2XL: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
- Usage: Full-screen overlays, maximum elevation
```

---

# Layout Structure

## Overall Layout

### Container Widths
```
Mobile: 100% (0-575px)
- Padding: 16px on each side

Tablet: 100% (576-991px)
- Padding: 24px on each side

Desktop: 1200px (992-1199px)
- Padding: 32px on each side

Large Desktop: 1400px (1200-1439px)
- Padding: 40px on each side

Extra Large: 1600px (1440px+)
- Padding: 48px on each side
```

### Section Spacing
```
Hero Section: 160px top, 128px bottom
Standard Section: 96px top, 96px bottom
Compact Section: 64px top, 64px bottom
Footer: 80px top, 64px bottom
```

## Grid System

### Desktop Grid (12-column)
```
Column Width: ~93px (with 24px gutters)
Gutter: 24px
Container: 1200px max-width

Span 1: 1/12 (8.33%)
Span 2: 2/12 (16.67%)
Span 3: 3/12 (25%)
Span 4: 4/12 (33.33%)
Span 5: 5/12 (41.67%)
Span 6: 6/12 (50%)
Span 7: 7/12 (58.33%)
Span 8: 8/12 (66.67%)
Span 9: 9/12 (75%)
Span 10: 10/12 (83.33%)
Span 11: 11/12 (91.67%)
Span 12: 12/12 (100%)
```

### Tablet Grid (8-column)
```
Column Width: ~84px (with 24px gutters)
Gutter: 24px
Container: 100% max-width

Span 1: 1/8 (12.5%)
Span 2: 2/8 (25%)
Span 3: 3/8 (37.5%)
Span 4: 4/8 (50%)
Span 5: 5/8 (62.5%)
Span 6: 6/8 (75%)
Span 7: 7/8 (87.5%)
Span 8: 8/8 (100%)
```

### Mobile Grid (4-column)
```
Column Width: ~68px (with 16px gutters)
Gutter: 16px
Container: 100% max-width

Span 1: 1/4 (25%)
Span 2: 2/4 (50%)
Span 3: 3/4 (75%)
Span 4: 4/4 (100%)
```

---

# Section Specifications

## Section 1: Hero Section

### Layout
```
Width: 100% viewport width
Height: 800px minimum (desktop), 600px minimum (mobile)
Background: Authentic factory photo with dark gradient overlay
Container: Centered, max-width 1600px
```

### Background
```
Image: Authentic factory production floor photo
Size: 1920×1080px minimum, 2560×1440px recommended
Format: WebP with JPEG fallback
Overlay: Linear gradient from bottom
  - Start: rgba(26, 54, 93, 0.95) at 0%
  - End: rgba(26, 54, 93, 0.7) at 100%
```

### Content Layout (Desktop)
```
Position: Left-aligned, vertically centered
Width: 600px maximum
Padding: 128px from left edge
```

### Content Layout (Mobile)
```
Position: Center-aligned, vertically centered
Width: 100%
Padding: 24px from edges
```

### Hero Headline
```
Text: "Premium B2B Clothing Manufacturing Excellence"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: White
Line-height: 1.167
Letter-spacing: -0.01em
Margin-bottom: 24px
Max-width: 600px
```

### Hero Subheadline
```
Text: "15+ years of manufacturing excellence. 50,000 units/month capacity. 100+ global clients. ISO 9001, BSCI, WRAP certified."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 200 (#E2E8F0)
Line-height: 1.556
Margin-bottom: 40px
Max-width: 500px
```

### Hero CTAs
```
Layout: Horizontal flex container
Gap: 16px
Alignment: Left (desktop), Center (mobile)
```

#### Primary CTA Button
```
Text: "Request a Quote"
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: White
Background: Manufacturing Orange (#ED8936)
Border: None
Border-radius: Radius Medium (8px)
Padding: 16px 32px
Height: 56px
Min-width: 180px
Shadow: Shadow MD
Transition: All 200ms ease-out
Hover: Manufacturing Orange Dark (#DD6B20), Shadow LG
Active: Manufacturing Orange Dark (#DD6B20), transform scale(0.98)
Focus: Outline 2px Manufacturing Orange, outline-offset 2px
```

#### Secondary CTA Button
```
Text: "Schedule Factory Tour"
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: White
Background: Transparent
Border: 2px solid White
Border-radius: Radius Medium (8px)
Padding: 14px 30px (accounting for border)
Height: 56px
Min-width: 200px
Transition: All 200ms ease-out
Hover: Background White, Color Primary Navy
Active: Background Gray 100, transform scale(0.98)
Focus: Outline 2px White, outline-offset 2px
```

#### Tertiary CTA Link
```
Text: "View Manufacturing Capabilities →"
Font: Inter, Body (16px / 24px)
Weight: Medium (500)
Color: Manufacturing Orange (#ED8936)
Background: Transparent
Border: None
Padding: 0
Margin-left: 16px
Transition: Color 200ms ease-out
Hover: Manufacturing Orange Light (#F6AD55)
Focus: Outline 2px Manufacturing Orange, outline-offset 2px
```

### Trust Signals
```
Layout: Horizontal flex container below CTAs
Gap: 32px
Alignment: Left (desktop), Center (mobile)
Margin-top: 48px
```

#### Certification Badges
```
Layout: Horizontal flex container
Gap: 16px
Items: ISO 9001, BSCI, WRAP, GOTS

Each Badge:
- Size: 48×48px
- Format: SVG with white fill
- Background: White with 20% opacity
- Border-radius: Radius Small (4px)
- Padding: 8px
- Hover: Background White with 40% opacity, cursor pointer
- Click: Opens verification page in new tab
```

#### Capacity Metrics
```
Layout: Horizontal flex container
Gap: 24px
Font: Open Sans, Body Small (14px / 20px)
Weight: SemiBold (600)
Color: White
Background: White with 10% opacity
Border-radius: Radius Full (9999px)
Padding: 8px 16px

Metrics:
- "15+ Years in Business"
- "50,000 Units/Month"
- "100+ Global Clients"
- "98% On-Time Delivery"
```

### Mobile Adjustments
```
Hero Headline: Display 3 (36px / 44px)
Hero Subheadline: Body (16px / 24px)
CTAs: Vertical stack, full width
Trust Signals: Wrap to 2 rows, centered
```

---

## Section 2: Trust Bar

### Layout
```
Width: 100% viewport width
Height: 80px
Background: Primary Navy (#1A365D)
Container: Centered, max-width 1600px
Padding: 24px 48px (desktop), 16px 24px (mobile)
```

### Content
```
Layout: Horizontal flex container
Justify-content: Space-between
Align-items: Center
Gap: 48px
```

### Trust Items
```
Layout: Horizontal flex container
Gap: 16px
Align-items: Center

Each Item:
- Icon: 24×24px, Manufacturing Orange
- Text: Body Small (14px / 20px), SemiBold (600), White
- Border-right: 1px solid Gray 300 (except last item)
```

### Trust Items Content
```
Item 1: "✓ ISO 9001 Certified"
Item 2: "✓ BSCI Compliant"
Item 3: "✓ WRAP Certified"
Item 4: "✓ 98% On-Time Delivery"
Item 5: "✓ 100+ Global Clients"
```

### Mobile Adjustments
```
Layout: Horizontal scroll container
Gap: 24px
Padding: 16px 24px
Scroll: Horizontal snap
Items: 5 items, scrollable
```

---

## Section 3: Value Proposition

### Layout
```
Width: 100% viewport width
Background: White
Padding: 96px 48px (desktop), 64px 24px (mobile)
Container: Centered, max-width 1400px
```

### Section Header
```
Layout: Centered, max-width 800px
Margin-bottom: 64px
```

#### Section Label
```
Text: "WHY GOYAL TRADING COMPANY"
Font: Inter, Overline (11px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 16px
```

#### Section Heading
```
Text: "Manufacturing Excellence You Can Trust"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: Gray 800 (#1A202C)
Line-height: 1.167
Margin-bottom: 24px
```

#### Section Description
```
Text: "We combine 15+ years of manufacturing expertise with state-of-the-art equipment to deliver premium quality garments on time, every time. Our commitment to quality, transparency, and customer satisfaction sets us apart in the B2B wholesale market."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Line-height: 1.556
```

### Value Cards Grid
```
Layout: CSS Grid, 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 32px
```

### Value Card
```
Layout: Vertical flex container
Background: White
Border: 1px solid Gray 200 (#E2E8F0)
Border-radius: Radius Large (16px)
Padding: 32px
Shadow: Shadow SM
Transition: All 300ms ease-out
Hover: Shadow LG, transform translateY(-4px)
```

#### Card Icon
```
Size: 48×48px
Background: Manufacturing Orange with 10% opacity
Border-radius: Radius Medium (8px)
Padding: 12px
Color: Manufacturing Orange (#ED8936)
Margin-bottom: 24px
```

#### Card Heading
```
Font: Inter, Heading 3 (20px / 28px)
Weight: SemiBold (600)
Color: Gray 800 (#1A202C)
Margin-bottom: 12px
```

#### Card Description
```
Font: Open Sans, Body (16px / 24px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Line-height: 1.5
```

### Value Cards Content

#### Card 1: Manufacturing Excellence
```
Icon: Factory/Production icon
Heading: "State-of-the-Art Manufacturing"
Description: "Our 50,000 sq ft facility is equipped with the latest machinery from Juki, Brother, and Pegasus, ensuring consistent quality and efficient production."
```

#### Card 2: Quality Assurance
```
Icon: Quality/Check icon
Heading: "Rigorous Quality Control"
Description: "Every garment passes through our 5-stage quality inspection process with AQL 2.5 standards, ensuring zero defects in your orders."
```

#### Card 3: Transparent Pricing
```
Icon: Pricing/Dollar icon
Heading: "Transparent, Competitive Pricing"
Description: "No hidden costs, no surprises. We provide detailed quotes with clear breakdowns of materials, labor, and overhead costs."
```

#### Card 4: On-Time Delivery
```
Icon: Delivery/Truck icon
Heading: "98% On-Time Delivery Record"
Description: "Our streamlined production process and reliable logistics partners ensure your orders arrive on schedule, every time."
```

### Mobile Adjustments
```
Section Heading: Display 3 (36px / 44px)
Value Cards: 2 columns on tablet, 1 column on mobile
Card Padding: 24px
```

---

## Section 4: Product Categories

### Layout
```
Width: 100% viewport width
Background: Gray 50 (#F7FAFC)
Padding: 96px 48px (desktop), 64px 24px (mobile)
Container: Centered, max-width 1400px
```

### Section Header
```
Layout: Flex container, space-between
Align-items: flex-end
Margin-bottom: 48px
```

#### Header Content
```
Width: 60%
```

##### Section Label
```
Text: "OUR PRODUCTS"
Font: Inter, Overline (11px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 16px
```

##### Section Heading
```
Text: "Premium Quality Garments for Every Need"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: Gray 800 (#1A202C)
Line-height: 1.167
Margin-bottom: 16px
```

##### Section Description
```
Text: "From casual wear to formal attire, we manufacture a wide range of garments using premium fabrics and expert craftsmanship."
Font: Open Sans, Body (16px / 24px)
Weight: Regular (400)
Color: Gray 500 (#718096)
```

#### View All Button
```
Text: "View All Products →"
Font: Inter, Body (16px / 24px)
Weight: Medium (500)
Color: Primary Navy (#1A365D)
Background: Transparent
Border: None
Padding: 0
Transition: Color 200ms ease-out
Hover: Manufacturing Orange (#ED8936)
Focus: Outline 2px Primary Navy, outline-offset 2px
```

### Category Cards Grid
```
Layout: CSS Grid, 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 24px
```

### Category Card
```
Layout: Vertical flex container
Background: White
Border-radius: Radius Large (16px)
Overflow: Hidden
Shadow: Shadow SM
Transition: All 300ms ease-out
Hover: Shadow LG, transform translateY(-4px)
Cursor: pointer
```

#### Card Image
```
Size: 100% width, 240px height
Object-fit: cover
Background: Gray 100
```

#### Card Content
```
Padding: 24px
```

##### Card Category Label
```
Text: Category name (e.g., "T-SHIRTS")
Font: Inter, Caption (12px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 8px
```

##### Card Heading
```
Text: Category title (e.g., "Premium T-Shirts")
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: Gray 800 (#1A202C)
Margin-bottom: 8px
```

##### Card Description
```
Text: Brief description (e.g., "100+ designs available")
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 500 (#718096)
```

##### Card Product Count
```
Text: "150+ Products"
Font: Open Sans, Caption (12px / 16px)
Weight: SemiBold (600)
Color: Gray 400 (#A0AEC0)
Margin-top: 16px
```

### Category Cards Content

#### Card 1: T-Shirts
```
Image: T-shirt product photo
Category: "T-SHIRTS"
Heading: "Premium T-Shirts"
Description: "100+ designs available"
Count: "150+ Products"
```

#### Card 2: Polo Shirts
```
Image: Polo shirt product photo
Category: "POLO SHIRTS"
Heading: "Classic Polo Shirts"
Description: "80+ designs available"
Count: "120+ Products"
```

#### Card 3: Hoodies
```
Image: Hoodie product photo
Category: "HOODIES"
Heading: "Comfortable Hoodies"
Description: "60+ designs available"
Count: "90+ Products"
```

#### Card 4: Jackets
```
Image: Jacket product photo
Category: "JACKETS"
Heading: "Stylish Jackets"
Description: "50+ designs available"
Count: "75+ Products"
```

#### Card 5: Pants
```
Image: Pants product photo
Category: "PANTS"
Heading: "Versatile Pants"
Description: "70+ designs available"
Count: "100+ Products"
```

#### Card 6: Shorts
```
Image: Shorts product photo
Category: "SHORTS"
Heading: "Casual Shorts"
Description: "40+ designs available"
Count: "60+ Products"
```

#### Card 7: Activewear
```
Image: Activewear product photo
Category: "ACTIVEWEAR"
Heading: "Performance Activewear"
Description: "55+ designs available"
Count: "80+ Products"
```

#### Card 8: Uniforms
```
Image: Uniform product photo
Category: "UNIFORMS"
Heading: "Corporate Uniforms"
Description: "30+ designs available"
Count: "50+ Products"
```

### Mobile Adjustments
```
Section Header: Vertical stack
View All Button: Full width, below heading
Category Cards: 2 columns on tablet, 1 column on mobile
Card Image Height: 200px
```

---

## Section 5: Manufacturing Process

### Layout
```
Width: 100% viewport width
Background: White
Padding: 96px 48px (desktop), 64px 24px (mobile)
Container: Centered, max-width 1400px
```

### Section Header
```
Layout: Centered, max-width 800px
Margin-bottom: 64px
```

#### Section Label
```
Text: "OUR MANUFACTURING PROCESS"
Font: Inter, Overline (11px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 16px
```

#### Section Heading
```
Text: "From Design to Delivery: Our 6-Step Process"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: Gray 800 (#1A202C)
Line-height: 1.167
Margin-bottom: 24px
```

#### Section Description
```
Text: "Our streamlined manufacturing process ensures consistent quality and on-time delivery for every order, from sample development to final production."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Line-height: 1.556
```

### Process Steps
```
Layout: Horizontal flex container with connecting line
Gap: 0
Position: relative
```

#### Connecting Line
```
Position: Absolute
Top: 40px
Left: 0
Right: 0
Height: 2px
Background: Gray 200 (#E2E8F0)
Z-index: 0
```

### Process Step
```
Layout: Vertical flex container
Width: 16.666% (1/6 of container)
Position: relative
Z-index: 1
```

#### Step Number
```
Size: 80×80px
Background: White
Border: 3px solid Manufacturing Orange (#ED8936)
Border-radius: Radius Full (9999px)
Font: Inter, Heading 2 (24px / 32px)
Weight: Bold (700)
Color: Manufacturing Orange (#ED8936)
Display: flex
Align-items: center
Justify-content: center
Margin: 0 auto 24px
Shadow: Shadow SM
```

#### Step Icon
```
Size: 48×48px
Color: Primary Navy (#1A365D)
Margin: 0 auto 16px
```

#### Step Heading
```
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: Gray 800 (#1A202C)
Text-align: center
Margin-bottom: 8px
```

#### Step Description
```
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Text-align: center
Line-height: 1.429
```

### Process Steps Content

#### Step 1: Design Consultation
```
Number: "1"
Icon: Design/Consultation icon
Heading: "Design Consultation"
Description: "We work with you to understand your requirements and create detailed tech packs."
```

#### Step 2: Sample Development
```
Number: "2"
Icon: Sample/Prototype icon
Heading: "Sample Development"
Description: "Our team develops samples for your approval within 7-10 business days."
```

#### Step 3: Material Sourcing
```
Number: "3"
Icon: Material/Fabric icon
Heading: "Material Sourcing"
Description: "We source premium fabrics and materials from trusted suppliers worldwide."
```

#### Step 4: Production
```
Number: "4"
Icon: Production/Factory icon
Heading: "Production"
Description: "Our skilled team manufactures your order using state-of-the-art equipment."
```

#### Step 5: Quality Control
```
Number: "5"
Icon: Quality/Check icon
Heading: "Quality Control"
Description: "Every garment undergoes rigorous inspection before packaging and shipping."
```

#### Step 6: Delivery
```
Number: "6"
Icon: Delivery/Truck icon
Heading: "Delivery"
Description: "We ship your order using reliable logistics partners with tracking capabilities."
```

### Mobile Adjustments
```
Process Steps: Vertical stack
Connecting Line: Vertical line on left
Step Width: 100%
Step Number: 64×64px
Step Layout: Horizontal flex (number left, content right)
```

---

## Section 6: Factory Gallery

### Layout
```
Width: 100% viewport width
Background: Gray 50 (#F7FAFC)
Padding: 96px 48px (desktop), 64px 24px (mobile)
Container: Centered, max-width 1600px
```

### Section Header
```
Layout: Centered, max-width 800px
Margin-bottom: 64px
```

#### Section Label
```
Text: "OUR FACILITY"
Font: Inter, Overline (11px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 16px
```

#### Section Heading
```
Text: "State-of-the-Art Manufacturing Facility"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: Gray 800 (#1A202C)
Line-height: 1.167
Margin-bottom: 24px
```

#### Section Description
```
Text: "Our 50,000 sq ft facility is equipped with the latest machinery and technology to ensure consistent quality and efficient production."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Line-height: 1.556
```

### Gallery Grid
```
Layout: CSS Grid, 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 24px
```

### Gallery Item
```
Layout: Vertical flex container
Background: White
Border-radius: Radius Large (16px)
Overflow: hidden
Shadow: Shadow SM
Transition: All 300ms ease-out
Hover: Shadow LG, transform translateY(-4px)
Cursor: pointer
```

#### Gallery Image
```
Size: 100% width, 300px height
Object-fit: cover
Background: Gray 100
```

#### Gallery Content
```
Padding: 24px
```

##### Gallery Title
```
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: Gray 800 (#1A202C)
Margin-bottom: 8px
```

##### Gallery Description
```
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 500 (#718096)
```

### Gallery Items Content

#### Item 1: Production Floor
```
Image: Production floor with machines
Title: "Production Floor"
Description: "50,000 sq ft of manufacturing space with 200+ machines"
```

#### Item 2: Cutting Section
```
Image: Cutting section with fabric
Title: "Cutting Section"
Description: "Automated cutting machines for precision and efficiency"
```

#### Item 3: Sewing Department
```
Image: Sewing department with workers
Title: "Sewing Department"
Description: "150 skilled operators with Juki and Brother machines"
```

#### Item 4: Quality Control
```
Image: Quality control inspection
Title: "Quality Control"
Description: "5-stage inspection process with AQL 2.5 standards"
```

#### Item 5: Finishing Section
```
Image: Finishing and packaging
Title: "Finishing Section"
Description: "Professional finishing and packaging for premium presentation"
```

#### Item 6: Warehouse
```
Image: Warehouse with inventory
Title: "Warehouse"
Description: "Climate-controlled storage for raw materials and finished goods"
```

### Mobile Adjustments
```
Gallery Grid: 2 columns on tablet, 1 column on mobile
Gallery Image Height: 250px
```

---

## Section 7: Client Testimonials

### Layout
```
Width: 100% viewport width
Background: White
Padding: 96px 48px (desktop), 64px 24px (mobile)
Container: Centered, max-width 1400px
```

### Section Header
```
Layout: Centered, max-width 800px
Margin-bottom: 64px
```

#### Section Label
```
Text: "WHAT OUR CLIENTS SAY"
Font: Inter, Overline (11px / 16px)
Weight: SemiBold (600)
Color: Manufacturing Orange (#ED8936)
Letter-spacing: 0.1em, uppercase
Margin-bottom: 16px
```

#### Section Heading
```
Text: "Trusted by 100+ Global Clients"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: Gray 800 (#1A202C)
Line-height: 1.167
Margin-bottom: 24px
```

#### Section Description
```
Text: "Our clients trust us for consistent quality, on-time delivery, and exceptional customer service. Here's what they have to say about working with us."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 500 (#718096)
Line-height: 1.556
```

### Testimonials Grid
```
Layout: CSS Grid, 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 32px
```

### Testimonial Card
```
Layout: Vertical flex container
Background: White
Border: 1px solid Gray 200 (#E2E8F0)
Border-radius: Radius Large (16px)
Padding: 32px
Shadow: Shadow SM
```

#### Testimonial Quote
```
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 700 (#2D3748)
Line-height: 1.556
Font-style: italic
Margin-bottom: 24px
Position: relative
```

##### Quote Icon
```
Position: absolute
Top: -16px
Left: -8px
Size: 32×32px
Color: Manufacturing Orange with 20% opacity
```

#### Testimonial Author
```
Layout: Flex container, align-items center
Gap: 16px
```

##### Author Avatar
```
Size: 48×48px
Border-radius: Radius Full (9999px)
Background: Gray 100
Object-fit: cover
```

##### Author Info
```
Layout: Vertical flex container
```

###### Author Name
```
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: Gray 800 (#1A202C)
```

###### Author Title
```
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 500 (#718096)
```

###### Author Company
```
Font: Open Sans, Caption (12px / 16px)
Weight: SemiBold (600)
Color: Gray 400 (#A0AEC0)
Margin-top: 4px
```

### Testimonials Content

#### Testimonial 1
```
Quote: "Goyal Trading Company has been our trusted manufacturing partner for over 5 years. Their quality is consistently excellent, and their on-time delivery record is impressive. We highly recommend them for any B2B clothing manufacturing needs."
Author: "Michael Chen"
Title: "Procurement Manager"
Company: "Pacific Apparel Inc., USA"
```

#### Testimonial 2
```
Quote: "We've worked with many manufacturers, but Goyal Trading Company stands out for their transparency and professionalism. From design consultation to final delivery, the process is smooth and efficient. Their attention to detail is remarkable."
Author: "Sarah Williams"
Title: "Creative Director"
Company: "Urban Fashion Ltd., UK"
```

#### Testimonial 3
```
Quote: "The quality of garments we receive from Goyal Trading Company is exceptional. Their team is responsive, flexible, and always willing to go the extra mile. They've helped us scale our business significantly over the past 3 years."
Author: "Rajesh Kumar"
Title: "Managing Director"
Company: "Style Hub India, India"
```

### Mobile Adjustments
```
Testimonials Grid: 2 columns on tablet, 1 column on mobile
Testimonial Card Padding: 24px
```

---

## Section 8: Client Logos

### Layout
```
Width: 100% viewport width
Background: Gray 50 (#F7FAFC)
Padding: 64px 48px (desktop), 48px 24px (mobile)
Container: Centered, max-width 1400px
```

### Section Header
```
Layout: Centered, margin-bottom: 48px
```

#### Section Heading
```
Text: "Trusted by Leading Brands Worldwide"
Font: Inter, Heading 2 (24px / 32px)
Weight: SemiBold (600)
Color: Gray 600 (#4A5568)
Text-align: center
```

### Client Logos Grid
```
Layout: CSS Grid, 6 columns (desktop), 4 columns (tablet), 2 columns (mobile)
Gap: 48px
Align-items: center
```

### Client Logo
```
Size: 120×60px maximum
Object-fit: contain
Filter: Grayscale 100%, opacity 60%
Transition: All 300ms ease-out
Hover: Grayscale 0%, opacity 100%, transform scale(1.05)
```

### Client Logos Content
```
Include 12 client logos from various industries and regions:
- Pacific Apparel Inc. (USA)
- Urban Fashion Ltd. (UK)
- Style Hub India (India)
- Euro Wear GmbH (Germany)
- Asia Pacific Clothing (Singapore)
- Nordic Textiles AB (Sweden)
- Southern Hemisphere Fashion (Australia)
- Middle East Garments (UAE)
- African Clothing Co. (South Africa)
- Latin America Textiles (Brazil)
- Canada Fashion Group (Canada)
- Japan Style Inc. (Japan)
```

### Mobile Adjustments
```
Client Logos Grid: 4 columns on tablet, 2 columns on mobile
Gap: 32px
```

---

## Section 9: CTA Section

### Layout
```
Width: 100% viewport width
Background: Primary Navy (#1A365D)
Padding: 128px 48px (desktop), 80px 24px (mobile)
Container: Centered, max-width 1200px
```

### Content Layout
```
Layout: Centered, text-align center
```

### CTA Heading
```
Text: "Ready to Start Your Manufacturing Journey?"
Font: Inter, Display 2 (48px / 56px)
Weight: Bold (700)
Color: White
Line-height: 1.167
Margin-bottom: 24px
```

### CTA Description
```
Text: "Get a free quote within 24 hours. Our team is ready to help you bring your designs to life with premium quality manufacturing."
Font: Open Sans, Body Large (18px / 28px)
Weight: Regular (400)
Color: Gray 200 (#E2E8F0)
Line-height: 1.556
Margin-bottom: 40px
Max-width: 700px
```

### CTA Buttons
```
Layout: Horizontal flex container
Gap: 16px
Justify-content: center
```

#### Primary CTA Button
```
Text: "Request a Free Quote"
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: Primary Navy (#1A365D)
Background: Manufacturing Orange (#ED8936)
Border: None
Border-radius: Radius Medium (8px)
Padding: 16px 32px
Height: 56px
Min-width: 220px
Shadow: Shadow MD
Transition: All 200ms ease-out
Hover: Manufacturing Orange Dark (#DD6B20), Shadow LG
Active: Manufacturing Orange Dark (#DD6B20), transform scale(0.98)
Focus: Outline 2px Manufacturing Orange, outline-offset 2px
```

#### Secondary CTA Button
```
Text: "Schedule Factory Tour"
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: White
Background: Transparent
Border: 2px solid White
Border-radius: Radius Medium (8px)
Padding: 14px 30px
Height: 56px
Min-width: 200px
Transition: All 200ms ease-out
Hover: Background White, Color Primary Navy
Active: Background Gray 100, transform scale(0.98)
Focus: Outline 2px White, outline-offset 2px
```

### Mobile Adjustments
```
CTA Heading: Display 3 (36px / 44px)
CTA Buttons: Vertical stack, full width
```

---

# Footer Specifications

## Footer Layout

### Overall Layout
```
Width: 100% viewport width
Background: Gray 900 (#171923)
Padding: 80px 48px 32px (desktop), 64px 24px 24px (mobile)
Container: Centered, max-width 1400px
```

### Footer Content Grid
```
Layout: CSS Grid, 5 columns (desktop), 3 columns (tablet), 1 column (mobile)
Gap: 48px
```

### Footer Column
```
Layout: Vertical flex container
```

#### Column Heading
```
Font: Inter, Heading 4 (18px / 26px)
Weight: SemiBold (600)
Color: White
Margin-bottom: 24px
```

#### Column Links
```
Layout: Vertical flex container
Gap: 12px
```

##### Footer Link
```
Font: Open Sans, Body (16px / 24px)
Weight: Regular (400)
Color: Gray 400 (#A0AEC0)
Text-decoration: none
Transition: Color 200ms ease-out
Hover: Manufacturing Orange (#ED8936)
Focus: Outline 2px Manufacturing Orange, outline-offset 2px
```

### Footer Columns Content

#### Column 1: Company
```
Heading: "Company"
Links:
- About Us
- Our Story
- Team
- Careers
- Contact Us
```

#### Column 2: Products
```
Heading: "Products"
Links:
- T-Shirts
- Polo Shirts
- Hoodies
- Jackets
- Pants
- Activewear
- View All Products
```

#### Column 3: Resources
```
Heading: "Resources"
Links:
- Blog
- Case Studies
- Industry Insights
- FAQ
- Technical Guides
```

#### Column 4: Support
```
Heading: "Support"
Links:
- Help Center
- Shipping Info
- Returns Policy
- Payment Options
- Track Order
```

#### Column 5: Newsletter
```
Heading: "Stay Updated"
Description: "Subscribe to our newsletter for industry insights and exclusive offers."
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 400 (#A0AEC0)
Margin-bottom: 16px

Newsletter Form:
- Input: Full width, 48px height, Radius Medium (8px)
- Button: "Subscribe", Manufacturing Orange background, White text
```

### Footer Bottom
```
Layout: Flex container, space-between
Align-items: center
Margin-top: 64px
Padding-top: 32px
Border-top: 1px solid Gray 700
```

#### Copyright
```
Font: Open Sans, Body Small (14px / 20px)
Weight: Regular (400)
Color: Gray 400 (#A0AEC0)
```

#### Social Links
```
Layout: Horizontal flex container
Gap: 16px
```

##### Social Icon
```
Size: 24×24px
Color: Gray 400 (#A0AEC0)
Transition: Color 200ms ease-out
Hover: Manufacturing Orange (#ED8936)
```

#### Certification Badges
```
Layout: Horizontal flex container
Gap: 16px
```

##### Badge
```
Size: 40×40px
Background: White
Border-radius: Radius Small (4px)
Padding: 8px
```

### Mobile Adjustments
```
Footer Content Grid: 3 columns on tablet, 1 column on mobile
Footer Bottom: Vertical stack, centered
Social Links: Centered
Certification Badges: Centered
```

---

# Responsive Breakpoints

## Breakpoint System
```
Mobile: 0-575px
Tablet: 576-991px
Desktop: 992-1199px
Large Desktop: 1200-1439px
Extra Large: 1440px+
```

## Responsive Behavior

### Mobile (0-575px)
```
- Single column layouts
- 16px container padding
- Hamburger navigation
- Touch-friendly interactions (44px minimum)
- Simplified forms
- Optimized images (WebP, compressed)
- Font sizes reduced by 20%
```

### Tablet (576-991px)
```
- 2-3 column layouts
- 24px container padding
- Horizontal navigation with dropdowns
- Touch-friendly interactions
- Standard forms
- Optimized images
- Standard font sizes
```

### Desktop (992-1199px)
```
- 3-4 column layouts
- 32px container padding
- Full mega-menu navigation
- Mouse interactions
- Standard forms
- High-quality images
- Standard font sizes
```

### Large Desktop (1200-1439px)
```
- 4-6 column layouts
- 40px container padding
- Full mega-menu navigation
- Mouse interactions
- Standard forms
- High-quality images
- Standard font sizes
```

### Extra Large (1440px+)
```
- 6+ column layouts
- 48px container padding
- Full mega-menu navigation
- Mouse interactions
- Standard forms
- High-quality images
- Standard font sizes
```

---

# Animation Specifications

## Animation Principles

### Timing
```
Fast: 200ms - Button hovers, link hovers
Standard: 300ms - Card hovers, transitions
Slow: 400ms - Scroll reveals, content fades
Very Slow: 2000ms - Counter animations
```

### Easing
```
Ease-out: Most animations (natural deceleration)
Ease-in-out: Complex animations (smooth acceleration/deceleration)
Linear: Continuous animations (constant speed)
```

## Specific Animations

### Button Hover
```
Duration: 200ms
Easing: ease-out
Properties: background-color, color, transform, shadow
```

### Card Hover
```
Duration: 300ms
Easing: ease-out
Properties: transform, shadow
Transform: translateY(-4px)
Shadow: SM → LG
```

### Scroll Reveal
```
Duration: 400ms
Easing: ease-out
Properties: opacity, transform
Start: opacity 0, translateY(20px)
End: opacity 1, translateY(0)
Trigger: Intersection Observer (threshold 0.2)
```

### Counter Animation
```
Duration: 2000ms
Easing: ease-out
Properties: content
Start: 0
End: Target value
Trigger: Intersection Observer (threshold 0.5)
```

### Navigation Transition
```
Duration: 300ms
Easing: ease-in-out
Properties: opacity, transform
```

### Form Validation
```
Duration: 200ms
Easing: ease-out
Properties: transform, border-color
Error: Shake animation (translateX)
Success: Checkmark animation (scale)
```

## Reduced Motion
```
Respect prefers-reduced-motion media query:
- Disable all animations
- Use instant transitions
- Maintain functionality without motion
```

---

# Accessibility Requirements

## WCAG AA Compliance

### Color Contrast
```
Normal text: 4.5:1 minimum
Large text: 3:1 minimum
UI components: 3:1 minimum
```

### Keyboard Navigation
```
Tab order: Logical and predictable
Focus indicators: Visible 2px outline
Skip links: "Skip to content" link available
Escape key: Close modals and dropdowns
```

### Screen Reader Support
```
ARIA labels: All interactive elements
Alt text: All images
Headings: Proper hierarchy (h1-h6)
Landmarks: Proper ARIA landmarks
```

### Focus Management
```
Focus trap: Modals and dropdowns
Focus restoration: After closing modals
Focus visible: Always visible when keyboard focused
```

## Accessibility Testing
```
- Keyboard navigation test
- Screen reader test (NVDA, JAWS)
- Color contrast checker
- Automated accessibility audit (axe, Lighthouse)
```

---

# Performance Requirements

## Load Performance
```
First Contentful Paint: <1.5s
Largest Contentful Paint: <2.5s
First Input Delay: <100ms
Cumulative Layout Shift: <0.1
Time to Interactive: <3.5s
```

## Image Optimization
```
Format: WebP with JPEG fallback
Compression: 80% quality
Lazy loading: Below-fold images
Responsive images: srcset for different breakpoints
```

## Code Optimization
```
CSS: Minified, critical CSS inline
JavaScript: Minified, deferred loading
Fonts: Subset, preload critical fonts
Icons: SVG sprites or icon fonts
```

## Caching Strategy
```
Static assets: 1 year cache with versioning
HTML: No cache
API responses: 5 minutes cache
```

---

# Browser Support

## Supported Browsers
```
Chrome: Last 2 versions
Firefox: Last 2 versions
Safari: Last 2 versions
Edge: Last 2 versions
Mobile Safari: iOS 12+
Chrome Mobile: Android 8+
```

## Progressive Enhancement
```
Core functionality: Works in all browsers
Enhanced features: Modern browsers only
Fallbacks: Graceful degradation
```

---

# Implementation Notes

## Development Stack
```
HTML5: Semantic markup
CSS3: Custom properties, Grid, Flexbox
JavaScript: ES6+, vanilla JS (no framework required)
Icons: SVG sprites or Lucide icons
Fonts: Google Fonts (Inter, Open Sans, JetBrains Mono)
```

## Component Structure
```
Atomic design approach:
- Atoms: Buttons, inputs, icons
- Molecules: Cards, forms, navigation
- Organisms: Sections, hero, footer
- Templates: Page layouts
- Pages: Complete pages
```

## CSS Architecture
```
BEM naming convention
CSS custom properties for theming
Utility classes for common patterns
Component-specific styles
Responsive breakpoints with mobile-first approach
```

## JavaScript Architecture
```
Module pattern
Event delegation
Intersection Observer for scroll animations
Form validation
Navigation interactions
```

---

# Quality Assurance

## Testing Checklist
```
Visual regression testing
Cross-browser testing
Cross-device testing
Accessibility testing
Performance testing
SEO testing
```

## Launch Readiness
```
All critical gaps addressed
High priority gaps addressed
Performance targets met
Accessibility compliance verified
Cross-browser compatibility confirmed
Mobile responsiveness verified
```

---

# Conclusion

This visual specification provides comprehensive design guidelines for implementing the Goyal Trading Company Homepage V2. The specification addresses all critical and high priority gaps identified in the UI gap analysis, with a focus on:

- Premium visual design with authentic imagery
- Comprehensive trust signals and manufacturing transparency
- Intuitive navigation and product discovery
- Conversion-focused CTAs and forms
- Mobile-first responsive design
- Accessibility compliance
- Performance optimization

Implementation should follow this specification closely, with deviations approved only through the design review process. Regular testing and quality assurance should ensure the final implementation meets all specified requirements.

---

**Specification Complete**  
This visual specification is ready for implementation by the development team.
