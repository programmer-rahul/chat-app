/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        secondaryBackground: "rgba(var(--background-secondary))",

        primaryMessage: "rgba(var(--primary-message))",
        secondaryMessage: "rgba(var(--secondary-message))",

        primaryText: "rgba(var(--primary-text))",
        secondaryText: "rgba(var(--secondary-text))",

        border: "rgba(var(--border))",

        input: "rgba(var(--input))",
        inputText: "rgba(var(--input-text))",

        primaryBtn: "rgba(var(--primary-btn))",
        primaryBtnText: "rgba(var(--primary-btn-text))",

        SecondaryBtn: "rgba(var(--secondary-btn))",
        SecondaryBtnText: "rgba(var(--secondary-btn-text))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    screens: {
      sm: { min: "0px", max: "639px" },
      md: { min: "640px", max: "767px" },
      lg: { min: "768px", max: "1023px" },
      xl: { min: "1024px", max: "1279px" },
      "2xl": { min: "1280px" },
    },
  },
  plugins: [],
};
