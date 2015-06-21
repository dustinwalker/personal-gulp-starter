var gulp            = require('gulp'),
    handleErrors    = require('../lib/handleErrors'),
    config          = require('../config/test'),
    uncss           = require('gulp-uncss'),
    cssbeautify     = require('gulp-cssbeautify'),
    notify          = require('gulp-notify'),
    csslint         = require('gulp-csslint'),
    csscomb         = require('gulp-csscomb');

gulp.task('sortSass', function() {
    return gulp.src([config.sassSrc + '/**/*.{sass,scss}', '!' + config.sassSrc + '/vendors/**',  '!' + config.sassSrc + '/utils/**'])
        .pipe(csscomb())
        .on('error', handleErrors)
});
gulp.task('sort', ['sortSass'], function() {
    gulp.src(config.cssSrc)
    .pipe(notify({
        message: "Sorted selectors into /test-results/sass-sorted/"
    }))
    .pipe(gulp.dest('./test-results/sass-sorted/'));
});

gulp.task('runtest', function() {
  gulp.src(config.cssSrc)
    .pipe(notify({
        message: "Checking CSS against for potential issues:" + config.cssLintRules
    }))
    .pipe(csslint(config.cssLintRules))
    .pipe(csslint.reporter())
    .pipe(cssbeautify())
    .pipe(gulp.dest('./test-results/before'))
    .pipe(notify({
        message: "-----------------------------------"
    }))
    .pipe(notify({
        message: "Checking:" + config.urls + " for unused CSS"
    }))
    .pipe(uncss({
        html: config.urls,
        options: {
            report: true
        }
    }))
    .pipe(cssbeautify())
    .pipe(notify({
        message: "Saved CSS files to /test-results/ to compare"
    }))
    .pipe(gulp.dest('./test-results/after'));

});

gulp.task('test', ['runtest'], function() {});
