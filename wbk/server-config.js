const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // entry: './src/main.js',
    target: 'node',
    mode: "production",
    entry: path.resolve(".", "src/entry-server.js"),
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
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
        new VueSSRServerPlugin(),
        new VueLoaderPlugin(),
    ]
}
