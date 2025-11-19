module.exports = {
  content: ['index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dezitech: {
          red: '#E10600',
          night: '#0C0C0C',
          slate: '#1F1F1F',
          frost: '#F4F6F8',
          smoke: '#D5D8DC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 25px rgba(225, 6, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
