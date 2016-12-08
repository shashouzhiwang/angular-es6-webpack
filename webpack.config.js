/**
 * @file webpack配置
 * @author loki luo
 */
 var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './app/index.js',
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style","css!sass")},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
    ]
};
