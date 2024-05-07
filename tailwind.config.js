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
        'HeaderColor': '#1793AD ',
        'BodyProduct': '#A1D3DD',
        'Product': '#E1F6FB',
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

