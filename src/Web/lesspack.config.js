const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		Site: './Content/less/Site.less'
	},
	output: {
		filename: '[name].css',
		path: path.resolve(__dirname, 'Content/css')
	},
	module: {
		loaders: [
			{
				test: /\.less/,
				loaders: ['css-loader', 'less-loader']
			}]
	},
	resolve: {
		extensions: ['.less']
	},
	plugins: [
		extractLess
	]
};