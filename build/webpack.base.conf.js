var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'api': path.resolve(__dirname, '../src/api'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'common': path.resolve(__dirname, '../src/common'),
      'components': path.resolve(__dirname, '../src/components'),
      'i18n': path.resolve(__dirname, '../src/i18n'),
      'libs': path.resolve(__dirname, '../src/libs'),
      'mock': path.resolve(__dirname, '../src/mock'),
      'router': path.resolve(__dirname, '../src/router'),
      'store': path.resolve(__dirname, '../src/store'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'views': path.resolve(__dirname, '../src/views'),
      'static': path.resolve(__dirname, '../static')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.ProvidePlugin({
       jQuery: "jquery",
       $: "jquery"
   })
  ]
}
