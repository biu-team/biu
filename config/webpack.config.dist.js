const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

const { DIR_PATH, baseWebpackConfig } = require('./webpack.config.base');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	// devtool: sourceMapsMode,
	output: {
		filename: 'js/[name].[contenthash:8].js', // contenthash：只有模块的内容改变，才会改变hash值
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static', // static 生成html文件 | server 一直监听 | disabled 生成json文件
			// analyzerHost: localIp,
			// analyzerPort: bundleAnalyzerPort,
			reportFilename: `${DIR_PATH}report.html`,
			defaultSizes: 'gzip',
			openAnalyzer: true,
			generateStatsFile: false,
			// statsFilename: 'stats.json',
			// statsOptions: null,
			logLevel: 'info'
		})
	]
});