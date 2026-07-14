# Low-Fidelity Wireframes
## Goyal Trading Company - Layout & User Flow Specifications

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Wireframes for Implementation

---

# Wireframe Notes

**Purpose:** Define layout, hierarchy, spacing, and user flow without colors, branding, or final visuals.

**Notation:**
- `[ ]` = Component/Section
- `|` = Vertical separator
- `-` = Horizontal separator
- `>` = Hierarchy (parent > child)
- `*` = Repeated element
- `→` = User flow direction

**Grid System:**
- Desktop: 12-column grid, max-width 1200px
- Tablet: 8-column grid, max-width 768px
- Mobile: 4-column grid, full-width

---

# 1. Homepage

## Section Order
1. Announcement Bar
2. Sticky Navbar
3. Hero Section
4. Trust Statistics
5. Why Choose Goyal Trading Company
6. Product Categories
7. Featured Products
8. Manufacturing Process
9. Factory Infrastructure
10. Quality Assurance
11. Certifications & Awards
12. Industries Served
13. Export Presence
14. Client Logos
15. Testimonials
16. FAQ
17. Bulk Inquiry CTA
18. Contact Form
19. Google Maps
20. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Announcement Bar] (optional, dismissible)                 │
├─────────────────────────────────────────────────────────────┤
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: Request Quote] [CTA: View Capabilities]          │
│                                                             │
│              [Trust Signals: Badges + Metrics]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Trust Statistics]                             │
│                                                             │
│   [Stat 1]   [Stat 2]   [Stat 3]   [Stat 4]                │
│   [Icon]     [Icon]     [Icon]     [Icon]                   │
│   [Number]   [Number]   [Number]   [Number]                │
│   [Label]    [Label]    [Label]    [Label]                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│          [Why Choose Goyal Trading Company]                 │
│                                                             │
│     [Feature 1]   [Feature 2]   [Feature 3]                │
│     [Icon]        [Icon]        [Icon]                     │
│     [Title]       [Title]       [Title]                    │
│     [Description] [Description] [Description]               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Product Categories]                           │
│                                                             │
│   [Category 1] [Category 2] [Category 3]                   │
│   [Image]      [Image]      [Image]                        │
│   [Name]       [Name]       [Name]                         │
│   [Count]      [Count]      [Count]                        │
│   [Link]       [Link]       [Link]                         │
│                                                             │
│   [Category 4] [Category 5] [Category 6]                   │
│   [Image]      [Image]      [Image]                        │
│   [Name]       [Name]       [Name]                         │
│   [Count]      [Count]      [Count]                        │
│   [Link]       [Link]       [Link]                         │
│                                                             │
│                    [CTA: View All Products]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Featured Products]                            │
│                                                             │
│ [Product 1] [Product 2] [Product 3] [Product 4]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
│                    [CTA: View All Products]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Manufacturing Process]                        │
│                                                             │
│  [Step 1] → [Step 2] → [Step 3] → [Step 4] → [Step 5] → [Step 6]  │
│  [Icon]    [Icon]    [Icon]    [Icon]    [Icon]    [Icon]  │
│  [Number]  [Number]  [Number]  [Number]  [Number]  [Number]│
│  [Title]   [Title]   [Title]   [Title]   [Title]   [Title] │
│  [Desc]    [Desc]    [Desc]    [Desc]    [Desc]    [Desc] │
│                                                             │
│                    [CTA: View Detailed Process]            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Factory Infrastructure]                       │
│                                                             │
│  [Text Column]                    [Image Gallery]           │
│  [Equipment List]                 [Image 1] [Image 2]       │
│  [Table Format]                   [Image 3] [Image 4]       │
│  [Capacity Data]                                            │
│  [Progress Bars]                                            │
│                                                             │
│  [CTA: View All Equipment] [CTA: Schedule Factory Tour]     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Assurance]                            │
│                                                             │
│     [Standards]   [Process]   [Certifications]            │
│     [Icon]        [Icon]      [Icon]                       │
│     [Title]       [Title]     [Title]                      │
│     [Content]     [Content]   [Content]                    │
│                                                             │
│  [CTA: View Quality Process] [CTA: Download Certificate]    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Certifications & Awards]                      │
│                                                             │
│  [Certifications]                                           │
│  [Badge 1] [Badge 2] [Badge 3] [Badge 4]                   │
│  [Name]    [Name]    [Name]    [Name]                      │
│  [License] [License] [License] [License]                   │
│  [Validity][Validity][Validity][Validity]                  │
│  [Link]    [Link]    [Link]    [Link]                       │
│                                                             │
│  [Awards]                                                   │
│  [Award 1] [Award 2] [Award 3]                             │
│  [Icon]    [Icon]    [Icon]                                │
│  [Name]    [Name]    [Name]                                │
│  [Year]    [Year]    [Year]                                │
│  [Desc]    [Desc]    [Desc]                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Industries Served]                            │
│                                                             │
│  [Industry 1] [Industry 2] [Industry 3]                    │
│  [Icon]       [Icon]       [Icon]                          │
│  [Name]       [Name]       [Name]                           │
│  [Desc]       [Desc]       [Desc]                           │
│                                                             │
│  [Industry 4] [Industry 5] [Industry 6]                    │
│  [Icon]       [Icon]       [Icon]                          │
│  [Name]       [Name]       [Name]                           │
│  [Desc]       [Desc]       [Desc]                           │
│                                                             │
│                    [CTA: View Industry Case Studies]         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Export Presence]                              │
│                                                             │
│  [Text Column]                    [Map]                     │
│  [Export Statistics]              [Interactive Map]         │
│  [Key Markets List]                [Country Highlights]     │
│                                                             │
│  [CTA: Request International Quote] [CTA: View Case Studies]│
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Client Logos]                                 │
│                                                             │
│  [Logo 1] [Logo 2] [Logo 3] [Logo 4] [Logo 5] [Logo 6]     │
│  [Logo 7] [Logo 8] [Logo 9] [Logo 10][Logo 11][Logo 12]    │
│                                                             │
│                    [CTA: View All Clients]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Testimonials]                                 │
│                                                             │
│     [Testimonial 1] [Testimonial 2] [Testimonial 3]       │
│     [Quote]        [Quote]        [Quote]                   │
│     [Author]       [Author]       [Author]                  │
│     [Company]      [Company]      [Company]                 │
│     [Metrics]      [Metrics]      [Metrics]                 │
│     [Logo]         [Logo]         [Logo]                    │
│                                                             │
│                    [CTA: View All Testimonials]               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [FAQ]                                          │
│                                                             │
│  [FAQ 1 ▼]                                                  │
│  [Question]                                                 │
│  [Answer (expandable)]                                      │
│                                                             │
│  [FAQ 2 ▼]                                                  │
│  [Question]                                                 │
│  [Answer (expandable)]                                      │
│                                                             │
│  [FAQ 3 ▼] [FAQ 4 ▼] [FAQ 5 ▼] [FAQ 6 ▼]                  │
│                                                             │
│                    [CTA: View All FAQs]                      │
│                                                             │
│                    [CTA: Still Have Questions? Contact Us]   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Bulk Inquiry CTA]                             │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Request Bulk Quote] [CTA: Schedule Factory Tour] │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact Form]                                 │
│                                                             │
│  [Form Column]                    [Contact Info Column]     │
│  [Section Title]                 [Phone]                    │
│  [Description]                    [WhatsApp]                 │
│  [Name Input]                     [Email]                    │
│  [Email Input]                    [Address]                  │
│  [Phone Input]                                               │
│  [Company Input]                                             │
│  [Inquiry Type Select]                                      │
│  [Message Textarea]                                         │
│  [CTA: Send Message]                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Google Maps]                                  │
│                                                             │
│              [Map Embed]                                     │
│              [Address Info Overlay]                         │
│              [CTA: Get Directions]                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Announcement Bar]      │
├─────────────────────────┤
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: Request Quote]  │
│   [CTA: View Capabilities]│
│                         │
│ [Trust Signals: 2/row]  │
│                         │
├─────────────────────────┤
│                         │
│   [Trust Statistics]     │
│                         │
│   [Stat 1]   [Stat 2]   │
│   [Icon]     [Icon]     │
│   [Number]   [Number]   │
│   [Label]    [Label]    │
│                         │
│   [Stat 3]   [Stat 4]   │
│   [Icon]     [Icon]     │
│   [Number]   [Number]   │
│   [Label]    [Label]    │
│                         │
├─────────────────────────┤
│                         │
│ [Why Choose Goyal]       │
│                         │
│   [Feature 1]           │
│   [Icon] [Title]        │
│   [Description]         │
│                         │
│   [Feature 2]           │
│   [Icon] [Title]        │
│   [Description]         │
│                         │
│   [Feature 3]           │
│   [Icon] [Title]        │
│   [Description]         │
│                         │
├─────────────────────────┤
│                         │
│   [Product Categories]  │
│                         │
│   [Category 1]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 2]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 3]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 4]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 5]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 6]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [CTA: View All]        │
│                         │
├─────────────────────────┤
│                         │
│   [Featured Products]    │
│                         │
│   [Product 1]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 2]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 3]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 4]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [CTA: View All]        │
### Manufacturing Process
- Horizontal process on desktop, vertical on mobile
- 6 steps with icons and descriptions
- Arrows/connectors between steps
- CTA below process

