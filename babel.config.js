
module.exports = (api) => {
	// 编译缓存
	api.cache.forever();

	return {
		compact: false,

		presets: [
			// 这里也是@babel/preset-env，不能是env。env是老式的写法
			"@babel/preset-env",
			"@babel/preset-react"
		],
		plugins: [
			"@babel/plugin-proposal-export-namespace-from",
			"@babel/plugin-proposal-export-default-from",
			"@babel/plugin-proposal-function-bind",
			"@babel/plugin-syntax-dynamic-import",
			"@babel/plugin-syntax-jsx",
			// 这里本来是transform-runtim,我们使用babel7的@babel/plugin-transform-runtim代替
			"@babel/plugin-transform-runtime",
			"transform-react-jsx",

			["@babel/plugin-proposal-decorators", { "legacy": true }],
			["@babel/plugin-proposal-class-properties", { "loose": true }],
			["import", {
				"libraryName": "antd",
				"libraryDirectory": "es",
				"style": "css" // `style: true` 会加载 less 文件
			}]
		]
	};
};
