/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dezitech: {
          teal: '#14b8a6',
          ink: '#020617',
        },
      },
    },
  },
  plugins: [],
};
