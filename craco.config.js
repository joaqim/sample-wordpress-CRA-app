// craco.config.js
const CracoEsbuildPlugin = require('craco-esbuild');
const { WordpressShortcodeWebpackPlugin } = require('wordpress-shortcode-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
    plugins: [
        {
            plugin: CracoEsbuildPlugin
        },
    ],
    webpack: {
        loaders: {
            add: [
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }

            ]
        },
        plugins: {
            add: [
                new WordpressShortcodeWebpackPlugin(
                    {
                        wordpressPluginName: 'Sample_Wordpress_React_App',
                        headerFields: {
                            author: '',
                            description: '',
                            version: '1.0.0'
                        }
                    }
                )
            ]
        }
    }
};