### Factory Infrastructure
- 2-column layout (text left, images right)
- Equipment list in table format
- Capacity data with progress bars
- Image gallery (2×2 grid)
- Dual CTAs

### Quality Assurance
- 3-column layout
- Standards, Process, Certifications
- Icons and content
- Dual CTAs

### Certifications & Awards
- 2 sections stacked
- Certifications: 4-column grid
- Awards: 3-column grid
- Verification links

### Industries Served
- 3-column grid
- 6 industries
- Icons and descriptions
- CTA below

### Export Presence
- 2-column layout (text left, map right)
- Export statistics
- Key markets list
- Interactive map
- Dual CTAs

### Client Logos
- 6-column grid
- 12 logos
- Grayscale, color on hover
- CTA below

### Testimonials
- 3-column grid
- 3 testimonials
- Quote, author, company, metrics
- CTA below

### FAQ
- Single column, accordion pattern
- 6 FAQs
- Expand/collapse
- Dual CTAs below

### Bulk Inquiry CTA
- Full-width section
- Centered content
- Dual CTAs stacked

### Contact Form
- 2-column layout (form left, contact info right)
- Form fields stacked
- Contact info with icons
- Primary CTA

### Google Maps
- Full-width map embed
- Address info overlay or below
- CTA: Get Directions

### Footer
- 5-column grid
- Company, Products, Resources, Support, Contact
- Bottom row: Copyright, Legal, Certifications
- CTA in Contact column

## Component References
- Announcement Bar
- Sticky Navbar
- Hero Section
- Stats
- Feature Cards
- Product Categories
- Product Cards
- Manufacturing Process
- Capability Cards
- Technical Data Table
- Certification Badges
- Awards
- FAQ
- Primary CTA Section
- Contact Form
- Google Map
- Footer

## UX Reasoning
- **Trust-First Approach:** Trust signals appear early (stats, certifications, process)
- **Progressive Disclosure:** Information revealed in logical order from general to specific
- **Multiple Conversion Paths:** CTAs distributed throughout (hero, sections, bulk CTA)
- **B2B Focus:** Technical specs, capacity data, verification links prioritized
- **Scannable Content:** Clear hierarchy, consistent spacing, predictable patterns
- **Mobile-First:** Stacked layouts on mobile, expand to grids on desktop
- **Persistent Navigation:** Sticky navbar ensures CTA always accessible
- **Social Proof:** Client logos and testimonials positioned before final CTA

---

# 2. About Page

## Section Order
1. Sticky Navbar
2. Hero Section
3. Company Overview
4. Company History (Timeline)
5. Mission & Vision
6. Values
7. Leadership Team
8. Company Milestones
9. Certifications
10. Contact CTA
11. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Company Overview]                             │
│                                                             │
│  [Text Column]                    [Image Column]            │
│  [Section Title]                 [Company Photo]           │
│  [Description]                    [Additional Image]          │
│  [Key Facts]                                                │
│  [Founded: 2008]                                           │
│  [Headquarters: Gurugram]                                   │
│  [Employees: 150+]                                          │
│  [Production Capacity: 50,000/month]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Company History - Timeline]                    │
│                                                             │
│  [Timeline Line (vertical, left)]                           │
│                                                             │
│  [2008] - [Founded]                                         │
│  [Title] [Description] [Image (optional)]                   │
│                                                             │
│  [2012] - [First Export]                                    │
│  [Title] [Description] [Image (optional)]                   │
│                                                             │
│  [2016] - [Capacity Expansion]                             │
│  [Title] [Description] [Image (optional)]                   │
│                                                             │
│  [2020] - [Quality Certification]                          │
│  [Title] [Description] [Image (optional)]                   │
│                                                             │
│  [2024] - [Global Expansion]                                │
│  [Title] [Description] [Image (optional)]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Mission & Vision]                             │
│                                                             │
│     [Mission]                    [Vision]                   │
│     [Icon]                       [Icon]                     │
│     [Title]                      [Title]                    │
│     [Description]                [Description]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Values]                                       │
│                                                             │
│  [Value 1] [Value 2] [Value 3] [Value 4]                   │
│  [Icon]    [Icon]    [Icon]    [Icon]                     │
│  [Title]   [Title]   [Title]   [Title]                    │
│  [Desc]    [Desc]    [Desc]    [Desc]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Leadership Team]                              │
│                                                             │
│  [Team Member 1] [Team Member 2] [Team Member 3]           │
│  [Photo]         [Photo]         [Photo]                    │
│  [Name]          [Name]          [Name]                    │
│  [Title]         [Title]         [Title]                   │
│  [Bio]           [Bio]           [Bio]                     │
│  [Contact]       [Contact]       [Contact]                  │
│                                                             │
│  [Team Member 4] [Team Member 5] [Team Member 6]           │
│  [Photo]         [Photo]         [Photo]                    │
│  [Name]          [Name]          [Name]                    │
│  [Title]         [Title]         [Title]                   │
│  [Bio]           [Bio]           [Bio]                     │
│  [Contact]       [Contact]       [Contact]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Company Milestones]                           │
│                                                             │
│  [Milestone 1] [Milestone 2] [Milestone 3] [Milestone 4]    │
│  [Icon]        [Icon]        [Icon]        [Icon]          │
│  [Title]       [Title]       [Title]       [Title]         │
│  [Metric]      [Metric]      [Metric]      [Metric]        │
│  [Year]        [Year]        [Year]        [Year]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Certifications]                                │
│                                                             │
│  [Badge 1] [Badge 2] [Badge 3] [Badge 4]                   │
│  [Name]    [Name]    [Name]    [Name]                      │
│  [License] [License] [License] [License]                   │
│  [Validity][Validity][Validity][Validity]                  │
│  [Link]    [Link]    [Link]    [Link]                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                   │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Contact Us] [CTA: Schedule Factory Tour]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│                         │
├─────────────────────────┤
│                         │
│   [Company Overview]    │
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Company Photo]       │
│                         │
│   [Key Facts]           │
│   [Founded: 2008]       │
│   [Headquarters]        │
│   [Employees]           │
│   [Capacity]            │
│                         │
├─────────────────────────┤
│                         │
│   [Company History]     │
│                         │
│   [2008]                │
│   [Founded]             │
│   [Title] [Description]  │
│                         │
│   [2012]                │
│   [First Export]        │
│   [Title] [Description]  │
│                         │
│   [2016]                │
│   [Capacity Expansion]  │
│   [Title] [Description]  │
│                         │
│   [2020]                │
│   [Quality Certification]│
│   [Title] [Description]  │
│                         │
│   [2024]                │
│   [Global Expansion]    │
│   [Title] [Description]  │
│                         │
├─────────────────────────┤
│                         │
│   [Mission & Vision]    │
│                         │
│   [Mission]             │
│   [Icon] [Title]        │
│   [Description]         │
│                         │
│   [Vision]              │
│   [Icon] [Title]        │
│   [Description]         │
│                         │
├─────────────────────────┤
│                         │
│   [Values]              │
│                         │
│   [Value 1]             │
│   [Icon] [Title] [Desc] │
│                         │
│   [Value 2]             │
│   [Icon] [Title] [Desc] │
│                         │
│   [Value 3]             │
│   [Icon] [Title] [Desc] │
│                         │
│   [Value 4]             │
│   [Icon] [Title] [Desc] │
│                         │
├─────────────────────────┤
│                         │
│   [Leadership Team]     │
│                         │
│   [Team Member 1]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
│   [Team Member 2]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
│   [Team Member 3]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
│   [Team Member 4]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
│   [Team Member 5]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
│   [Team Member 6]       │
│   [Photo]               │
│   [Name] [Title]        │
│   [Bio] [Contact]       │
│                         │
├─────────────────────────┤
│                         │
│   [Company Milestones]  │
│                         │
│   [Milestone 1]         │
│   [Icon] [Title]        │
│   [Metric] [Year]       │
│                         │
│   [Milestone 2]         │
│   [Icon] [Title]        │
│   [Metric] [Year]       │
│                         │
│   [Milestone 3]         │
│   [Icon] [Title]        │
│   [Metric] [Year]       │
│                         │
│   [Milestone 4]         │
│   [Icon] [Title]        │
│   [Metric] [Year]       │
│                         │
├─────────────────────────┤
│                         │
│   [Certifications]      │
│                         │
│   [Badge 1]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 2]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 3]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 4]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Contact Us]      │
│ [CTA: Factory Tour]     │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Company-focused headline, no CTAs (informational)
- **Company Overview:** Text left, images right, key facts in list
- **Timeline:** Vertical timeline with alternating content
- **Mission & Vision:** 2-column layout, side by side
- **Values:** 4-column grid
- **Leadership Team:** 3-column grid, 2 rows
- **Milestones:** 4-column grid
- **Certifications:** 4-column grid
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Contact CTA:** "Contact Us" (primary), "Schedule Factory Tour" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Hero Section
- Timeline
- Feature Cards
- Team Cards
- Stats
- Certification Badges
- Primary CTA Section
- Footer

