/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  rules: [
    // other rules...
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}