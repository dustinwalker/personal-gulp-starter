var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    svgSprite    = require('gulp-svg-sprite'),
    svgo         = require('gulp-svgo'),
    svg2png      = require('gulp-svg2png'),
    handleErrors = require('../../lib/handleErrors'),
    config       = require('../../config/svgSprite');

gulp.task('svgSprite', function () {
  return gulp.src(config.paths.sprite.src)
    .pipe(svgo())
    .pipe(svgSprite({
        "mode": {
            "css": {
                "spacing": {
                    "padding": 5
                },
                "dest": "./",
                "layout": "diagonal",
                "sprite": config.paths.sprite.svg,
                "bust": false,
                "render": {
                    "scss": {
                        "dest": config.paths.sprite.css,
                        "template": config.paths.templates.src
                    }
                }
            }
        }
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.basePaths.dest));
});

gulp.task('pngSprite', ['svgSprite'], function() {
    return gulp.src(config.basePaths.dest + config.paths.sprite.svg)
        .pipe(svg2png())
        .pipe(gulp.dest(config.paths.images.dest));
});

gulp.task('sprite', ['pngSprite']);
