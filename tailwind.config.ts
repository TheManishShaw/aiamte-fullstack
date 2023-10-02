/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        orange: "#FF964B",

        dark: "#171717",
        primary: "#C21F1E",
        yellow: "#FBB040",
        "body-color": "#959CB1",

        // primary: {
        //   DEFAULT: "#0085ff",
        //   100: "#0085ff",
        //   200: "#69b4ff",
        // },
        accent: {
          DEFAULT: "#006fff",
          100: "#006fff",
          200: "#e1ffff",
        },
        text: {
          DEFAULT: "#FFFFFF",
          100: "#FFFFFF",
          200: "#9e9e9e",
        },
        bg: {
          DEFAULT: "#1E1E1E",
          100: "#1E1E1E",
          200: "#2d2d2d",
          300: "#454545",
        },
      },
      backgroundImage: {
        banner: "url('/public/jsm_resources_banner.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

    boxShadow: {
      signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
      one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
      sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
