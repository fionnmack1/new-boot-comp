/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
npx create-next-app@latest football-boot-comparison
cd football-boot-comparison
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
