This patch adds components and utilities to bring the Dezitech site closer to the IntegratedBio reference:
- Tailwind tokens and global CSS (hero, header rounded bar, footer giant)
- useParallax hook and lerp util
- Framer Motion variants for hero and staggered reveals
- Hero component with 3 layered backgrounds (using uploaded hero video as placeholder)
- SectionBorder component (SVG stroke + dot progress)
- AnimatedSection wrapper for staggering children reveals
- Navbar that toggles rounded white header -> scrolled blurred header
- ServiceCard and Footer updates
- placeholders: hero-video.mp4 copied into public/placeholders/

How to use:
1. Unzip into your project root, merge files into your src/ and public/ locations (or copy them).
2. Ensure you import ./styles/globals.css from your index.js (CRA) or app/layout.tsx (Next).
3. Install dependencies: framer-motion, tailwindcss/postcss/autoprefixer if missing.
4. Run dev server and test the hero, header, section borders, and footer.

Notes:
- The patch uses the uploaded video as a background placeholder (public/placeholders/hero-video.mp4). Replace with optimized JPG/WEBP images for production.
- Verify Tailwind content paths in your existing tailwind.config.js to avoid duplication.
