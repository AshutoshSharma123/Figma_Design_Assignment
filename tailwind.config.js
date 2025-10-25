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
          width: '0.25rem',  // smaller width
          height: '0.25rem', // smaller height
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#363C43',
          borderRadius: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(145deg, #7c848dff, #9ea8b1ff)',
          borderRadius: '8px',
          transition: 'background 0.3s ease',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)', // shadow only on right side
        },
      });
    },
  ],
};
