# Dezitech Engineering – Premium Homepage

Awwwards-grade React homepage for Dezitech Engineering with cinematic motion, alternating dark/white sections, and sourced copy pulled verbatim from Dezitech’s official pages.

## Quickstart

1. `npm install`
2. `npm run dev` *(alias for CRA start)*
3. `npm run build`

> Dev server: http://localhost:3000

## Scripts

- `npm start` – CRA dev server
- `npm run dev` – Convenience alias for `npm start`
- `npm run build` – Production bundle (used for deployments)
- `npm test` – CRA/Jest smoke tests
- `npm run eject` – CRA eject (irreversible)

## Stack & Structure

- **React 18 + CRA**
- **Tailwind CSS + handcrafted CSS** (Dezitech palette baked into variables)
- **Framer Motion** for transform + opacity animations only
- **Custom hooks**: `useStaggered`, `useParallax`, `useTypewriter`, `usePrefersReducedMotion`
- **Lazy imagery**: `ImageWithPlaceholder` uses IntersectionObserver blur-up

```
src/
├── components/ (Navbar, Hero, Services, Industries, Contact, etc.)
├── animations/ (typewriter, useParallax)
├── hooks/ (useStaggered, usePrefersReducedMotion)
└── lib/framerVariants.js
```

## Design System

- Palette: Dezitech Red `#E10600` (accent only), deep charcoals `#0A0A0A/#111111`, clean whites `#FFFFFF/#F6F6F6`, light divider grey `#EDEDED`
- Typography: Inter / Plus Jakarta Sans / Manrope via Google Fonts
- Sections alternate: Hero (maroon gradient) → Services (white) → Industries (charcoal) → About/Solutions (white) → Contact + Footer (charcoal)
- Buttons: Dark fill with subtle Dezitech-red stroke and glow on hover

## Motion

- **Cinematic loader**: 5 s sweeps + marquees, skips automatically for `prefers-reduced-motion`
- **Hero**: Chunked headline reveal (~1.8 s), parallax visual, center-aligned option via `.hero--center`
- **Cards**: Uniform height grid, translateY hover (no tilt), accent underline
- **Industries**: Horizontal snap carousel with fade masks
- **All animations** gated by IntersectionObserver + reduced-motion checks

## Content & Assets

All visible copy is sourced from official Dezitech pages and annotated inline:

- https://dezitechengineering.com/
- https://dezitechengineering.com/about.html
- https://dezitechengineering.com/engineeringdesign.html
- https://dezitechengineering.com/refrigeration.html
- https://dezitechengineering.com/contact.html

High-quality royalty-free imagery (Unsplash) is cached locally under `public/assets/` and cited in code/CHANGES.

## Accessibility & Performance

- Semantic HTML, ARIA labels, visible focus outlines
- `prefers-reduced-motion` respected everywhere
- Transform + opacity-only animations for GPU friendliness
- `ImageWithPlaceholder` + IntersectionObserver for lazy blur-up loading
- JSON-LD Organization schema embedded in the contact form
