/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8575e4',
        },
        primaryHover: {
          DEFAULT: '#E7E3FF',
        },
        weekend: {
          DEFAULT: '#E74555',
        },
      },
    },
  },
  plugins: [],
};
