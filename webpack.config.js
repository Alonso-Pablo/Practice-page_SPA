// acceder hacia donde nos estamos moviendo o estamos (no importa si estamos en local o en la nube)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // El compilado de todo js va a parar en main.js
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: './src/styles/styles.css',
                //Podriamos crear una carpeta /assets/ pero esta vez lo dejamos así
                to: ''
            }],
        })
    ]
}