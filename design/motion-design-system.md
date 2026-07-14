# Motion Design System
## Goyal Trading Company - Animation Guidelines & Implementation

**Document Version:** 1.0  
**Created:** July 10, 2026  
**Status:** Final Motion Design System for Implementation

---

# Motion Design Philosophy

## Core Principles

### 1. Purposeful Motion
**Principle:** Every animation must serve a clear business purpose
**Implementation:**
- Animations guide user attention
- Animations provide feedback
- Animations indicate state changes
- Animations reduce cognitive load
- No decorative or gratuitous animations

### 2. Subtle and Professional
**Principle:** Animations must be subtle, not distracting
**Implementation:**
- Short durations (200-500ms standard)
- Smooth easing functions
- No bounce or elastic effects
- Consistent timing across components
- Respect user preferences (prefers-reduced-motion)

### 3. Performance First
**Principle:** Animations must not compromise performance
**Implementation:**
- 60fps target
- GPU-accelerated properties only
- Hardware acceleration
- No layout thrashing
- Efficient animation libraries

### 4. User-Controlled
**Principle:** User must control animation initiation
**Implementation:**
- Hover-triggered animations
- Scroll-triggered animations
- Click-triggered animations
- No auto-play without user action
- Stop on user interaction

### 5. Accessible
**Principle:** Animations must respect accessibility
**Implementation:**
- prefers-reduced-motion media query
- No flashing or strobing
- No motion sickness triggers
- Keyboard-accessible animations
- Screen reader announcements

## Animation Timing Standards

### Duration Scale
- **Instant:** 100-150ms (micro-interactions)
- **Fast:** 200-300ms (hover states, transitions)
- **Standard:** 300-500ms (scroll reveals, page loads)
- **Slow:** 500-700ms (complex transitions)
- **Very Slow:** 700-1000ms (rare, special cases)

### Easing Functions
- **Ease-out:** Most common, natural deceleration
- **Ease-in-out:** Smooth start and end
- **Ease-out-back:** Subtle overshoot (rare use)
- **Linear:** Constant speed (rare use)

---

# Navbar

## Sticky Navbar Transition

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-in-out
- **Trigger:** Scroll position > 100px
- **Purpose:** Maintain navigation accessibility while scrolling, provide visual feedback of scroll position

