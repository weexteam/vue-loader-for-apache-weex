var webpack = require('webpack');

module.exports = {
  entry: './test/main.js',
  output: {
    path: './test/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'index.js'
      }
    ]
  },
  resolveLoader: {
    modulesDirectories: ['./', './node_modules']
  }
}
