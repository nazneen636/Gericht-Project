/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      cormorant: ["Cormorant", "serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    letterSpacing: {
      1: "3px",
      2: "10px",
      3: "15px",
      4: "20px",
    },

    extend: {
      animation: {
        round: "round 10s linear infinite",
      },
      keyframes: {
        round: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundImage: {
        comingSoonBG: "url('component/images/comingSoonBG.png')",
        comingSoonBGIcon: "url('component/images/comingSoonBGIcon.png')",
        FAQBanner01: "url('component/images/FAQ/banner01.png')",
        BlogBanner: "url('component/images/Blog/blogBanner.png')",
        FAQBanner02: "url('component/images/FAQ/banner02.png')",
        Glass: "url('component/images/FAQ/Glass.png')",
        rectangle: "url('component/images/FAQ/Rectangle.png')",
        item01: "url('component/images/Blog/item01.png')",
        item02: "url('component/images/Blog/item02.png')",
        blogDetail02: "url('component/images/Blog/blogDetails02.png')",
        footerBG: "url('component/images/Footer/bg01.png')",
      },
    },
  },
  plugins: [],
};
