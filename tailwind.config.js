/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // Añade colores de fondo personalizados si es necesario
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(28deg, transparent 10%, #64748B 0% 90%, transparent 80%)',
      },
      spacing: {
        '97': '97%',
      },
      colors: {
        // Añade colores personalizados si es necesario
      },
      // Aquí añadimos la configuración para textShadow
      textShadow: {
        'custom': '0px 3px 3px rgba(255,255,255,0.4), 0px -1px 1px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: 
          '0 1px 0 #ddd, 0 2px 0 #ccc, 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 0 #acacac, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15)',
        },
      })
    }
  ],
}

