const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './public/**/*.{handlebars,html,js}',
    './views/**/*.{handlebars,html,js}',
    './dist/*.{html,js}', 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        navyblue: '#000080',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [],
};
