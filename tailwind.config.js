// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
        display: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        dezired: '#E10600',
        deziredDark: '#B80500',
        deziredLight: '#FF1A0D',
        maroon: '#3E0E0B',
        maroonDark: '#150808',
        darkbg: '#0A0A0A',
        white: '#FFFFFF',
        black: '#0A0A0A',
        charcoal: '#0A0A0A',
        charcoalSoft: '#111111',
        grey1: '#1A1A1A',
        grey2: '#222222',
        grey3: '#333333',
        greyLight: '#EDEDED',
        softwhite: '#F6F6F6',
        mist: '#F6F6F6',
        graphite: '#808080'
      },
      boxShadow: {
        'card-hover': '0 25px 80px rgba(0,0,0,0.15)',
        'card-soft': '0 8px 32px rgba(0,0,0,0.08)',
        'border-glow': '0 0 0 1px rgba(225,6,0,0.15)',
        'floating': '0 40px 120px rgba(0,0,0,0.65)',
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
        'premium': '0 20px 60px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)'
      },
      backdropBlur: {
        xs: '2px',
        premium: '20px'
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      transitionDuration: {
        slow: '800ms',
        slower: '1200ms'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-maroon': 'linear-gradient(135deg, #3E0E0B 0%, #150808 100%)',
        'gradient-red-dark': 'linear-gradient(135deg, #E10600 0%, #B80500 50%, #0A0A0A 100%)',
        'gradient-red-soft': 'radial-gradient(circle at 20% 20%, rgba(225, 6, 0, 0.15), transparent 55%)',
        glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
      }
    }
  },
  plugins: []
};
