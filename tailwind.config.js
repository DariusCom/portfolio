/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "code-snippet": "url('./images/code-snippet.png')",
        safeinvest: "url('./images/safeinvest.jpg')",
        githubfinder: "url('./images/githubfinder.jpg')",
        housemarketplace: "url('./images/housemarketplace.jpg')",
        supportdesk: "url('./images/supportdesk.jpg')",
      },
      fontFamily: {
        iceland: ["Iceland", "Arial"],
        inconsolata: ["Inconsolata", "Arial"],
      },
    },
    screens: {
      laptopL: { max: "1440px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      lg: { max: "425px" },
      mlg: "425px",
      md: { max: "375px" },
      sm: { max: "320px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
