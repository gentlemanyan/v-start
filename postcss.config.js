
const postcss = require('postcss');
const sprites = require('postcss-sprites');

const opts = {
	stylesheetPath: './src/styles',
  spritePath: './src/sprites',
  filterBy: function(image) {
		// Allow only png files
		if (!/\.png$/.test(image.url)) {
			return Promise.reject(new Error('must be *.png image'));
		}

		return Promise.resolve();
  },
  
	// groupBy: function(image) {
	// 	if (image.url.indexOf('shapes') === -1) {
	// 		return Promise.reject(new Error('Not a shape image.'));
	// 	}
	// 	return Promise.resolve('shapes');
	// }
}


module.exports = {
  plugins: [ sprites(opts) ]
}
