const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './lib/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'FUI',
    libraryTarget: 'umd',
    filename: '[name].[contenthash].js',
  },
  devServer: {
    open: false,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [{ test: /\.(tsx?|jsx?)$/, use: 'babel-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UI Library',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
}