## UX Reasoning
- **Storytelling Flow:** Timeline tells company evolution chronologically
- **Human Connection:** Leadership team builds personal connection
- **Credibility Building:** Certifications and milestones establish authority
- **Clear Hierarchy:** Mission/Vision separated from operational details
- **Visual Balance:** Text and images balanced in 2-column layouts
- **Scannable Timeline:** Vertical timeline easy to scan on mobile

---

# 3. Products Page

## Section Order
1. Sticky Navbar
2. Hero Section
3. Product Categories
4. Featured Products
5. All Products Grid
6. Filter Bar
7. Pagination
8. Contact CTA
9. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: Browse Categories] [CTA: Request Quote]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Product Categories]                           │
│                                                             │
│   [Category 1] [Category 2] [Category 3]                   │
│   [Image]      [Image]      [Image]                        │
│   [Name]       [Name]       [Name]                         │
│   [Count]      [Count]      [Count]                        │
│   [Link]       [Link]       [Link]                         │
│                                                             │
│   [Category 4] [Category 5] [Category 6]                   │
│   [Image]      [Image]      [Image]                        │
│   [Name]       [Name]       [Name]                         │
│   [Count]      [Count]      [Count]                        │
│   [Link]       [Link]       [Link]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Featured Products]                            │
│                                                             │
│ [Product 1] [Product 2] [Product 3] [Product 4]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Filter Bar]                                   │
│                                                             │
│  [Category Filter ▼] [Fabric Filter ▼] [Price Filter ▼]    │
│  [Sort By ▼]              [Results: 45 products]            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [All Products Grid]                            │
│                                                             │
│ [Product 1] [Product 2] [Product 3] [Product 4]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
│ [Product 5] [Product 6] [Product 7] [Product 8]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
│ [Product 9] [Product 10][Product 11][Product 12]           │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Pagination]                                  │
│                                                             │
│              [< Previous] [1] [2] [3] [4] [Next >]         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Request Custom Quote] [CTA: Contact Us]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: Browse]         │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Product Categories]  │
│                         │
│   [Category 1]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 2]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 3]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 4]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 5]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 6]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
├─────────────────────────┤
│                         │
│   [Featured Products]    │
│                         │
│   [Product 1]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 2]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 3]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 4]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
├─────────────────────────┤
│                         │
│   [Filter Bar]          │
│                         │
│   [Category Filter ▼]   │
│   [Fabric Filter ▼]     │
│   [Price Filter ▼]      │
│   [Sort By ▼]           │
│   [Results: 45]         │
│                         │
├─────────────────────────┤
│                         │
│   [All Products]        │
│                         │
│   [Product 1]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 2]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 3]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 4]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│                         │
│   [Load More]           │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Request Quote]  │
│   [CTA: Contact Us]     │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Product-focused headline, dual CTAs
- **Categories:** 6 categories in 3×2 grid
- **Featured:** 4 products in 4-column grid
- **Filter Bar:** Horizontal filters, results count
- **Products Grid:** 12 products in 4×3 grid
- **Pagination:** Centered, numbered
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "Browse Categories" (primary), "Request Quote" (secondary)
- **Product Cards:** "Request Sample" (on each card)
- **Contact CTA:** "Request Custom Quote" (primary), "Contact Us" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Hero Section
- Product Categories
- Product Cards
- Filter Bar
- Pagination
- Primary CTA Section
- Footer

## UX Reasoning
- **Category Discovery:** Categories visible before full product grid
- **Featured Highlighting:** Featured products separate from main grid
- **Filter Accessibility:** Filter bar always visible above grid
- **Scannable Grid:** 4-column grid allows quick scanning
- **Clear CTAs:** Each product has clear sample request CTA
- **Pagination:** Standard pagination for large product sets
- **Mobile Load More:** Infinite scroll or "Load More" on mobile

---

# 4. Product Category Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Category Hero
4. Category Description
5. Filter Bar
6. Products Grid
7. Pagination
8. Related Categories
9. Contact CTA
10. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Products > Shirting]                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Category Hero]                          │
│              (Full-width category image)                     │
│                                                             │
│              [Headline: 40px] - Shirting                     │
│           [Subheadline: 18px]                                │
│      [CTA: View All Products] [CTA: Request Quote]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Category Description]                          │
│                                                             │
│  [Text Column]                    [Image Column]            │
│  [Section Title]                 [Category Image]           │
│  [Description]                    [Additional Image]          │
│  [Key Information]                                          │
│  [Products: 45]                                             │
│  [MOQ: 100 units]                                           │
│  [Lead Time: 2-3 weeks]                                     │
│  [Price Range: ₹150-250]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Filter Bar]                                   │
│                                                             │
│  [Fabric Filter ▼] [Price Filter ▼] [MOQ Filter ▼]         │
│  [Sort By ▼]              [Results: 45 products]            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Products Grid]                                │
│                                                             │
│ [Product 1] [Product 2] [Product 3] [Product 4]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
│ [Product 5] [Product 6] [Product 7] [Product 8]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
│ [Product 9] [Product 10][Product 11][Product 12]           │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Pagination]                                  │
│                                                             │
│              [< Previous] [1] [2] [3] [4] [Next >]         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Related Categories]                           │
│                                                             │
│   [Category 1] [Category 2] [Category 3]                   │
│   [Image]      [Image]      [Image]                        │
│   [Name]       [Name]       [Name]                         │
│   [Count]      [Count]      [Count]                        │
│   [Link]       [Link]       [Link]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Request Category Quote] [CTA: Contact Us]        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Products > Shirting]│
├─────────────────────────┤
│                         │
│    [Category Hero]      │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: View All]        │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Category Description]│
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Category Image]      │
│                         │
│   [Key Information]     │
│   [Products: 45]         │
│   [MOQ: 100]            │
│   [Lead Time: 2-3 weeks]│
│   [Price: ₹150-250]      │
│                         │
├─────────────────────────┤
│                         │
│   [Filter Bar]          │
│                         │
│   [Fabric Filter ▼]     │
│   [Price Filter ▼]      │
│   [MOQ Filter ▼]        │
│   [Sort By ▼]           │
│   [Results: 45]         │
│                         │
├─────────────────────────┤
│                         │
│   [Products Grid]       │
│                         │
│   [Product 1]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 2]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 3]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 4]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│                         │
│   [Load More]           │
│                         │
├─────────────────────────┤
│                         │
│   [Related Categories]  │
│                         │
│   [Category 1]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 2]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
│   [Category 3]          │
│   [Image]               │
│   [Name] [Count] [Link] │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Request Quote]  │
│   [CTA: Contact Us]     │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Breadcrumb:** Top of page, navigation hierarchy
- **Category Hero:** Full-width image, category name
- **Description:** 2-column layout, key information in list
- **Filter Bar:** Category-specific filters
- **Products Grid:** 4-column grid, 12 products
- **Pagination:** Centered
- **Related Categories:** 3 categories in row
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Category Hero:** "View All Products" (primary), "Request Quote" (secondary)
- **Product Cards:** "Request Sample" (on each card)
- **Contact CTA:** "Request Category Quote" (primary), "Contact Us" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Feature Cards
- Product Cards
- Filter Bar
- Pagination
- Primary CTA Section
- Footer

