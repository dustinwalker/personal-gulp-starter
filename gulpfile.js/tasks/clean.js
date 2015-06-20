var gulp = require('gulp'),
    del = require('del'),
    config = require('../config'),
    htmlConfig = require('../config/html'),
    iconFontConfig = require('../config/iconFont');

gulp.task('clean', function (cb) {
  del([
    config.publicAssets,
    iconFontConfig.sassDest
  ], cb);
});
