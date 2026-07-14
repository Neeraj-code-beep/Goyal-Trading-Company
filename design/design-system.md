# Design System
## Goyal Trading Company - Component Library & Visual Guidelines

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Design System for Implementation

---

# Color Palette

## Primary Colors

### Deep Navy Blue
- **Hex:** #1A365D
- **RGB:** 26, 54, 93
- **Purpose:** Primary brand color for headers, navigation, key elements
- **Usage:** 
  - Navigation links
  - Page titles and headings
  - Primary text
  - Links
  - Footer background
- **Variants:**
  - Light: #2C5282 (hover state)
  - Darker: #1A365D (base)
  - Lightest: #EBF8FF (backgrounds)

### Industrial Grey
- **Hex:** #4A5568
- **RGB:** 74, 85, 104
- **Purpose:** Secondary color for supporting elements, body text
- **Usage:**
  - Body text
  - Secondary text
  - Borders
  - Supporting icons
- **Variants:**
  - Light: #718096 (hover state)
  - Darker: #2D3748 (primary text)
  - Lightest: #F7FAFC (backgrounds)

## Accent Colors

### Manufacturing Orange
- **Hex:** #ED8936
- **RGB:** 237, 137, 54
- **Purpose:** Primary CTA color, action-oriented elements
- **Usage:**
  - Primary buttons
  - CTA buttons
  - Accent icons
  - Price highlights
  - Urgency indicators
- **Variants:**
  - Light: #F6AD55 (hover state)
  - Darker: #DD6B20 (active state)
  - Darkest: #C05621 (pressed state)
  - Lightest: #FEEBC8 (backgrounds)

### Quality Green
- **Hex:** #48BB78
- **RGB:** 72, 187, 120
- **Purpose:** Success indicators, trust signals, certification badges
- **Usage:**
  - Success messages
  - In-stock indicators
  - Certification badges
  - Quality metrics
  - Positive feedback
- **Variants:**
  - Light: #68D391 (hover state)
  - Darker: #38A169 (active state)
  - Lightest: #C6F6D5 (backgrounds)

## Neutral Colors

### Clean White
- **Hex:** #FFFFFF
- **RGB:** 255, 255, 255
- **Purpose:** Primary background color
- **Usage:**
  - Page backgrounds
  - Card backgrounds
  - Button backgrounds (secondary)
  - Text on dark backgrounds

### Light Grey
- **Hex:** #F7FAFC
- **RGB:** 247, 250, 252
- **Purpose:** Secondary background color
- **Usage:**
  - Section backgrounds
  - Card backgrounds (service cards)
  - Form backgrounds
  - Hover states

### Medium Grey
- **Hex:** #E2E8F0
- **RGB:** 226, 232, 240
- **Purpose:** Border color, divider
- **Usage:**
  - Card borders
  - Input borders
  - Dividers
  - Separator lines

### Dark Grey
- **Hex:** #2D3748
- **RGB:** 45, 55, 72
- **Purpose:** Primary text color
- **Usage:**
  - Body text
  - Card titles
  - Form labels
  - Navigation text

## Semantic Colors

### Success
- **Hex:** #48BB78
- **Purpose:** Success states, positive feedback
- **Usage:** Success messages, in-stock indicators, quality metrics

### Warning
- **Hex:** #ECC94B
- **Purpose:** Warning states, limited capacity
- **Usage:** Warning messages, limited capacity indicators, attention needed

### Error
- **Hex:** #F56565
- **Purpose:** Error states, out-of-stock
- **Usage:** Error messages, out-of-stock indicators, validation errors

### Info
- **Hex:** #4299E1
- **Purpose:** Information states
- **Usage:** Info messages, informational badges, help text

## Color Usage Rules

### Contrast Requirements
- **Normal text:** Minimum 4.5:1 contrast ratio against background
- **Large text (18px+):** Minimum 3:1 contrast ratio against background
- **UI components:** Minimum 3:1 contrast ratio against background
- **Focus indicators:** Visible focus states with 3:1 contrast

