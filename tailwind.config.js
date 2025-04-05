/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% + 100vw))" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite alternate",
      },

      colors: {
        customRed: "#D40927",
        newGreen:"#cdf851",
        forestGreen:"#03AC13"
      },
    },
  },
  plugins: [],
};
