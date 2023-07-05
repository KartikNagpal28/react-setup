/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#14fda8',
    },
    extend: {},
    screens: {
      xs: '360px',
      sm: '568px',
      md: '850px',
      lg: '992px',
      xl: '1280px',
      xxl: '1920px',
    },
  },
  plugins: [],
};