### Color Hierarchy
1. **Primary:** Deep Navy Blue (#1A365D) - most important elements
2. **Accent:** Manufacturing Orange (#ED8936) - CTAs and actions
3. **Secondary:** Industrial Grey (#4A5568) - supporting elements
4. **Neutral:** White/Grey - backgrounds and borders

### Accessibility
- All color combinations meet WCAG AA standards
- Color is not used as the only indicator of meaning
- Focus states have visible indicators
- Text remains readable at 200% zoom

---

# Typography Scale

## Font Families

### Primary Typeface: Inter
- **Usage:** Headings, navigation, UI elements
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Style:** Modern sans-serif
- **Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Secondary Typeface: Open Sans
- **Usage:** Body text, long-form content
- **Weights:** 400 (Regular), 600 (Semi-Bold)
- **Style:** Humanist sans-serif
- **Fallback:** "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

### Technical Typeface: JetBrains Mono
- **Usage:** Technical data, specifications, code
- **Weights:** 400 (Regular)
- **Style:** Monospace
- **Fallback:** "Courier New", Courier, monospace

## Type Scale

### H1 - Page Title
- **Font Size:** 40px (Desktop), 32px (Tablet), 28px (Mobile)
- **Font Weight:** 700 (Bold)
- **Line Height:** 1.2
- **Letter Spacing:** -0.02em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Main page title, hero headline
- **Mobile Behavior:** Scales down to 28px on mobile

### H2 - Section Title
- **Font Size:** 32px (Desktop), 28px (Tablet), 24px (Mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 1.3
- **Letter Spacing:** -0.01em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Section headers, card titles
- **Mobile Behavior:** Scales down to 24px on mobile

### H3 - Subsection Title
- **Font Size:** 24px (Desktop), 20px (Tablet), 18px (Mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Subsection headers, feature titles
- **Mobile Behavior:** Scales down to 18px on mobile

### H4 - Card Title
- **Font Size:** 18px (Desktop), 16px (Tablet), 16px (Mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Product names, equipment names
- **Mobile Behavior:** Remains 16px on mobile

### Body Text
- **Font Size:** 16px (Desktop), 15px (Tablet), 14px (Mobile)
- **Font Weight:** 400 (Regular)
- **Line Height:** 1.5
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Descriptions, general content
- **Mobile Behavior:** Scales down to 14px on mobile

### Small Text
- **Font Size:** 14px (Desktop), 13px (Tablet), 12px (Mobile)
- **Font Weight:** 400 (Regular)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Industrial Grey (#4A5568)
- **Usage:** Captions, labels, metadata
- **Mobile Behavior:** Scales down to 12px on mobile

### Technical Data
- **Font Size:** 14px (Desktop), 13px (Tablet), 12px (Mobile)
- **Font Weight:** 400 (Regular)
- **Font Family:** JetBrains Mono (monospace)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Color:** Dark Grey (#2D3748)
- **Usage:** Specifications, metrics, tolerances
- **Mobile Behavior:** Scales down to 12px on mobile

### Navigation Text
- **Font Size:** 14px (Desktop), 13px (Tablet), 12px (Mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 1.4
- **Letter Spacing:** 0.5px
- **Text Transform:** Uppercase
- **Color:** Deep Navy Blue (#1A365D)
- **Usage:** Navigation links, menu items
- **Mobile Behavior:** Scales down to 12px on mobile

### CTA Text
- **Font Size:** 16px (Desktop), 15px (Tablet), 14px (Mobile)
- **Font Weight:** 600 (Semi-Bold)
- **Line Height:** 1.4
- **Letter Spacing:** 0em
- **Text Transform:** Uppercase (buttons only)
- **Color:** White (on buttons), Manufacturing Orange (links)
- **Usage:** Button text, action links
- **Mobile Behavior:** Scales down to 14px on mobile

## Typography Rules

### Hierarchy
- Maximum 3 typefaces per page
- Consistent hierarchy across all pages
- Clear visual distinction between levels
- Logical heading structure (H1-H6)

### Spacing
- Line height: 1.5 for body text
- Paragraph spacing: 16px
- Heading spacing: 24px below
- List spacing: 8px between items

### Responsive
- Typography scales at breakpoints
- Minimum readable size: 14px on mobile
- Line height adjusts for readability
- Letter spacing adjusts for readability

### Accessibility
- Scalable to 200% without loss of content
- High contrast ratios (4.5:1 minimum)
- Clear visual hierarchy
- Consistent spacing

---

# Spacing System (8px Grid)

## Spacing Scale

### XS - 4px
- **Usage:** Tight spacing between related elements
- **Examples:** Icon and text, label and input, badge padding

### SM - 8px
- **Usage:** Small spacing between related elements
- **Examples:** List items, small gaps, icon spacing

### MD - 16px
- **Usage:** Standard spacing between elements
- **Examples:** Form field spacing, card padding, button padding

### LG - 24px
- **Usage:** Large spacing between sections
- **Examples:** Section spacing, card spacing, element grouping

### XL - 32px
- **Usage:** Extra large spacing between major sections
- **Examples:** Section padding, major element spacing

### 2XL - 48px
- **Usage:** Very large spacing between major sections
- **Examples:** Section padding (mobile), major section separation

### 3XL - 64px
- **Usage:** Maximum spacing between major sections
- **Examples:** Section padding (tablet), hero padding

### 4XL - 96px
- **Usage:** Maximum spacing for major sections
- **Examples:** Section padding (desktop), hero padding

## Spacing Usage

### Element Spacing
- **Button padding:** 12px vertical, 24px horizontal (MD, LG)
- **Card padding:** 24px (LG)
- **Form field spacing:** 16px (MD)
- **Navigation item spacing:** 24px (LG)
- **List item spacing:** 8px (SM)

### Section Spacing
- **Desktop:** 80px between sections (4XL)
- **Tablet:** 60px between sections (3XL)
- **Mobile:** 40px between sections (2XL)

### Within Sections
- **Desktop:** 60px (3XL)
- **Tablet:** 40px (2XL)
- **Mobile:** 30px (XL)

### Grid Gaps
- **Desktop:** 24px (LG)
- **Tablet:** 20px (between LG and XL)
- **Mobile:** 16px (MD)

## Spacing Principles

### Consistency
- Use spacing scale consistently
- Avoid arbitrary spacing values
- Maintain consistent rhythm
- Use multiples of 8px

### Responsive
- Scale spacing at breakpoints
- Mobile: 50-70% of desktop spacing
- Tablet: 80% of desktop spacing
- Desktop: Full spacing

### Visual Hierarchy
- Tighter spacing for related elements
- Looser spacing for section separation
- Consistent spacing within components
- Logical grouping through spacing

---

# Border Radius

## Border Radius Scale

### None - 0px
- **Usage:** Sharp edges, technical elements
- **Examples:** Tables, technical data cards, badges

### Small - 4px
- **Usage:** Subtle rounding, professional look
- **Examples:** Buttons, inputs, small cards

### Medium - 8px
- **Usage:** Standard rounding, modern look
- **Examples:** Cards, modals, images

### Large - 16px
- **Usage:** Heavy rounding, friendly look
- **Examples:** Large cards, hero sections, team photos

### Circle - 50%
- **Usage:** Circular elements
- **Examples:** Team photos, avatars, badges

## Border Radius Usage

### Buttons
- **Primary/Secondary:** 4px (Small)
- **Tertiary:** 4px (Small)
- **Icon buttons:** 50% (Circle)

### Inputs
- **Text inputs:** 4px (Small)
- **Textareas:** 4px (Small)
- **Select dropdowns:** 4px (Small)

### Cards
- **Product cards:** 8px (Medium)
- **Service cards:** 8px (Medium)
- **Testimonial cards:** 8px (Medium)
- **Team cards:** 50% (Circle for photos)

### Images
- **Product images:** 8px (Medium)
- **Factory images:** 8px (Medium)
- **Team photos:** 50% (Circle)
- **Equipment images:** 8px (Medium)

### Other Elements
- **Badges:** 4px (Small)
- **Chips:** 16px (Large)
- **Tags:** 4px (Small)
- **Modals:** 8px (Medium)

---

# Shadows

## Shadow Scale

### None
- **Box Shadow:** none
- **Usage:** Flat elements, no elevation

### Small
- **Box Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Usage:** Subtle elevation, cards at rest
- **Hover:** 0 4px 8px rgba(0, 0, 0, 0.15)

### Medium
- **Box Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Usage:** Standard elevation, cards, modals
- **Hover:** 0 8px 12px rgba(0, 0, 0, 0.15)

### Large
- **Box Shadow:** 0 8px 16px rgba(0, 0, 0, 0.1)
- **Usage:** High elevation, modals, dropdowns
- **Hover:** 0 12px 24px rgba(0, 0, 0, 0.15)

### Extra Large
- **Box Shadow:** 0 16px 32px rgba(0, 0, 0, 0.1)
- **Usage:** Maximum elevation, tooltips, popovers

## Shadow Usage

### Cards
- **At rest:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)
- **Hover:** 0 4px 8px rgba(0, 0, 0, 0.15) (Small hover)

### Buttons
- **At rest:** none
- **Hover:** 0 4px 8px rgba(0, 0, 0, 0.15) (Small hover)
- **Active:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)

### Modals
- **Default:** 0 8px 16px rgba(0, 0, 0, 0.1) (Large)

### Dropdowns
- **Default:** 0 4px 6px rgba(0, 0, 0, 0.1) (Medium)

### Navigation
- **Sticky:** 0 2px 8px rgba(0, 0, 0, 0.1) (Small with blur)

## Shadow Principles

### Elevation Hierarchy
- Higher elevation = larger shadow
- Consistent elevation for similar elements
- Hover increases elevation
- Active decreases elevation

### Performance
- Use GPU-accelerated properties
- Avoid box-shadow on animated elements
- Use transform for elevation changes
- Optimize for 60fps

---

# Containers

## Container Sizes

### XS Container
- **Max Width:** 320px
- **Usage:** Mobile-first containers, small components
- **Padding:** 16px (MD)

### SM Container
- **Max Width:** 480px
- **Usage:** Small content containers, forms
- **Padding:** 24px (LG)

### MD Container
- **Max Width:** 640px
- **Usage:** Medium content containers, blog posts
- **Padding:** 32px (XL)

### LG Container
- **Max Width:** 960px
- **Usage:** Large content containers, feature sections
- **Padding:** 48px (2XL)

### XL Container
- **Max Width:** 1200px
- **Usage:** Maximum content containers, full-width sections
- **Padding:** 64px (3XL)

### Full Width
- **Max Width:** 100%
- **Usage:** Full-width sections, hero sections
- **Padding:** 80px (4XL)

## Container Usage

### Page Content
- **Desktop:** XL Container (1200px max)
- **Tablet:** LG Container (960px max)
- **Mobile:** Full Width (100%)

### Section Content
- **Desktop:** LG Container (960px max)
- **Tablet:** MD Container (640px max)
- **Mobile:** Full Width (100%)

### Component Containers
- **Cards:** No max width, responsive
- **Modals:** SM Container (480px max)
- **Forms:** SM Container (480px max)

---

# Max Width

## Max Width Values

### Text Content
- **Paragraphs:** 70ch (approximately 700px)
- **Headings:** No max width
- **Lists:** 60ch (approximately 600px)

### Components
- **Buttons:** No max width (except full-width buttons)
- **Inputs:** No max width
- **Cards:** No max width
- **Modals:** 480px (SM Container)

### Sections
- **Hero:** 1000px
- **Feature sections:** 960px
- **Content sections:** 960px
- **Footer:** 1200px

## Max Width Usage

### Readability
- Limit text width for optimal reading
- 70ch for paragraphs (45-75 characters)
- 60ch for lists
- No limit for headings

### Responsive
- Scale max width at breakpoints
- Mobile: 100% width
- Tablet: 80% of desktop max
- Desktop: Full max width

---

# Grid System

## Grid Columns

### Desktop Grid
- **Columns:** 12 columns
- **Max Width:** 1200px
- **Gutter:** 24px (LG)
- **Margins:** Auto

### Tablet Grid
- **Columns:** 8 columns
- **Max Width:** 768px
- **Gutter:** 16px (MD)
- **Margins:** 24px (LG)

### Mobile Grid
- **Columns:** 4 columns
- **Max Width:** 100%
- **Gutter:** 16px (MD)
- **Margins:** 16px (MD)

## Grid Usage

### Product Grid
- **Desktop:** 4 columns (3 columns each)
- **Tablet:** 2 columns (4 columns each)
- **Mobile:** 1 column (4 columns)

### Feature Grid
- **Desktop:** 3 columns (4 columns each)
- **Tablet:** 2 columns (4 columns each)
- **Mobile:** 1 column (4 columns)

### Content Grid
- **Desktop:** 2 columns (6 columns each)
- **Tablet:** 2 columns (4 columns each)
- **Mobile:** 1 column (4 columns)

## Grid Behavior

### Responsive
- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns
- Auto-stacking on mobile

### Flexibility
- Columns can span multiple grid units
- Consistent gutter spacing
- Auto margins for centering
- Responsive breakpoints

---

# Button Variants

## Primary Button

### Visual Style
- **Background:** Manufacturing Orange (#ED8936)
- **Text:** White (#FFFFFF)
- **Border:** None
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px

### Purpose
- Primary call-to-action
- Most important action on page
- Conversions and key interactions

### Usage Rules
- Use for primary CTAs only
- One primary button per section
- Place prominently in layout
- Use for high-value actions

### Hover State
- **Background:** #DD6B20 (Darker Orange)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 200ms ease-out

### Active State
- **Background:** #C05621 (Darkest Orange)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Background:** #CBD5E0 (Light Grey)
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Mobile Behavior
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full width:** On mobile for primary CTAs
- **Touch target:** Minimum 44px height

---

## Secondary Button

### Visual Style
- **Background:** Transparent
- **Text:** Deep Navy Blue (#1A365D)
- **Border:** 2px solid Deep Navy Blue (#1A365D)
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px

### Purpose
- Secondary call-to-action
- Alternative actions
- Less important interactions

### Usage Rules
- Use for secondary actions
- Multiple secondary buttons allowed
- Place near primary button
- Use for alternative paths

### Hover State
- **Background:** #2C5282 (Light Navy)
- **Text:** White (#FFFFFF)
- **Border Color:** #2C5282 (Light Navy)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 200ms ease-out

### Active State
- **Background:** #1A365D (Deep Navy)
- **Text:** White (#FFFFFF)
- **Border Color:** #1A365D (Deep Navy)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Background:** Transparent
- **Text:** #A0AEC0 (Muted Grey)
- **Border Color:** #CBD5E0 (Light Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Mobile Behavior
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full width:** On mobile when stacked
- **Touch target:** Minimum 44px height

---

## Tertiary Button

### Visual Style
- **Background:** Transparent
- **Text:** Industrial Grey (#4A5568)
- **Border:** None
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 24px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Text Transform:** None
- **Letter Spacing:** 0em

### Purpose
- Tertiary actions
- Link-like buttons
- Low-priority interactions

### Usage Rules
- Use for low-priority actions
- Multiple tertiary buttons allowed
- Use for navigation and links
- Use for less important actions

### Hover State
- **Text:** #2D3748 (Darker Grey)
- **Text Decoration:** Underline
- **Transform:** None
- **Transition:** 200ms ease-out

### Active State
- **Text:** #1A365D (Deep Navy)
- **Text Decoration:** Underline
- **Transform:** None
- **Transition:** 150ms ease-out

### Disabled State
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Mobile Behavior
- **Padding:** 14px vertical, 28px horizontal
- **Font Size:** 14px
- **Full width:** On mobile when stacked
- **Touch target:** Minimum 44px height

---

## Icon Button

### Visual Style
- **Background:** Transparent
- **Icon:** Manufacturing Orange (#ED8936) or Deep Navy Blue (#1A365D)
- **Border:** None
- **Border Radius:** 50% (Circle)
- **Padding:** 8px
- **Icon Size:** 24px

### Purpose
- Icon-only actions
- Compact interactions
- Tooltips and toggles

### Usage Rules
- Use for icon-only actions
- Include tooltip for accessibility
- Use with clear icon meaning
- Minimum 44px touch target

### Hover State
- **Background:** #F7FAFC (Light Grey)
- **Icon Color:** #DD6B20 (Darker Orange) or #2C5282 (Light Navy)
- **Transform:** Scale 1.1
- **Transition:** 200ms ease-out

### Active State
- **Background:** #EDF2F7 (Medium Grey)
- **Icon Color:** #C05621 (Darkest Orange) or #1A365D (Deep Navy)
- **Transform:** Scale 0.95
- **Transition:** 150ms ease-out

### Disabled State
- **Icon Color:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Mobile Behavior
- **Padding:** 12px
- **Icon Size:** 24px
- **Touch target:** Minimum 44px

---

## Full Width Button

### Visual Style
- **Background:** Manufacturing Orange (#ED8936)
- **Text:** White (#FFFFFF)
- **Border:** None
- **Border Radius:** 4px (Small)
- **Padding:** 14px vertical
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Width:** 100%

### Purpose
- Mobile primary actions
- Form submissions
- Card actions

### Usage Rules
- Use on mobile for primary CTAs
- Use in forms for submission
- Use in cards for actions
- Desktop: use standard button

### Hover State
- **Background:** #DD6B20 (Darker Orange)
- **Transform:** Scale 1.02
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 200ms ease-out

### Active State
- **Background:** #C05621 (Darkest Orange)
- **Transform:** Scale 0.98
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Background:** #CBD5E0 (Light Grey)
- **Text:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6
- **No hover/active states**

### Mobile Behavior
- Always full width on mobile
- Touch target: Minimum 44px height

---

# Input Styles

## Text Input

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 16px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Placeholder:** Industrial Grey (#4A5568)
- **Height:** 44px minimum

### Purpose
- Single-line text input
- Form fields
- User input

### Usage Rules
- Use for single-line text
- Include label above input
- Include placeholder text
- Validate on blur

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms ease-out

### Error State
- **Border Color:** #F56565 (Error Red)
- **Box Shadow:** 0 0 0 3px rgba(245, 101, 101, 0.1)
- **Error Message:** Below input, #F56565, 14px

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Color:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 14px vertical, 16px horizontal
- **Font Size:** 16px (prevents zoom on iOS)
- **Height:** 48px minimum
- **Touch target:** Minimum 44px

---

## Textarea

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 16px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Placeholder:** Industrial Grey (#4A5568)
- **Min Height:** 120px
- **Resize:** Vertical

### Purpose
- Multi-line text input
- Long-form content
- Descriptions

### Usage Rules
- Use for multi-line text
- Include label above input
- Include placeholder text
- Validate on blur

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms ease-out

### Error State
- **Border Color:** #F56565 (Error Red)
- **Box Shadow:** 0 0 0 3px rgba(245, 101, 101, 0.1)
- **Error Message:** Below input, #F56565, 14px

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Color:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 14px vertical, 16px horizontal
- **Font Size:** 16px (prevents zoom on iOS)
- **Min Height:** 150px
- **Touch target:** Minimum 44px

---

## Select Dropdown

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Padding:** 12px vertical, 16px horizontal
- **Font Size:** 16px
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Height:** 44px minimum

### Purpose
- Single selection from options
- Form fields
- User selection

### Usage Rules
- Use for single selection
- Include label above input
- Include default option
- Validate on blur

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms ease-out

### Error State
- **Border Color:** #F56565 (Error Red)
- **Box Shadow:** 0 0 0 3px rgba(245, 101, 101, 0.1)
- **Error Message:** Below input, #F56565, 14px

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Color:** #A0AEC0 (Muted Grey)
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 14px vertical, 16px horizontal
- **Font Size:** 16px (prevents zoom on iOS)
- **Height:** 48px minimum
- **Touch target:** Minimum 44px

---

## Checkbox

### Visual Style
- **Border:** 2px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Size:** 20px
- **Background:** White (#FFFFFF)

### Purpose
- Multiple selection
- Form fields
- User agreement

### Usage Rules
- Use for multiple selection
- Include label next to checkbox
- Group related checkboxes
- Validate on submit

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms ease-out

### Checked State
- **Background:** #ED8936 (Manufacturing Orange)
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Checkmark:** White (#FFFFFF)
- **Transform:** Scale 1.1
- **Transition:** 200ms ease-out

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6

### Mobile Behavior
- **Size:** 24px
- **Touch target:** Minimum 44px (including label)

---

## Radio Button

### Visual Style
- **Border:** 2px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 50% (Circle)
- **Size:** 20px
- **Background:** White (#FFFFFF)

### Purpose
- Single selection from options
- Form fields
- User selection

### Usage Rules
- Use for single selection
- Include label next to radio
- Group related radios
- Validate on submit

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 200ms ease-out

### Focus State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)
- **Outline:** None
- **Transition:** 200ms ease-out

### Checked State
- **Background:** #ED8936 (Manufacturing Orange)
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Dot:** White (#FFFFFF), 8px
- **Transform:** Scale 1.1
- **Transition:** 200ms ease-out

### Disabled State
- **Background:** #F7FAFC (Light Grey)
- **Border Color:** #E2E8F0 (Medium Grey)
- **Cursor:** not-allowed
- **Opacity:** 0.6

### Mobile Behavior
- **Size:** 24px
- **Touch target:** Minimum 44px (including label)

---

# Cards

## Product Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 24px (LG)
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)

### Purpose
- Display product information
- Product grid
- Product listings

### Usage Rules
- Use for product display
- Consistent aspect ratio
- Include product image
- Include technical specs

### Content Structure
- **Product Image:** 60% of card height, 4:5 aspect ratio
- **Product Title:** Bold, 16px, Deep Navy Blue
- **Technical Specs:** Regular, 14px, Industrial Grey, monospace
- **Price/MOQ:** Bold, accent color
- **CTA Button:** Full width, primary or secondary

### Hover State
- **Transform:** Lift 4px (translateY(-4px))
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 20px (between MD and LG)
- **Grid:** 1 column
- **Image:** Full width
- **CTA:** Full width button

---

## Service Card

### Visual Style
- **Background:** Light Grey (#F7FAFC)
- **Border:** None
- **Border Radius:** 8px (Medium)
- **Padding:** 32px (XL)
- **Shadow:** None

### Purpose
- Display service information
- Feature sections
- Value propositions

### Usage Rules
- Use for service display
- Include icon
- Include title and description
- Include link to details

### Content Structure
- **Icon:** 48px, Manufacturing Orange or Quality Green
- **Title:** Bold, 18px, Deep Navy Blue
- **Description:** Regular, 14px, Industrial Grey
- **Link:** Text link, Manufacturing Orange

### Hover State
- **Transform:** Lift 2px (translateY(-2px))
- **Background:** #EDF2F7 (Medium Grey)
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Lift 1px (translateY(-1px))
- **Background:** #E2E8F0 (Medium Grey)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 24px (LG)
- **Grid:** 1 column
- **Icon:** 40px
- **Full width**

---

## Testimonial Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 32px (XL)
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1) (Medium)

### Purpose
- Display client testimonials
- Social proof
- Trust building

### Usage Rules
- Use for testimonial display
- Include quote
- Include author information
- Include company logo

### Content Structure
- **Quote:** Italic, 16px, Dark Grey
- **Author:** Bold, 14px, Deep Navy Blue
- **Company:** Regular, 14px, Industrial Grey
- **Metrics:** Bold, accent color
- **Logo:** Grayscale, 60px width

### Hover State
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 8px 12px rgba(0, 0, 0, 0.15)
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Lift 1px (translateY(-1px))
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 24px (LG)
- **Grid:** 1 column
- **Quote:** 14px
- **Full width**

---

## Capability Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 24px (LG)
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)

### Purpose
- Display capability information
- Equipment showcase
- Technical data

### Usage Rules
- Use for capability display
- Include equipment image
- Include specifications
- Include capacity data

### Content Structure
- **Equipment Image:** 40%, square aspect ratio
- **Equipment Name:** Bold, 18px, Deep Navy Blue
- **Specifications:** Regular, 14px, monospace, Industrial Grey
- **Capacity:** Bold, success/warning color
- **Link:** Text link

### Hover State
- **Border Color:** #ED8936 (Manufacturing Orange)
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 300ms ease-out

### Active State
- **Border Color:** #DD6B20 (Darker Orange)
- **Transform:** Lift 1px (translateY(-1px))
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 20px (between MD and LG)
- **Grid:** 1 column
- **Image:** Full width
- **Full width**

---

## Team Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 24px (LG)
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)

### Purpose
- Display team member information
- Team showcase
- Human connection

### Usage Rules
- Use for team display
- Include team photo
- Include name and title
- Include contact information

### Content Structure
- **Photo:** Circular, 150px diameter
- **Name:** Bold, 18px, Deep Navy Blue
- **Title:** Regular, 14px, Industrial Grey
- **Contact:** Text link
- **Bio:** Regular, 13px, Industrial Grey

### Hover State
- **Transform:** Scale 1.05
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Scale 1.02
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 20px (between MD and LG)
- **Grid:** 1 column
- **Photo:** 120px diameter
- **Full width**

---

# Tables

## Standard Table

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Cell Padding:** 12px vertical, 16px horizontal
- **Header Background:** #F7FAFC (Light Grey)
- **Header Text:** Bold, 14px, Deep Navy Blue
- **Body Text:** Regular, 14px, Dark Grey
- **Border Collapse:** Collapse

### Purpose
- Display tabular data
- Technical specifications
- Data comparison

### Usage Rules
- Use for structured data
- Include clear headers
- Alternating row colors
- Responsive on mobile

### Hover State
- **Row Background:** #F7FAFC (Light Grey)
- **Transition:** 200ms ease-out

### Active State
- **Row Background:** #EDF2F7 (Medium Grey)
- **Transition:** 150ms ease-out

### Disabled State
- **Row Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Horizontal scroll:** On mobile
- **Sticky first column:** If applicable
- **Simplified view:** Card-based on very small screens

---

## Technical Data Table

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Cell Padding:** 12px vertical, 16px horizontal
- **Header Background:** #F7FAFC (Light Grey)
- **Header Text:** Bold, 14px, Deep Navy Blue
- **Body Text:** Regular, 14px, monospace, Dark Grey
- **Border Collapse:** Collapse

### Purpose
- Display technical specifications
- Equipment data
- Quality metrics

### Usage Rules
- Use for technical data
- Monospace font for values
- Clear labels
- Units included

### Hover State
- **Row Background:** #F7FAFC (Light Grey)
- **Transition:** 200ms ease-out

### Active State
- **Row Background:** #EDF2F7 (Medium Grey)
- **Transition:** 150ms ease-out

### Disabled State
- **Row Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Horizontal scroll:** On mobile
- **Sticky first column:** Label column
- **Simplified view:** Card-based on very small screens

---

# Badges

## Status Badge

### Visual Style
- **Padding:** 4px vertical, 12px horizontal
- **Border Radius:** 16px (Large)
- **Font Size:** 12px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase

### Purpose
- Display status information
- Quick status indicators
- State communication

### Usage Rules
- Use for status display
- Consistent color coding
- Clear meaning
- Accessible text

### Variants

#### Success Badge
- **Background:** #C6F6D5 (Light Green)
- **Text:** #276749 (Dark Green)
- **Usage:** In-stock, certified, approved

#### Warning Badge
- **Background:** #FEFCBF (Light Yellow)
- **Text:** #744210 (Dark Yellow)
- **Usage:** Limited capacity, attention needed

#### Error Badge
- **Background:** #FED7D7 (Light Red)
- **Text:** #742A2A (Dark Red)
- **Usage:** Out-of-stock, error, rejected

#### Info Badge
- **Background:** #BEE3F8 (Light Blue)
- **Text:** #2A4365 (Dark Blue)
- **Usage:** Information, pending, processing

### Hover State
- **Transform:** Scale 1.05
- **Transition:** 200ms ease-out

### Active State
- **Transform:** Scale 0.95
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 6px vertical, 14px horizontal
- **Font Size:** 11px
- **Touch target:** Minimum 32px height

---

## Certification Badge

### Visual Style
- **Padding:** 8px vertical, 16px horizontal
- **Border Radius:** 4px (Small)
- **Font Size:** 12px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Border:** 1px solid

### Purpose
- Display certification status
- Trust signals
- Compliance indicators

### Usage Rules
- Use for certification display
- Include verification link
- Include license number
- Include validity date

### Variants

#### Certified Badge
- **Background:** #C6F6D5 (Light Green)
- **Text:** #276749 (Dark Green)
- **Border:** #48BB78 (Quality Green)
- **Usage:** Certified, compliant

#### Pending Badge
- **Background:** #BEE3F8 (Light Blue)
- **Text:** #2A4365 (Dark Blue)
- **Border:** #4299E1 (Info Blue)
- **Usage:** Pending certification

#### Expired Badge
- **Background:** #FED7D7 (Light Red)
- **Text:** #742A2A (Dark Red)
- **Border:** #F56565 (Error Red)
- **Usage:** Expired certification

### Hover State
- **Transform:** Scale 1.05
- **Border Color:** Darker shade
- **Transition:** 200ms ease-out

### Active State
- **Transform:** Scale 0.95
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 10px vertical, 18px horizontal
- **Font Size:** 11px
- **Touch target:** Minimum 36px height

---

# Chips

## Filter Chip

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 16px (Large)
- **Padding:** 8px vertical, 16px horizontal
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)

### Purpose
- Filter selection
- Tag selection
- Multi-select

### Usage Rules
- Use for filter selection
- Clear selection state
- Include clear button
- Group related filters

### Default State
- **Background:** White (#FFFFFF)
- **Text:** Dark Grey (#2D3748)
- **Border:** 1px solid #E2E8F0 (Medium Grey)

### Selected State
- **Background:** #ED8936 (Manufacturing Orange)
- **Text:** White (#FFFFFF)
- **Border:** 1px solid #ED8936 (Manufacturing Orange)

### Hover State
- **Border Color:** #CBD5E0 (Light Grey)
- **Transform:** Scale 1.02
- **Transition:** 200ms ease-out

### Active State
- **Transform:** Scale 0.98
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 10px vertical, 18px horizontal
- **Font Size:** 13px
- **Touch target:** Minimum 40px height

---

## Input Chip

### Visual Style
- **Background:** #F7FAFC (Light Grey)
- **Border Radius:** 16px (Large)
- **Padding:** 6px vertical, 12px horizontal
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)

### Purpose
- Display selected values
- Tag display
- Multi-value input

### Usage Rules
- Use for selected values
- Include remove button
- Clear visual separation
- Accessible removal

### Default State
- **Background:** #F7FAFC (Light Grey)
- **Text:** Dark Grey (#2D3748)
- **Remove Icon:** Industrial Grey (#4A5568)

### Hover State
- **Background:** #EDF2F7 (Medium Grey)
- **Remove Icon:** #ED8936 (Manufacturing Orange)
- **Transition:** 200ms ease-out

### Active State
- **Background:** #E2E8F0 (Medium Grey)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **Remove Icon:** Hidden

### Mobile Behavior
- **Padding:** 8px vertical, 14px horizontal
- **Font Size:** 13px
- **Touch target:** Minimum 36px height

---

# Tags

## Standard Tag

### Visual Style
- **Background:** #F7FAFC (Light Grey)
- **Border Radius:** 4px (Small)
- **Padding:** 4px vertical, 8px horizontal
- **Font Size:** 12px
- **Font Weight:** 500 (Medium)

### Purpose
- Label items
- Categorize content
- Quick identification

### Usage Rules
- Use for labeling
- Consistent color coding
- Clear meaning
- Accessible text

### Variants

#### Default Tag
- **Background:** #F7FAFC (Light Grey)
- **Text:** Industrial Grey (#4A5568)

#### Primary Tag
- **Background:** #EBF8FF (Light Navy)
- **Text:** #2C5282 (Light Navy)

#### Accent Tag
- **Background:** #FEEBC8 (Light Orange)
- **Text:** #C05621 (Darkest Orange)

### Hover State
- **Transform:** Scale 1.05
- **Transition:** 200ms ease-out

### Active State
- **Transform:** Scale 0.95
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed

### Mobile Behavior
- **Padding:** 6px vertical, 10px horizontal
- **Font Size:** 11px
- **Touch target:** Minimum 28px height

---

# Navigation

## Primary Navigation

### Visual Style
- **Background:** White (#FFFFFF)
- **Border Bottom:** 1px solid #E2E8F0 (Medium Grey)
- **Height:** 80px
- **Logo:** Left aligned
- **Links:** Right aligned
- **CTA Button:** Prominent placement

### Purpose
- Main site navigation
- Page access
- User orientation

### Usage Rules
- Use on all pages
- Sticky on scroll
- Clear hierarchy
- Mobile hamburger

### Link Style
- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Text Transform:** Uppercase
- **Letter Spacing:** 0.5px
- **Color:** Deep Navy Blue (#1A365D)
- **Padding:** 12px vertical, 24px horizontal

### Hover State
- **Text Color:** #ED8936 (Manufacturing Orange)
- **Text Decoration:** Underline
- **Transition:** 200ms ease-out

### Active State
- **Text Color:** #ED8936 (Manufacturing Orange)
- **Text Decoration:** Underline
- **Border Bottom:** 2px solid #ED8936

### Sticky State
- **Background:** White (#FFFFFF) with 0.95 opacity
- **Shadow:** 0 2px 8px rgba(0, 0, 0, 0.1)
- **Transition:** 300ms ease-in-out

### Mobile Behavior
- **Hamburger menu:** Full-screen overlay
- **Background:** Deep Navy Blue (#1A365D)
- **Text:** White (#FFFFFF)
- **Large touch targets:** 44px minimum
- **Accordion-style:** Collapsible sections

---

## Mega Menu

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1) (Medium)
- **Grid Layout:** 4 columns
- **Padding:** 32px (XL)

### Purpose
- Complex navigation
- Product categories
- Quick access

### Usage Rules
- Use for complex navigation
- Clear visual hierarchy
- Visual previews (optional)
- Keyboard accessible

### Section Style
- **Title:** Bold, 14px, Deep Navy Blue
- **Links:** Regular, 14px, Dark Grey
- **Spacing:** 8px between links
- **Hover:** Manufacturing Orange

### Hover State
- **Link Color:** #ED8936 (Manufacturing Orange)
- **Transition:** 200ms ease-out

### Mobile Behavior
- **Accordion-style:** Collapsible sections
- **Full-width:** On mobile
- **Touch targets:** 44px minimum

---

## Breadcrumb Navigation

### Visual Style
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)
- **Color:** Industrial Grey (#4A5568)
- **Separator:** ">" symbol
- **Spacing:** 8px between items

### Purpose
- User orientation
- Page hierarchy
- Navigation path

### Usage Rules
- Use on inner pages
- Clear hierarchy
- Clickable links
- Current page not linked

### Link Style
- **Color:** Industrial Grey (#4A5568)
- **Text Decoration:** None

### Hover State
- **Color:** Deep Navy Blue (#1A365D)
- **Text Decoration:** Underline
- **Transition:** 200ms ease-out

### Current Page
- **Color:** Dark Grey (#2D3748)
- **Font Weight:** 600 (Semi-Bold)
- **Not linked**

### Mobile Behavior
- **Font Size:** 12px
- **Spacing:** 4px between items
- **Truncate:** Long paths truncate

---

# Footer

## Visual Style
- **Background:** Dark Grey (#2D3748)
- **Text Color:** White (#FFFFFF)
- **Padding:** 64px vertical (3XL)
- **Grid Layout:** 5 columns
- **Border Top:** 1px solid #4A5568 (Industrial Grey)

### Purpose
- Site information
- Navigation access
- Legal compliance
- Contact information

### Usage Rules
- Use on all pages
- Consistent layout
- Clear hierarchy
- Mobile stacking

### Section Style
- **Title:** Bold, 14px, White (#FFFFFF)
- **Links:** Regular, 14px, #A0AEC0 (Muted Grey)
- **Spacing:** 16px between links

### Link Hover State
- **Color:** White (#FFFFFF)
- **Text Decoration:** Underline
- **Transition:** 200ms ease-out

### Mobile Behavior
- **Grid:** 1 column
- **Padding:** 48px vertical (2XL)
- **Spacing:** 32px between sections
- **Full width**

---

# Accordions

## Standard Accordion

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 4px (Small)
- **Padding:** 16px vertical, 24px horizontal (MD, LG)

### Purpose
- Expandable content
- FAQ sections
- Information organization

### Usage Rules
- Use for expandable content
- Clear open/close indicators
- Smooth animations
- Keyboard accessible

### Header Style
- **Font Size:** 16px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Deep Navy Blue (#1A365D)
- **Icon:** Plus/minus indicator
- **Spacing:** 8px between icon and text

### Content Style
- **Font Size:** 14px
- **Font Weight:** 400 (Regular)
- **Color:** Dark Grey (#2D3748)
- **Line Height:** 1.5
- **Padding:** 16px top

### Default State
- **Icon:** Plus (+)
- **Content:** Hidden
- **Border Radius:** 4px (Small)

### Open State
- **Icon:** Minus (-)
- **Content:** Visible
- **Border Radius:** 4px top, 4px bottom
- **Animation:** Slide down, 300ms ease-out

### Hover State
- **Header Background:** #F7FAFC (Light Grey)
- **Transition:** 200ms ease-out

### Active State
- **Header Background:** #EDF2F7 (Medium Grey)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No interaction**

### Mobile Behavior
- **Padding:** 12px vertical, 20px horizontal
- **Font Size:** 14px (header), 13px (content)
- **Touch target:** Minimum 44px height

---

# Tabs

## Standard Tabs

### Visual Style
- **Background:** White (#FFFFFF)
- **Border Bottom:** 1px solid #E2E8F0 (Medium Grey)
- **Padding:** 16px horizontal (MD)

### Purpose
- Content switching
- Category filtering
- Information organization

### Usage Rules
- Use for content switching
- Clear active state
- Smooth transitions
- Keyboard accessible

### Tab Style
- **Font Size:** 14px
- **Font Weight:** 600 (Semi-Bold)
- **Color:** Industrial Grey (#4A5568)
- **Padding:** 12px vertical, 24px horizontal
- **Border Radius:** 4px top

### Default State
- **Color:** Industrial Grey (#4A5568)
- **Border Bottom:** None
- **Background:** Transparent

### Active State
- **Color:** Deep Navy Blue (#1A365D)
- **Border Bottom:** 2px solid #ED8936 (Manufacturing Orange)
- **Background:** Transparent

### Hover State
- **Color:** Deep Navy Blue (#1A365D)
- **Transition:** 200ms ease-out

### Active Hover State
- **Color:** #ED8936 (Manufacturing Orange)
- **Transition:** 200ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No interaction**

### Mobile Behavior
- **Font Size:** 13px
- **Padding:** 10px vertical, 20px horizontal
- **Horizontal scroll:** If many tabs
- **Touch target:** Minimum 44px height

---

# Product Cards

## Detailed Product Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 24px (LG)
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1) (Small)

### Purpose
- Detailed product display
- Product detail pages
- Featured products

### Usage Rules
- Use for detailed product info
- Multiple product angles
- Technical specifications
- Custom options

### Content Structure
- **Product Gallery:** 4-6 images, swipeable gallery
- **Product Title:** Bold, 24px, Deep Navy Blue
- **Technical Specs Table:** Monospace, 14px
- **Fabric Composition:** Regular, 14px, Dark Grey
- **GSM/Thread Count:** Monospace, 14px, accent color
- **Shrinkage:** Monospace, 14px, Industrial Grey
- **MOQ Information:** Bold, accent color
- **Price Ranges:** Bold, accent color, by quantity
- **Production Timeline:** Visual progress bar
- **Custom Options:** Expandable section
- **CTAs:** "Request Sample" (primary), "Request Quote" (secondary)

### Hover State
- **Transform:** Lift 4px (translateY(-4px))
- **Shadow:** 0 4px 8px rgba(0, 0, 0, 0.15)
- **Border Color:** #CBD5E0 (Light Grey)
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 20px (between MD and LG)
- **Gallery:** Swipeable, full width
- **Specs Table:** Horizontal scroll
- **CTAs:** Stacked, full width

---

# Testimonial Cards

## Detailed Testimonial Card

### Visual Style
- **Background:** White (#FFFFFF)
- **Border:** 1px solid #E2E8F0 (Medium Grey)
- **Border Radius:** 8px (Medium)
- **Padding:** 32px (XL)
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1) (Medium)

### Purpose
- Detailed testimonial display
- Case study preview
- Trust building

### Usage Rules
- Use for detailed testimonials
- Include quantifiable results
- Include company information
- Include client logo

### Content Structure
- **Quote:** Italic, 18px, Dark Grey
- **Author:** Bold, 16px, Deep Navy Blue
- **Title:** Regular, 14px, Industrial Grey
- **Company:** Bold, 14px, Deep Navy Blue
- **Location:** Regular, 13px, Industrial Grey
- **Metrics:** Bold, accent color, 14px
- **Client Since:** Regular, 13px, Industrial Grey
- **Logo:** Grayscale, 80px width
- **"Read Full Case Study" Link:** Text link

### Hover State
- **Transform:** Lift 2px (translateY(-2px))
- **Shadow:** 0 8px 12px rgba(0, 0, 0,0.15)
- **Logo:** Color reveal
- **Transition:** 300ms ease-out

### Active State
- **Transform:** Lift 1px (translateY(-1px))
- **Shadow:** 0 4px 6px rgba(0, 0, 0, 0.1)
- **Transition:** 150ms ease-out

### Disabled State
- **Opacity:** 0.6
- **Cursor:** not-allowed
- **No hover/active states**

### Mobile Behavior
- **Padding:** 24px (LG)
- **Quote:** 16px
- **Logo:** 60px width
- **Full width**

---

# CTA Sections

## Primary CTA Section

### Visual Style
- **Background:** Deep Navy Blue (#1A365D)
- **Text Color:** White (#FFFFFF)
- **Padding:** 80px vertical (4XL)
- **Text Alignment:** Center
- **Max Width:** 800px

### Purpose
- Primary conversion
- Section conversion
- Call-to-action

### Usage Rules
- Use for primary conversions
- Clear headline
- Single primary CTA
- Optional secondary CTA

### Content Structure
- **Headline:** Bold, 32px, White
- **Description:** Regular, 16px, #A0AEC0 (Muted Grey)
- **Primary CTA:** Manufacturing Orange button
- **Secondary CTA:** White outlined button
- **Spacing:** 32px between elements

### Hover State
- **CTA Buttons:** Standard button hover states
- **Transition:** 200ms ease-out

### Active State
- **CTA Buttons:** Standard button active states
- **Transition:** 150ms ease-out

### Mobile Behavior
- **Padding:** 60px vertical (3XL)
- **Headline:** 24px
- **Description:** 14px
- **CTAs:** Stacked, full width

---

## Secondary CTA Section

### Visual Style
- **Background:** Light Grey (#F7FAFC)
- **Text Color:** Dark Grey (#2D3748)
- **Padding:** 64px vertical (3XL)
- **Text Alignment:** Center
- **Max Width:** 800px

### Purpose
- Secondary conversion
- Section conversion
- Information access

### Usage Rules
- Use for secondary conversions
- Clear headline
- Single primary CTA
- Less prominent than primary

### Content Structure
- **Headline:** Bold, 28px, Deep Navy Blue
- **Description:** Regular, 16px, Industrial Grey
- **Primary CTA:** Manufacturing Orange button
- **Spacing:** 32px between elements

### Hover State
- **CTA Button:** Standard button hover state
- **Transition:** 200ms ease-out

### Active State
- **CTA Button:** Standard button active state
- **Transition:** 150ms ease-out

### Mobile Behavior
- **Padding:** 48px vertical (2XL)
- **Headline:** 24px
- **Description:** 14px
- **CTA:** Full width

---

## Tertiary CTA Section

### Visual Style
- **Background:** White (#FFFFFF)
- **Border Top:** 1px solid #E2E8F0 (Medium Grey)
- **Border Bottom:** 1px solid #E2E8F0 (Medium Grey)
- **Text Color:** Dark Grey (#2D3748)
- **Padding:** 48px vertical (2XL)
- **Text Alignment:** Center
- **Max Width:** 800px

### Purpose
- Tertiary conversion
- Section conversion
- Optional action

### Usage Rules
- Use for tertiary conversions
- Subtle headline
- Text link CTA
- Least prominent

### Content Structure
- **Headline:** Bold, 24px, Deep Navy Blue
- **Description:** Regular, 16px, Industrial Grey
- **CTA:** Text link, Manufacturing Orange
- **Spacing:** 24px between elements

### Hover State
- **CTA Link:** Standard link hover state
- **Transition:** 200ms ease-out

### Active State
- **CTA Link:** Standard link active state
- **Transition:** 150ms ease-out

### Mobile Behavior
- **Padding:** 40px vertical (XL)
- **Headline:** 20px
- **Description:** 14px
- **CTA:** Full width

---

# Component Usage Guidelines

## General Principles

### Consistency
- Use components consistently
- Follow defined specifications
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

#### Buttons
- **Primary:** Main action, high importance
- **Secondary:** Alternative action, medium importance
- **Tertiary:** Low importance, link-like
- **Icon:** Compact, icon-only action
- **Full Width:** Mobile primary actions

#### Cards
- **Product:** Product display and listing
- **Service:** Service and feature display
- **Testimonial:** Social proof and trust
- **Capability:** Technical data display
- **Team:** Team member display

#### Inputs
- **Text:** Single-line text input
- **Textarea:** Multi-line text input
- **Select:** Single selection from options
- **Checkbox:** Multiple selection
- **Radio:** Single selection from options

#### Navigation
- **Primary:** Main site navigation
- **Mega Menu:** Complex navigation with categories
- **Breadcrumb:** Page hierarchy and orientation

#### Other Components
- **Tables:** Tabular data display
- **Badges:** Status and certification display
- **Chips:** Filter and tag selection
- **Tags:** Label and categorization
- **Accordions:** Expandable content
- **Tabs:** Content switching
- **CTA Sections:** Conversion-focused sections

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

This design system provides a comprehensive framework for implementing the Goyal Trading Company website. All components are designed to support the brand's core principles of operational transparency, verifiability, and technical authority.

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
1. Core components (buttons, inputs, cards)
2. Navigation and layout
3. Specialized components (product cards, capability cards)
4. Interactive components (accordions, tabs)
5. CTA sections and conversion elements

This design system ensures consistency, scalability, and maintainability across all digital touchpoints while supporting the business objectives of lead generation and brand positioning.