### Visual Changes
- **Background:** Transparent → Solid white (#FFFFFF) with 0.95 opacity
- **Shadow:** None → 0 2px 8px rgba(0, 0, 0, 0.1)
- **Height:** 80px → 72px (subtle compression)
- **Logo:** Scale 1.0 → 0.95

### Performance Considerations
- Use transform and opacity only (GPU-accelerated)
- Avoid animating height (causes layout thrashing)
- Use will-change: transform, opacity
- Debounce scroll events

### Framer Motion Implementation
```javascript
const navbarVariants = {
  transparent: {
    backgroundColor: "transparent",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    height: 80,
  },
  solid: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    height: 72,
  },
};

<motion.nav
  initial="transparent"
  animate={isScrolled ? "solid" : "transparent"}
  variants={navbarVariants}
  transition={{ duration: 0.3, ease: "easeInOut" }}
/>
```

---

## Mega Menu Dropdown

### Animation Details
- **Duration:** 200ms
- **Easing:** ease-out
- **Trigger:** Hover on navigation item
- **Purpose:** Reveal navigation options smoothly, maintain user context

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(-10px) → translateY(0)
- **Visibility:** Hidden → Visible

### Performance Considerations
- Use transform and opacity only
- Add slight delay for hover intent (100ms)
- Use will-change: transform, opacity
- Close on mouse leave with same duration

### Framer Motion Implementation
```javascript
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    visibility: "hidden",
  },
  visible: {
    opacity: 1,
    y: 0,
    visibility: "visible",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

<motion.div
  variants={menuVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
/>
```

---

## Mobile Menu

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-in-out
- **Trigger:** Click on hamburger button
- **Purpose:** Reveal mobile navigation smoothly, provide clear feedback

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateX(100%) → translateX(0)
- **Visibility:** Hidden → Visible

### Performance Considerations
- Use transform and opacity only
- Use will-change: transform, opacity
- Disable body scroll when open
- Close with reverse animation

### Framer Motion Implementation
```javascript
const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
    visibility: "hidden",
  },
  visible: {
    opacity: 1,
    x: 0,
    visibility: "visible",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

<motion.div
  variants={mobileMenuVariants}
  initial="hidden"
  animate={isOpen ? "visible" : "hidden"}
/>
```

---

# Hero

## Hero Content Fade In

### Animation Details
- **Duration:** 500ms
- **Easing:** ease-out
- **Trigger:** Page load
- **Purpose:** Reveal hero content smoothly, guide user attention to primary message

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(30px) → translateY(0)
- **Stagger:** Elements reveal sequentially (100ms delay between elements)

### Performance Considerations
- Use transform and opacity only
- Stagger children for sequential reveal
- Use will-change: transform, opacity
- Skip animation on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

<motion.div
  variants={heroVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={itemVariants}>Headline</motion.h1>
  <motion.p variants={itemVariants}>Subheadline</motion.p>
  <motion.button variants={itemVariants}>CTA</motion.button>
</motion.div>
```

---

## Hero Background Parallax

### Animation Details
- **Duration:** Continuous (scroll-based)
- **Easing:** Linear
- **Trigger:** Scroll
- **Purpose:** Add depth to hero section, create premium feel without distraction

### Visual Changes
- **Transform:** translateY based on scroll position (0.5x speed)
- **Opacity:** Maintain 1.0

### Performance Considerations
- Use transform only (GPU-accelerated)
- Use requestAnimationFrame for smooth performance
- Debounce scroll events
- Disable on mobile for performance

### Framer Motion Implementation
```javascript
const heroBackgroundVariants = {
  initial: { y: 0 },
  scroll: {
    y: (scrollY) => scrollY * 0.5,
    transition: { type: "tween", ease: "linear" },
  },
};

<motion.div
  variants={heroBackgroundVariants}
  initial="initial"
  animate="scroll"
  custom={scrollY}
/>
```

---

# Buttons

## Button Hover

### Animation Details
- **Duration:** 200ms
- **Easing:** ease-out
- **Trigger:** Mouse enter
- **Purpose:** Indicate interactivity, provide visual feedback

### Visual Changes
- **Primary Button:** Color change (10% darker), scale 1.02, shadow increase
- **Secondary Button:** Background fill, color change, scale 1.02
- **Tertiary Button:** Underline animation (left to right)

### Performance Considerations
- Use transform and color only
- Use will-change: transform, background-color
- Skip on prefers-reduced-motion
- Ensure touch targets remain accessible

### Framer Motion Implementation
```javascript
const buttonVariants = {
  primary: {
    hover: {
      backgroundColor: "#DD6B20",
      scale: 1.02,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  },
  secondary: {
    hover: {
      backgroundColor: "#2C5282",
      color: "#FFFFFF",
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  },
  tertiary: {
    hover: {
      textDecoration: "underline",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  },
};

<motion.button
  variants={buttonVariants[type]}
  whileHover="hover"
/>
```

---

## Button Active (Press)

### Animation Details
- **Duration:** 150ms
- **Easing:** ease-out
- **Trigger:** Mouse down / touch start
- **Purpose:** Provide tactile feedback, confirm user action

### Visual Changes
- **Scale:** 1.0 → 0.98
- **Shadow:** Reduce shadow

### Performance Considerations
- Use transform only
- Use will-change: transform
- Ensure feedback is immediate
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const buttonVariants = {
  tap: {
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

<motion.button
  whileTap="tap"
/>
```

---

## Button Loading State

### Animation Details
- **Duration:** Continuous (until complete)
- **Easing:** Linear
- **Trigger:** Button click (async action)
- **Purpose:** Indicate processing state, manage user expectations

### Visual Changes
- **Text:** Replace with spinner or "Loading..."
- **Opacity:** 0.7
- **Pointer Events:** None
- **Spinner:** Rotate 360deg continuously

### Performance Considerations
- Use SVG spinner (lightweight)
- Disable button during loading
- Provide clear loading text
- Ensure spinner is accessible

### Framer Motion Implementation
```javascript
const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

<motion.svg
  variants={spinnerVariants}
  animate="animate"
/>
```

---

# Cards

## Card Hover

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** Mouse enter
- **Purpose:** Indicate interactivity, provide depth, guide user attention

### Visual Changes
- **Transform:** translateY(-4px)
- **Shadow:** 0 2px 4px → 0 4px 8px rgba(0, 0, 0, 0.15)
- **Border Color:** #E2E8F0 → #CBD5E0 (light grey)

### Performance Considerations
- Use transform and box-shadow only
- Use will-change: transform, box-shadow
- Skip on prefers-reduced-motion
- Ensure hover area is accessible

### Framer Motion Implementation
```javascript
const cardVariants = {
  hover: {
    y: -4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    borderColor: "#CBD5E0",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

<motion.div
  variants={cardVariants}
  whileHover="hover"
/>
```

---

## Card Image Zoom

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** Card hover
- **Purpose:** Add visual interest, provide product detail preview

### Visual Changes
- **Transform:** scale(1.0) → scale(1.05)
- **Overflow:** Hidden on container

### Performance Considerations
- Use transform only (GPU-accelerated)
- Use will-change: transform
- Skip on prefers-reduced-motion
- Ensure image quality is maintained

### Framer Motion Implementation
```javascript
const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

<motion.img
  variants={imageVariants}
  whileHover="hover"
/>
```

---

## Card Staggered Reveal

### Animation Details
- **Duration:** 400ms per card
- **Easing:** ease-out
- **Trigger:** Scroll into view
- **Purpose:** Reveal content progressively, reduce cognitive load

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(30px) → translateY(0)
- **Stagger:** 100ms delay between cards

### Performance Considerations
- Use transform and opacity only
- Use Intersection Observer for trigger
- Use will-change: transform, opacity
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

<motion.div
  variants={cardGridVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {cards.map((card) => (
    <motion.div key={card.id} variants={cardVariants}>
      {card.content}
    </motion.div>
  ))}
</motion.div>
```

---

# Images

## Image Fade In

### Animation Details
- **Duration:** 400ms
- **Easing:** ease-out
- **Trigger:** Image load
- **Purpose:** Smooth image appearance, reduce layout shift

### Visual Changes
- **Opacity:** 0 → 1

### Performance Considerations
- Use opacity only
- Preload critical images
- Use lazy loading for below-fold images
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

<motion.img
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  onLoad={() => animate("visible")}
/>
```

---

## Image Gallery Swipe

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** User swipe / click
- **Purpose:** Smooth gallery navigation, maintain user context

### Visual Changes
- **Transform:** translateX based on slide index
- **Opacity:** Non-active slides at 0.5

### Performance Considerations
- Use transform only (GPU-accelerated)
- Use will-change: transform
- Implement touch gestures
- Ensure keyboard navigation

### Framer Motion Implementation
```javascript
const galleryVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

<motion.div
  variants={galleryVariants}
  initial="enter"
  animate="center"
  exit="exit"
  custom={direction}
  transition={{ duration: 0.3, ease: "easeOut" }}
/>
```

---

# Statistics

## Counter Animation

### Animation Details
- **Duration:** 2000ms
- **Easing:** ease-out
- **Trigger:** Scroll into view
- **Purpose:** Draw attention to key metrics, make data engaging

### Visual Changes
- **Number:** Count from 0 to final value
- **Format:** Comma-separated for thousands

### Performance Considerations
- Use requestAnimationFrame for smooth counting
- Trigger once per viewport entry
- Skip on prefers-reduced-motion
- Ensure final value is accessible

### Framer Motion Implementation
```javascript
const counterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const useCounter = (end) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
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
    }
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

<motion.div
  variants={counterVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {useCounter(50000)}
</motion.div>
```

---

## Progress Bar Animation

### Animation Details
- **Duration:** 1500ms
- **Easing:** ease-out
- **Trigger:** Scroll into view
- **Purpose:** Visualize capacity or progress, make data engaging

### Visual Changes
- **Width:** 0% → target percentage
- **Color:** Brand color

### Performance Considerations
- Use width animation (layout thrashing acceptable for this use case)
- Trigger once per viewport entry
- Skip on prefers-reduced-motion
- Ensure final value is accessible

### Framer Motion Implementation
```javascript
const progressBarVariants = {
  hidden: { width: 0 },
  visible: {
    width: "75%",
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

<motion.div
  variants={progressBarVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>
```

---

# FAQ

## Accordion Expand

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** Click on accordion header
- **Purpose:** Reveal content smoothly, maintain user context

### Visual Changes
- **Height:** 0 → auto
- **Opacity:** 0 → 1
- **Icon:** Rotate 180deg

### Performance Considerations
- Use height animation (layout thrashing acceptable)
- Use will-change: height, opacity
- Ensure keyboard accessibility
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const accordionVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

<motion.div
  variants={accordionVariants}
  initial="hidden"
  animate={isOpen ? "visible" : "hidden"}
>
  <motion.div
    variants={iconVariants}
    animate={isOpen ? "open" : "closed"}
  >
    <Icon />
  </motion.div>
</motion.div>
```

---

# Testimonials

## Testimonial Carousel

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** Auto-rotate every 8 seconds or manual navigation
- **Purpose:** Showcase multiple testimonials, maintain engagement

### Visual Changes
- **Transform:** translateX based on slide index
- **Opacity:** Non-active slides at 0.5

### Performance Considerations
- Use transform only (GPU-accelerated)
- Pause on hover
- Ensure keyboard navigation
- Skip auto-rotate on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

<motion.div
  variants={testimonialVariants}
  initial="enter"
  animate="center"
  exit="exit"
  custom={direction}
  transition={{ duration: 0.3, ease: "easeOut" }}
/>
```

---

## Testimonial Fade

### Animation Details
- **Duration:** 500ms
- **Easing:** ease-out
- **Trigger:** Auto-rotate every 8 seconds or manual navigation
- **Purpose:** Smooth testimonial transition, maintain engagement

### Visual Changes
- **Opacity:** 1 → 0 → 1
- **Transform:** translateY(10px) → 0 → translateY(-10px)

### Performance Considerations
- Use transform and opacity only
- Pause on hover
- Ensure keyboard navigation
- Skip auto-rotate on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const testimonialVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

<AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    variants={testimonialVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  />
</AnimatePresence>
```

---

# Gallery

## Gallery Grid Reveal

### Animation Details
- **Duration:** 400ms per item
- **Easing:** ease-out
- **Trigger:** Scroll into view
- **Purpose:** Reveal gallery progressively, reduce cognitive load

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** scale(0.9) → scale(1.0)
- **Stagger:** 50ms delay between items

### Performance Considerations
- Use transform and opacity only
- Use Intersection Observer for trigger
- Use will-change: transform, opacity
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

<motion.div
  variants={galleryVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {images.map((image) => (
    <motion.div key={image.id} variants={itemVariants}>
      {image.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Gallery Lightbox

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-out
- **Trigger:** Click on gallery item
- **Purpose:** Smooth lightbox open/close, maintain user context

### Visual Changes
- **Open:** Scale from clicked item position to full screen
- **Close:** Scale from full screen to clicked item position
- **Opacity:** 0 → 1 → 0

### Performance Considerations
- Use transform and opacity only
- Use FLIP technique for position
- Ensure keyboard navigation
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const lightboxVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

<AnimatePresence>
  {isOpen && (
    <motion.div
      variants={lightboxVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    />
  )}
</AnimatePresence>
```

---

# Forms

## Form Field Focus

### Animation Details
- **Duration:** 200ms
- **Easing:** ease-out
- **Trigger:** Focus on input field
- **Purpose:** Indicate active field, provide visual feedback

### Visual Changes
- **Border Color:** #E2E8F0 → #ED8936 (Manufacturing Orange)
- **Box Shadow:** 0 0 0 3px rgba(237, 137, 54, 0.1)

### Performance Considerations
- Use border-color and box-shadow only
- Use will-change: border-color, box-shadow
- Ensure focus indicator is visible
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const inputVariants = {
  focus: {
    borderColor: "#ED8936",
    boxShadow: "0 0 0 3px rgba(237, 137, 54, 0.1)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  blur: {
    borderColor: "#E2E8F0",
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

<motion.input
  variants={inputVariants}
  animate={isFocused ? "focus" : "blur"}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
/>
```

---

## Form Validation Shake

### Animation Details
- **Duration:** 400ms
- **Easing:** ease-out-back
- **Trigger:** Form submission with errors
- **Purpose:** Indicate validation error, draw attention

### Visual Changes
- **Transform:** translateX(-10px) → translateX(10px) → translateX(0)
- **Repeat:** 2 times

### Performance Considerations
- Use transform only
- Use will-change: transform
- Ensure error message is visible
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const shakeVariants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

<motion.div
  variants={shakeVariants}
  animate={hasError ? "shake" : ""}
/>
```

---

## Form Success Checkmark

### Animation Details
- **Duration:** 500ms
- **Easing:** ease-out
- **Trigger:** Successful form submission
- **Purpose:** Indicate success, provide positive feedback

### Visual Changes
- **Scale:** 0 → 1.2 → 1
- **Opacity:** 0 → 1
- **Path:** Draw checkmark path

### Performance Considerations
- Use SVG path animation
- Use transform and opacity only
- Ensure success message is accessible
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const checkmarkVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: [0, 1.2, 1],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

<motion.svg
  variants={checkmarkVariants}
  initial="hidden"
  animate="visible"
>
  <motion.path
    d="M5 13l4 4L19 7"
    variants={checkmarkVariants}
  />
</motion.svg>
```

---

# Page Transitions

## Page Fade Transition

### Animation Details
- **Duration:** 300ms
- **Easing:** ease-in-out
- **Trigger:** Route change
- **Purpose:** Smooth page transition, maintain user context

### Visual Changes
- **Exit Page:** Opacity 1 → 0
- **Enter Page:** Opacity 0 → 1

### Performance Considerations
- Use opacity only
- Use AnimatePresence for exit animations
- Ensure exit animation completes before enter
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

<AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  />
</AnimatePresence>
```

---

## Page Slide Transition

### Animation Details
- **Duration:** 400ms
- **Easing:** ease-out
- **Trigger:** Route change
- **Purpose:** Directional page transition, indicate hierarchy

### Visual Changes
- **Exit Page:** translateX(0) → translateX(-100%)
- **Enter Page:** translateX(100%) → translateX(0)

### Performance Considerations
- Use transform only (GPU-accelerated)
- Use AnimatePresence for exit animations
- Determine direction based on route hierarchy
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const pageVariants = {
  hidden: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  }),
};

<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={location.pathname}
    variants={pageVariants}
    custom={direction}
    initial="hidden"
    animate="visible"
    exit="exit"
  />
</AnimatePresence>
```

---

# Section Reveal

## Section Fade Up

### Animation Details
- **Duration:** 500ms
- **Easing:** ease-out
- **Trigger:** Scroll into view (10% threshold)
- **Purpose:** Reveal content progressively, guide user attention

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(30px) → translateY(0)

### Performance Considerations
- Use transform and opacity only
- Use Intersection Observer for trigger
- Use will-change: transform, opacity
- Trigger once per viewport entry
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

<motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
/>
```

---

## Section Staggered Reveal

### Animation Details
- **Duration:** 400ms per element
- **Easing:** ease-out
- **Trigger:** Scroll into view (10% threshold)
- **Purpose:** Reveal content progressively, reduce cognitive load

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(30px) → translateY(0)
- **Stagger:** 100ms delay between elements

### Performance Considerations
- Use transform and opacity only
- Use Intersection Observer for trigger
- Use will-change: transform, opacity
- Trigger once per viewport entry
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

<motion.section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.section>
```

---

# Scroll Behaviour

## Smooth Scroll

### Animation Details
- **Duration:** 800ms
- **Easing:** ease-in-out
- **Trigger:** Click on anchor link
- **Purpose:** Smooth navigation to section, maintain user context

### Visual Changes
- **Scroll Position:** Current → Target

### Performance Considerations
- Use native smooth scroll (CSS)
- Fallback to JavaScript for older browsers
- Ensure scroll position is accurate
- Respect scroll-padding-top

### Framer Motion Implementation
```javascript
// CSS approach (preferred)
html {
  scroll-behavior: smooth;
}

// JavaScript fallback
const smoothScroll = (target) => {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
```

---

## Scroll Progress Indicator

### Animation Details
- **Duration:** Continuous (scroll-based)
- **Easing:** Linear
- **Trigger:** Scroll
- **Purpose:** Indicate scroll progress, guide user attention

### Visual Changes
- **Width:** 0% → scroll percentage
- **Color:** Brand color

### Performance Considerations
- Use width animation (layout thrashing acceptable)
- Use requestAnimationFrame for smooth performance
- Debounce scroll events
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const progressVariants = {
  scroll: {
    width: (scrollProgress) => `${scrollProgress}%`,
    transition: { type: "tween", ease: "linear" },
  },
};

<motion.div
  variants={progressVariants}
  animate="scroll"
  custom={scrollProgress}
/>
```

---

# Loading States

## Page Loading Spinner

### Animation Details
- **Duration:** Continuous (until page load)
- **Easing:** Linear
- **Trigger:** Page load
- **Purpose:** Indicate loading state, manage user expectations

### Visual Changes
- **Spinner:** Rotate 360deg continuously
- **Opacity:** 1 → 0 (fade out on load)

### Performance Considerations
- Use SVG spinner (lightweight)
- Use transform only (GPU-accelerated)
- Fade out smoothly on load
- Ensure loading state is accessible

### Framer Motion Implementation
```javascript
const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const loaderVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
  },
};

<AnimatePresence>
  {isLoading && (
    <motion.div
      variants={loaderVariants}
      initial="visible"
      exit="hidden"
    >
      <motion.svg
        variants={spinnerVariants}
        animate="animate"
      />
    </motion.div>
  )}
</AnimatePresence>
```

---

## Skeleton Loading

### Animation Details
- **Duration:** 1500ms
- **Easing:** ease-in-out
- **Trigger:** Component load
- **Purpose:** Indicate loading state, reduce layout shift

### Visual Changes
- **Background:** Shimmer effect (light grey to white to light grey)
- **Opacity:** 0.5 → 1 → 0.5

### Performance Considerations
- Use background-position animation
- Use will-change: background-position
- Ensure skeleton matches content layout
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const skeletonVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

<motion.div
  variants={skeletonVariants}
  animate="animate"
  style={{
    background: "linear-gradient(90deg, #f0f0f0 25%, #ffffff 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
  }}
/>
```

---

## Content Loading Fade

### Animation Details
- **Duration:** 400ms
- **Easing:** ease-out
- **Trigger:** Content load
- **Purpose:** Smooth content appearance, reduce layout shift

### Visual Changes
- **Opacity:** 0 → 1
- **Transform:** translateY(10px) → translateY(0)

### Performance Considerations
- Use transform and opacity only
- Use will-change: transform, opacity
- Ensure content is accessible before animation
- Skip on prefers-reduced-motion

### Framer Motion Implementation
```javascript
const contentVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

<motion.div
  variants={contentVariants}
  initial="hidden"
  animate="visible"
/>
```

---

# Accessibility Considerations

## Prefers Reduced Motion

### Implementation
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Framer Motion Implementation
```javascript
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reducedMotion ? { duration: 0 } : { duration: 0.5 },
  },
};
```

---

## Keyboard Accessibility

### Focus Indicators
- Ensure animated elements maintain focus
- Provide visible focus indicators
- Skip animations on keyboard navigation if distracting

### Screen Reader Announcements
- Annimate content changes to screen readers
- Use ARIA live regions for dynamic content
- Ensure animations don't interfere with screen readers

---

# Performance Optimization

## GPU Acceleration

### Properties to Animate
- **Transform:** translate, scale, rotate
- **Opacity:** fade effects
- **Filter:** blur, brightness (use sparingly)

### Properties to Avoid
- **Width/Height:** Causes layout thrashing
- **Top/Left:** Causes layout thrashing
- **Margin/Padding:** Causes layout thrashing

### will-change Usage
```css
.animated-element {
  will-change: transform, opacity;
}
```

### Remove will-change After Animation
```javascript
element.addEventListener("animationend", () => {
  element.style.willChange = "auto";
});
```

---

## Intersection Observer

### Efficient Scroll Triggers
```javascript
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Trigger animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
```

### Once-Only Triggers
- Unobserve element after first animation
- Prevents unnecessary re-animations
- Improves performance

---

## Debouncing

### Scroll Events
```javascript
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

window.addEventListener("scroll", debounce(handleScroll, 100));
```

### Resize Events
```javascript
window.addEventListener("resize", debounce(handleResize, 200));
```

---

# Animation Best Practices

## Do's

1. **Keep animations short:** 200-500ms for most animations
2. **Use easing functions:** ease-out for most cases
3. **Animate GPU-accelerated properties:** transform, opacity
4. **Provide clear purpose:** Every animation must serve a business purpose
5. **Test performance:** Ensure 60fps target
6. **Respect user preferences:** Skip animations on prefers-reduced-motion
7. **Ensure accessibility:** Keyboard navigation, screen reader support
8. **Use consistent timing:** Similar animations should have similar durations
9. **Test on devices:** Test animations on various devices and browsers
10. **Provide feedback:** Animations should provide clear user feedback

## Don'ts

1. **Don't use decorative animations:** Every animation must have a purpose
2. **Don't use bounce effects:** Keep animations subtle and professional
3. **Don't animate layout properties:** Avoid width, height, top, left
4. **Don't ignore performance:** Test and optimize for 60fps
5. **Don't ignore accessibility:** Ensure animations are accessible
6. **Don't over-animate:** Less is more for professional sites
7. **Don't use long durations:** Keep animations under 500ms
8. **Don't ignore mobile:** Test animations on mobile devices
9. **Don't use complex easing:** Stick to ease-out, ease-in-out
10. **Don't animate without user trigger:** User should control animations

---

# Framer Motion Best Practices

## Component Structure

### Reusable Animation Components
```javascript
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
```

### Custom Animation Hooks
```javascript
const useScrollAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return { ref, inView };
};
```

## Performance Tips

### Use LayoutId for Shared Elements
```javascript
<motion.div layoutId="shared-element" />
```

### Use AnimatePresence for Exit Animations
```javascript
<AnimatePresence mode="wait">
  {condition && <motion.div />}
</AnimatePresence>
```

### Use whileInView for Scroll Triggers
```javascript
<motion.div whileInView="visible" viewport={{ once: true }} />
```

---

# Conclusion

This motion design system provides a comprehensive framework for implementing premium, subtle animations that serve clear business purposes. All animations are designed to:

1. **Guide user attention** to important elements
2. **Provide feedback** on user interactions
3. **Indicate state changes** clearly
4. **Reduce cognitive load** through progressive disclosure
5. **Maintain performance** at 60fps target
6. **Respect accessibility** through prefers-reduced-motion support

**Key Principles:**
- Purposeful motion over decorative
- Subtle and professional over flashy
- Performance-first approach
- User-controlled animations
- Accessibility-first design

**Implementation Priority:**
1. Core interactions (buttons, forms, navigation)
2. Content reveals (sections, cards, images)
3. Advanced features (galleries, carousels, lightboxes)
4. Polish and optimization

This motion design system ensures consistent, performant, and accessible animations across all components while supporting the brand's core principles of operational transparency and technical authority.