## UX Reasoning
- **Orientation:** Breadcrumb provides navigation context
- **Category Context:** Hero and description establish category scope
- **Key Information:** MOQ, lead time, price range visible early
- **Category-Specific Filters:** Filters relevant to category
- **Cross-Category Discovery:** Related categories encourage exploration
- **Clear Hierarchy:** Category → Products → Related

---

# 5. Product Detail Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Product Gallery
4. Product Information
5. Technical Specifications
6. Custom Options
7. Production Timeline
8. Sample Request
9. Related Products
10. Contact CTA
11. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Products > Shirting > Premium Cotton Dress Shirt]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Product Gallery]                              │
│                                                             │
│  [Main Image]                    [Thumbnail Gallery]        │
│  (800×1000px)                    [Thumb 1] [Thumb 2]       │
│                                  [Thumb 3] [Thumb 4]       │
│                                  [Thumb 5] [Thumb 6]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Product Information]                          │
│                                                             │
│  [Product Title: 32px] - Premium Cotton Dress Shirt          │
│  [SKU: PD-001]                                             │
│  [Description]                                             │
│  [Key Features]                                            │
│  [• 100% Cotton]                                           │
│  [• Single-needle lockstitch]                              │
│  [• Edge guide folders]                                    │
│  [• Pre-shrunk fabric]                                     │
│                                                             │
│  [Pricing & MOQ]                                           │
│  [100-500 units: ₹150-180]                                 │
│  [500-1000 units: ₹140-170]                                │
│  [1000+ units: ₹130-160]                                   │
│  [MOQ: 100 units per style, 50 per color]                   │
│                                                             │
│  [CTAs]                                                    │
│  [CTA: Request Sample] [CTA: Request Quote]                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Technical Specifications]                      │
│                                                             │
│  [Section Title]                                           │
│                                                             │
│  [Fabric Composition]        [GSM]        [Thread Count]    │
│  [100% Cotton]              [120]        [40s]             │
│                                                             │
│  [Shrinkage]                 [Color Fastness] [Tolerance]   │
│  [<3%]                      [Grade 4]    [±2mm]            │
│                                                             │
│  [Available Sizes]                                         │
│  [S, M, L, XL, XXL]                                        │
│                                                             │
│  [Available Colors]                                         │
│  [Color Swatches]                                           │
│  [White] [Blue] [Black] [Grey] [Navy] [Custom]             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Custom Options]                               │
│                                                             │
│  [Section Title]                                           │
│                                                             │
│  [Custom Labeling]        [Custom Packaging] [Custom Sizing]│
│  [Checkbox]               [Checkbox]          [Checkbox]     │
│  [Description]            [Description]       [Description]  │
│                                                             │
│  [CTA: Request Custom Quote]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Production Timeline]                          │
│                                                             │
│  [Section Title]                                           │
│                                                             │
│  [Timeline]                                                │
│  [Sample: 5-7 days] → [Approval: 2-3 days] →               │
│  [Production: 2-3 weeks] → [QC: 2-3 days] → [Shipping: 5-7 days]│
│                                                             │
│  [Total Lead Time: 3-4 weeks]                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Sample Request]                               │
│                                                             │
│  [Section Title]                                           │
│  [Description]                                             │
│  [Sample Cost: ₹150 + shipping]                             │
│  [Sample cost credited against first bulk order]           │
│                                                             │
│  [CTA: Request Sample]                                      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Related Products]                              │
│                                                             │
│ [Product 1] [Product 2] [Product 3] [Product 4]            │
│ [Image]    [Image]    [Image]    [Image]                  │
│ [Title]    [Title]    [Title]    [Title]                   │
│ [Specs]    [Specs]    [Specs]    [Specs]                   │
│ [Price]    [Price]    [Price]    [Price]                   │
│ [CTA]      [CTA]      [CTA]      [CTA]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Request Quote] [CTA: Schedule Factory Tour]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Products > Shirting > Product]│
├─────────────────────────┤
│                         │
│   [Product Gallery]      │
│                         │
│   [Main Image]          │
│   (Full width)          │
│                         │
│   [Thumbnail Gallery]   │
│   [Thumb 1] [Thumb 2]   │
│   [Thumb 3] [Thumb 4]   │
│   [Thumb 5] [Thumb 6]   │
│                         │
├─────────────────────────┤
│                         │
│   [Product Information] │
│                         │
│   [Title: 24px]         │
│   [SKU: PD-001]         │
│   [Description]         │
│                         │
│   [Key Features]        │
│   [• 100% Cotton]       │
│   [• Single-needle]     │
│   [• Edge guide]        │
│   [• Pre-shrunk]        │
│                         │
│   [Pricing & MOQ]       │
│   [100-500: ₹150-180]   │
│   [500-1000: ₹140-170]  │
│   [1000+: ₹130-160]     │
│   [MOQ: 100]            │
│                         │
│   [CTA: Request Sample] │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Technical Specs]     │
│                         │
│   [Fabric: 100% Cotton] │
│   [GSM: 120]            │
│   [Thread Count: 40s]   │
│   [Shrinkage: <3%]      │
│   [Color Fastness: 4]   │
│   [Tolerance: ±2mm]     │
│                         │
│   [Sizes]               │
│   [S, M, L, XL, XXL]    │
│                         │
│   [Colors]              │
│   [Color Swatches]       │
│                         │
├─────────────────────────┤
│                         │
│   [Custom Options]      │
│                         │
│   [Custom Labeling]     │
│   [Checkbox] [Desc]     │
│                         │
│   [Custom Packaging]    │
│   [Checkbox] [Desc]     │
│                         │
│   [Custom Sizing]       │
│   [Checkbox] [Desc]     │
│                         │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Production Timeline] │
│                         │
│   [Sample: 5-7 days]    │
│   [Approval: 2-3 days]  │
│   [Production: 2-3 weeks]│
│   [QC: 2-3 days]        │
│   [Shipping: 5-7 days]  │
│                         │
│   [Total: 3-4 weeks]    │
│                         │
├─────────────────────────┤
│                         │
│   [Sample Request]      │
│                         │
│   [Description]         │
│   [Cost: ₹150 + shipping]│
│   [Credited against bulk]│
│                         │
│   [CTA: Request Sample] │
│                         │
├─────────────────────────┤
│                         │
│   [Related Products]    │
│                         │
│   [Product 1]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 2]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 3]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
│   [Product 4]           │
│   [Image]               │
│   [Title] [Specs]       │
│   [Price] [CTA]         │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Request Quote]  │
│   [CTA: Factory Tour]   │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Breadcrumb:** Top of page, full navigation path
- **Gallery:** Main image left, thumbnails right (desktop)
- **Product Info:** Title, SKU, description, features, pricing, MOQ
- **Technical Specs:** Table format, organized by category
- **Custom Options:** Checkboxes with descriptions
- **Timeline:** Horizontal process (desktop), vertical (mobile)
- **Sample Request:** Dedicated section with cost info
- **Related Products:** 4 products in row
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Product Info:** "Request Sample" (primary), "Request Quote" (secondary)
- **Custom Options:** "Request Custom Quote" (primary)
- **Sample Request:** "Request Sample" (primary)
- **Contact CTA:** "Request Quote" (primary), "Schedule Factory Tour" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Image Gallery
- Feature Cards
- Technical Data Table
- Timeline
- Primary CTA Section
- Product Cards
- Footer

