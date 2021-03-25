module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
        mn: '0.875rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
