var gulp     = require('gulp'),
    config   = require('../'),
    html     = require('../config/html'),
    templates     = require('../config/templates'),
    iconFont = require('../config/iconFont'),
    images   = require('../config/images'),
    sass     = require('../config/sass'),
    fonts    = require('../config/fonts'),
    svgs     = require('../config/svgSprite'),
    watch    = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(images.src, function() { gulp.start('svgtopng'); });
  watch(svgs.paths.sprite.src, function() { gulp.start('sprite')});
  watch(sass.src, function() { gulp.start('sass'); });
  watch(iconFont.src, function() { gulp.start('iconFont'); });
  watch(fonts.src, function() { gulp.start('fonts'); });
  watch(html.watch, function() { gulp.start('html'); });
  watch(templates.watch, function() { gulp.start('templates'); });
});
