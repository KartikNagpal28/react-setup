const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');
const CracoAlias = require('craco-alias');
const FailOnErrorsPlugin = require('fail-on-errors-webpack-plugin');

process.env.BROWSER = 'none';

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development'
        ? [new BundleAnalyzerPlugin({ analyzerMode: 'server', analyzerPort: 8889, openAnalyzer: false })]
        : []),
      new FailOnErrorsPlugin({
        failOnErrors: true,
        failOnWarnings: false,
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src/',
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
         are specified*/
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  devServer: {
    port: 4100,
  },
};
