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
          asap_sups: ['Asap', {
            fontFeatureSettings: "'sups' on",
          }],
      },
      boxShadow: {
        headerShadow: '3px 0px 6px 0px rgba(0, 0, 0, 0.15)',
        ctaButton: '0px 2px 2px 0px rgba(0, 0, 0, 0.15)',
        shopCard: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'font': {
          text: {
            "black": "#000000",
            "muted": "#757575",
          } 
        },
        'primary/orange': {
          "DEFAULT": "#FE6400",
          "dark": "#E94308",
          "light": "#FBA36B",
        },
        'secondary/orange_medium': "#FAEEE5",
        "secondary/orange_light": "#FCF5F0",
        'secondary/orange_dark': "#FEE7D9",
        "states": {
          "error-promo": "#EA1313"
        }
      }
    },
  },
  plugins: [],
}
