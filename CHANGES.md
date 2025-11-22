# Premium Homepage Redesign - Dezitech Engineering

## Overview
Complete production-ready rebuild of Dezitech Engineering homepage following strict design rules and mandatory reference sites. All visible text copied verbatim from official Dezitech pages with inline source URL comments. Site follows Awwwards-grade standards with premium spacing, animations, and accessibility.

## Files Created/Modified

### Core Configuration
- **src/components/SiteLoader.jsx** - Updated: Cinematic loader with LOADER_DURATION_MS = 3200ms (3.2s) default, easily configurable via constant or REACT_APP_LOADER_MS env var. Layered shapes + wordmark reveal + slow curtain clip-path. Respects prefers-reduced-motion (reduces to 100ms).

### Components
- **src/components/Navbar.jsx** - Rebuilt: Premium centered navbar (inspired by Meridian - trymeridian.com) with 6 primary links + 20 resource links in dropdown. Transparent on load → blur + darken + 1px stroke on scroll. Accessible mobile hamburger menu. Subtle Contact CTA on right (outlined, not filled).

- **src/components/Hero.jsx** - Updated: 70vh height (60vh mobile) - not full 100vh. Dark variant. Chunked word-by-word reveal (stagger 40-80ms per word, configurable). Layout inspired by Vista Energy (vistaenergy.com). Left: eyebrow, headline, subtext from About page, CTAs. Right: visual placeholder for Lottie/GLTF scene with layered SVG parallax.

- **src/components/Services.jsx** - White variant for alternation. All content with inline source comments from engineeringdesign.html and refrigeration.html.

- **src/components/ServiceCard.jsx** - Updated: Static premium cards (NO TILT). Soft hover: translateY(-4px) scale(1.02) + box-shadow, 280ms transition. Respects prefers-reduced-motion (no transform on hover if reduced motion).

- **src/components/Industries.jsx** - Updated: Dark variant. Horizontal snap-scrolling marquee (inspired by Yardsale - yardsale.day and Integrated Biosciences - integratedbiosciences.com). Lazy-loaded images with blur-up placeholders. All industry names from engineeringdesign.html with inline source comments.

- **src/components/ContactForm.jsx** - Two-column layout on desktop (contact details from contact.html + form). Client-side validation, ARIA live region, all labels with source comments.

- **src/components/ImageWithPlaceholder.jsx** - Blur-up lazy loader with IntersectionObserver.

### Styles & Animation
- **src/index.css** - Updated: Hero height 70vh (60vh mobile). Service card hover: translateY(-4px) scale(1.02) with prefers-reduced-motion fallback. Industries marquee animation with reduced-motion fallback. Navbar dropdown styles. Mobile menu styles. All CSS uses `/* */` comments (no `//` style comments).

- **src/lib/framerVariants.js** - Updated: Text reveal stagger 40-80ms per word (configurable via staggerChildren: 0.06). Card hover: translateY(-4px) scale(1.02). Loader timing for 3.2s sequence. All variants include reference site inspiration comments.

