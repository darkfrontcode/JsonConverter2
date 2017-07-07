const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

	entry: {
		'polyfills': path.join(__dirname, '../angular/polyfills'),
		'vendor': path.join(__dirname, '../angular/vendor'),
		'main': path.join(__dirname, '../angular/index')
	},

	resolve: {
		extensions: [ '.js', '.ts', '.pug', '.styl']
	},

	module: {
		exprContextCritical: false,

		rules: [
			{
				test: /\.ts$/,
				use: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				include: /\.pug/,
				use: ['pug-loader']
			},
			{
				test: /\.styl$/,
				use: [
					'to-string-loader',
					'css-loader?importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					'postcss-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|ico|css|svg)$/,
				use: 'file-loader?name=assets/[name].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	},

	plugins: [

		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
			}
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			environment: process.env.NODE_ENV || 'development',
			template: path.join(__dirname, "../pug/index.pug"),
			filename: 'index.html',
			inject: 'body'
		})
	]
};
