// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
theme: {
  extend: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
},

    },
  },
  plugins: [],
};
