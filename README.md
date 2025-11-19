# Dezitech Engineering – Hero Scaffold

Production-focused, minimal Vite + React + Tailwind starter for the Dezitech Engineering hero experience.

## Run locally
1. `npm install`
2. `npm run dev`
3. Open the Vite dev server URL shown in the terminal.

## Tech decisions
- Vite + React for instant hydration and HMR.
- Tailwind CSS for the shared design tokens (Dezitech red + grayscale palette).
- Framer Motion for staged hero, CTA, and illustration motion with `prefers-reduced-motion` support.

## Asset mapping
- The hero references `/assets/uploaded_screenshot.png`. Copy the provided screenshot from `/mnt/data/673882fb-e478-403d-b063-c6ef7d3d5bdd.png` into `public/assets/uploaded_screenshot.png` if it is not already present.

## Structured data starter
```jsonc
// JSON-LD seed using contact & location data from https://www.dezitechengineering.com/contact.html
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dezitech Engineering Pvt. Ltd.",
  "email": "info@dezitechengineering.com",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Karad",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Bristol",
      "addressCountry": "UK"
    }
  ]
}
```
