'use strict';

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

var config = {
    mode: 'development',
    entry: {
        'theme': './src/js/script.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ['**/dist', '**/node_modules'],
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './dist/**/*', destination: './../../../../../../../public/assets/theme/tulia/lisa/theme' },
                    ],
                },
            },
        }),
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.optimization = {
            minimize: true
        };
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]);
    }

    return config;
};

