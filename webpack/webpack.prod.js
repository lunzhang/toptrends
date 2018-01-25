const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(config, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
