const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "React-webpack-setting", // 웹팩 설정 이름
  mode: "development", //실서비스 : Production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    // 합쳐질 파일 요소들 입력
    app: ["./src/index.js"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, // 대상 설정 정규식
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        //style-loader, css-loader 규칙 설정
        test: /.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    // 최종적으로 만들어질 js
    path: path.join(__dirname, "/docs"), //빌드 위치
    filename: "app.js", //웹팩 빌드 후 최종적으로 만들어질 파일
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      // 리액트 자동 로드
      React: "react",
    }),
  ],
};