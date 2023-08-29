/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {},
    daisyui:{
      themes: {
        rubik:['Archivo Black', 'sans-serif']
      }
    }
    
  },
  plugins: [require("daisyui")],
  
}
