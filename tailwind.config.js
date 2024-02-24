/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryClr: "hsl(25, 97%, 53%)",
      lightGray: "hsl(217, 12%, 63%)",
      mdGray: "hsl(216, 12%, 54%)",
      darkBlue: "hsl(213, 19%, 18%)",
      veryDarkBlue: "hsl(216, 12%, 8%)",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
