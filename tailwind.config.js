/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./common/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}",
    "./common/components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: true,
  // important: '#__next',
  // prefix: 'th-',
  theme: {
    extend: {
      colors: {
        primary: "#0986CA",
        secondary: "#EF940C",
        // background: "#FFF6F6",
        "semi-light": "#7E7E7E",
        light: "#F9F9F9",
        dark: "#2D2827",
        "dark-400": "#373737",
        orange: "#EF940C",
        "light-gray": "#D7D7D7",
        gray: "#9B9B9B",
      },
      fontFamily: {
        // sans: ["Montserrat", "sans-serif"],
        // sourceSans: ["Source Sans Pro", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        "2xl": "1.875rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
