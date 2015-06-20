var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    config       = require('../config/templates'),
    handleErrors = require('../lib/handleErrors');


gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(browserSync.reload({stream:true}));
});
