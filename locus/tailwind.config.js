/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        primary: '#264653',
        secondary: '#00C6A9',
        bg: '#f5f5dc',
        c4: '#B0D1E1',
        c5: '#CD7E2B'
      }
    }
  },
  plugins: []
}
