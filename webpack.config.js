const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	entry: {
		popup: path.resolve('./src/popup/popup.tsx'),
		options: path.resolve('./src/options/options.tsx'),
		background: path.resolve('./src/background/background.ts'),
		contentScript: path.resolve('./src/contentScript/contentScript.ts')
	},
	module: {
		rules: [{
			use: "ts-loader",
			test: /\.tsx$/,
			exclude: /node_modules/,
		}, {
			use: ["style-loader", "css-loader", {
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						ident: 'postcss',
						plugins: [tailwindcss, autoprefixer]
					}
				}
			}],
			test: /\.css$/i,
		}]
	},
	plugins: [
		new CopyPlugin({
			patterns: [{
				from: path.resolve('src/static'),
				to: path.resolve('dist')
			}]
		}),
		new HtmlPlugin({
			title: 'Tiny Fox',
			filename: 'popup.html',
			chunks: ['popup']
		}),
		new HtmlPlugin({
			title: 'Tiny Fox - Options',
			filename: 'options.html',
			chunks: ['options']
		})
	],
	output: {
		filename: "[name].js"
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}

}