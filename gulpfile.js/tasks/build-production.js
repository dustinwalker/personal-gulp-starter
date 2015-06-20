var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build:production', function(cb) {
  process.env.NODE_ENV = 'production'
  gulpSequence('clean', ['fonts', 'iconFont', 'sprite', 'svgtopng', 'images'], ['sass', 'webpack:development', 'webpack:production'], 'html', 'rev', cb);
});
