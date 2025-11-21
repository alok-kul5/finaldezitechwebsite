# Production Redo – Dezitech Engineering Homepage

Premium rebuild delivering the Awwwards-grade homepage requirements: cinematic loader, alternating light/dark sections, real imagery, and strictly sourced Dezitech copy.

## Highlights

- **Cinematic Loader** – `SiteLoader` now runs a 5 s (configurable) intro with layered sweeps and logo strokes, skipping instantly for `prefers-reduced-motion`.
- **Navbar** – Centered link bar with Meridian-style underline, scroll blur, and subtle mailto chip only.
- **Hero** – 70 vh split hero, chunked headline reveal, Dezitech-sourced subhead, parallax visual using `public/assets/hero-industrial.jpg`, plus `.hero--center` utility that automatically kicks in sub-900 px.
- **Services & Cards** – Uniform grid (3/2/1), inline icons, `aria-describedby`, and verbatim copy from engineeringdesign/refrigeration pages.
- **Industries Carousel** – Horizontal snap scroll with fade masks and locally cached Unsplash photography.
- **Contact** – Two-column layout, inline validation (name/email/message), aria-live status block, and JSON-LD Organization schema.
- **Image Pipeline** – `ImageWithPlaceholder` now uses IntersectionObserver + blur-up placeholder to lazy load transform-only `motion.img` elements.
- **Variants & Hooks** – `heroVariants`, card hover, loader sweeps, and `useStaggered` all tuned for cinematic pacing with reduced-motion fallbacks.

## New / Updated Assets (stored under `public/assets/`)

| File | Source |
| --- | --- |
| `hero-industrial.jpg` | https://images.unsplash.com/photo-1469474968028-56623f02e42e |
| `industry-gearbox.jpg` | https://images.unsplash.com/photo-1503387762-592deb58ef4e |
| `industry-refrigeration.jpg` | https://images.unsplash.com/photo-1520607162513-77705c0f0d4a |
| `industry-control.jpg` | https://images.unsplash.com/photo-1506126613408-eca07ce68773 |
| `industry-aviation.jpg` | https://images.unsplash.com/photo-1502877338535-766e1452684a |

(Sources listed inline in components + README.)

## Testing

- `npm run build` (CRA) – ✅
- Hero height verified at 70 vh desktop / ~58 vh mobile
- Navbar blur + center alignment, no CTA clutter
- Services/Industries cards respect hover translate only (no tilt)
- Contact form validation + aria-live success/error messaging
- Loader respects reduced-motion preference

## Follow-ups

1. Wire contact form to backend (Netlify Forms or custom API).
2. Optional: swap hero image for branded mp4 loop.
3. Extend industries carousel with CMS data when available.
