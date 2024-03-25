/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        df1: "#252b42",
        df2: "#394264"
      },
      backgroundImage: {
        bg1: "url('../img/cp-bg.png')",
        bg2: "url('../img/cp-bg-2.png')",
        bdg1: "url('../img/bg-dark-header.png')",
        bdg2: "url('../img/bg-dark-content.png')"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

