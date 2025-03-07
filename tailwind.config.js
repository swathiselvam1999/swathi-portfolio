/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flipOnce: {
          '0%': { transform: 'rotateY(0deg)', opacity: 0.7 },
          '50%': { transform: 'rotateY(180deg)', opacity: 0.7 },
          '100%': { transform: 'rotateY(360deg)', opacity: 1 },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        fadeInUp: 'fadeInUp 0.10s ease-out forwards',
        flipOnce: 'flipOnce 1.5s ease-in-out',
        
      },
      colors: {
        bgColor: "#0f172a",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

