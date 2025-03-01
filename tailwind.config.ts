import formsPlugin from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        progress: "progress 1s infinite linear",
      },
      keyframes: {
        progress: {
          "0%": { transform: " translateX(0) scaleX(0)" },
          "40%": { transform: "translateX(0) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.5)" },
        },
      },
      transformOrigin: {
        "left-right": "0% 50%",
      },
    },
    colors: {
      green: "#349946",
      "green-hover": "#2F8A3F",
      "green-focus": "#2A7A38",
      "light-green": "#cce5d1",

      yellow: "#FAD02C",

      white: "#FFFFFF",
      "white-opaque": "#FCFBFA",
      "white-smoke": "#F8F8F8",

      grey: "#8F979F",
      "light-grey": "#F8F8F8",
      "dark-grey": "#D7D2E2",
      inactive: "#E8E8E8",

      red: "#FF4040",
      purple: "#5F4B8B",
      blue: "#698DEB",

      black: "#081020",
    },
  },
  plugins: [formsPlugin({ strategy: "base" })],
};
export default config;
