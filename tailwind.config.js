/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(28deg, transparent 10%, #64748B 0% 90%, transparent 80%)',
      },
      spacing: {
        '97': '97%'
      },
      colors: {
      }
    },
  },
  plugins: [],
}

