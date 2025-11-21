# Final Premium Redo - Dezitech Engineering Homepage

## Overview
Complete final premium redesign of Dezitech Engineering homepage to Awwwards-grade standards with perfect spacing, centered hero text, white-first background, static premium cards (no tilt), cinematic 10-second loader, and professional centered navbar with extended links. All content sourced from official Dezitech pages with inline source URL comments.

## Files Modified/Created

### Components
- **src/components/Navbar.jsx** - Premium centered navbar with 30+ extended links (Home, Services, Solutions, Industries, Case Studies, Products, About, Team, Careers, Contact, Capabilities, R&D, Manufacturing, IoT, AtlasEdge, AtlasPredict, AtlasSense, AtlasView, Resources, Blog, Events, Investors, Partners, Sustainability, Certifications, News, Support, Documentation, API, Legal). Transparent over hero → blurred + solid + 1px stroke on scroll. Accessible mobile hamburger.
- **src/components/SiteLoader.jsx** - Cinematic 10s loader (configurable via REACT_APP_LOADER_MS=10000), multi-step sweep animations, slow brand reveal, aria-live announcement. Reduces to 500ms if prefers-reduced-motion.
- **src/components/Hero.jsx** - 64vh height, white background, centered text, chunked word-by-word reveal (~1.5s total), max-width 60ch for headline, right-side visual using local hero image (/public/assets/hero.png)
- **src/components/Services.jsx** - Updated to dark variant for proper alternation. All content with inline source comments from Dezitech pages.
- **src/components/ServiceCard.jsx** - Static premium cards (no tilt/hover transforms), uniform height, soft radius (12px), subtle elevation, keyboard focus with soft red-outline (low opacity)
- **src/components/Industries.jsx** - Horizontal snap scroll marquee with lazy-loaded images, uppercase text, soft letter spacing
- **src/components/ContactForm.jsx** - Two-column layout, client-side validation, ARIA live region, all labels with source comments
- **src/components/CaseStudies.jsx** - Dark variant for proper alternation

### Styles & Configuration
- **src/index.css** - Complete premium styling: white default background (#FFFFFF), CSS variables (--dezired, --bg-white, --bg-dark, --text-dark, --muted), section alternation (white/dark/white/dark), static card styles (12px radius, no hover transforms), dark section card variants
- **src/lib/framerVariants.js** - Added LOADER_MS (10000ms) and STAGGER_DELAY (0.08) constants, updated loader timing for 10s sequence
- **tailwind.config.js** - Dezitech color palette (dezired #E10600, white #FFFFFF, dark #0A0A0A)
- **src/App.js** - Updated loader duration to 10000ms default

### Assets
- **public/assets/hero.png** - Local hero image asset (copied from placeholder, ready for production replacement)

## Key Features

### Design System
- **Default Background**: White (#FFFFFF) - clean, premium feel
- **Section Alternation**: Hero (white) → Services (dark) → Case Studies (dark) → Industries (white) → Contact/Footer (charcoal)
- **Color Palette**: Dezitech red (#E10600) accent only, dark backgrounds (#0A0A0A/#111111), white (#FFFFFF), muted text colors
- **Typography**: Inter / Plus Jakarta Sans / Manrope with responsive clamp() sizing

### Navigation
- **Extended Links**: 30+ navigation links covering all sections
- **Layout**: Centered links horizontally, brand left-of-center, subtle Contact CTA on right
- **Scroll Behavior**: Transparent on load → blur + darken + 1px stroke on scroll
- **Hover**: Underline grow (scaleX) with color alpha change, no heavy motion
- **Mobile**: Accessible hamburger menu

### Hero
- **Height**: 64vh (shorter, more focused)
- **Background**: White (#FFFFFF)
- **Layout**: Two columns (text left, image right), centered text option
- **Headline**: Chunked word-by-word reveal with staggered Framer Motion (opacity + translateY only), max-width 60ch, ~1.5s total reveal
- **CTAs**: Primary = outlined dark button with dezired stroke; Secondary = subtle text link
- **Visual**: Local hero image (/public/assets/hero.png) with soft radial overlays and low-poly shapes

### Cards
- **Style**: Static premium cards - no tilt, no 3D transforms, no hover punch
- **Hover**: None (only subtle box-shadow increase for keyboard focus with soft red-outline)
- **Grid**: Responsive 1/2/3 columns (mobile/tablet/desktop), uniform height
- **Radius**: 12px soft corner radius
- **Typography**: Bold titles, regular body, comfortable leading

### Loader
- **Duration**: 10 seconds (10000ms) - cinematic and noticeably long
- **Sequence**: Slow reveal sweep → brand logotype slow scale & fade → low-opacity geometric movement → final content fade-in
- **Configurable**: REACT_APP_LOADER_MS environment variable
- **Accessibility**: Respects prefers-reduced-motion (reduces to 500ms), aria-live announcement

### Industries
- **Marquee**: Horizontal continuous scroll with large uppercase text, soft letter spacing
- **Images**: Lazy-loaded via ImageWithPlaceholder
- **Background**: Alternating light/dark behind marquee

## Content Sources (All Inline Comments)

All visible text sourced from Dezitech official pages with inline `/* Taken from Dezitech [Page]: <URL> */` comments:

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
- JS bundle: 92.26 kB (gzipped)
- CSS bundle: 5.39 kB (gzipped)

## TODOs (Production)
1. **Hero Image**: Replace `/public/assets/hero.png` with production hero video (16:9 mp4 loop) or high-res engineering renders
   - Original local asset: `/mnt/data/cd2e0d22-07a3-4e6f-aa63-9b6eb0df7d28.png`
   - Suggested Unsplash queries: "automotive engineering", "industrial factory interior", "ev thermal module"
2. **Form Backend**: Hook up contact form to Netlify Forms or Node/Express API
3. **Performance Audit**: Run Lighthouse and optimize bundle if needed
4. **Browser Testing**: Test on Safari, Firefox, Edge
5. **Mobile Testing**: Verify touch interactions, responsive breakpoints, hamburger menu functionality

## Git Commands
```bash
git checkout -b feat/premium-final-redo
git add .
git commit -m "feat(ui): premium redesign — hero, navbar, cards, cinematic loader"
git push -u origin feat/premium-final-redo
```

## Local Development
```bash
npm install
npm start          # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run dev         # Alias for npm start
```

## Environment Variables
- `REACT_APP_LOADER_MS` - Override loader duration (default: 10000ms - 10 seconds)
  - Example: `REACT_APP_LOADER_MS=8000 npm start`
  - If `prefers-reduced-motion` is set, automatically reduces to 500ms

## Reference Sites (Style Inspiration)
Design patterns inspired by premium Awwwards-grade sites:
1. https://trymeridian.com/
2. https://vantor.com/
3. https://73-strings.mdxpreview.xyz/
4. https://vision.avatr.com/
5. https://www.monads.ch/
6. https://www.vistaenergy.com/
7. https://integratedbiosciences.com/
8. https://styleframe.de/
9. https://yardsale.day/
10. https://www.osmo.supply/
11. https://moves.basicagency.com/
12. https://unseenstudio.com/
13. https://www.jeton.com/
14. https://www.phamily.com/
15. https://www.resn.co.nz/
16. https://www.ueno.co/
17. https://www.locomotive.ca/
18. https://www.active-theory.com/
19. https://www.moooi.com/
20. https://www.nova.smart

Plus Awwwards Clean and Business collections for style standards.
