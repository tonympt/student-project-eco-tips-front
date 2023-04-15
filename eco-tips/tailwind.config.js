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
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
          '50%': { transform: 'translate(-50%, -50%) scale(1,0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
        buttonAnimation: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
      },
      // expand card
      animation: {
        expand: 'expand 0.5s forwards',
        buttonAnimation: 'buttonAnimation 10ms cubic-bezier(0.4, 0, 0.2, 1) 1',
      },
    },
  },
  plugins: [],
};
