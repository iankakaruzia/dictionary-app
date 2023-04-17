// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-inconsolata)", ...fontFamily.mono],
        serif: ["var(--font-lora)", ...fontFamily.serif],
      },
      colors: {
        purple: {
          500: "#A445ED",
        },
        red: {
          500: "#FF5252",
        },
        gray: {
          300: "#F4F4F4",
          400: "#E9E9E9",
          500: "#757575",
          600: "#3A3A3A",
          700: "#2D2D2D",
          800: "#1F1F1F",
          900: "#050505",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
