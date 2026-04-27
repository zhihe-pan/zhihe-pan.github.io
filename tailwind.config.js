/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F7FF',
        foreground: '#182433',
        academic: '#F0F7FF',
        tech: '#2D1B4E',
        sunset: '#FFF0F5',
        muted: '#5f7086',
        accent: {
          DEFAULT: '#2f6fb3',
          purple: '#6D28D9',
          pink: '#DB2777',
        },
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.6)',
          strong: 'rgba(255, 255, 255, 0.8)',
        },
        border: 'rgba(24, 36, 51, 0.08)',
        card: '#fafbfc',
      },
      borderRadius: {
        xl: '34px',
        lg: '24px',
        md: '18px',
      },
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Playfair Display", "Songti SC", "serif"],
      },
      backgroundImage: {
        'noise': "url('/assets/noise.png')",
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
