const { merge } = require('webpack-merge');
const { DIR_PATH, baseWebpackConfig } = require('./webpack.config.base');


module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	output: {
		filename: 'js/[name].[hash:8].js',
		// publicPath: config.publicPath // 这里可以省略
	},
	module: {
		rules: [
			{
				oneOf: []
			}
		]
	},
});