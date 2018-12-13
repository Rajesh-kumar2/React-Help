const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const path = require('path');
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
});