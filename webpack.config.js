const webpack = require('webpack')
const path    = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReloadPlugin      = require('reload-html-webpack-plugin')

// Configure to auto-reload on HTML changes
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app', 'index.html'),
  inject: false,
  minify: {
    collapseWhitespace: true
  }
})

module.exports = {
  devtool: 'eval',

  
  entry:[
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    path.resolve(__dirname, 'app', 'index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /(\.css?|\.scss?)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require('postcss-import'),
                require('autoprefixer'),
                require('precss')
              ])
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      }

    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig,
    new ReloadPlugin()
  ]

}
