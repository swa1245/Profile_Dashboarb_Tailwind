module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Adjust paths based on your setup
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // For body text
        heading: ['Poppins', 'sans-serif'], // For headings
      },
    },
  },
  plugins: [],
};
