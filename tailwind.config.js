/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px", //640
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary_gold: "#ef881b",
        primary_background: "#dae1e3",
        secondary_background: "#fcf1df",
        primaryBlue: '#020B5E',
      },
      // fontFamily: {
      //   poppins: "Poppins",
      // },

    },
  },
  plugins: [],
};