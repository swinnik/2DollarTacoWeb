require("dotenv").config();
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "./client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "./client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_APP_GOOGLE_API_KEY": JSON.stringify(
        process.env.REACT_APP_GOOGLE_API_KEY
      ),
    }),
  ],
};
