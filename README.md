# Dezitech Engineering – Premium Homepage

Awwwards-grade React homepage for Dezitech Engineering with premium animations, restrained Dezitech red accents, and alternating section backgrounds.

## Quickstart

1. **Install dependencies** – `npm install`
2. **Start development server** – `npm start`
3. **Build for production** – `npm run build`
4. **Preview production build** – `npm run build && npm run preview`

> The dev server runs on http://localhost:3000

## Scripts

- `npm start` – Start CRA development server with hot reload
- `npm run build` – Create production-optimized bundle
- `npm run preview` – Serve the `build` folder locally
- `npm test` – Run Jest test suite
- `npm run eject` – Eject from CRA (irreversible)

## Stack & Structure

- **React 18 + CRA** – Zero-config development experience
- **Tailwind CSS + Custom CSS** – Dezitech brand palette with restrained red accents
- **Framer Motion** – Premium, slow animations (transform + opacity only)
- **Custom Hooks** – `useStaggered`, `useParallax`, `useTypewriter` for reusable animations

```
src/
├── App.js
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── Industries.jsx
│   ├── CaseStudies.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── Section.jsx
├── animations/
│   ├── typewriter.js
│   └── useParallax.js
├── hooks/
│   ├── useStaggered.js
│   └── usePrefersReducedMotion.js
└── lib/
    └── framerVariants.js
```

## Design System

### Colors
- **Dezitech Red** (accent only): `#E10600`
- **Maroon Gradient**: `#3E0E0B` → `#150808`
- **Charcoal/Black**: `#0A0A0A`, `#111111`
- **White**: `#F6F6F6`
- **Grey Light**: `#EDEDED`

### Typography
- **Headlines**: Inter / Plus Jakarta Sans (geometric, softer weights)
- **Body**: Inter / Manrope (readable, medium weight)

### Section Alternation
1. Hero: Dark maroon gradient
2. Services: Clean white
3. Case Studies: Charcoal
4. Industries: Charcoal
5. Contact/Footer: Charcoal

## Motion & Animations

- **Global loader**: 1.4–1.8s cinematic sweep
- **Hero**: Staggered headline lines, typewriter effect
- **Cards**: Uniform heights, hover lift with subtle red border glow
- **Marquee**: Slow, fluid industries strip
- **IntersectionObserver**: Heavy animations only trigger in-view
- **prefers-reduced-motion**: All animations respect user preference

## Content Sources

All text content is sourced from official Dezitech pages with inline URL comments:
- https://dezitechengineering.com/
- https://dezitechengineering.com/about.html
- https://dezitechengineering.com/engineeringdesign.html
- https://dezitechengineering.com/refrigeration.html
- https://dezitechengineering.com/contact.html

## Assets

- Hero placeholder: `/public/assets/hero-placeholder.png`
  - Replace with production hero video (16:9 mp4 loop) or high-res engineering renders
  - TODO comments mark where to swap real photos/videos

## Accessibility

- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- Focus states with Dezitech red outline
- Color contrast compliance
- `prefers-reduced-motion` support throughout

## Performance

- Transform + opacity animations only (GPU-accelerated)
- Lazy loading for images
- IntersectionObserver for scroll-triggered animations
- Optimized bundle size
