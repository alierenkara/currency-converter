const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: false
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new Dotenv()]
}
