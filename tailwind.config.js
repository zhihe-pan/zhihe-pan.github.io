/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#edf3fb',
        foreground: '#182433',
        muted: '#5f7086',
        accent: {
          DEFAULT: '#2f6fb3',
          deep: '#1d4f87',
          soft: '#dce8f7',
        },
        surface: {
          DEFAULT: 'rgba(248, 251, 255, 0.82)',
          strong: 'rgba(248, 251, 255, 0.94)',
        },
        border: 'rgba(24, 36, 51, 0.1)',
      },
      borderRadius: {
        xl: '34px',
        lg: '24px',
        md: '18px',
      },
      fontFamily: {
        sans: ["Avenir Next", "PingFang SC", "Noto Sans SC", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Songti SC", "Noto Serif SC", "serif"],
      }
    },
  },
  plugins: [],
}
