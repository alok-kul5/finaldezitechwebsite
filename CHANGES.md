# Production Redo - Dezitech Engineering Homepage

## Overview
Complete production rebuild of the Dezitech Engineering homepage to Awwwards-grade standards with premium design, animations, and content sourced from official Dezitech pages.

## Files Modified/Created

### Components
- **src/components/Navbar.jsx** - Updated with centered links, scroll blur, premium styling, and Meridian-style underline hover effects
- **src/components/Hero.jsx** - Rebuilt with shorter height (72vh desktop, 56-60vh mobile), chunked text reveal animation, and proper visual placeholder
- **src/components/Services.jsx** - Updated with uniform service cards and proper content annotations
- **src/components/ServiceCard.jsx** - Updated with soft hover (translateY only, no tilt), typewriter animation for titles
- **src/components/Industries.jsx** - Rebuilt with horizontal snap scroll, proper image lazy loading
- **src/components/ContactForm.jsx** - Updated with two-column layout, labels above fields, proper validation, and aria-live success messages
- **src/components/SiteLoader.jsx** - Updated with cinematic intro animation (1.6-2.0s duration)
- **src/components/ImageWithPlaceholder.jsx** - NEW: Lazy-loaded image component with blur-up placeholder support

### Styles
- **src/index.css** - Updated with proper CSS variables, Dezitech color palette, Awwwards-grade styles, and ImageWithPlaceholder component styles

### Configuration
- **tailwind.config.js** - Extended with Dezitech color palette (dezired, maroon, charcoal, etc.), custom shadows, animations, and keyframes

### Animations & Hooks
- **src/lib/framerVariants.js** - Centralized Framer Motion variants with cinematic easing
- **src/hooks/useStaggered.js** - IntersectionObserver hook for scroll-triggered animations
- **src/animations/typewriter.js** - Chunk-based typewriter effect hook
- **src/animations/useParallax.js** - Transform-only parallax hook (pointer-based, disabled on touch/reduced-motion)

## Key Features

### Design System
- **Color Palette**: Dezitech red (#E10600) used sparingly as accent only
- **Backgrounds**: Alternating sections (maroon/charcoal → white → charcoal → white → black)
- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing
- **Spacing**: Tight, premium spacing throughout

### Animations
- **Hero**: Chunked word-by-word text reveal with staggered animation
- **Cards**: Soft hover (translateY -8px, no tilt/3D transforms)
- **Navbar**: Scroll-triggered blur and height reduction
- **Loader**: Cinematic intro with maroon wipe/line sweep (1.6-2.0s)
- **All animations**: Respect `prefers-reduced-motion`, transform + opacity only

### Content
- All visible content sourced from Dezitech official pages with inline source URL comments
- Missing content annotated with `// MISSING_ON_SITE: <field>` comments
- Proper semantic HTML and ARIA attributes for accessibility

### Images
- Hero placeholder: `/assets/hero-placeholder.png` (copied from uploaded screenshot)
- Industries: Placeholder images with TODO comments for Unsplash/Pexels replacements
- Lazy loading with blur-up placeholders via ImageWithPlaceholder component

### Performance
- IntersectionObserver for scroll-triggered animations
- Lazy loading for images
- Transform + opacity-only animations
- Proper `prefers-reduced-motion` support

## Testing Checklist
- [x] Hero fits with no overflow, uses placeholder image
- [x] Sections alternate dark/white/charcoal as specified
- [x] Cards are uniform, hover is soft only (no tilt)
- [x] Loader plays then hero animations
- [x] Contact form works with aria-live success message
- [x] Build contains no CSS parse errors
- [x] All content properly annotated with source URLs

## Next Steps
1. Replace placeholder images with curated Unsplash/Pexels images (queries provided in code comments)
2. Implement form submission backend integration
3. Add hero video (16:9 mp4 loop) as alternative to static image
4. Test on various devices and browsers
5. Performance audit and optimization
