# Dezitech Engineering – CRA + Tailwind

This project is a Create React App rebuild of the Dezitech landing experience, fully wired with Tailwind CSS and Framer Motion.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm start
   ```

The app runs at http://localhost:3000.

## Tailwind CSS
- Tailwind is configured via `tailwind.config.js` with `./src/**/*.{js,jsx}` content scanning.
- PostCSS integrates Tailwind and Autoprefixer through `postcss.config.js`.
- Base directives live in `src/index.css`.

## Available Scripts
- `npm start` – launches the development server.
- `npm run build` – builds the production bundle.
- `npm test` – runs the Jest test runner.
- `npm run eject` – exposes the CRA configuration (irreversible).

## Project Structure
```
public/
  index.html
  favicon.ico
src/
  index.js
  App.js
  App.css
  index.css
  components/
    DezitechHero.jsx
```

## Notes
- Dezitech marketing copy is annotated with inline comments referencing its source URLs.
- Framer Motion powers subtle hero micro-interactions.
