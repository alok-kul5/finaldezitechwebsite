# Production Redo – Dezitech Engineering Homepage Fixes

## Overview
Complete production rebuild of Dezitech Engineering homepage to Awwwards-grade standards with premium animations, strict Dezitech color palette, and all content sourced from official Dezitech pages.

## Files Modified/Created

### Components
- **src/components/Navbar.jsx** - Rebuilt with centered navigation links, scroll blur, red underline hover, keyboard focus states. Removed Contact Sales CTA.
- **src/components/SiteLoader.jsx** - Cinematic 6s loader (configurable via REACT_APP_LOADER_MS), multi-step sweep animations, respects prefers-reduced-motion
- **src/components/Hero.jsx** - 72vh height, chunked headline reveal, ImageWithPlaceholder with real Unsplash image, center option, source annotations
- **src/components/Services.jsx** - Uniform cards with source annotations from engineeringdesign.html and refrigeration.html
- **src/components/ServiceCard.jsx** - Soft hover (translateY only, no tilt), typewriter animation, aria-describedby
- **src/components/Industries.jsx** - Horizontal snap scroll carousel, white variant for alternation, lazy-loaded images
- **src/components/ContactForm.jsx** - Two-column layout, client-side validation, aria-live status messages, JSON-LD schema
- **src/components/ImageWithPlaceholder.jsx** - IntersectionObserver lazy loading with blur-up placeholder, transform + opacity animations only

### Styles & Configuration
- **src/index.css** - Added skip-link, updated hero to 72vh, section alternation styles, Industries white variant support, all animations GPU-accelerated
- **src/lib/framerVariants.js** - All variants use transform + opacity only, removed filter blur from imageReveal
- **tailwind.config.js** - Dezitech color palette (dezired, maroon, charcoal, white)
- **src/App.js** - Skip link, REACT_APP_LOADER_MS support, semantic landmarks

### Animations & Hooks
- **src/hooks/useStaggered.js** - IntersectionObserver with rootMargin support
- **src/animations/useParallax.js** - Transform-only parallax, disabled on touch/reduced-motion
- **src/animations/typewriter.js** - Chunk-based typewriter effect

## Key Features

### Design System
- **Color Palette**: Dezitech red (#E10600) accent only, deep charcoal/black (#0A0A0A/#111111), maroon gradient (#3E0E0B → #150808), white (#F6F6F6)
- **Section Alternation**: Hero (dark maroon) → Services (white) → Case Studies (white) → Industries (white) → Contact/Footer (charcoal)
- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing
- **Fonts**: Google Fonts stack with proper fallbacks

### Animations
- **Loader**: 6s cinematic intro with sweep masks, logo reveal, fade transitions (configurable via REACT_APP_LOADER_MS)
- **Hero**: Chunked word-by-word text reveal with staggered animation (~1.5-2s total)
- **Cards**: Soft hover (translateY -6px, no tilt/3D), subtle red border glow
- **Navbar**: Scroll-triggered blur, red underline on hover (Meridian-style)
- **All animations**: Transform + opacity only (GPU-accelerated), respect prefers-reduced-motion

### Content
- All visible content sourced from Dezitech official pages with inline `/* Source: <URL> */` comments
- Hero subhead from about.html
- Services from engineeringdesign.html and refrigeration.html
- Contact details from contact.html

### Images
- Hero: `/assets/hero-industrial.jpg` (Unsplash: https://images.unsplash.com/photo-1469474968028-56623f02e42e)
- Industries: 5 curated Unsplash images (gearbox, industrial, refrigeration, control, aviation)
- All images lazy-loaded via ImageWithPlaceholder with blur-up placeholders

### Accessibility
- Skip link to main content
- Semantic HTML landmarks (`<main>`, `<nav>`, `<footer>`)
- Keyboard focus states with Dezitech red outline
- ARIA labels and live regions
- `prefers-reduced-motion` support throughout

### Performance
- IntersectionObserver for scroll-triggered animations
- Lazy loading for images
- Transform + opacity-only animations (no layout shifts)
- Optimized bundle size

## Build Status
✅ **Build successful** - `npm run build` completed without errors
- JS bundle: 91.92 kB (gzipped)
- CSS bundle: 5.27 kB (gzipped)

## Testing Checklist
- [x] Hero fits with 72vh height, no overflow
- [x] Sections alternate dark/white/white/white/charcoal as specified
- [x] Cards are uniform, hover is soft only (no tilt)
- [x] Loader plays 6s cinematic intro (configurable)
- [x] Contact form works with aria-live success message
- [x] Build contains no CSS parse errors
- [x] All content properly annotated with source URLs
- [x] Skip link functional
- [x] Keyboard navigation works

## TODOs (Production)
1. **Images**: Replace placeholder images with production hero video (16:9 mp4 loop) or high-res engineering renders
   - Suggested Unsplash queries: "automotive engineering", "industrial plant", "thermal lab", "EV thermal module"
2. **Form Backend**: Hook up contact form to Netlify Forms or Node/Express API (see ContactForm.jsx comments)
3. **Performance Audit**: Run Lighthouse and optimize bundle if needed
4. **Browser Testing**: Test on Safari, Firefox, Edge
5. **Mobile Testing**: Verify touch interactions and responsive breakpoints

## Git Commands
```bash
git checkout -b feat/premium-homepage-fixes
git add .
git commit -m "feat(homepage): production-ready premium redesign — hero, nav, services, loader"
git push -u origin feat/premium-homepage-fixes
```

## Local Development
```bash
npm install
npm start          # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run dev         # Alias for npm start
```

## Environment Variables
- `REACT_APP_LOADER_MS` - Override loader duration (default: 6000ms)
  - Example: `REACT_APP_LOADER_MS=5000 npm start`
