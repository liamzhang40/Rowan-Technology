var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: [/\.jsx?$/, /\.js?$/],
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            }]
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
