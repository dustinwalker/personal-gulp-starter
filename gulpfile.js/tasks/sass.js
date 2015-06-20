var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    handleErrors = require('../lib/handleErrors'),
    config       = require('../config/sass'),
    globbing     = require('gulp-css-globbing'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    pixrem       = require('pixrem');



gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(globbing({
        // Configure it to use SCSS files
        extensions: ['.sass', '.scss']
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(postcss(config.postcss))
    // .pipe(autoprefixer({ browsers: ['last  version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
