var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false}
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ] : [],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.js',
      reducers: 'app/reducers/reducers.js',
      configureStore: 'app/store/configureStore.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map'
};
