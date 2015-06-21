var config = require('./');

module.exports = {
  cssSrc: config.publicAssets + config.stylesDirectory + '**/*.css',
  cssLintRules: './gulpfile.js/test-config/.csslintrc.json',
  sassSrc: config.sourceAssets + config.stylesDirectory,
  excludeVendor: '!' + config.sourceAssets + config.stylesDirectory + '/vendors/*',
  excludeUtils: '!' + config.sourceAssets + config.stylesDirectory + '/utils/*',
  urls: ['http://gulp2b.dev', 'http://google.com']
}
