const path   = require('path')
const merge  = require('webpack-merge')
const commom = require('./common')

module.exports = merge(commom, {
	devtool: "cheap-module-eval-source-map",

	output: {
		path: path.join(__dirname, '../../build'),
		publicPath: 'http://localhost:8080/',
		filename: "[name].js",
		chunkFilename: '[id].chunk.js'
	},

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}

})
