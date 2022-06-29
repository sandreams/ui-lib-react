const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'FUI',
    libraryTarget: 'umd',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{ test: /\.(tsx?|jsx?)$/, use: 'babel-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'UI Library',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
