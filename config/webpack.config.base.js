const path = require('path');

const APP_ROOT = process.cwd();
const ENV_IS_DEV = process.env.NODE_ENV === "development";
const DIR_PATH = ENV_IS_DEV ? "" : `static.${new Date().getTime()}/`;

const localIp = (() => {
	const ips = [];
	const os = require("os");
	const ntwk = os.networkInterfaces();
	for (const k in ntwk) {
		for (let i = 0; i < ntwk[k].length; i++) {
			const _add = ntwk[k][i].address;
			if (
				_add &&
				_add.split(".").length == 4 &&
				!ntwk[k][i].internal &&
				ntwk[k][i].family == "IPv4"
			) {
				ips.push(ntwk[k][i].address);
			}
		}
	}
	return ips[0] || "localhost";
})();
const config = {
	entry: path.join(__dirname, '../src/main.ts'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [{
			test: /\.(tsx|ts)?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': path.resolve(__dirname, '../src/') // 以 @ 表示src目录
		}
	},
	externals: {
		react: 'react',
		"redux-dom": 'redux-dom'
	},
	plugins: [
	]
};

module.exports = {
	APP_ROOT,
	DIR_PATH,
	localIp,
	// localPort,
	baseWebpackConfig: config,
};