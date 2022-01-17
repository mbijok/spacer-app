module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'image-url': 'url("/src/assets/heroimage.jpg")',
      },
      keyframes: {
        showmodal: {
          '0%': { opacity: 0 },
          '10%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        showmodal: 'showmodal .5s ease-out',
      },
    },
    fontFamily: {
      sans: 'Poppins',
    },
  },
  plugins: [],
};
