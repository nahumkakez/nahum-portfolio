/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',
        'primary-light': '#283593',
        secondary: '#2E7D32',
        'secondary-light': '#4CAF50',
        gold: '#c9a84c',
        dark: '#121212',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'primary': '0 4px 20px rgba(26, 35, 126, 0.3)',
      }
    },
  },
  plugins: [],
}