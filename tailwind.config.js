module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
        },
        'blue': {
          500: '#3b82f6',
        },
        'green': {
          500: '#10b981',
        },
        'yellow': {
          500: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}