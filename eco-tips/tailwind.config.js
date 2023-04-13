/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0'},
          '50%': { transform: 'translate(-50%, -50%) scale(1,0)', opacity: '1'},
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1'},
        }
      },
      // expand card
      animation: {
        expand: 'expand 0.5s forwards',
      },
    },
  },
  plugins: [],
};
