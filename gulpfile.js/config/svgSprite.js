var config = require('./')

module.exports = {
  src: config.sourceAssets + config.spritemapSrc  + "**/*.svg",
  dest: '',
  basePaths: {
    src: config.sourceAssets,
    dest: ''
  },
  paths: {
    images: {
        src: config.sourceAssets + config.imgsDirectory,
        dest: config.publicAssets + config.imgsDirectory + config.spriteMapDirectory
    },
    sprite: {
        src: config.sourceAssets + config.spritemapSrc + '/**/*.svg',
        svg: config.publicAssets + config.imgsDirectory + config.spriteMapDirectory + '/testing.svg',
        css: config.sourceAssets + config.stylesDirectory + '/generated/' + '_spriteMap.scss'
    },
    templates: {
        src: './gulpfile.js/tasks/sprite/template.scss'
    }
  }
}
