// import tailwindcss from 'tailwindcss';
const pxTorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		require('tailwindcss'),

		autoprefixer({
			cascade: true
		}),
		pxTorem({
			rootValue: 37.5,
			propList: ['*'],
			minPixelValue: 1,
			unitPrecision: 5,
			exclude: /node_modules/i,
			selectorBlackList: ['.ignore', '.hairlines'] //
		})
	]
};
