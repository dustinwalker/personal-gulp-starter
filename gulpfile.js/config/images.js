var config = require('./')

module.exports = {
  src: config.sourceAssets + config.imgsDirectory + "/**",
  svgs: config.sourceAssets + config.imgsDirectory + "/*.svg",
  dest: config.publicAssets + config.imgsDirectory
}
