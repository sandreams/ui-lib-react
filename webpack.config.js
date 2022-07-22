const path = require('path');

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
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'sand-ui',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.(tsx?|jsx?)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg$/, use: 'svg-sprite-loader' },
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
};
