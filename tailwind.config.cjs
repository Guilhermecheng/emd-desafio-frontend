/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'cristo-wp': 'url(/cristo-wp.jpg)',
        'cristo-wp': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("./assets/cristo-wp.jpg")',
        'animation-wp': 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url("./assets/animation-wp.jpeg")',
        'rio-wp': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("./assets/rio.jpeg")',
      },
    },
  },
  plugins: [],
}

