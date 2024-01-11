/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fdfdfd',
        black_primary: '#19191B',
        black_secondary: '#9D9D9D',
        red_primary: '#D45555'
      },
    },
  },
  plugins: [],
}

