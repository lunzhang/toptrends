const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    devServer: {
      contentBase: 'public',
      inline: true,
      port: 8080,
      historyApiFallback: true
    }
});
