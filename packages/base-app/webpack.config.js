const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: 'development',
    devtool: 'eval-cheap-module-source-map',

    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'), 
        filename: "bundle.js"
    },

    
    devServer:{
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true
    },



    module: {
        rules: [{
            loader: 'babel-loader', 
            test: /\.js$/, 
            exclude: /node_modules/
        },{
            test: /\.s?css$/, 
            use: [
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader', options: {sourceMap: true}},
                {loader: 'sass-loader', options: {sourceMap: true}}
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ]
}