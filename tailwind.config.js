/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        cream: '#FFFAE5',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'matter': ['Matter', 'sans-serif'],
      },
      // Mobile-safe viewport height utilities
      minHeight: {
        'screen-dvh': '100dvh',
        'screen-svh': '100svh',
      },
      height: {
        'screen-dvh': '100dvh',
        'screen-svh': '100svh',
      },
    },
  },
  plugins: [],
}