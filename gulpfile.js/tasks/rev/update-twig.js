var gulp         = require('gulp');
var config       = require('../../config');
var revReplace = require('gulp-rev-replace')

// 5) Update asset references in HTML
gulp.task('update-twig', ['rev-css'], function(){
  var manifest = gulp.src(config.publicAssets + "/rev-manifest.json");
  return gulp.src(config.cmsTpls + '/**/*.{twig,html}')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(config.cmsTpls));
});
