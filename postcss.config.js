module.exports = {
  parser: 'postcss-scss',
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.js'], // Add your template and script files
    },
    autoprefixer: {},
    // Add other PostCSS plugins here as needed
  },
};
