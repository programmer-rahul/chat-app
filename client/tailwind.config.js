/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondaryBackground: "var(--background-secondary)",

        primaryMessage: "var(--primary-message)",
        secondaryMessage: "var(--secondary-message)",

        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",

        border: "var(--border)",

        input: "var(--input)",
        inputText: "var(--input-text)",

        primaryBtn: "var(--primary-btn)",
        primaryBtnText: "var(--primary-btn-text)",

        SecondaryBtn: "var(--secondary-btn)",
        SecondaryBtnText: "var(--secondary-btn-text)",
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
