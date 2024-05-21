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
  },
  plugins: [],
};
