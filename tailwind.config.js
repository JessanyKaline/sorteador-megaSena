/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow': '#ca8a04',
      'green': '#15803d',
      'gray': '#0f172a',
      'white': '#f3f4f6',
      
    },
    extend: {
      backgroundImage: {
        'fireworks': "url('../styles/fireworks.jpg')",
        
      },
  },
},
}
