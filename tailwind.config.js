/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-dark": "#0c0c0c",
        "my-yellow": "#dcca87",
      },
      fontFamily: {
        titleFont: ["Cormorant Upright", "serif"],
      },
    },
  },
  plugins: [],
};
