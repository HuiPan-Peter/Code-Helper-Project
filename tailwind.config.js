/** @type {import('tailwindcss').Config} */
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
      colors: {
        'custom-color': '#1e3a8a',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
