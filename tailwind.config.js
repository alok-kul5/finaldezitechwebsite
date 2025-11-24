/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dez: {
          bg: "#07070a",
          surface: "#0f1724",
          primary: "#0B3D91",
          accent: "#26c6da",
          muted: "#94a3b8"
        }
      },
      spacing: {
        96: "24rem",
        128: "32rem"
      },
      container: { center: true, padding: "1rem", screens: { lg: "1200px" } },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
        display: ["Space Grotesk", "Satoshi", "Inter", "system-ui"]
      }
    }
  },
  plugins: []
}
