const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
    entry: './module/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',

    //   开发模式
    "mode": "production",

    node: {
        // console: 'true',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    // devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    // performance: options.performance || {},

    module: {





        rules: [
            // JavaScript/JSX Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS Files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [
        new WebpackBar({
            color: 'green',
        })
    ],


};
