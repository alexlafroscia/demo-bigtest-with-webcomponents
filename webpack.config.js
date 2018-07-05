const path = require("path");

module.exports = (env = {}) => ({
  mode: env.production ? "production" : "development",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  stats: "minimal"
});
