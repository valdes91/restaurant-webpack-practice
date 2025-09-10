const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: '[name][contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		// to rebuild entire dist every time a bundle happens
		clean: true,
		// to make images keep original names
		assetModuleFilename: '[name][ext]',
	},
	// for webpack dev server
	devtool: 'eval-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		// automatically open in browser
		open: true,
	},
	// plugin used to bundle html and add script tag to it with bundled js
	plugins: [
		new HtmlWebpackPlugin({
			// the html file to use as a template when bundling
			template: './src/index.html',
		}),
	],
	// add loaders for css to be bundled too
	module: {
		rules: [
			// rule so webpack knows what to do with CSS (order of use array matters). also needed for images used with url in CSS
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
