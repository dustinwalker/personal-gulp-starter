var config = require('./')

module.exports = {
  src: config.sourceAssets + config.fontsDirectory + '/**/*',
  dest: config.publicAssets + config.fontsDirectory
}
