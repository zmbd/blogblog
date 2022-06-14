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
        'article-item-w-lg': '22em',
        'article-item-w-xl': '24em',
        'article-item-w-2xl': '26em',
        'article-item-w-3xl': '28em',
        // 'aritcle-item-h-md': '34em',
        // 'article-item-h-xl': '36em',
        'grid-box-md': '640px',
        'grid-box-lg': '768px',
        'grid-box-xl': '1024px',
        'grid-box-2xl': '1280px',
        'gird-box-3xl': '1536px',
        '600px': '600px',
        '720px': '720px',
        '9/10': '90%',
      },
      screens: {
        '3xl': '1920px', 
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
