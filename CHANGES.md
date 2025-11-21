# Premium Redo UX - Dezitech Engineering Homepage

## Overview
Complete premium redesign of Dezitech Engineering homepage to Awwwards-grade standards with white default background, alternating white/dark sections, extended navigation, static premium cards, and cinematic 12-second loader.

## Files Modified/Created

### Components
- **src/components/Navbar.jsx** - Extended navigation with 30+ links (Home, Services, Solutions, Industries, Case Studies, Products, About, Team, Careers, Capabilities, R&D, Manufacturing, IoT, AtlasEdge, AtlasPredict, AtlasSense, AtlasView, Resources, Blog, Events, Investors, Partners, Sustainability, Certifications, News, Support, Documentation, API, Legal, Contact). Centered layout, subtle Contact CTA, scroll blur, no hamburger on desktop.
- **src/components/SiteLoader.jsx** - Cinematic 12s loader (configurable via REACT_APP_LOADER_MS=12000), multi-step sweep animations, slow brand reveal, aria-live announcement
- **src/components/Hero.jsx** - 64vh height, white background, centered text, chunked line-by-line reveal, local hero image placeholder, outlined primary CTA
- **src/components/ServiceCard.jsx** - Static premium cards, no tilt/hover transforms, subtle typewriter animation, focus-only shadow increase
- **src/components/Industries.jsx** - Horizontal marquee with lazy-loaded images, uppercase text, soft letter spacing
- **src/components/CaseStudies.jsx** - Updated to dark variant for proper alternation

### Styles & Configuration
- **src/index.css** - Complete rewrite: white default background (#FFFFFF), CSS variables (--dezired, --bg-white, --bg-dark, --text-dark, --muted), section alternation (white/dark/white/...), skip link, extended navbar styles, static card styles, marquee animations
- **src/lib/framerVariants.js** - Updated textRevealVariants with line variant, removed hover transforms from cardVariants, extended loader timing (12s sequence)
- **tailwind.config.js** - Updated white color to #FFFFFF
- **src/App.js** - Updated loader duration to 12000ms default

## Key Features

### Design System
- **Default Background**: White (#FFFFFF) - clean, premium feel
- **Section Alternation**: Hero (white) → Services (white) → Case Studies (dark) → Industries (white) → Contact/Footer (charcoal)
- **Color Palette**: Dezitech red (#E10600) accent only, dark backgrounds (#0A0A0A/#111111), white (#FFFFFF), muted text colors
- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing

### Navigation
- **Extended Links**: 30+ navigation links covering all sections (Home, Services, Solutions, Industries, Case Studies, Products, About, Team, Careers, Capabilities, R&D, Manufacturing, IoT, AtlasEdge, AtlasPredict, AtlasSense, AtlasView, Resources, Blog, Events, Investors, Partners, Sustainability, Certifications, News, Support, Documentation, API, Legal, Contact)
- **Layout**: Centered links, brand on left, subtle Contact CTA on right
- **Scroll Behavior**: Transparent on load → blur + darken + 1px stroke on scroll
- **Hover**: Underline grow (scaleX) with color alpha change, no heavy motion

### Hero
- **Height**: 64vh (shorter, more focused)
- **Background**: White (#FFFFFF)
- **Layout**: Two columns (text left, image right), centered option
- **Headline**: Chunked line-by-line reveal with staggered Framer Motion (opacity + translateY only)
- **CTAs**: Primary = outlined dark button with dezired stroke; Secondary = subtle text link
- **Visual**: Local hero image placeholder (TODO: replace with production video/render)

### Cards
- **Style**: Static premium cards - no tilt, no 3D transforms, no hover punch
- **Hover**: None (only subtle box-shadow increase for keyboard focus)
- **Grid**: Responsive 1/2/3 columns (mobile/tablet/desktop)
- **Typography**: Bold titles, regular body, comfortable leading

### Loader
- **Duration**: 12 seconds (12000ms) - cinematic and noticeably long
- **Sequence**: Slow reveal sweep → brand logotype slow scale & fade → low-opacity geometric movement → final content fade-in
- **Configurable**: REACT_APP_LOADER_MS environment variable
- **Accessibility**: Respects prefers-reduced-motion (reduces to 500ms or skips), aria-live announcement

### Industries
- **Marquee**: Horizontal continuous scroll with large uppercase text, soft letter spacing
- **Images**: Lazy-loaded via ImageWithPlaceholder
- **Background**: Alternating light/dark behind marquee

## Build Status
✅ **Build successful** - `npm run build` completed with minor warnings (unused imports)
- JS bundle: 92.26 kB (gzipped)
- CSS bundle: 5.37 kB (gzipped)

## Warnings Fixed
- Removed unused `useEffect` and `useState` imports from Hero.jsx
- Removed unused `heroImageSource` variable

## TODOs (Production)
1. **Hero Image**: Replace placeholder with production hero video (16:9 mp4 loop) or high-res engineering renders
   - Local asset path: `/mnt/data/cd2e0d22-07a3-4e6f-aa63-9b6eb0df7d28.png`
   - Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"
2. **Form Backend**: Hook up contact form to Netlify Forms or Node/Express API
3. **Performance Audit**: Run Lighthouse and optimize bundle if needed
4. **Browser Testing**: Test on Safari, Firefox, Edge
5. **Mobile Testing**: Verify touch interactions, responsive breakpoints, hamburger menu functionality

## Git Commands
```bash
git checkout -b feat/premium-redo-ux
git add .
git commit -m "feat(ui): premium redesign — hero, navbar, cards, cinematic loader"
git push -u origin feat/premium-redo-ux
```

## Local Development
```bash
npm install
npm start          # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run dev         # Alias for npm start
```

## Environment Variables
- `REACT_APP_LOADER_MS` - Override loader duration (default: 12000ms - 12 seconds)
  - Example: `REACT_APP_LOADER_MS=8000 npm start`

## Content Sources
All visible text sourced from Dezitech official pages with inline `/* Source: <URL> */` comments:
- https://dezitechengineering.com/
- https://dezitechengineering.com/about.html
- https://dezitechengineering.com/engineeringdesign.html
- https://dezitechengineering.com/refrigeration.html
- https://dezitechengineering.com/contact.html
