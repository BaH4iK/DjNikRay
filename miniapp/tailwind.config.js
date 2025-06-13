/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#CBA135', // gold-like accent
      },
    },
  },
  plugins: [],
};
