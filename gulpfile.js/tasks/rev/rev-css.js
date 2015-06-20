var config = require('../../config');
var filter = require('gulp-filter');
var gulp   = require('gulp');
var minify = require('gulp-minify-css');
var rev    = require('gulp-rev');
var uglify = require('gulp-uglify');
var rename       = require("gulp-rename");

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', ['rev-update-references'], function(){

  return gulp.src(config.publicAssets + '/**/*.css')
    .pipe(rename({suffix: '-' + config.versionNumber}))
    .pipe(minify())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(rev.manifest(config.publicAssets + '/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
