import path from 'path' // eslint-disable-line
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// -----------------------------------------------

export default {
	target: 'node',
	node: {
		__dirname: false,
	},
	externals: [nodeExternals({
		modulesFromFile: true,
	})],
	entry: {
		js: './server.js',
	},
	output: {
		path: __dirname,
		filename: 'server-es5.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
			{ test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
}
