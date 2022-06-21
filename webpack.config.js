const path = require('path')
module.exports = {
  entry: './lib/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'FUI',
    libraryTarget: 'umd',
    filename: '[name].[contenthash].js',
  },
  devServer: {
    // static: false,
    open: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [{ test: /\.(tsx?|jsx?)$/, use: 'babel-loader' }],
  },
}
