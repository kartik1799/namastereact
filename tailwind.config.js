/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'blue-200':"#818cf8",
      "border-light":"#e5e7eb",
      "bg-from":"#f8fafc",
      "bg-to":"#cbd5e1",
      "white":"#ffffff",
      "black":"#020617",
      "gray1":"#9ca3af",
      "gray2":"#6b7280",
      "gray":"#f1f1f6",
      "graylight":"#f9fafb",
      "graynext":"#4b5563",
      "yellow":"#fde047",
      "green":"#84cc16",
    },
    fontFamily:{
      "franklin":['Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'],
      "rating":['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      "bestseller":["Georgia", 'Times New Roman', "Times", "serif"],
      "price":['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"],
      "add":['Gill Sans', 'Gill Sans MT', "Calibri", 'Trebuchet MS', "sans-serif"],
      "card":['Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', "Arial", "sans-serif"],
    },
    extend: {
      gridTemplateColumns:{
        'auto-fit-grid':'repeat(auto-fit,minmax(14rem,17rem))'
      }
    },
  },
  plugins: [],
}

