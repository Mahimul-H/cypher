/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#050505',
        'charcoal': '#111111',
        'dark-grey': '#1a1a1a',
        'grey-stroke': '#2a2a2a',
        'neon-lime': '#CCFF00',
        'electric-blue': '#00F0FF',
        'neon-gold': '#FFD166',
        'neon-red': '#FF0055',
        'dark-purple': '#7c3aed',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-lime': '0 0 20px rgba(204, 255, 0, 0.5)',
        'neon-red': '0 0 30px rgba(255, 0, 85, 0.4)',
      },
      animation: {
        'float': 'float 3.6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3.2s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 6px 30px rgba(0, 240, 255, 0.06)' },
          '50%': { boxShadow: '0 18px 60px rgba(0, 240, 255, 0.12)' },
          '100%': { boxShadow: '0 6px 30px rgba(0, 240, 255, 0.06)' },
        },
      },
    },
  },
  plugins: [],
}
