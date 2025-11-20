/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          '"Plus Jakarta Sans"',
          '"Manrope"',
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        dezired: "#E10600",
        darkbg: "#0A0A0A",
        darkbg2: "#101010",
        stroke: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        "soft-inner": "inset 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover": "0 20px 80px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
