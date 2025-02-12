/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      fontFamily: {
          alamain: ['Alamain', 'sans-serif'],
          asap: ['Asap', 'sans-serif'],
      },
      boxShadow: {
        headerShadow: '3px 0px 6px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'font': {
          text: {
            "black": "#000000",
            "muted": "#757575"
          } 
        },
        'primary/orange': {
          "DEFAULT": "#FE6400",
          "dark": "#E94308"
        },
        'secondary/orange_medium': "#FAEEE5",
        "secondary/orange_light": "#FCF5F0",
        "states": {
          "error-promo": "#EA1313"
        }
      }
    },
  },
  plugins: [],
}
