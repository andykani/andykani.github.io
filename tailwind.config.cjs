/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],

  plugins: [
    require('flowbite/plugin')
  ],
  
  theme: {
    extend: {},
    screens: {
      'xs': "220px",
      'sm': "320px",
      'thin': "420px",
      'medium': "520px",
      'md': "620px",
      'xl': "720px",
      '2xl': "820px",
      'lg': "1280px",
    },
  },
  
}
