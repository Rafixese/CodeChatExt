const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'popup/popup': './src/popup/popup.ts',
        'background/background': './src/background/background.ts'
        // Add entries for other parts of your extension if needed (e.g., content scripts)
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: 'src/popup/popup.html', to: 'popup'},
                {from: 'src/manifest.json', to: '.'},
                {from: 'src/icons', to: 'icons'}
                // ... any other assets to copy
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};
