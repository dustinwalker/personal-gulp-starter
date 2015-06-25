fs = require('fs')
json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
version = json.version
date = dateFormat (new Date (), "%m-%d-%Y", true)

var config = {}
config.devUrl          = 'gulp2b.dev';           // MUST CHANGE THIS to match your local dev
config.compileTpls     = false;                  // If a Craft or other CMS build set this to false
config.cmsTpls         = "./craftTemplates";
config.serverName      = "./public_html";
config.publicDirectory = "./public_html";
config.sourceDirectory = "./src";
config.versionNumber   = version;                 // Reads in version number from package.json and appends to css and js
config.mainJs          = 'page1.js';              // Add additional and separate js files to webpack.js
// names of both sass and compiled css
config.stylesDirectory = '/stylesheets';
config.jsDirectory     = '/javascripts';
config.imgsDirectory   = '/images';
config.assetsDirectory = '/assets';
config.fontsDirectory  = '/fonts';
config.iconsDirectory  = '/icons';
config.spritemapSrc    = '/sprite-maps';                // Should be SVG
config.spriteMapDirectory = '/sprite-maps';      // MAKE SURE you update gulpfile.js/tasks/sprite/template.scss to new path
config.publicAssets    = config.publicDirectory + config.assetsDirectory;
config.sourceAssets    = config.sourceDirectory + config.assetsDirectory;
config.preventRev      = '!' + config.publicDirectory + '/ignoreDirName/**/**.*';

module.exports = config;

config.header = ['/**',
  ' * <%= json.description %>',
  ' * @version  v<%= json.version %> | build date: <%= date %>',
  ' * @author   <%= json.author %>',
  ' * @link     <%= json.link %>',
  ' */',
  ''].join('\n');
module.exports = config;


function dateFormat (date, fstr, utc) {
  utc = utc ? 'getUTC' : 'get';
  return fstr.replace (/%[YmdHMS]/g, function (m) {
    switch (m) {
    case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
    case '%m': m = 1 + date[utc + 'Month'] (); break;
    case '%d': m = date[utc + 'Date'] (); break;
    case '%H': m = date[utc + 'Hours'] (); break;
    case '%M': m = date[utc + 'Minutes'] (); break;
    case '%S': m = date[utc + 'Seconds'] (); break;
    default: return m.slice (1); // unknown code, remove %
    }
    // add leading zero if required
    return ('0' + m).slice (-2);
  });
}

