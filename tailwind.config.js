/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode:"class",
  lightMode:"class",
  theme: {
    extend: {
      colors: {
        highlightWord: '#DB7F8E',
        darkhighlightWord: '#248071',
        palePink: '#FFDBDA',
        blackShadows:"#D5C5C8",
        quickSilver:"#9DA3A4",
        darkLiver:"#604D53",
        shimmeringBlush:"#DB7F8E",
        toggleSwitch:"#ccc",

        //Dark Mode Colors
        navbarDark:'#272529',
        buttonDark:'#2F4562',
        buttonHoverDark:"#506680"
      },
      backgroundImage: {
        lightBackground: "url(/public/lightBackground.svg)",
        darkBackground: "url(/public/darkBackground.svg)",
      }
    },
  },
  plugins: [],
}
