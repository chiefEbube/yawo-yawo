/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif']
      },
    },
    container: {
        center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primaryOrange': '#FE5900',
      'myBlack': '#101010',
      'lightBg': '#F5F5F5',
      'grayBg': '#807676',
      'greenOnline': '#00FF00',
      'myGray': '#F1F0F1',
      'myWhite': '#FFF'
    },
  },
  plugins: [],
}