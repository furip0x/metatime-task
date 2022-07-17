/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        lg: "1012px",
        xl: "1012px",
        "2xl": "1012px",
      },
      // fontFamily: {
      //   gotham: ["Gotham", "sans-serif"],
      // },
    },
    extend: {
      colors: {
        "red-violet": "#DA18A3",
        "red-linear-start": "#EB1484",
        "red-linear-end": "#C81CC5",
        green: {
          50: "#00B247",
        },
        grey: {
          50: "#E3E1E3",
          100: "#888888",
          200: "#4F4F4F",
        },
        black: {
          50: "#2D2E36",
          100: "#1B1A21",
          200: "#2A2D3A",
          300: "#24252D",
        },
      },
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
      fontSize: {
        "2.5xl": ["1.75rem", "2.63rem"],
      },
      // backgroundImage: {
      //   "hero-pattern":
      //     "linear-gradient(to right, #EB1484, #C81CC5), url('./assets/images/hero-pattern.svg')",
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