## UX Reasoning
- **Visual Priority:** Gallery first for product visualization
- **Information Hierarchy:** Basic info → Technical specs → Custom options
- **Pricing Transparency:** Price ranges by quantity visible
- **Technical Authority:** Detailed specs for B2B buyers
- **Timeline Clarity:** Production timeline manages expectations
- **Sample Accessibility:** Clear sample request with cost
- **Cross-Selling:** Related products encourage exploration

---

# 6. Manufacturing Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Hero Section
4. Manufacturing Process
5. Equipment Showcase
6. Capacity Information
7. Quality Integration
8. Contact CTA
9. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Manufacturing]                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: View Equipment] [CTA: Schedule Factory Tour]    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Manufacturing Process]                        │
│                                                             │
│  [Step 1] → [Step 2] → [Step 3] → [Step 4] → [Step 5] → [Step 6]  │
│  [Icon]    [Icon]    [Icon]    [Icon]    [Icon]    [Icon]  │
│  [Number]  [Number]  [Number]  [Number]  [Number]  [Number]│
│  [Title]   [Title]   [Title]   [Title]   [Title]   [Title] │
│  [Desc]    [Desc]    [Desc]    [Desc]    [Desc]    [Desc] │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Equipment Showcase]                           │
│                                                             │
│  [Equipment 1] [Equipment 2] [Equipment 3] [Equipment 4]    │
│  [Image]       [Image]       [Image]       [Image]         │
│  [Name]        [Name]        [Name]        [Name]          │
│  [Model]       [Model]       [Model]       [Model]         │
│  [Quantity]    [Quantity]    [Quantity]    [Quantity]     │
│  [Specs]       [Specs]       [Specs]       [Specs]          │
│                                                             │
│  [Equipment 5] [Equipment 6] [Equipment 7] [Equipment 8]    │
│  [Image]       [Image]       [Image]       [Image]         │
│  [Name]        [Name]        [Name]        [Name]          │
│  [Model]       [Model]       [Model]       [Model]         │
│  [Quantity]    [Quantity]    [Quantity]    [Quantity]     │
│  [Specs]       [Specs]       [Specs]       [Specs]          │
│                                                             │
│                    [CTA: View All Equipment]                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Capacity Information]                         │
│                                                             │
│  [Text Column]                    [Visual Column]           │
│  [Section Title]                 [Capacity Chart]           │
│  [Description]                    [Progress Bars]           │
│  [Capacity Metrics]                                        │
│  [Monthly: 50,000 units]                                   │
│  [Small Batch: 100-500]                                    │
│  [Medium Batch: 500-2000]                                  │
│  [Large Batch: 2000+]                                      │
│  [Lead Time: 2-4 weeks]                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Integration]                           │
│                                                             │
│  [Section Title]                                           │
│  [Description]                                             │
│                                                             │
│  [QC Checkpoint 1] [QC Checkpoint 2] [QC Checkpoint 3]     │
│  [Icon]           [Icon]           [Icon]                  │
│  [Stage]          [Stage]          [Stage]                 │
│  [Standard]       [Standard]       [Standard]              │
│  [Tolerance]      [Tolerance]      [Tolerance]             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Schedule Factory Tour] [CTA: Request Quote]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Manufacturing]  │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: View Equipment] │
│   [CTA: Factory Tour]   │
│                         │
├─────────────────────────┤
│                         │
│   [Manufacturing Process]│
│                         │
│   [Step 1]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
│   [Step 2]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
│   [Step 3]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
│   [Step 4]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
│   [Step 5]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
│   [Step 6]              │
│   [Icon] [Number]       │
│   [Title] [Desc]        │
│                         │
├─────────────────────────┤
│                         │
│   [Equipment Showcase]  │
│                         │
│   [Equipment 1]          │
│   [Image]               │
│   [Name] [Model]        │
│   [Quantity] [Specs]    │
│                         │
│   [Equipment 2]          │
│   [Image]               │
│   [Name] [Model]        │
│   [Quantity] [Specs]    │
│                         │
│   [Equipment 3]          │
│   [Image]               │
│   [Name] [Model]        │
│   [Quantity] [Specs]    │
│                         │
│   [Equipment 4]          │
│   [Image]               │
│   [Name] [Model]        │
│   [Quantity] [Specs]    │
│                         │
│                         │
│   [CTA: View All]       │
│                         │
├─────────────────────────┤
│                         │
│   [Capacity Information]│
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Capacity Metrics]     │
│   [Monthly: 50,000]      │
│   [Small: 100-500]      │
│   [Medium: 500-2000]    │
│   [Large: 2000+]        │
│   [Lead Time: 2-4 weeks]│
│                         │
│   [Progress Bars]       │
│   [Bar 1] [Bar 2]       │
│   [Bar 3] [Bar 4]       │
│                         │
├─────────────────────────┤
│                         │
│   [Quality Integration] │
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [QC Checkpoint 1]     │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance]│
│                         │
│   [QC Checkpoint 2]     │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance]│
│                         │
│   [QC Checkpoint 3]     │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance]│
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Factory Tour]   │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Manufacturing-focused headline, dual CTAs
- **Process:** 6-step horizontal process
- **Equipment:** 8 equipment cards in 4×2 grid
- **Capacity:** 2-column layout, text left, visual right
- **Quality Integration:** 3 QC checkpoints in row
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "View Equipment" (primary), "Schedule Factory Tour" (secondary)
- **Equipment:** "View All Equipment" (below grid)
- **Contact CTA:** "Schedule Factory Tour" (primary), "Request Quote" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Manufacturing Process
- Capability Cards
- Technical Data Table
- Progress Bar Animation
- Feature Cards
- Primary CTA Section
- Footer

## UX Reasoning
- **Process Visibility:** 6-step process shows workflow
- **Equipment Authority:** Specific equipment models build credibility
- **Capacity Transparency:** Clear capacity metrics for different batch sizes
- **Quality Integration:** QC checkpoints show quality integration
- **Factory Tour Focus:** Primary CTA emphasizes factory tour
- **Technical Detail:** Equipment specs for technical buyers

---

