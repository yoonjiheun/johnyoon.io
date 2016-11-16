module.exports = {
	entry: './src/public/js/app.js',
	output: {
		path: 'dist/public/js',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader'
		}]
	}
};