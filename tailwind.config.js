/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'damion': ['Damion'],
        'opensans': ['Open Sans'],
        'body': ['"Montserrat"']
      },
    },
  },
  plugins: [],
  important: true,
};
