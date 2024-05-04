/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'Card-color': '#F9F9F9',
        'HeaderColor': '#0E7489 ',
        'BodyProduct': '#96aa92',
        'Product': '#e1ebd2',
        'Text': '#333333'
      },
      spacing: {
        '97': '97%'
      },
      colors: {
        'HoverHeader': '#748599',
      }
    },
  },
  plugins: [],
}

