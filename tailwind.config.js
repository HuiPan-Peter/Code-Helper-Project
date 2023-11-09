module.exports = {
  content: [
    './public/**/*.{handlebars,html,js}',
    './views/**/*.{handlebars,html,js}',
    './index.html',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'navyblue': '#000080',
      },
    },
  },
  plugins: [],
};

