/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'very-light-grayish-blue': 'hsl(240, 78%, 98%)',
        'light-grayish-blue': 'hsl(234, 14%, 74%)',
        'grayish-blue': 'hsl(233, 13%, 49%)',
        'dark-grayish-blue': 'hsl(232, 13%, 33%) ',
        'gradientStart': "hsl(236, 72%, 79%)",
        'gradientEnd': "hsl(237, 63%, 64%)",
      },

      fontFamily: {
        'monserrat': ["'Montserrat'", 'sans-serif']
      }

    },
  },
  plugins: [],
}

