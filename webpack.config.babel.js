/**
* MODULES
*/
import webpack from 'webpack';
import path from 'path';
import chalk from 'chalk';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin';

module.exports = (env) => {
    /**
    * VARIABLES
    */
    const DEV_SERVER = env.NODE_ENV === 'development';

    /**
    * CONFIG
    * Reference: https://webpack.js.org/configuration/
    * This is the object where all configuration gets set
    */
    const config = {};
    
    /**
    * RESOLVE
    * Reference: https://webpack.js.org/configuration/resolve/#resolve
    * Configure how modules are resolved.
    */
    config.resolve = {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@hoc': path.resolve(__dirname, './src/hoc'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    };

    /**
    * ENTRY
    * Reference: https://webpack.js.org/configuration/entry-context/
    * Entry point of the application
    */
    config.entry = {
        app: './src/app'
    };

    /**
    * OUTPUT
    * Reference: https://webpack.js.org/configuration/output/
    * Output files of the application
    */
    config.output = {
        // Absolute output directory
        path: path.resolve(__dirname, './build'),

        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: '/',

        // Filename for entry points
        // Only adds hash in build mode
        filename: DEV_SERVER ? 'js/[name].js' : 'js/[name].[hash].js'
    };
    

    /**
    * DEVTOOL
    * Reference: https://webpack.js.org/configuration/devtool/
    * Type of sourcemap to use per build type
    */
    if (DEV_SERVER) {
        config.devtool = 'cheap-module-source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    /**
    * LOADERS
    * Reference: https://webpack.js.org/concepts/loaders/
    * This handles most of the magic responsible for converting modules
    */
    config.module = {
        rules: [
            {
            // ESLINT LOADER
            // Reference: https://github.com/MoOx/eslint-loader
            // Check js files for code errors
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
            // JS LOADER
            // Reference: https://github.com/babel/babel-loader
            // Transpile .js files using babel-loader
            // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
            // CSS LOADER
            // Reference: https://github.com/webpack-contrib/css-loader
            // Allow loading css through js
            //
            // POSTCSS LOADER
            // Reference: https://github.com/postcss/postcss-loader
            // Postprocess your css with PostCSS plugins
            //
            // STYLE LOADER
            // Reference: https://github.com/webpack-contrib/style-loader
            // Adds CSS to the DOM by injecting a <style> tag
            //
            // SASS LOADER
            // Reference: https://github.com/jtangelder/sass-loader
            // Compiles Sass to CSS
            //
            // SASS RESOURCES LOADER
            // Reference: https://github.com/shakacode/sass-resources-loader
            // Import sass resources to every sass file 
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            // camelCase: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader', 
                    'sass-loader',
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: [
                    //             'assets/styles/variables.scss', 
                    //             'assets/styles/mixins.scss',
                    //             'assets/styles/colors.scss'
                    //         ]
                    //     },
                    // }
                ]
            },
            {
            // FILE LOADER
            // Reference: https://github.com/webpack/file-loader
            // Copy png, jpg, jpeg, gif, svg files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
            // FILE LOADER
            // Reference: https://github.com/webpack/file-loader
            // Copy woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
            // JSON LOADER
            // Reference: https://github.com/webpack-contrib/json-loader
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: MiniCssExtractPlugin.loader
            }
        ]
    };

    /**
    * Devserver
    * Reference: https://webpack.js.org/configuration/dev-server/
    */
    config.devServer = {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true,
        inline: true,
        open: true,
        compress: true,
        port: 3000,
        headers: { 'Access-Control-Allow-Origin': '*' }
    };

    /**
    * Plugins
    * Reference: https://webpack.js.org/configuration/plugins/
    */
    config.plugins = [];

    // WEBPACK NOTIFIER WINDOW
    // Reference: https://github.com/Turbo87/webpack-notifier
    // Add build status system notifications
    config.plugins.push(
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: 'befront',
            // contentImage: path.resolve(__dirname, appConfig.WEBPACK_NOTIFIER_IMG)
        })
    );

    // PROGRESS BAR WEBPACK PLUGIN
    // Reference: https://github.com/clessg/progress-bar-webpack-plugin
    // Add progress bar to webpack build
    config.plugins.push(
        new ProgressBarPlugin({
            format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
            clear: false
        })
    );

    // HTML WEBPACK PLUGIN
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Skip rendering index.html in test mode
    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            inject: 'body'
        })
    );

    // MINI CSS EXTRACT PLUGIN
    // Reference: https://github.com/webpack-contrib/mini-css-extract-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: DEV_SERVER ? 'styles/[name].css' : 'styles/[name].[hash].css'
        })
    );

    // DEFINE PLUGIN
    // Reference: https://webpack.js.org/plugins/define-plugin/
    // Create global constants which can be configured at compile time
    config.plugins.push(
        new webpack.DefinePlugin({ 
            API_URL: JSON.stringify(env.API_URL)
        })
    );

    // Add build specific plugins
    if (!DEV_SERVER) {
        config.plugins.push(

            // WEBPACK AUTOMATIC PREFETCH PLUGIN
            // Reference: https://webpack.js.org/plugins/automatic-prefetch-plugin/
            // Improve build performance
            config.plugins.push(
                new webpack.AutomaticPrefetchPlugin()
            ),

            // COMMONS CHUNK PLUGIN
            // Reference: https://webpack.js.org/plugins/commons-chunk-plugin/
            // Create separate file for common modules
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'libs',
            //     minChunks: ({ resource }) => /node_modules/.test(resource)
            // }),

            // MODULE CONCATENATION WEBPACK PLUGIN
            // Reference: https://webpack.js.org/plugins/module-concatenation-plugin/
            // This plugin will enable the same concatenation behavior in webpack.
            new webpack.optimize.ModuleConcatenationPlugin(),

            // NO ERRORS PLUGIN
            // Reference: https://webpack.js.org/plugins/no-emit-on-errors-plug..
            // Only emit files when there are no errors
            new webpack.NoEmitOnErrorsPlugin(),

            // OPTIMIZE CSS ASSETS PLUGIN
            // Reference: https://github.com/NMFR/optimize-css-assets-webpack-p..
            // Minimize css assets
            new OptimizeCSSAssets({
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            }),

            // UGLIFYJS PLUGIN
            // Reference: https://github.com/webpack-contrib/uglifyjs-webpack-p..
            // Minify all javascript, switch loaders to minimizing mode
            new UglifyJsPlugin(
                // {
                // sourceMap: true,
                // compress: {
                //     warnings: false,
                //     screw_ie8: true,
                //     conditionals: true,
                //     unused: true,
                //     comparisons: true,
                //     sequences: true,
                //     dead_code: true,
                //     evaluate: true,
                //     if_return: true,
                //     join_vars: true,
                // },
                // output: {
                //     comments: false
                // }
            // }
            ),

            // COPY WEBPACK PLUGIN
            // Copy assets from the public folder
            // Reference: https://github.com/kevlened/copy-webpack-plugin
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname, './src/public')
            }])
        );
    }

    return config;
};
