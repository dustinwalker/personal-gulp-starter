var config = require('./')

module.exports = {
    proxy: config.devUrl,
    // server: {
    // baseDir: config.publicDirectory
    // },
    files: [config.publicDirectory + '/**/*.html']
}
