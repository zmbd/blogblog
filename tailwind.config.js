const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        'nav-width-lg': '50em',
        'blog-mini': '58em',
      },
      colors: {
        'color-active': '#588DA7',
        'primary-100': '#4f7f96',
        'primary-200': '#467186',
        'primary-300': '#3e6375',
        'primary-400': '#355564',
        'primary-500': '#2c4754',
        'primary-600': '#233843',
        'primary-700': '#1a2a32',
        'primary-800': '#121c21',
        'primary-900': '#090e11',

      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  plugins: [],
}
