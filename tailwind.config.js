const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        'nav-width-lg': '50em',
        'blog-mini': '58em',
        'footer-height-md': '26.5em',
        'footer-container-md': '55em',
        'footer-container-lg': '62em',
        'footer-item-1-md': '36%',
        'footer-item-2-md': '16%',
        'footer-item-3-md': '36%',
        'article-item-w-md': '20em',
        'aritcle-item-h-md': '30em',
        'article-item-w-lg': '26em',
        'article-item-h-lg': '38em',
        'article-item-w-xl': '29em',
        'article-item-h-xl': '40em',
        '9/10': '90%',
      },
      borderRadius: {
        'half': '50%',
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
        'primary-whitegray': '#F9FAFF',
        'grayish': '#E8E9E9',
        'gray-dark': '#898D92',

      },
      fontFamily: {
        'sans': ['Poppins'],
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  plugins: [],
}
