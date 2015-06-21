var gulp            = require('gulp'),
    handleErrors    = require('../lib/handleErrors'),
    config          = require('../config/test'),
    uncss           = require('gulp-uncss'),
    csslint         = require('gulp-csslint');

gulp.task('test', function() {
  gulp.src(config.cssSrc)
    .pipe(csslint(config.cssLintRules))
    .pipe(csslint.reporter())
    .pipe(uncss({
        html: config.urls
    }));
});
