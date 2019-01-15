const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

console.log(process.env.STRIPE_PUBLISH_KEY)
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

    return {
        mode: env === 'production' ? 'production' : 'development',
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FB_API_KEY': JSON.stringify(process.env.FB_API_KEY),
                'process.env.FB_AUTH_DOMAIN': JSON.stringify(process.env.FB_AUTH_DOMAIN),
                'process.env.FB_DB_URL': JSON.stringify(process.env.FB_DB_URL),
                'process.env.FB_PROJECT_ID': JSON.stringify(process.env.FB_PROJECT_ID),
                'process.env.UIBLOCKS_SERVER_URL': JSON.stringify(process.env.UIBLOCKS_SERVER_URL),
                'process.env.STRIPE_PUBLISH_KEY': JSON.stringify(process.env.STRIPE_PUBLISH_KEY),
                'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};