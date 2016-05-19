var webpack = require('webpack');

module.exports = {
  entry: './foo.vue?root&entry=1',
  output: {
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue(\?[^?]+)?$/,
        loader: '../index.js'
      }
    ]
  }
}
