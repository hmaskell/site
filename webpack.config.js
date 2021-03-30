const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlRegex = /\.html$/;
const srcFolder = path.resolve(__dirname, "src");
const htmlFiles = fs.readdirSync(srcFolder)
    .filter(filename => htmlRegex.test(filename));

const htmlFileBuildRules = htmlFiles.map(filename => new HtmlWebpackPlugin({
    filename: filename,
    template: path.resolve(__dirname, 'src', filename)
}));

module.exports = {
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
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: "ejs-compiled-loader",
                options: {
                    htmlmin: true,
                    htmlminOoptions: {
                        removeComments: true
                    }
                }
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    plugins: [
        ...htmlFileBuildRules,
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets' }
            ]
        })
    ]
}