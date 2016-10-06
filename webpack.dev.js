var webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/src/app.js'
  },
  output: {
    filename: 'app.js',
    path: `./client/lib`
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};
