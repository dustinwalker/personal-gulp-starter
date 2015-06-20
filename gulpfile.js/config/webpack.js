var path            = require('path')
var paths           = require('./')
var webpack         = require('webpack')
var webpackManifest = require('../lib/webpackManifest')
var config = require('./')

module.exports = function(env) {
  var jsSrc = path.resolve(paths.sourceAssets + config.jsDirectory + '/')
  var jsDest = paths.publicAssets + config.jsDirectory + '/'
  var publicPath = config.assetsDirectory + config.jsDirectory + '/'

  var webpackConfig = {
    context: jsSrc,

    plugins: [],

    resolve: {
      extensions: ['', '.js']
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node_modules/
        }
      ]
    }
  }

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry= {
      page1: [ './' + config.mainJs ]
    }

    webpackConfig.output= {
      path: jsDest,
      filename: env === 'production' ? '[name]-' + config.versionNumber + '.js' : '[name].js',
      publicPath: publicPath
    }

    // Factor out common dependencies into a shared.js
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'shared',
        filename: env === 'production' ? '[name]-' + config.versionNumber + '.js' : '[name].js',
      })
    )
  }

  if(env === 'development') {
    webpackConfig.devtool = 'source-map'
    webpack.debug = true
  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.publicDirectory),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}
