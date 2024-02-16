/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kdam: ["Kdam Thmor Pro", "sans-serif"],
        protest: ["Protest Guerrilla", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
        noto: ["Noto Serif JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
