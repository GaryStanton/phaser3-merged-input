'use strict';

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    watch: false,
    context: `${__dirname}/src/`,
    entry: {
        MergedInput: './main.js',
        'MergedInput.min': './main.js'
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: '[name].js',
        library: 'MergedInput',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: true,
                    ecma: 5,
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // Updated preset
                    }
                }
            ]
        }]
    },
    optimization: {
        minimize: false // Let Uglify do this job for min-build only
    },
    devtool: 'source-map',

};