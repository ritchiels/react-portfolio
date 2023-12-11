/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
      extend: {
        colors: {
            transparent: 'transparent',
            'cadet-blue': '#93B7BE',
            'lapiz-lazuli': '#376996',
            'french-gray': '#C5CBD3',
            'white-smoke': '#F1EDEE',
          }
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dmserif: ['DM Serif Display', 'serif'],
      }
  },
  plugins: [],
}

// ./index.html', './src/**/*.{js,ts,jsx,tsx}