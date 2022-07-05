const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: [
      '.web.mjs',
      '.mjs',
      '.web.js',
      '.js',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
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
