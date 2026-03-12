/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index-premium.html",
    "./script-premium.js"
  ],
  theme: {
    extend: {
      colors: {
        'organic-dark': '#0A0A0A',
        'organic-green': '#1f3d2f',
        'forest': '#193325',
        'highlight-orange': '#FF6B35',
        'pure-white': '#FFFFFF',
        'off-white': '#F5F5F0',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