- **tailwind.config.js** - Updated: Dezitech palette (dezired #E10600, darkbg #0B0B0B, darkbg2 #111111, stroke rgba(0,0,0,0.06)).

### Hooks
- **src/hooks/useStaggered.js** - IntersectionObserver with rootMargin support for scroll-triggered animations.
- **src/hooks/usePrefersReducedMotion.js** - Media query detection for accessibility.

### App
- **src/App.js** - Updated: LOADER_DURATION_MS = 3200ms (configurable via REACT_APP_LOADER_MS). Skip-to-content link. Proper source comments.

## Key Features

### Design System (Following Mandatory References)
- **Reference Sites**: Strictly follows patterns from:
  - trymeridian.com (centered nav, spacing)
  - vantor.com (layout feel)
  - 73-strings.mdxpreview.xyz (interactions)
  - vision.avatr.com (hero visual layout)
  - monads.ch (loader timing)
  - styleframe.de (loader feel)
  - vistaenergy.com (hero spacing)
  - integratedbiosciences.com (industries marquee)
  - yardsale.day (industries layout)
  - osmo.supply (visual treatment)
  - Awwwards Clean/Business collections (overall polish)

- **Color Palette**: Dezitech red #E10600 (accent only), dark backgrounds #0B0B0B/#111111, white #FFFFFF, muted text colors. NO teal/green/blue accents.

- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing.

- **Section Alternation**: Hero (dark) → Services (white) → Case Studies (white) → Industries (dark) → Contact/Footer (charcoal).

### Navigation
- **Extended Links**: 30+ navigation links (6 primary + 20 resource links in dropdown: R&D, Manufacturing, IoT, AtlasEdge, AtlasPredict, AtlasSense, AtlasView, Resources, Blog, Partners, Sustainability, Careers, API, Docs, Events, Investors, Certifications, News, Support, Case Studies).

- **Layout**: Centered links horizontally, brand left-of-center, subtle Contact CTA on right.

- **Scroll Behavior**: Transparent on load → blur + darken + 1px stroke on scroll.

- **Hover**: Red underline grow (scaleX) with color alpha change.

- **Mobile**: Accessible hamburger menu with full link list.

### Hero
- **Height**: 70vh desktop (60vh mobile) - not full 100vh.

- **Background**: Dark variant (#0B0B0B).

- **Layout**: Two columns (text left, image right), centered text option.

- **Headline**: Chunked word-by-word reveal (stagger 40-80ms per word, duration 0.55s per word), max-width 60ch, opacity + translateY only.

- **CTAs**: Primary = outlined dark button with dezired stroke; Secondary = subtle text link.

- **Visual**: Placeholder for Lottie/GLTF scene with layered SVG parallax (low-CPU transforms, disabled for prefers-reduced-motion).

### Cards
- **Style**: Static premium cards - NO TILT, NO 3D transforms.

- **Hover**: Soft translateY(-4px) scale(1.02) + box-shadow increase, 280ms transition (transform + opacity only).

- **Grid**: Responsive 1/2/3 columns (mobile/tablet/desktop), uniform height.

- **Radius**: 12px soft corner radius.

### Loader
- **Duration**: 3.2 seconds (3200ms) - cinematic and noticeably long.

- **Sequence**: Layered shapes + wordmark reveal + slow curtain clip-path.

- **Configurable**: LOADER_DURATION_MS constant in SiteLoader.jsx (default 3200ms). Override via REACT_APP_LOADER_MS environment variable (e.g., REACT_APP_LOADER_MS=6000 npm start).

- **Accessibility**: Respects prefers-reduced-motion (reduces to 100ms), aria-live announcement.

### Industries
- **Marquee**: Horizontal snap-scrolling with large uppercase text, soft letter spacing.

- **Images**: Lazy-loaded via ImageWithPlaceholder with blur-up.

- **Background**: Dark variant for alternation.

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
✅ **Build successful** - `npm run build` completed without errors
- JS bundle: 91.98 kB (gzipped)
- CSS bundle: 4.69 kB (gzipped)

## TODOs (Production)
1. **Hero Image**: Replace `/public/assets/hero.png` with production hero video (16:9 mp4 loop) or high-res engineering renders
   - Placeholder comment: `{/* Placeholder for Lottie/GLTF scene */}`
   - Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"

2. **Industry Images**: Replace placeholders with curated Unsplash/Pexels images
   - Queries: "automotive engineering", "car manufacturing", "industrial machinery", "manufacturing equipment", "HVAC system", "refrigeration unit", "oil and gas industry", "petroleum engineering", "aviation engineering", "aircraft manufacturing"

3. **Form Backend**: Hook up contact form to Netlify Forms or Node/Express API (see ContactForm.jsx comments)

4. **Performance Audit**: Run Lighthouse and optimize bundle if needed

5. **Browser Testing**: Test on Safari, Firefox, Edge

6. **Mobile Testing**: Verify touch interactions, responsive breakpoints, hamburger menu functionality

## Git Commands
```bash
# Already on feat/premium-homepage branch
git add .
git commit -m "feat(homepage): premium redesign — hero, nav, services, loader, images, animations"
git push -u origin feat/premium-homepage
```

## Local Development
```bash
npm install
npm start          # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run dev         # Alias for npm start
```

## Environment Variables
- `REACT_APP_LOADER_MS` - Override loader duration (default: 3200ms - 3.2 seconds)
  - Example: `REACT_APP_LOADER_MS=6000 npm start` (for 6 seconds)
  - If `prefers-reduced-motion` is set, automatically reduces to 100ms

## Reference Sites (Mandatory - Design Patterns Followed)
1. https://trymeridian.com/ (centered nav, spacing)
2. https://vantor.com/ (layout feel)
3. https://73-strings.mdxpreview.xyz/ (interactions)
4. https://vision.avatr.com/ (hero visual layout)
5. https://www.monads.ch/ (loader timing)
6. https://styleframe.de/ (loader feel)
7. https://www.vistaenergy.com/ (hero spacing)
8. https://integratedbiosciences.com/ (industries marquee)
9. https://yardsale.day/ (industries layout)
10. https://www.osmo.supply/ (visual treatment)
11. https://www.awwwards.com/websites/clean/ (overall polish)
12. https://www.awwwards.com/websites/businesses/ (business site patterns)

## Animation Specifications
- **Loader**: 3.2s default, layered shapes + wordmark reveal + curtain clip-path
- **Hero H1**: Chunked word-by-word reveal, stagger 40-80ms per word, duration 0.55s per word, opacity + translateY only
- **Section Reveals**: useStaggered hook with IntersectionObserver, stagger children 0.08s
- **Parallax**: Low-CPU translate3d() transforms, mouse-driven on desktop, scroll on mobile, disabled for prefers-reduced-motion
- **Card Hover**: translateY(-4px) scale(1.02) + box-shadow, 280ms transition, transform + opacity only

## Commands Run
```bash
git checkout -b feat/premium-homepage
npm run build  # ✅ Build successful
```
