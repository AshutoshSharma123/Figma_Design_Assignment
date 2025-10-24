/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '0.4rem', // Adjust the height as needed
          height: '0.4rem',
          shadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#363C43', // Dark track background
          borderRadius: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(145deg, #7c848dff, #9ea8b1ff)', // Neumorphic gradient
          borderRadius: '8px',
          width: '0.4rem', // Adjust the height as needed
          height: '0.4rem',
          transition: 'background 0.3s ease',
          'box-shadow': 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
        },

      });
    },
  ],
};
