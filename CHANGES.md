# Premium Homepage Redesign - Dezitech Engineering

## Overview
Complete production-ready rebuild of Dezitech Engineering homepage from scratch to Awwwards-grade standards. All design patterns, spacing, micro-interactions, and visual pacing strictly follow mandatory reference sites. All visible text copied verbatim from official Dezitech pages with inline source URL comments.

## Files Created/Modified

### Core Configuration
- **src/config.js** - NEW: Centralized constants (LOADER_DURATION_MS=3000ms, STAGGER_DELAY=0.08)
- **src/App.js** - Updated to use LOADER_DURATION_MS from config, proper source comments

### Components
- **src/components/Navbar.jsx** - Rebuilt: Premium centered navbar with 30+ extended links (primary nav + resource dropdown), scroll blur, accessible mobile hamburger, subtle Contact CTA
- **src/components/SiteLoader.jsx** - Cinematic 3s loader (configurable via REACT_APP_LOADER_MS), layered shapes + wordmark reveal + slow curtain clip-path, respects prefers-reduced-motion (reduces to 100ms)
- **src/components/Hero.jsx** - 70vh height (64vh mobile), dark variant, centered text, chunked word-by-word reveal (stagger 0.06s, duration 0.55s per word), local hero image reference
- **src/components/Services.jsx** - White variant for alternation, all content with inline source comments
- **src/components/ServiceCard.jsx** - Static premium cards (no tilt), soft hover translateY(-4px) + box-shadow, 280ms transition, uniform height
- **src/components/Industries.jsx** - Dark variant, horizontal snap-scrolling marquee with lazy-loaded images, uppercase text, soft letter spacing
- **src/components/CaseStudies.jsx** - White variant for alternation, proper source comments
- **src/components/ContactForm.jsx** - Two-column layout, client-side validation, ARIA live region, all labels with source comments
- **src/components/ImageWithPlaceholder.jsx** - Blur-up lazy loader with IntersectionObserver

