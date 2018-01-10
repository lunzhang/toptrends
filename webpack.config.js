var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:{
    'app':'./public/src/app.js'
  },
  output:{
    filename : 'bundle.js',
    path: path.resolve(__dirname,'public/build'),
    publicPath: '/public/build/'
  },
  module:{
    loaders:[
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader', exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader", exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer:{
    contentBase: 'public',
    inline: true,
    port: 8080,
    historyApiFallback: true
  }
};