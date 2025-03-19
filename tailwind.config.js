/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#065F46', // Forest green
          light: '#047857',
          dark: '#064E3B',
        },
        secondary: {
          DEFAULT: '#795548', // Brown
          light: '#8D6E63',
          dark: '#5D4037',
        },
        accent: {
          DEFAULT: '#FACC15', // Yellow
          light: '#FDE047',
          dark: '#EAB308',
        }
      }
    },
  },
  plugins: [],
};