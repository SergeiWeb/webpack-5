// const PATHS = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		historyApiFallback: true,
		// contentBase: PATHS.build,
		hot: true,
		open: true,
		port: 3000,
		compress: true,
		inline: true,
		// useLocalIp: true,
		clientLogLevel: 'info',
		overlay: {
			warnings: true,
			errors: true,
		},
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 },
					},
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
		],
	},
})
