const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        polyfills: './polyfills.js',
        vendor: "./vendor.js",
        app: "./src/main.js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: "file-loader?name=public/fonts/[name].[ext]"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",   // Input FileName
            filename: "./index.html"    // Output FileName
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};