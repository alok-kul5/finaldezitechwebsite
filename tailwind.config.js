/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif']
      },
      colors: {
        dezired: '#E10600',
        charcoal: '#0A0A0A',
        charcoalSoft: '#101010',
        charcoalMuted: '#171717',
        mist: '#F1F1F1',
        graphite: '#808080'
      },
      boxShadow: {
        'card-hover': '0 25px 80px rgba(0,0,0,0.45)',
        'border-glow': '0 0 0 1px rgba(225,6,0,0.45)',
        'floating': '0 40px 120px rgba(0,0,0,0.65)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite'
      }
    }
  },
  plugins: []
};
