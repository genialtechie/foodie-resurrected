module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('./assets/img/serenidad-main.jpg')",
      }),
    },
    transitionProperty: {
      width: 'width',
    },
  },
  plugins: [],
};
