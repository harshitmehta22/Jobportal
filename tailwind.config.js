/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      textColor: ['active'],
    },
    display:['group-hover'],
   },

  theme: {
    colors:{
     'blue': '#006bd4',
     'black': '#000',
     'white': '#fff',
     transparent: 'transparent',
     'gray': '#E5E7EB',
     'light-gray': '#b7b9bc',
     'back-color': '#222831',
     'lightblue': '#26317f',
     'red': "#FF0000",
     'regal-blue': '#243c5a',
     'lightred': ' rgba(239,68,68,1)',
     'orange': 'rgba(249,115,22,1)',
     'purple': 'rgba(236,72,153,1)',
    },
    border:{
      'lightblack': '#d6ddeb',
    },
    fontFamily: {
      'Open Sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      display: {
        'group-hover':'block'},
      boxShadow: {
        'neon': ' 0 0 10px #06d6a1, 0 0 20px #06d6a1, 0 0 40px #06d6a1, 0 0 80px #06d6a1',
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      padding: {
        '70px': '70px',
        '30px': '30px'
      },
      width:{
        '128': '32rem',
        '2/3': '61.67%',
      },
      spacing:{
        '6': '6rem'
       },

    },
    backgroundImage:{
      'Ctasection': "url(/back-image.jpeg)",
      'Aplyimage': "url('/how-applybg.png.webp')"
    }
    
  },
  plugins: [],
 
}