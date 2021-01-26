const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(s?)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "defer",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
