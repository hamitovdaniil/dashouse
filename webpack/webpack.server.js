const merge = require('webpack-merge').merge
const baseConfig = require('./webpack.config')

const serverConfig = merge({
  mode: 'development',
  devServer:{
    static: {
      directory: baseConfig.externals.paths.src
    },
    port: 9000,
    open: true,
    watchFiles: ['apps/src/**/*', 'apps/build/*']
  },
}, baseConfig)

module.exports = serverConfig