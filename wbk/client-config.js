const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/main.js',
    mode: "production",
    entry: path.resolve(".", "src/entry-client.js"),
    // entry: path.resolve(".", "src/entry-server.js"),
    output: {
        path: path.resolve(".", "dist/"),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    devtool: '#source-map',
    plugins: [
        new VueSSRClientPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            chunkFilename: "[id].css"
        }),
        // new CleanWebpackPlugin([path.resolve(".", "dist/")],{
        //     root: path.resolve("."),
        //     verbose: true,
        //     dry: false
        // }),

    ]
}
