const HtmlWebpackPlugin = require("html-webpack-plugin");
const {merge} = require("webpack-merge");
const webpackConfig = require("./webpack.config");
module.exports = merge(webpackConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
        static: true
    }
});
