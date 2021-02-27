module.exports = {
    // babel: {
    //     plugins: [
    //         ["@babel/plugin-proposal-decorators", { legacy: true }]
    //     ]
    // }
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
                    content: './src/chrome/content.ts',
                    background: './src/chrome/background.ts'
                },
                output: {
                    ...webpackConfig.output,
                    filename:(pathData) => {
                        return pathData.chunk.name === 'background' ? '[name].js' : 'static/js/[name].js';
                    }
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            }
        },
    }
};