const webpack           = require('webpack')
const webpackDevServer  = require('webpack-dev-server')
const webpackConfig     = require('./webpack.config')
const path              = require('path')
const proxy             = require('./proxy')

let compiler = webpack(webpackConfig)

let devServer = new webpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'public'),
  publicPath: '/',
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  },
  // Could directly proxy to the HerokuApp but well....
  proxy: [{
    path: "/api",
    target: 'http://127.0.0.1:3000',
    pathRewrite: {"^/api" : ""}
  }],
})


proxy.listen(3000, () => {
  console.log(`API Proxy listening on port 3000...`)
})

devServer.listen(8000, '0.0.0.0', ()  => {
  console.log("bundling project...")
})
