module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#C18F5E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
