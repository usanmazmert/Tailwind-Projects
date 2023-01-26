/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        var:
          {
            "green": "#00df9a",
            "blue": "#34c9c7"
          }
      }
    },
  },
  plugins: [],
}
