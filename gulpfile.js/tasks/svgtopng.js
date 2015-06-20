var browserSync = require('browser-sync'),
    changed     = require('gulp-changed'),
    config      = require('../config/images'),
    gulp        = require('gulp'),
    svg2png     = require('gulp-svg2png');

gulp.task('svgtopng', function() {
  return gulp.src(config.svgs)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(svg2png()) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
