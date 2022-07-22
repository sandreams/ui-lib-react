const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');
module.exports = Object.assign({}, base, {
  mode: 'development',
  devServer: {
    open: false,
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UI Library',
      template: './assets/template/index.html',
      favicon: './assets/favicon.ico',
    }),
  ],
});
