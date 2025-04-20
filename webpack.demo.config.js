var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    WEBGL_RENDERER: true, // I did this to make webpack work, but I'm not really sure it should always be true
    CANVAS_RENDERER: true // I did this to make webpack work, but I'm not really sure it should always be true
});

module.exports = {
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dev'),
        port: 3000,
        open: true,
        hot: true,
        server: 'https'
    },
    entry: {
        customPlugin: './src/main.js',
        demo: [
            'core-js/stable',
            'regenerator-runtime/runtime',
            path.resolve(__dirname, 'src/demo/main.js')
        ],
        vendor: ['phaser']
    },
    devtool: 'cheap-source-map',
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dev'),
        publicPath: '/', // Serve files from the root
        library: '[name]',
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    watch: true,
    plugins: [
        definePlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html', // This will be placed in the output.path directory
            template: './src/demo/index.html',
            chunks: ['vendor', 'customPlugin', 'demo'],
            chunksSortMode: 'manual',
            minify: false,
            hash: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/demo/assets',
                    to: 'assets'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
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
            },
            {
                test: /phaser-split\.js$/,
                use: ['expose-loader?Phaser']
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            }
        ]
    },
    performance: {
        hints: false // Ignore warnings about large bundles as it really don't apply to games
    }
};