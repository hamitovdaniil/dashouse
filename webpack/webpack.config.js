const config = {
  path: require('path').join,
  fileSystem: require('fs'),
  // подключаем плагины
  HTML: require('html-webpack-plugin'),
  MiniCSS: require('mini-css-extract-plugin'),
  CLEAN: require('clean-webpack-plugin').CleanWebpackPlugin,
  COPY: require('copy-webpack-plugin'),
  // подключаем файл с правилами
  rules: require('./rules/rules')
}
const paths = {
  src: config.path(__dirname, '../apps/src'),
  build: config.path(__dirname, '../apps/build')
}
const PAGE_DIR = paths.src
const PAGES = config.fileSystem.readdirSync(PAGE_DIR).filter(fileName => fileName.endsWith('.pug'))
console.log(PAGES);

module.exports = {
  entry: `${paths.src}/webpack.js`,
  output: {
    filename: `webpack.build.js`,
    path: `${paths.build}`
  },
  plugins: [
    ...PAGES.map(page => new config.HTML({
      template: `${paths.src}/${page}`,
      filename: `${page.replace(/\.pug$/, '.html')}`
    })),
    new config.MiniCSS({
      filename: 'css/[name].css'
    }),
    new config.COPY({patterns: [
      {from: `${paths.src}/images`, to: `${paths.build}/images/`},
      {from: `${paths.src}/js`, to: `${paths.build}/js/`}
    ]}),
    new config.CLEAN(),
  ],
  module: {
    rules: config.rules
  },
  externals: {paths}
}
