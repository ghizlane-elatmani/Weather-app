const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
