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
- **Tailwind CSS** (`tailwind.config.js`, `postcss.config.js`) for the deep charcoal palette, marquee animation, and focus rings.
- **Framer Motion** (`src/lib/framerVariants.js`) paired with `src/hooks/useStaggered.js` + `src/hooks/usePrefersReducedMotion.js` keeps all motion on transforms/opacity and respects `prefers-reduced-motion`.
- **Components** live in `src/components/` – highlights include the production `Nav`, alternating-accent `Hero`, GPU-only `SiteLoader`, lazy `Image` wrapper, and the existing content sections (`Services`, `IndustriesStrip`, `CaseStudies`, `ContactForm`, `Footer`, `DezitechHome`). Inline comments continue to cite Dezitech’s source URLs or mark custom copy as `// UX POLISH`.
- **Assets** – `src/assets/uploaded_screenshot.png` maps to the user-supplied screenshot (`// Local test image: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png`). Drop in the production render or video poster there and the hero will update automatically.

```
src/
├── App.js
├── App.css
├── index.js
├── index.css
├── assets/uploaded_screenshot.png
├── components/
│   ├── Nav.jsx
│   ├── SiteLoader.jsx
│   ├── Image.jsx
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

## Motion & Accent Controls
- `ACCENT_INTERVAL_MS` inside `src/App.js` sets the hero/nav accent cadence (default ~9s). Set it to `0` to lock the brand in Dezitech red; values between 8000–12000 keep the premium alternating pulse.
- `LOADER_DURATION_MS` controls how long `SiteLoader` stays on screen (default 2000ms to stay inside the 1.4s–2.2s brief).
- The loader, hero, nav, and CTA animations all reuse variants from `src/lib/framerVariants.js` to keep micro-interactions consistent.
- `SiteLoader` automatically skips when `prefers-reduced-motion` is enabled; the hero also halts its accent swap and parallax in that mode.

## Imagery & Advanced Visuals
- `src/components/Image.jsx` wraps `<picture>` / `<img>` with LQIP placeholders, lazy-loading (`loading="lazy"`), and graceful fallbacks. Use it anywhere you need a blurred placeholder by passing `src`, `alt`, and optional `sources`.
- The hero visual layers use only `translate3d` parallax and `rotate` transforms. To bring in a heavier Lottie/GLTF asset, lazy-load it near the `<Image />` comment inside `Hero.jsx`:
  ```jsx
  const Visual = React.lazy(() => import('../visuals/AdvancedScene'));
  <Suspense fallback={<div className="hero-visual__image-frame" />}>
    <Visual />
  </Suspense>
  ```
- Update `src/assets/uploaded_screenshot.png` with your production render (PNG/WEBP) to refresh the hero immediately. The comment in `Hero.jsx` also references the local `/mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png` path for quick testing.

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
