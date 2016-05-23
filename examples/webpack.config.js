var webpack = require('webpack')

var banner = '// { framework: "Vue" }\n'

var bannerPlugin = new webpack.BannerPlugin(banner, {
  raw: true
})

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
  },
  plugins: [bannerPlugin]
}
