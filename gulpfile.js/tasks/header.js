var gulp = require('gulp'),
    config = require('../config'),
    header = require('gulp-header');

gulp.task('header-js', function () {
    return gulp.src(config.publicAssets + config.jsDirectory + '**/*.js')
        .pipe(header(config.header),{json:json})
        .pipe(gulp.dest(config.publicAssets))
});

gulp.task('header-css', function () {
    return gulp.src(config.publicAssets + config.stylesDirectory + '**/*.css')
        .pipe(header(config.header),{json:json})
        .pipe(gulp.dest(config.publicAssets))
});

gulp.task('header', ['header-js', 'header-css']), function(){};
