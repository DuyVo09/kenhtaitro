import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // Note the addition of the `app` directory.
    "./common/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AC907F",
        secondary: "#EF940C",
        background: "#FFF6F6",
        light: "#F9F9F9",
        dark: "#2D2827",
        "dark-400": "#373737",
        orange: "#EF940C",
        "light-gray": "#D7D7D7",
        gray: "#9B9B9B",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;