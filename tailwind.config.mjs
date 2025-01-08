/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'
export default {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js,jsx}",
    "./src/**/*.{html,jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat:['Montserrat','sans-serif']
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
}

