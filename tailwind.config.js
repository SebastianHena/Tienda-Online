/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'green-custom': '#2F8D5B',
        'green-button': '#5abd88',
        'body-color': '#f8f5f1'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(28deg, transparent 10%, #64748B 0% 90%, transparent 80%)',
      },
      spacing: {
        '97': '97%',
      },
      colors: {
        'green-button': '#5abd88'
      },
      // Añadimos la animación de subrayado
      animation: {
        underline: 'underline-grow 0.4s ease-out forwards',
      },
      keyframes: {
        'underline-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      // Añadimos configuración para textShadow
      textShadow: {
        'custom': '0px 3px 3px rgba(255,255,255,0.4), 0px -1px 1px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: 
          '0 1px 0 #ddd, 0 2px 0 #ccc, 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 0 #acacac, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15)',
        },
      });

      // Añadimos la clase personalizada para el subrayado animado
      addComponents({
        '.custom-underline': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '4px', // Ajusta el grosor de la línea si es necesario
            bottom: '0',
            left: '0',
            backgroundColor: '#38a169', // Cambia este valor por el color deseado
            transform: 'scaleX(0)', // El subrayado inicia oculto
            transformOrigin: 'bottom right', // Empieza a aparecer desde la derecha
            transition: 'transform 0.4s ease-out', // Controla la duración y suavidad de la animación
          },
          '&:hover::after': {
            transform: 'scaleX(1)', // El subrayado se expande
            transformOrigin: 'bottom left', // Se extiende hacia la izquierda
          },
        },
      });
    }
  ],
}
