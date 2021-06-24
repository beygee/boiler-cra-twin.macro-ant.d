module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: {
        bold: 500,
        extrabold: 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
