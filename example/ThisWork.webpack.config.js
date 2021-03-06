var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node-modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react'],
          compact: false
        }
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  mode: 'development'
}