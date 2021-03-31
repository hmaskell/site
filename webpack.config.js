const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


// [1,2,3,4].filter(num => num > 2); // [3, 4]

/* get html file names from src folder, stored in htmlFiles */

const htmlRegex = /\.html$/;
const srcFolder = path.resolve(__dirname, "src");
const htmlFiles = fs.readdirSync(srcFolder)
    .filter(filename => htmlRegex.test(filename));

/* take html files and for each, create an instance of HtmlWebpackPlugin telling it to create a html file with the same name using the original as a source */
/* create an array of custom HtmlWebpackPlugin for each html file using the og as the source for content */


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

/*

const firstarray =[1,2,3,4]
const secondarray = [5,6,7,8]

const combined = [...firstarray, a,b,c,...secondarray]

// combined =[1,2,3,4,a,b,c,5,6,7,8]


const first = {
    a: 1,
    b: 3,
}

const second = {
    c: 4,
    d: 8
}

const third = { ...first, ...second}

third is a, 1, b, 3, c, 4, d
third a, b, c, d

third is { a: 1, b: 3, c: 4, d: 8}

*/