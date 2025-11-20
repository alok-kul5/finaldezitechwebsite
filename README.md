# Dezitech Engineering – Production Build

Create React App + Tailwind scaffold delivering the Dezitech Engineering site with buttery motion, sourced copy, and instant CTA wiring.

## Quickstart
1. **Install** – `npm install`
2. **Develop** – `npm start` (alias: `npm run dev`)
3. **Preview build** – `npm run build && npm run preview`

> The dev server runs on http://localhost:3000.

## Scripts
- `npm start` / `npm run dev` – CRA development server with hot reload.
- `npm run build` – production bundle.
- `npm run preview` – serves the `build` folder locally via `serve`.
- `npm test` – CRA/Jest test runner.
- `npm run eject` – expose CRA config (irreversible).

## Stack & Structure
- **React 18 + CRA** for zero-config DX.
- **Tailwind CSS** (`tailwind.config.js`, `postcss.config.js`) for the dark system palette, marquee animation, and focus rings.
- **Framer Motion** (`src/lib/framerVariants.js`) paired with `src/hooks/useStaggered.js` + `src/hooks/usePrefersReducedMotion.js` for GPU-only transitions that respect `prefers-reduced-motion`.
- **Components** live in `src/components/` (`Nav`, `Hero`, `Services`, `IndustriesStrip`, `CaseStudies`, `ContactForm`, `Footer`, `DezitechHome`). Inline comments tag every line of visible copy with its Dezitech source URL or `// UX POLISH` where bespoke microcopy was required.
- **Assets** – `src/assets/uploaded_screenshot.png` references the user-supplied screenshot (`// local screenshot asset: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png`). Replace this file with the original image if available.

```
src/
├── App.js
├── App.css
├── index.js
├── index.css
├── assets/uploaded_screenshot.png
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── IndustriesStrip.jsx
│   ├── CaseStudies.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── DezitechHome.jsx
├── context/ThemeContext.js
├── hooks/
│   ├── usePrefersReducedMotion.js
│   └── useStaggered.js
└── lib/framerVariants.js
```

## Advanced Visuals
- The hero illustration uses layered parallax transforms only (`translate3d`). Swap in Lottie/GLTF by lazy-loading a heavy asset inside `HeroIllustration`:
  ```jsx
  const Scene = React.lazy(() => import('../visuals/AdvancedScene'));
  <Suspense fallback={<div className="h-full w-full bg-charcoal" />}> <Scene /> </Suspense>
  ```
- Keep replacements wrapped in `React.Suspense` and gate them behind `prefersReducedMotion` if they add non-trivial motion.

## Accessibility & SEO
- Semantic regions (`<nav aria-label="Main">`, `<main>`, `<section>`), high-contrast focus outlines, and keyboard-friendly cards.
- JSON-LD organization snippet emitted inside `ContactForm` to mirror Dezitech contact info.
- Meta title/description managed in `App.js` to align with Dezitech’s existing metadata.

## Performance Notes
- Motion strictly uses opacity/transform, with `will-change` on parallax layers.
- IntersectionObserver (`useStaggered`) delays heavier animations until in-view.
- Marquee + parallax honor `prefers-reduced-motion` per OS settings.

## Security & Audits
Running `npm audit fix --force` on CRA projects can break the toolchain. Review any audit output manually and update the specific dependency instead of forcing overrides.

## Assets & Data
- All visible copy cites Dezitech’s pages (`index`, `about`, `engineeringdesign`, `refrigeration`, `contact`). Generated enhancements are marked `// UX POLISH: generated — short`.
- Services and industries mirror the exact offerings listed on Dezitech’s site, ready to expand into dedicated routes (see the `TODO` in `DezitechHome.jsx`).
