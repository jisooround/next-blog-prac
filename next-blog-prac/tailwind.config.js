/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-josefin)"],
        serif: ["var(--font-source-serif-pro)"],
      },
      colors: {
        uPrimary: "#ff8ad2",
        uFontColor: "#586171",
        uBgColor: "#f2f2f2",
        uBlue: "#4A4870",
        uRed: "#FF4B60",
        uWhite: "#ffffff",
        uGray: "#9A9FA9",
        uTwitter: "#1DA1F1",
        uFacebook: "#165BEA",
        uInstagram: "#EF00A1",
        uFeed: "#f26522",
        uYellow: "#FAC469",
        uSkyBlue: "#65EBE7",
        uVelog: "#12B886",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
