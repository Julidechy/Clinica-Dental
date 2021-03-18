const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      red: colors.rose,
      green: colors.emerald,
      beige: {
        light: '#efefed',
        DEFAULT: '#d1c7b2',
        dark: '#9E9786',
      },
    },
    extend: {
      spacing: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '152': '38rem',
        '160': '40rem',
      },
      fontSize: {
        'xxs': '.65rem',
      },
      fontFamily: {
        'clinica': ['"Century Gothic"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0px 4px 6px rgba(0, 0, 0, 0.15);',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
