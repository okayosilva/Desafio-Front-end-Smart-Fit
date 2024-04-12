/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#333333',
        'light-grey': '#808080',
        'light-yellow': '#FFB612',
        'light-red': '#dc0a17',
        'light-green': '#2FC022',
      },
      fontFamily: {
        'gotham-black': ['gotham-black'],
        'gotham-bold': ['gotham-bold'],
        'gotham-book': ['gotham-book'],
        'gotham-light': ['gotham-light'],
      },
    },
  },
  plugins: [],
}
