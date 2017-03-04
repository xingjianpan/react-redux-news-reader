var webpack = require("webpack");
var path = require("path");


var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/src')

var config = {
  context: __dirname,
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    publicPath: "/", // relative path for github pages
    filename: "bundle.js", // no hash in main.js because index.html is a static page
  },
  devtool: 'source-map',
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
     { test: /\.jsx?/,
       include: APP_DIR,
       loader: "babel-loader",
       query: {
        presets: ['es2015', 'react']
       } },
    {
      test: /\.css$/,
      include: APP_DIR,
      loader: 'style-loader!css-loader'
        },
    {
      include: APP_DIR,
      test: /\.(ttf|png|gif|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
        },
{
    test: /react-icons\/(.)*(.js)$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
}

    ],
  },
}

module.exports = config
