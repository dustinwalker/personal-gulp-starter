var config = require('../../config');
var iconFontConfig = require('../../config/iconFont');
var gulp   = require('gulp');
var rev    = require('gulp-rev');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function() {
  // Ignore what we dont want to hash in this step
  var notThese = '!' + config.publicDirectory + '/**/*+(css|js|json|html|php|txt|htaccess)'
  // Ignore iconFont files generated from the base svg iconFont. See rev-iconfont-workaround.js
  var orThese = '!' + iconFontConfig.dest + '/' + iconFontConfig.options.fontName + '.{eot,woff,woff2,ttf}'
  var orTheseToo = config.preventRev

  return gulp.src([config.publicAssets + '/**/*', notThese, orThese, orTheseToo])
    .pipe(rev())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(rev.manifest(config.publicAssets + '/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
