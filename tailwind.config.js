/** @type {import('tailwindcss').Config} */

const{fontFamily}=require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
       
      },
      colors:{
        dark: '#1b1b1b',
        light:'#f5f5f5',
        primary: '#B63E96',
        primarydark: '#58E6D9',
      }
    },
  },
  plugins: [],
}