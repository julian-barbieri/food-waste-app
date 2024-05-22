/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FDF7F1', // Background color
        orange: '#EEA570', // Primary accent color (used for buttons and highlights)
        darkOrange: '#D08724', // Secondary accent color
        brown: '#5A3E2F', // Text color
        lightBrown: '#A87C60', // Secondary text color
        gray: '#E5E5E5', // Icon and border color
      },
    },
  },
  plugins: [],
};
