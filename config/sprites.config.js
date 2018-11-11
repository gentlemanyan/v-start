const SpritesmithPlugin = require('webpack-spritesmith');
const path = require('path');

const moduleSpritePath = [{
  src: {
    cwd: path.resolve(__dirname, '../product/sprite'),
    glob: '*.png',
  },
  target: {
    image: path.resolve(__dirname, '../dist/sprites/product/sprite.png'),
    css: path.resolve(__dirname, '../dist/css/product/sprite.css'),
  },
  apiOptions: {
    cssImageRef: '../../sprites/product/sprite.png'
  },
  retina: '@2x'
}, {
  src: {
    cwd: path.resolve(__dirname, '../account/sprite'),
    glob: '*.png',
  },
  target: {
    image: path.resolve(__dirname, '../dist/sprites/account/sprite.png'),
    css: path.resolve(__dirname, '../dist/css/account/sprite.css'),
  },
  apiOptions: {
    cssImageRef: '../../sprites/account/sprite.png'
  },
  retina: '@2x'
}];

// {
//   src: {
//     cwd: path.resolve(__dirname, '../public/sprites'),
//     glob: '**/*.png',
//   },
//   target: {
//     image: path.resolve(__dirname, '../dist/sprites/public/sprite.png'),
//     css: path.resolve(__dirname, '../dist/css/public/sprite.css'),
//   },
//   apiOptions: {
//     cssImageRef: '@/modules/public/sprites.png'
//   },
//   retina: '@2x'
// }
module.exports = function spritesConfig () {
  return moduleSpritePath.map(config => {
    return new SpritesmithPlugin(config);
  });
}
