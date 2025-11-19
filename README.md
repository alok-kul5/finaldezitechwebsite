# finaldezitechwebsite

## Local Setup & Dependencies

- Install React runtime plus animation stack: `npm install react@18 react-dom@18 framer-motion@11`.
- Add styling toolchain: `npm install -D tailwindcss postcss autoprefixer` then run `npx tailwindcss init -p`.
- Copy the Dezitech palette snippet embedded inside `DezitechHome.tsx` into `tailwind.config.js` under `theme.extend.colors`.
- Place `DezitechHome.tsx` into your React app (for example `src/pages/DezitechHome.tsx`) and import it inside your router or layout shell.
- Ensure your global CSS file includes `@tailwind base; @tailwind components; @tailwind utilities;` and that the Tailwind `content` array covers `./src/**/*.{js,jsx,ts,tsx}`.
- Start your chosen dev server (e.g., `npm run dev` for Vite or `npm start` for CRA) to preview the interactive homepage.
