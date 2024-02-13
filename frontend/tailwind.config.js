/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",

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
    },
  },
  plugins: [],
};
