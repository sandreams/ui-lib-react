const base = require('./webpack.config');
module.exports = Object.assign({}, base, {
  mode: 'development',
  devServer: {
    open: false,
    compress: true,
    port: 9000,
  },
});
