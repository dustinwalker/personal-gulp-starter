var config = require('./')
var fontConfig = require('./fonts')

module.exports = {
  name: 'Gulp Starter Icons',
  src: config.sourceAssets + config.iconsDirectory + '/*.svg',
  dest: fontConfig.dest,
  sassDest: config.sourceAssets + config.stylesDirectory + '/generated',
  template: './gulpfile.js/tasks/iconFont/template.sass',
  sassOutputName: '_icons.sass',
  fontPath: '../..' + config.assetsDirectory + config.fontsDirectory,
  className: 'icon',
  options: {
    fontName: 'icons',
    appendCodepoints: true,
    normalize: false
  }
}
