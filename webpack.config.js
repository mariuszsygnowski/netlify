module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve("babel-loader")
      }
    ]
  }
};
