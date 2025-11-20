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
- **Tailwind CSS + custom CSS** (`src/index.css`) set the Dezitech Red / charcoal rhythm, the light/dark section alternation, backdrop blurs, and marquee animation.
- **Framer Motion** (`src/lib/framerVariants.js`) + hooks (`src/hooks/useStaggered.js`, `src/hooks/useParallax.js`, `src/hooks/usePrefersReducedMotion.js`) keep all motion on transforms/opacity, slow the easings to cinematic tempos, and honor `prefers-reduced-motion`.
- **Components** live in `src/components/` – highlights include the Meridian-style `Nav`, the red-panel `Hero`, a layered `SiteLoader`, the reusable `Section` wrapper (controls red/light/dark backgrounds), and an upgraded lazy `Image`.
- **Assets** – `src/assets/uploaded_screenshot.png` maps to the user-supplied screenshot (`// Local test image: /mnt/data/6cbfb618-563c-43b5-8812-e5ad682f882b.png`). Swap the hero render by overwriting that file; the `Hero` imports it directly and documents the local path inline for reference.

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
│   ├── useParallax.js
│   └── useStaggered.js
└── lib/framerVariants.js
```

## Motion & Accent Controls
- `ACCENT_INTERVAL_MS` inside `src/App.js` sets the subtle hero/nav accent cadence (default ~9 s). Set it to `0` to lock the scene in Dezitech red.
- `LOADER_DURATION_MS` controls how long the layered `SiteLoader` runs (default 2300 ms to stay inside the 1.8 s–2.4 s cinematic brief). Shorten or extend it as needed.
- `SiteLoader` accepts a `skipAnimation` prop (wired in `App.js`) so users with `prefers-reduced-motion` bypass the reveal instantly.
- The nav, hero, loader, CTAs, and cards all pull from `src/lib/framerVariants.js`, which now ships the slower cubic-bezier curves requested in the brief.
- `useParallax` keeps the hero visual floating only when motion is allowed; `useStaggered` (IntersectionObserver) still gates section reveals for performance.

## Imagery & Advanced Visuals
- `src/components/Image.jsx` now adds a warm tint/vignette treatment on top of its SVG LQIP placeholder and lazy-loading. Pass `sources` if you need art-directed breakpoints.
- The hero visual’s `<Image />` still sits beside a comment showing exactly where to drop in a Lottie/GLTF scene if you want to switch from the placeholder screenshot.
- Update `src/assets/uploaded_screenshot.png` with your production render (PNG/WEBP). Because the hero imports it directly, `npm start` will immediately show the new frame without code changes.

## Loader & Section Rhythm
- `src/components/SiteLoader.jsx` contains the new layered SVG stroke + geometric planes. Comments at the bottom explain how to swap the motif or fine-tune durations.
- Top-level regions (`Hero`, `Services`, `CaseStudies`, `Industries`, `Contact/Foot`) are wrapped by `src/components/Section.jsx`, which enforces the red → light → dark → light → dark palette rhythm via a simple `variant` prop.

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
