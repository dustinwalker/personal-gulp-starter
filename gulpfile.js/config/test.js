var config = require('./');

module.exports = {
  cssSrc: config.publicAssets + config.stylesDirectory + '**/*.css',
  cssLintRules: './gulpfile.js/test-config/.csslintrc.json',
  urls: ['http://gulp2b.dev']
}
