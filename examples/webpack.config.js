var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: '../index.js'
      }
    ]
  }
}
