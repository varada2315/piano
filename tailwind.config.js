/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        piano: {
          bg: '#FAFAFA',
          slate: '#5C7E8D',
          slateHover: '#4A6774',
          slateLight: '#E9EFF2',
          dark: '#161719', // Metallic Black
          gold: '#C79A4B',
          accent: '#A1B5C1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.02)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
