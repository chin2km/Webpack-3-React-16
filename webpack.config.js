const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};

const extractLess = new ExtractTextPlugin({
    filename: "style.bundle.css"
});

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        extractLess
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(mp4|mp3|svg|png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [
                        "css-loader",
                        "less-loader"
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};