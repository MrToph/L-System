var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

var isProduction = true; // process.env.NODE_ENV ? process.env.NODE_ENV.trim() == 'production' : false,
var serverPort = 8080;
var subFolder = '/src/dist';
var outputPath = path.join(__dirname, subFolder);
var outputFileName = 'bundle.js';

var config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: outputPath,
    publicPath: '/dist', // '/' + path.basename(__dirname) + subFolder || the path as defined in our index.html
    filename: outputFileName
  },
  devtool: isProduction ? null : 'source-map', // eval?
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'] // stage-0 is ES7
        }
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port: serverPort,
    contentBase: path.resolve(__dirname, './src')
  },
  watch: true,
  plugins: []
};

if (isProduction) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }));
  // config.plugins.push(new webpack.optimize.DedupePlugin());
  // config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    })
  );
  config.plugins.push(
    new CompressionPlugin()
  );
}

module.exports = config;
