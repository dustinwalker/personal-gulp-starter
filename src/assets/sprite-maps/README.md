## How to use this
SVGs in this directory will automatically be processed using svg-sprites. This will combine all the images into an svg sprite that can then be used/accessed by using +sprite(name-of-icon).

This will provide an automatic fall back for IE9 if using modernizr.

This task isn't as yet configurable as I would like and if you change the paths and sprite name you will need to update the /gulpfile.js/tasks/sprite/template.scss file.