# 7. Infrastructure Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Hero Section
4. Facility Overview
5. Equipment by Department
6. Production Capacity
7. Infrastructure Gallery
8. Contact CTA
9. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Infrastructure]                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: View Gallery] [CTA: Schedule Factory Tour]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Facility Overview]                            │
│                                                             │
│  [Text Column]                    [Image Column]            │
│  [Section Title]                 [Facility Photo]           │
│  [Description]                    [Additional Image]          │
│  [Key Information]                                          │
│  [Total Area: 25,000 sq ft]                                │
│  [Production Area: 18,000 sq ft]                            │
│  [Number of Floors: 3]                                     │
│  [Location: Industrial Area, Gurugram]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Equipment by Department]                      │
│                                                             │
│  [Cutting Department]                                       │
│  [Equipment 1] [Equipment 2] [Equipment 3]                   │
│  [Image]       [Image]       [Image]                        │
│  [Name]        [Name]        [Name]                         │
│  [Model]       [Model]       [Model]                        │
│  [Quantity]    [Quantity]    [Quantity]                     │
│                                                             │
│  [Sewing Department]                                        │
│  [Equipment 1] [Equipment 2] [Equipment 3] [Equipment 4]    │
│  [Image]       [Image]       [Image]       [Image]          │
│  [Name]        [Name]        [Name]        [Name]           │
│  [Model]       [Model]       [Model]       [Model]          │
│  [Quantity]    [Quantity]    [Quantity]    [Quantity]       │
│                                                             │
│  [Finishing Department]                                      │
│  [Equipment 1] [Equipment 2] [Equipment 3]                   │
│  [Image]       [Image]       [Image]                        │
│  [Name]        [Name]        [Name]                         │
│  [Model]       [Model]       [Model]                        │
│  [Quantity]    [Quantity]    [Quantity]                     │
│                                                             │
│  [Quality Control Department]                                │
│  [Equipment 1] [Equipment 2]                                │
│  [Image]       [Image]                                      │
│  [Name]        [Name]                                       │
│  [Model]       [Model]                                      │
│  [Quantity]    [Quantity]                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Production Capacity]                           │
│                                                             │
│  [Section Title]                                           │
│                                                             │
│  [Capacity Metrics]                                        │
│  [Monthly Production: 50,000 units]                         │
│  [Maximum Single Order: 10,000 units]                      │
│  [Current Utilization: 75%]                                 │
│  [Available Capacity: 12,500 units/month]                   │
│                                                             │
│  [Capacity by Product Type]                                  │
│  [Shirting: 20,000/month] [Suiting: 10,000/month]          │
│  [Bottoms: 12,000/month] [Ethnic: 8,000/month]             │
│                                                             │
│  [Lead Time Matrix]                                         │
│  [Table: Product Type × Quantity × Lead Time]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Infrastructure Gallery]                        │
│                                                             │
│  [Gallery Grid]                                             │
│  [Image 1] [Image 2] [Image 3] [Image 4]                   │
│  [Image 5] [Image 6] [Image 7] [Image 8]                   │
│  [Image 9] [Image 10][Image 11][Image 12]                  │
│  [Image 13][Image 14][Image 15][Image 16]                  │
│                                                             │
│                    [CTA: View Full Gallery]                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Schedule Factory Tour] [CTA: Request Quote]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Infrastructure]  │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: View Gallery]   │
│   [CTA: Factory Tour]   │
│                         │
├─────────────────────────┤
│                         │
│   [Facility Overview]   │
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Facility Photo]      │
│                         │
│   [Key Information]     │
│   [Area: 25,000 sq ft]  │
│   [Production: 18,000]  │
│   [Floors: 3]           │
│   [Location]            │
│                         │
├─────────────────────────┤
│                         │
│   [Equipment by Dept]   │
│                         │
│   [Cutting Department]   │
│   [Equipment 1]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 2]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 3]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Sewing Department]   │
│   [Equipment 1]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 2]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 3]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 4]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Finishing Department] │
│   [Equipment 1]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 2]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 3]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [QC Department]       │
│   [Equipment 1]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
│   [Equipment 2]          │
│   [Image] [Name]        │
│   [Model] [Quantity]    │
│                         │
├─────────────────────────┤
│                         │
│   [Production Capacity] │
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Capacity Metrics]     │
│   [Monthly: 50,000]     │
│   [Max Order: 10,000]   │
│   [Utilization: 75%]     │
│   [Available: 12,500]    │
│                         │
│   [By Product Type]     │
│   [Shirting: 20,000]    │
│   [Suiting: 10,000]     │
│   [Bottoms: 12,000]     │
│   [Ethnic: 8,000]       │
│                         │
│   [Lead Time Table]     │
│   [Scrollable table]    │
│                         │
├─────────────────────────┤
│                         │
│   [Infrastructure Gallery]│
│                         │
│   [Gallery Grid]         │
│   [Image 1] [Image 2]   │
│   [Image 3] [Image 4]   │
│   [Image 5] [Image 6]   │
│   [Image 7] [Image 8]   │
│   [Image 9] [Image 10]  │
│   [Image 11][Image 12]  │
│   [Image 13][Image 14]  │
│   [Image 15][Image 16]  │
│                         │
│   [CTA: View Full]      │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Factory Tour]   │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Infrastructure-focused headline, dual CTAs
- **Facility Overview:** 2-column layout, key information in list
- **Equipment by Department:** Organized by department, equipment cards
- **Production Capacity:** Metrics, product breakdown, lead time table
- **Infrastructure Gallery:** 4×4 grid, 16 images
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "View Gallery" (primary), "Schedule Factory Tour" (secondary)
- **Gallery:** "View Full Gallery" (below grid)
- **Contact CTA:** "Schedule Factory Tour" (primary), "Request Quote" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Capability Cards
- Technical Data Table
- Progress Bar Animation
- Gallery Grid
- Primary CTA Section
- Footer

## UX Reasoning
- **Department Organization:** Equipment organized by department for clarity
- **Capacity Transparency:** Detailed capacity metrics by product type
- **Visual Evidence:** Gallery provides visual verification
- **Lead Time Matrix:** Table format for quick reference
- **Factory Tour Focus:** Primary CTA emphasizes factory tour
- **Technical Detail:** Equipment models and quantities for technical buyers

---

# 8. Quality Assurance Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Hero Section
4. Quality Standards
5. Quality Process
6. Quality Equipment
7. Certifications
8. Quality Metrics
9. Contact CTA
10. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Quality Assurance]                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: View Certifications] [CTA: Request Quote]        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Standards]                            │
│                                                             │
│  [Standard 1] [Standard 2] [Standard 3] [Standard 4]       │
│  [Icon]       [Icon]       [Icon]       [Icon]             │
│  [Title]      [Title]      [Title]      [Title]            │
│  [Value]      [Value]      [Value]      [Value]            │
│  [Description][Description][Description][Description]       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Process]                              │
│                                                             │
│  [Process Step 1] → [Process Step 2] → [Process Step 3]   │
│  [Icon]            [Icon]            [Icon]                │
│  [Stage]           [Stage]           [Stage]               │
│  [Standard]        [Standard]        [Standard]            │
│  [Tolerance]       [Tolerance]       [Tolerance]           │
│                                                             │
│  [Process Step 4] → [Process Step 5] → [Process Step 6]   │
│  [Icon]            [Icon]            [Icon]                │
│  [Stage]           [Stage]           [Stage]               │
│  [Standard]        [Standard]        [Standard]            │
│  [Tolerance]       [Tolerance]       [Tolerance]           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Equipment]                            │
│                                                             │
│  [Equipment 1] [Equipment 2] [Equipment 3] [Equipment 4]    │
│  [Image]       [Image]       [Image]       [Image]          │
│  [Name]        [Name]        [Name]        [Name]           │
│  [Purpose]     [Purpose]     [Purpose]     [Purpose]        │
│  [Specs]       [Specs]       [Specs]       [Specs]          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Certifications]                              │
│                                                             │
│  [Badge 1] [Badge 2] [Badge 3] [Badge 4]                   │
│  [Name]    [Name]    [Name]    [Name]                      │
│  [License] [License] [License] [License]                   │
│  [Validity][Validity][Validity][Validity]                  │
│  [Link]    [Link]    [Link]    [Link]                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Quality Metrics]                              │
│                                                             │
│  [Metric 1] [Metric 2] [Metric 3] [Metric 4]               │
│  [Icon]      [Icon]      [Icon]      [Icon]                │
│  [Title]     [Title]     [Title]     [Title]               │
│  [Value]     [Value]     [Value]     [Value]               │
│  [Target]    [Target]    [Target]    [Target]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Request Quality Sample] [CTA: Contact Us]        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Quality Assurance]│
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: View Certs]     │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Quality Standards]   │
│                         │
│   [Standard 1]          │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Standard 2]          │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Standard 3]          │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Standard 4]          │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
├─────────────────────────┤
│                         │
│   [Quality Process]     │
│                         │
│   [Process Step 1]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
│   [Process Step 2]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
│   [Process Step 3]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
│   [Process Step 4]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
│   [Process Step 5]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
│   [Process Step 6]       │
│   [Icon] [Stage]        │
│   [Standard] [Tolerance] │
│                         │
├─────────────────────────┤
│                         │
│   [Quality Equipment]   │
│                         │
│   [Equipment 1]          │
│   [Image]               │
│   [Name] [Purpose]      │
│   [Specs]               │
│                         │
│   [Equipment 2]          │
│   [Image]               │
│   [Name] [Purpose]      │
│   [Specs]               │
│                         │
│   [Equipment 3]          │
│   [Image]               │
│   [Name] [Purpose]      │
│   [Specs]               │
│                         │
│   [Equipment 4]          │
│   [Image]               │
│   [Name] [Purpose]      │
│   [Specs]               │
│                         │
├─────────────────────────┤
│                         │
│   [Certifications]      │
│                         │
│   [Badge 1]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 2]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 3]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
│   [Badge 4]             │
│   [Name] [License]      │
│   [Validity] [Link]     │
│                         │
├─────────────────────────┤
│                         │
│   [Quality Metrics]     │
│                         │
│   [Metric 1]            │
│   [Icon] [Title]        │
│   [Value] [Target]      │
│                         │
│   [Metric 2]            │
│   [Icon] [Title]        │
│   [Value] [Target]      │
│                         │
│   [Metric 3]            │
│   [Icon] [Title]        │
│   [Value] [Target]      │
│                         │
│   [Metric 4]            │
│   [Icon] [Title]        │
│   [Value] [Target]      │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Request Sample] │
│   [CTA: Contact Us]     │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Quality-focused headline, dual CTAs
- **Standards:** 4 standards in 4-column grid
- **Process:** 6-step process in 2 rows of 3
- **Equipment:** 4 equipment cards in row
- **Certifications:** 4 badges in row with verification links
- **Metrics:** 4 metrics in row with targets
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "View Certifications" (primary), "Request Quote" (secondary)
- **Contact CTA:** "Request Quality Sample" (primary), "Contact Us" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Feature Cards
- Manufacturing Process
- Capability Cards
- Certification Badges
- Stats
- Primary CTA Section
- Footer

