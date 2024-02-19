/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '535px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#D45555',
        secondary: '#16a34a',
        'dark-primary': '#9D9D9D',
        'dark-secondary': '#C4C4C4'
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D45555",
          secondary: "#FFEBE5",
          accent: "#CE2909",
          neutral: "#F9FAFC",
          "base-100": "#ffffff",
          info: "#0ea5e9",
          success: "#16a34a",
          warning: "#FEAF18",
          error: "#dc2626",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

