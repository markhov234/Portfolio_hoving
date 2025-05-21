module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.html", "./src/**/*.js"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
