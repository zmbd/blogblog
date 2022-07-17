const { calc } = require('@chakra-ui/react')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '60': '24rem',
      },
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
        'article-item-w-lg': '24em',
        'article-item-w-xl': '24em',
        'article-item-w-2xl': '26em',
        'article-item-w-3xl': '28em',
        'admin-card-md-h': '38em',
        // 'aritcle-item-h-md': '34em',
        // 'article-item-h-xl': '36em',
        'grid-box-md': '640px',
        'grid-box-lg': '768px',
        'grid-box-xl': '1024px',
        'grid-box-2xl': '1280px',
        'gird-box-3xl': '1536px',
        '600px': '600px',
        '720px': '720px',
        '9/10': '94%',
      },
      padding: {
        'p-20': '20%',
      },
      fontSize: {
        'post-default': ['17px', '31px'],
        'post-2xl': ['18px', '31px'],
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
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#2c4754',
          'primary-focus': '#2c4754',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#199e59',
          'warning': '#ff9900',
          'error': '#d43b48',
        },
      },
    ],
  }
}
