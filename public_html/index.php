<?php
// Path to your craft/ folder
$craftPath = '../craft';
// Move plugins path to right above web root
define('CRAFT_PLUGINS_PATH', realpath(dirname(__FILE__) . "/../craftPlugins").'/');
// Move templates path to right above web root
define('CRAFT_TEMPLATES_PATH', realpath(dirname(__FILE__) . "/../craftTemplates").'/');
// Move config files
define('CRAFT_CONFIG_PATH', realpath(dirname(__FILE__) . "/../craftConfig").'/');
// Setup environment-friendly configs
switch ($_SERVER['SERVER_NAME']) {
    case 'live.server.com' :
        define('CRAFT_ENVIRONMENT', 'live');
        break;
    case 'dev.server.com' :
        define('CRAFT_ENVIRONMENT', 'dev');
        break;
    default :
        define('CRAFT_ENVIRONMENT', 'local');
        break;
}
// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';
if (!is_file($path))
{
    exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}
require_once $path;
