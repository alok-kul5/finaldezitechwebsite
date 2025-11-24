# Dezitech Engineering – Premium Homepage (Next.js + TypeScript)

A production-ready Next.js + TypeScript + Tailwind + Framer Motion site with complex animated backgrounds, scroll-driven border/line behaviors, and premium animations matching the Integrated Biosciences reference structure.

## Quickstart

1. **Install dependencies** – `npm install`
2. **Start development server** – `npm run dev`
3. **Build for production** – `npm run build`
4. **Start production server** – `npm start`

> The dev server runs on http://localhost:3000

## Scripts

- `npm run dev` – Start Next.js development server with hot reload
- `npm run build` – Create production-optimized build
- `npm start` – Start production server
- `npm run lint` – Run ESLint

## Stack & Structure

- **Next.js 14** – React framework with App Router
- **TypeScript** – Type-safe development
- **Tailwind CSS** – Utility-first CSS with custom design tokens
- **Framer Motion** – Premium animations with exact easing curves
- **Custom Hooks** – `useParallax`, `lerp` utilities for smooth animations

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      # Navigation with scroll-blur
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with 3-layer parallax
│   │   ├── CapabilitiesSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   └── ContactCTA.tsx
│   └── ui/
│       ├── AnimatedSection.tsx  # Server wrapper for useInView + stagger
│       ├── AnimatedSectionClient.tsx  # Client component with animations
│       ├── ProductCard.tsx      # Card with layoutId morph + pill tag
│       └── ContentLine.tsx      # Horizontal rule animations
├── lib/
│   └── framerVariants.ts   # Animation variants with exact specs
├── utils/
│   ├── lerp.ts             # Linear interpolation utility
│   └── useParallax.ts      # Parallax hook with exact multipliers
└── tailwind.config.js      # Tailwind config with container 1200px
```

## Design System

### Colors
- **Dezitech Red** (accent): `#E10600`
- **Maroon Gradient**: `#3E0E0B` → `#150808`
- **Charcoal/Black**: `#0A0A0A`, `#111111`
- **White**: `#F6F6F6`
- **Grey Light**: `#EDEDED`

### Typography
- **Headlines**: Inter / Plus Jakarta Sans (geometric, softer weights)
- **Body**: Inter (system fallback)
- **Font Loading**: Next.js font optimization with Inter

### Animation Specs

#### Global Easings
- `--ease-main`: `cubic-bezier(0.2, 0.9, 0.2, 1)`
- `--ease-micro`: `cubic-bezier(0.22, 0.8, 0.3, 1)`

#### Hero Headline
- Initial: `{ y: 24, opacity: 0 }`
- Animate: `{ y: 0, opacity: 1 }`
- Transition: `{ duration: 0.95, delay: 0.12, ease: --ease-main }`

#### Parallax
- Multipliers: `[0.01, 0.03, 0.07]`
- Scales: `[1.01, 1.03, 1.06]`
- Lerp factor: `0.12`
- Spring fallback: `{ stiffness: 80, damping: 18 }`

#### Border Stroke
- Duration: `0.78s`
- Delay: `0.06s`
- Ease: `--ease-micro`
- Reverse on leave: `0.36s`

#### Content Line
- Duration: `0.42s`
- Stagger: `0.06s`
- ScaleX: `0 → 1`
- Origin: `left`

#### Card Hover
- Scale: `1.035`
- TranslateY: `-6px`
- Shadow: `0 20px 40px rgba(11, 61, 145, 0.08)`
- Transition: `0.28s ease --ease-micro`

## Features

- ✅ Scroll-driven SVG border animations
- ✅ Scroll indicator dot with lerp smoothing
- ✅ 3-layer parallax background in Hero with scales [1.01, 1.03, 1.06]
- ✅ Word-by-word headline animation
- ✅ Card morphing with layoutId
- ✅ Content-line horizontal rule animations
- ✅ Pill tags on product cards
- ✅ Grain overlay texture
- ✅ Condensed font support (Barlow Condensed / Space Grotesk)
- ✅ Intersection-driven animations with stagger
- ✅ Prefers-reduced-motion support
- ✅ TypeScript throughout
- ✅ Next.js App Router
- ✅ Container max-width: 1200px
- ✅ Theme colors: dez-bg, dez-surface, dez-primary, dez-accent, dez-muted

## Font Notes

The heading font uses **Inter** (open-source) as the primary font, with **Plus Jakarta Sans** as a fallback. For condensed display headings, **Barlow Condensed** and **Space Grotesk** are available via the `.font-condensed` class. These are open-source alternatives that provide a similar condensed aesthetic. If the exact proprietary font from the reference site is needed, replace it in `app/layout.tsx` and document the change.

## Image Placeholders

All images are currently placeholders. Replace with production assets:
- Hero image: `/public/assets/hero-placeholder.png`
- Industry images: `/public/assets/industry-*.jpg`

## Legal Note

All text content has been replaced with Dezitech Engineering (MEI contracting) content. Image placeholders are noted with their original locations in comments.
