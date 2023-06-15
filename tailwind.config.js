/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': 'rgb(23, 23, 23)',
        'btn-text': '#ffffff',
        'grey-border': '#c8c8c8',
        'grey-text': '#838383',
        'dark-bg': '#212121',
        'editor': '#424242',
        'grey-bright': "#f2f2f2"
      },
      padding: {
        '6px': '6px',
        '16px': '16px',
        '24px': '24px',
        'normal': '12px'
      },
      boxShadow: {
        'btn': 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px'
      },
      borderRadius: {
        'btn-radius': '4px',
        '8px': '8px',
        'prompt': '16px'
      },
      gap: {
        'el': '32px',
        'sm': '16px'
      },
      letterSpacing: {
        'normal': '0.00938em'
      },
      lineHeight: {
        'editor': '1.4375em'
      },
      width: {
        'logo': '150px'
      },
      height: {
        'logo': '38px'
      },
      maxWidth: {
        1000: '1000px'
      },
      fontSize: {
        'btn-font': '0.875rem',
        'xs': '0.75rem'
      }
    }
  },
  plugins: [],
}

