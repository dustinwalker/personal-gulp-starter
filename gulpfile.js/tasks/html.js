var browserSync  = require('browser-sync'),
    gulpif       = require('gulp-if'),
    config       = require('../config/html'),
    gulp         = require('gulp'),
    swig         = require('gulp-swig'),
    handleErrors = require('../lib/handleErrors');

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulpif(config.compileTpls, swig(config.swig)))
    .on('error', handleErrors)
    .pipe(gulpif(config.compileTpls, gulp.dest(config.dest)))
    .pipe(browserSync.reload({stream:true}));
});
