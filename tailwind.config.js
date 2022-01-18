module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'image-url': 'url("/src/assets/heroimage.jpg")',
      },
    },
    fontFamily: {
      sans: 'Poppins',
    },
  },
  plugins: [],
};
