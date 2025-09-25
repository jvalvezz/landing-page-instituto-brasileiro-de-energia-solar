/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#008ecf", // IBS azul principal
          deep: "#03326c", // IBS azul profundo
          dark: "#041b44", // IBS azul escuro
          light: "#d4ecff",
          glow: "rgba(0, 142, 207, 0.12)"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.15)"
      },
      fontFamily: {
        sans: ['"Sora"', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hero-grid': "radial-gradient(circle at 20% 20%, rgba(0, 142, 207, 0.15) 0, rgba(4,27,68,0) 45%), radial-gradient(circle at 80% 0%, rgba(3,50,108,0.25) 0, rgba(4,27,68,0) 50%)"
      }
    }
  },
  plugins: []
}
