module.exports = [
  // html
  {
    test: /\.pug$/,
    use: [
      {loader: 'simple-pug-loader'},
    ]
  },
  // css
  {
    test: /\.(sass|scss|css)$/,
    use: [
      require('mini-css-extract-plugin').loader,
      'css-loader',
      'group-css-media-queries-loader',
      'sass-loader',
    ]
  },
  // js
  {
    test: /\.js$/,
    use: ['babel-loader'],
    generator:{
      filename: 'js/[name][ext]'
    }
  },
  // fonts
  {
    test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
    generator:{
      filename: 'fonts/[name][ext]'
    }
  },
  // images
  {
    test: /\.(png|jpeg|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  }
]
