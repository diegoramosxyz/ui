module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('./plugins/index.js')({
      buttons: {
        colors: ['blue', 'red', 'green'],
        themes: ['light', 'dark'],
        styles: ['fill', 'outline', 'ghost'],
        animate: true,
      },
      inputs: {
        colors: ['blue', 'red', 'green', 'neutral'],
        themes: ['light', 'dark'],
        styles: ['underline', 'outline'],
      },
    }),
  ],
}