### Styles & Animation
- **src/index.css** - Complete rewrite: CSS variables (--dezired, --bg-white, --bg-dark, --text-dark, --muted), section alternation (dark/white/dark/white), navbar dropdown styles, mobile menu, static card hover (translateY -4px, 280ms), hero 70vh height
- **src/lib/framerVariants.js** - Updated: Text reveal stagger 0.06s, duration 0.55s per word, card hover translateY(-4px), loader timing for 3s sequence
- **tailwind.config.js** - Updated: Dezitech palette (dezired #E10600, darkbg #0B0B0B, darkbg2 #111111, stroke rgba(0,0,0,0.06))

### Hooks
- **src/hooks/useStaggered.js** - IntersectionObserver with rootMargin support
- **src/hooks/usePrefersReducedMotion.js** - Media query detection

## Key Features

### Design System (Following Mandatory References)
- **Reference Sites**: Strictly follows patterns from trymeridian.com, vantor.com, 73-strings.mdxpreview.xyz, vision.avatr.com, monads.ch, styleframe.de, vistaenergy.com, integratedbiosciences.com, osmo.supply, yardsale.day, and Awwwards Clean/Business collections
- **Color Palette**: Dezitech red #E10600 (accent only), dark backgrounds #0B0B0B/#111111, white #FFFFFF, muted text colors
- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing
- **Section Alternation**: Hero (dark) → Services (white) → Case Studies (white) → Industries (dark) → Contact/Footer (charcoal)

### Navigation
- **Extended Links**: 30+ navigation links (6 primary + 20 resource links in dropdown)
- **Layout**: Centered links horizontally, brand left-of-center, subtle Contact CTA on right
- **Scroll Behavior**: Transparent on load → blur + darken + 1px stroke on scroll
- **Hover**: Red underline grow (scaleX) with color alpha change
- **Mobile**: Accessible hamburger menu with full link list

### Hero
- **Height**: 70vh desktop (64vh mobile) - not full 100vh
- **Background**: Dark variant (#0B0B0B)
- **Layout**: Two columns (text left, image right), centered text option
- **Headline**: Chunked word-by-word reveal (stagger 0.06s, duration 0.55s per word), max-width 60ch, opacity + translateY only
- **CTAs**: Primary = outlined dark button with dezired stroke; Secondary = subtle text link
- **Visual**: Local hero image reference (/mnt/data/de1c34cf-3521-4d82-812e-4412c9adfbf8.png) with layered SVG parallax

### Cards
- **Style**: Static premium cards - no tilt, no 3D transforms
- **Hover**: Soft translateY(-4px) + box-shadow increase, 280ms transition (transform + opacity only)
- **Grid**: Responsive 1/2/3 columns (mobile/tablet/desktop), uniform height
- **Radius**: 12px soft corner radius

### Loader
- **Duration**: 3 seconds (3000ms) - cinematic and noticeably long
- **Sequence**: Layered shapes + wordmark reveal + slow curtain clip-path
- **Configurable**: REACT_APP_LOADER_MS environment variable
- **Accessibility**: Respects prefers-reduced-motion (reduces to 100ms), aria-live announcement

### Industries
- **Marquee**: Horizontal snap-scrolling with large uppercase text, soft letter spacing
- **Images**: Lazy-loaded via ImageWithPlaceholder with blur-up
- **Background**: Dark variant for alternation

## Content Sources (All Inline Comments)

All visible text sourced from Dezitech official pages with inline `/* Taken from <URL> */` comments:

- **Homepage**: https://dezitechengineering.com/
  - Hero title: "Engineering outsourcing solutions in design and product manufacturing"
  - Hero eyebrow: "Engineering outsourcing solutions"
  - Meta title: "Dezitech Engineering"
  - Meta description: "Dezitech Engineering Pvt. Ltd., Karad, India. Your Engineering design/ technology partner!"

- **About Page**: https://dezitechengineering.com/about.html
  - Hero subhead: "Dezitech is your solutions provider in engineering design, products and supply chain."
  - Service card: "We work as an extension of customers engineering team."
  - Hero meta: "20+ years delivering global engineering programs"
  - Contact support: "We manage the entire process from finding suitable manufacturers to continuous supply of products / components."
  - Contact address: "Karad, India · Bristol, UK"

- **Engineering Design Page**: https://dezitechengineering.com/engineeringdesign.html
  - Section eyebrow: "Engineering / Design Services"
  - Section title: "We solve technical challenges and provide resources to get new products faster to the market."
  - Section description: "New products need to be introduced ahead of the competition. Any delay means loosing business and money."
  - Service cards: "Design Engineering expertise & resources", "Availability of Diverse engineering expertise", "CAE- FEA and CFD expert services"
  - Industries: "Automotive", "Industrial Equipment", "HVAC & Refrigeration", "Oil & Gas", "Aviation"
  - Industries title: "We provide end to end service or tailored individual needs worldwide to diverse and multidisciplinary industries."

- **Refrigeration Page**: https://dezitechengineering.com/refrigeration.html
  - Service cards: "Refrigeration systems", "Variety of refrigerants", "Electrical / control design engineering expertise"

- **Contact Page**: https://dezitechengineering.com/contact.html
  - Contact title: "Please do contact us for any further details such as work samples, quotation or discus how we can help you."
  - Contact email: "info@dezitechengineering.com"
  - Form labels: "Name", "Email", "Phone", "Message", "Submit"

## Build Status
✅ **Build successful** - `npm run build` completed with minor warning (unused floatEase variable - fixed)
- JS bundle: 92.28 kB (gzipped)
- CSS bundle: 5.56 kB (gzipped)

## TODOs (Production)
1. **Hero Image**: Replace `/public/assets/hero.png` with production hero video (16:9 mp4 loop) or high-res engineering renders
   - Original local asset: `/mnt/data/de1c34cf-3521-4d82-812e-4412c9adfbf8.png`
   - Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"
2. **Industry Images**: Replace placeholders with curated Unsplash/Pexels images
   - Queries: "automotive manufacturing", "industrial manufacturing plant", "hvac plant", "industrial gearbox", "assembly line"
3. **Form Backend**: Hook up contact form to Netlify Forms or Node/Express API (see ContactForm.jsx comments)
4. **Performance Audit**: Run Lighthouse and optimize bundle if needed
5. **Browser Testing**: Test on Safari, Firefox, Edge
6. **Mobile Testing**: Verify touch interactions, responsive breakpoints, hamburger menu functionality

## Git Commands
```bash
git checkout -b feat/premium-homepage-redesign
git add .
git commit -m "feat(homepage): premium redesign — hero, navbar, services, industries, loader, animations, accessibility"
git push -u origin feat/premium-homepage-redesign
```

## Local Development
```bash
npm install
npm start          # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run dev         # Alias for npm start
```

## Environment Variables
- `REACT_APP_LOADER_MS` - Override loader duration (default: 3000ms - 3 seconds)
  - Example: `REACT_APP_LOADER_MS=5000 npm start`
  - If `prefers-reduced-motion` is set, automatically reduces to 100ms

## Reference Sites (Mandatory - Design Patterns Followed)
1. https://trymeridian.com/
2. https://vantor.com/
3. https://73-strings.mdxpreview.xyz/
4. https://vision.avatr.com/
5. https://www.monads.ch/
6. https://styleframe.de/
7. https://www.vistaenergy.com/
8. https://integratedbiosciences.com/
9. https://www.osmo.supply/
10. https://yardsale.day/
11. https://www.awwwards.com/websites/clean/
12. https://www.awwwards.com/websites/businesses/
13. https://www.youtube.com/watch?v=djDZHAi75dk (cinematic timing reference)

## Animation Specifications
- **Loader**: 3s default, layered shapes + wordmark reveal + curtain clip-path
- **Hero H1**: Chunked word-by-word reveal, stagger 0.06s, duration 0.55s per word, opacity + translateY only
- **Section Reveals**: useStaggered hook with IntersectionObserver, stagger children 0.08s
- **Parallax**: Low-CPU translate3d() transforms, mouse-driven on desktop, scroll on mobile, disabled for prefers-reduced-motion
- **Card Hover**: translateY(-4px) + box-shadow, 280ms transition, transform + opacity only
