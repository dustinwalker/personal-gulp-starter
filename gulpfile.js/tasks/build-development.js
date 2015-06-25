var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['fonts', 'iconFont', 'sprite', 'svgtopng', 'images'], ['sass', 'webpack:development', 'webpack:production', 'html'], ['watch', 'browserSync'], 'rev', 'header', cb);
});
