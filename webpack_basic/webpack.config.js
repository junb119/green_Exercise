const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path'); // node.js에서 경로를 쉽게 관리하는 함수 실행 후 path에 객체형식으로 할당

module.exports = {
  mode: 'development',
  entry: {
    // 웹팩을 통해 번들링(묶기)하는 시작점(입구)
    index: path.join(__dirname, 'src', 'index.js'),
    about: path.join(__dirname, 'src', 'about.js'),
  },
  output: {
    // 번들링된 결과물이 출력되는 출구
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js', //  [name] entry에서 지정한 이름, index_main.js
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: true,
      showErrors: true,
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html', // 적용될 html 경로
      filename: './about.html', // 최종 파일명
      hash: true, //캐쉬를 무효화, 항상 새롭게 다운로드 되도록
      showErrors: true, //오류 정보를 html에 기록
      chunks: ['about'], // 여러파일을 번들할 때는 별칭을 추가해야한다. index.html에는 index.js만 로드. chunks가 없으면 둘다 로드 된다.
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // 번들링할(변환할) 파일을 지정,
        // use: ['style-loader', 'css-loader'], // 오른쪽이 우선 순위
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'], // 오른쪽이 우선 순위
        exclude: '/node_modules/',
      },
    ],
  },
};
