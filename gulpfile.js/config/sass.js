var config = require('./');
var postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    pixrem       = require('pixrem');

module.exports = {
  postcss: [ autoprefixer({browsers: ['> 3% in US']}), pixrem],
  src: [config.sourceAssets + config.stylesDirectory + "/**/*.{sass,scss}", "!" + config.sourceAssets + config.stylesDirectory + "/vendors/**"],
  dest: config.publicAssets + config.stylesDirectory,
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: config.assetsDirectory + config.imgsDirectory // Used by the image-url helper
  }
}
