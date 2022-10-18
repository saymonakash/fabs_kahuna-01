const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          500: "#4A4341",
          400: "#6C5C56",
          300: "#BEADAF",
          200: "#F5F3F1",
        },
        "light-brown": "#D3CDC4",
      },
      fontSize: {
        "3xl": "28px",
        "3.5xl": "32px",
        "4xl": "40px",
      },
      minWidth: {
        320: "320px",
      },
      height: {
        900: "900px",
      },
      borderRadius: {
        "3xl": "20px",
        "4xl": "25px",
      },
    },
  },
  plugins: [],
};