## UX Reasoning
- **Standards First:** Quality standards establish baseline expectations
- **Process Visibility:** 6-step process shows quality workflow
- **Equipment Authority:** Quality equipment builds credibility
- **Certification Verification:** Verification links enable verification
- **Metrics Transparency:** Current performance vs targets
- **Sample Focus:** Quality sample request as primary CTA

---

# 9. Gallery Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Hero Section
4. Gallery Filters
5. Gallery Grid
6. Load More
7. Contact CTA
8. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Gallery]                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: Schedule Factory Tour] [CTA: Request Quote]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Gallery Filters]                              │
│                                                             │
│  [Category Filter ▼] [Department Filter ▼] [Year Filter ▼] │
│  [Sort By ▼]              [Results: 48 images]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Gallery Grid]                                │
│                                                             │
│  [Image 1] [Image 2] [Image 3] [Image 4]                   │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
│  [Image 5] [Image 6] [Image 7] [Image 8]                   │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
│  [Image 9] [Image 10][Image 11][Image 12]                  │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
│  [Image 13][Image 14][Image 15][Image 16]                  │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
│  [Image 17][Image 18][Image 19][Image 20]                  │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
│  [Image 21][Image 22][Image 23][Image 24]                  │
│  [Caption] [Caption] [Caption] [Caption]                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Load More]                                    │
│                                                             │
│              [CTA: Load More Images]                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: Schedule Factory Tour] [CTA: Request Quote]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Gallery]        │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: Factory Tour]   │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Gallery Filters]     │
│                         │
│   [Category Filter ▼]   │
│   [Department Filter ▼] │
│   [Year Filter ▼]       │
│   [Sort By ▼]           │
│   [Results: 48]         │
│                         │
├─────────────────────────┤
│                         │
│   [Gallery Grid]        │
│                         │
│   [Image 1]             │
│   [Caption]             │
│                         │
│   [Image 2]             │
│   [Caption]             │
│                         │
│   [Image 3]             │
│   [Caption]             │
│                         │
│   [Image 4]             │
│   [Caption]             │
│                         │
│   [Image 5]             │
│   [Caption]             │
│                         │
│   [Image 6]             │
│   [Caption]             │
│                         │
│   [Image 7]             │
│   [Caption]             │
│                         │
│   [Image 8]             │
│   [Caption]             │
│                         │
│                         │
│   [Load More]           │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: Factory Tour]   │
│   [CTA: Request Quote]  │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Gallery-focused headline, dual CTAs
- **Filters:** Horizontal filters, results count
- **Gallery Grid:** 4×6 grid, 24 images with captions
- **Load More:** Centered button
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "Schedule Factory Tour" (primary), "Request Quote" (secondary)
- **Gallery:** Lightbox on image click
- **Load More:** "Load More Images" (button)
- **Contact CTA:** "Schedule Factory Tour" (primary), "Request Quote" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Filter Bar
- Gallery Grid
- Lightbox
- Primary Button
- Primary CTA Section
- Footer

## UX Reasoning
- **Visual Discovery:** Gallery grid allows visual exploration
- **Filter Flexibility:** Multiple filter options for targeted browsing
- **Caption Context:** Captions provide image context
- **Lightbox Interaction:** Full-screen view for detail
- **Factory Tour Focus:** Primary CTA emphasizes factory tour
- **Load More:** Progressive loading for performance

---

# 10. Contact Page

## Section Order
1. Sticky Navbar
2. Breadcrumb
3. Hero Section
4. Contact Information
5. Contact Form
6. Google Maps
7. FAQ
8. Contact CTA
9. Footer

## Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] [Navigation Links] [CTA: Request Quote] [Hamburger]  │
├─────────────────────────────────────────────────────────────┤
│ [Home > Contact]                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Hero Section]                          │
│              (Full-width background image)                  │
│                                                             │
│              [Headline: 40px]                               │
│           [Subheadline: 18px]                                │
│      [CTA: Fill Form] [CTA: Call Us]                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact Information]                           │
│                                                             │
│  [Contact Info 1] [Contact Info 2] [Contact Info 3]         │
│  [Icon]           [Icon]           [Icon]                  │
│  [Title]          [Title]          [Title]                 │
│  [Value]          [Value]          [Value]                 │
│  [Description]    [Description]    [Description]           │
│                                                             │
│  [Contact Info 4] [Contact Info 5] [Contact Info 6]         │
│  [Icon]           [Icon]           [Icon]                  │
│  [Title]          [Title]          [Title]                 │
│  [Value]          [Value]          [Value]                 │
│  [Description]    [Description]    [Description]           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact Form]                                 │
│                                                             │
│  [Form Column]                    [Contact Info Column]     │
│  [Section Title]                 [Phone]                    │
│  [Description]                    [WhatsApp]                 │
│  [Name Input]                     [Email]                    │
│  [Email Input]                    [Address]                  │
│  [Phone Input]                                               │
│  [Company Input]                                             │
│  [Inquiry Type Select]                                      │
│  [Message Textarea]                                         │
│  [CTA: Send Message]                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Google Maps]                                  │
│                                                             │
│              [Map Embed]                                     │
│              [Address Info Overlay]                         │
│              [CTA: Get Directions]                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [FAQ]                                          │
│                                                             │
│  [FAQ 1 ▼]                                                  │
│  [Question]                                                 │
│  [Answer (expandable)]                                      │
│                                                             │
│  [FAQ 2 ▼]                                                  │
│  [Question]                                                 │
│  [Answer (expandable)]                                      │
│                                                             │
│  [FAQ 3 ▼] [FAQ 4 ▼] [FAQ 5 ▼] [FAQ 6 ▼]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Contact CTA]                                  │
│                                                             │
│              [Headline: 32px]                               │
│           [Description: 16px]                               │
│      [CTA: WhatsApp Us] [CTA: Call Now]                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              [Footer]                                       │
│                                                             │
│  [Company]   [Products]  [Resources] [Support]  [Contact]  │
│  [Logo]      [Categories][Blog]      [Contact]  [Phone]     │
│  [About]     [Capabilities][Case Studies][Help]     [Email]    │
│  [Story]     [Services]  [Insights]  [Shipping] [Address]   │
│  [Team]      [Fabrics]   [FAQ]       [Samples]  [Social]    │
│  [Careers]   [Custom]                                     │
│              [CTA: Request Quote]                           │
│                                                             │
│  [Copyright] [Legal Links] [Certification Badges]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌─────────────────────────┐
│ [Logo] [Menu] [CTA]    │
├─────────────────────────┤
│ [Home > Contact]        │
├─────────────────────────┤
│                         │
│    [Hero Section]       │
│   (Full-width image)    │
│                         │
│   [Headline: 28px]      │
│ [Subheadline: 14px]     │
│   [CTA: Fill Form]      │
│   [CTA: Call Us]        │
│                         │
├─────────────────────────┤
│                         │
│   [Contact Information] │
│                         │
│   [Contact Info 1]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Contact Info 2]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Contact Info 3]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Contact Info 4]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Contact Info 5]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
│   [Contact Info 6]      │
│   [Icon] [Title]        │
│   [Value] [Description] │
│                         │
├─────────────────────────┤
│                         │
│   [Contact Form]        │
│                         │
│   [Section Title]       │
│   [Description]         │
│                         │
│   [Name Input]          │
│   [Email Input]         │
│   [Phone Input]         │
│   [Company Input]       │
│   [Inquiry Type Select]  │
│   [Message Textarea]    │
│   [CTA: Send Message]   │
│                         │
│   [Contact Info Column] │
│   [Phone]               │
│   [WhatsApp]            │
│   [Email]               │
│   [Address]             │
│                         │
├─────────────────────────┤
│                         │
│   [Google Maps]         │
│                         │
│   [Map Embed]           │
│   [Address Info]        │
│   [CTA: Get Directions] │
│                         │
├─────────────────────────┤
│                         │
│   [FAQ]                 │
│                         │
│   [FAQ 1 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
│   [FAQ 2 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
│   [FAQ 3 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
│   [FAQ 4 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
│   [FAQ 5 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
│   [FAQ 6 ▼]             │
│   [Question]            │
│   [Answer (expandable)] │
│                         │
├─────────────────────────┤
│                         │
│   [Contact CTA]         │
│                         │
│   [Headline: 24px]      │
│ [Description: 14px]     │
│   [CTA: WhatsApp Us]    │
│   [CTA: Call Now]       │
│                         │
├─────────────────────────┤
│                         │
│   [Footer]              │
│   [Company] [Products]  │
│   [Resources] [Support] │
│   [Contact]             │
│   [Copyright] [Legal]    │
│                         │
└─────────────────────────┘
```

## Content Placement
- **Hero:** Contact-focused headline, dual CTAs
- **Contact Information:** 6 contact info cards in 2 rows of 3
- **Contact Form:** 2-column layout (form left, contact info right)
- **Google Maps:** Full-width map with address overlay
- **FAQ:** 6 FAQs in accordion pattern
- **Contact CTA:** Centered, dual CTAs

## CTA Placement
- **Navbar:** "Request Quote" (persistent)
- **Hero:** "Fill Form" (primary), "Call Us" (secondary)
- **Contact Form:** "Send Message" (primary)
- **Google Maps:** "Get Directions" (secondary)
- **Contact CTA:** "WhatsApp Us" (primary), "Call Now" (secondary)
- **Footer:** "Request Quote" (in Contact column)

## Component References
- Sticky Navbar
- Breadcrumb
- Hero Section
- Feature Cards
- Contact Form
- Google Map
- FAQ
- Primary CTA Section
- Footer

## UX Reasoning
- **Multiple Contact Options:** Phone, WhatsApp, email, form
- **Information First:** Contact information visible before form
- **Form Accessibility:** Form always accessible with contact info nearby
- **Location Verification:** Map provides location context
- **FAQ Support:** FAQ addresses common contact questions
- **Direct Contact:** WhatsApp and call CTAs for immediate contact
- **Form Validation:** Clear error states and success feedback

---

# Wireframe Summary

## Common Patterns Across All Pages

### Sticky Navbar
- Always present on all pages
- Logo left, navigation center/right, CTA right
- Mobile: Hamburger menu with full-screen overlay

### Breadcrumb
- Present on inner pages (not homepage)
- Top of page, below navbar
- Full navigation path

### Hero Section
- Full-width background image
- Centered content
- 1-2 CTAs
- Mobile: Stacked content

### Footer
- 5-column grid (desktop), 3-column (tablet), 1-column (mobile)
- Company, Products, Resources, Support, Contact
- Bottom row: Copyright, Legal, Certifications
- CTA in Contact column

### Contact CTA
- Present on most pages before footer
- Centered content
- 1-2 CTAs
- Mobile: Stacked CTAs

## Layout Patterns

### Full-Width Sections
- Hero sections
- Google Maps
- Announcement Bar

### 2-Column Layouts
- Company Overview (About)
- Category Description
- Factory Infrastructure
- Production Capacity
- Contact Form

### 3-Column Grids
- Why Choose Goyal
- Industries Served
- Testimonials
- Timeline (About)

### 4-Column Grids
- Trust Statistics
- Product Categories
- Featured Products
- Products Grid
- Equipment Showcase
- Quality Standards
- Gallery Grid
- Contact Information

### 6-Column Grids
- Client Logos

## Mobile Adaptations

### Grid Stacking
- 4-column → 2-column (tablet) → 1-column (mobile)
- 3-column → 2-column (tablet) → 1-column (mobile)
- 6-column → 4-column (tablet) → 2-column (mobile)

### Content Stacking
- 2-column layouts → Stacked (mobile)
- Horizontal processes → Vertical (mobile)
- CTAs → Stacked (mobile)

### Touch Targets
- Minimum 44px height for buttons and links
- Larger tap targets for mobile

### Typography Scaling
- Headlines: 40px → 32px → 28px
- Body: 16px → 15px → 14px
- Captions: 14px → 13px → 12px

## Component Reuse

### High-Reuse Components
- Sticky Navbar (all pages)
- Footer (all pages)
- Hero Section (most pages)
- Product Cards (Products pages)
- Feature Cards (multiple pages)
- Contact Form (Contact page)
- FAQ (Homepage, Contact)
- Stats (Homepage, About)

### Page-Specific Components
- Timeline (About page)
- Manufacturing Process (Manufacturing page)
- Gallery Grid (Gallery page)
- Image Gallery (Product Detail)
- Filter Bar (Products, Gallery)

## UX Principles Applied

### Progressive Disclosure
- General information first, specific details later
- Categories before products
- Overview before details

### Trust Building
- Trust signals early in page flow
- Certifications and metrics visible
- Authentic images throughout

### Conversion Focus
- Multiple CTAs per page
- Primary CTA always visible (navbar)
- Clear conversion paths

### Scannability
- Clear hierarchy
- Consistent spacing
- Predictable patterns
- Visual grouping

### Mobile-First
- Stacked layouts on mobile
- Expand to grids on desktop
- Touch-friendly targets
- Simplified navigation

---

## Conclusion

These low-fidelity wireframes define the layout, hierarchy, spacing, and user flow for all 10 pages without colors, branding, or final visuals. The wireframes provide:

- **Clear Section Order:** Logical flow from general to specific
- **Consistent Layout Patterns:** Reusable grid systems and component arrangements
- **Mobile Adaptations:** Responsive behavior for all breakpoints
- **CTA Placement:** Strategic conversion points
- **Component References:** Links to Component Library
- **UX Reasoning:** Rationale for layout decisions

UI designers and frontend developers can use these wireframes as the foundation for visual design and implementation without requiring additional layout questions.
