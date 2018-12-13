const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require('path');
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            }
        })
    ]
});