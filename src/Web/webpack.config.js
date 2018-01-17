const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		HomePageAPp: './code/reflux/apps/HomePageApp.js',
		CollectPointsApp: './code/reflux/apps/CollectPointsApp.js',
		EditChartApp: './code/reflux/apps/EditChartApp.js',
		PointEarnerManagementApp: './code/reflux/apps/PointEarnerManagementApp.js',
		SpendPointsApp: './code/reflux/apps/SpendPointsApp.js',
		TaskPageApp: './code/reflux/apps/TaskPageApp.js',
		Site: './Content/less/Site.less'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'Scripts/dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.less/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.less']
	},
	plugins: [
		extractLess
	]
};