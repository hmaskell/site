const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {loader: "css-loader", options: {importLoaders: 1}},
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.ttf*/,
                use: ['url-loader?limit=100000']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets' }
            ]
        })
    ]
}