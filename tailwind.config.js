/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {},
      colors: {
        skin: {
          100: "#F2D1B3",
          200: "#BF8563",
          300: "#D9B5A0",
          350: "#b96046",
          400: "#8C4126",
          500: "#734E40",
        },
      },
      boxShadow: {},
      screens: {},
      keyframes: {},
      animation: {},
    },
    colors: {
      white: "#111",
      black: "#f00",
    },
    fontFamily: {
      body: ["crassula", "sans-serif"],
      title: ["olivia", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "16px" },
      })
    }),
  ],
}
