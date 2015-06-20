Gulp Starter
============
A starting point for my Craft projects and heavily tailored to my work flow. Please use the projects that were the basis of this instead.

# Based on a combination of the following:
- https://github.com/greypants/gulp-starter/tree/2.0
- https://www.liquidlight.co.uk/blog/article/creating-svg-sprites-using-gulp-and-sass/
- https://github.com/BarrelStrength/Craft-Master
- https://github.com/h5bp/html5-boilerplate

## Features
- Browser sync v2 part of default task
- Combines and includes all requirements using webpack (used at a minimal level)
- Node-sass v2
- Includes Bourbon and Neat as starter grid
- Builds an icon font from svgs in /src/assets/icons/
- Revisions assets in CSS and JS files and appends CSS and JS production builds with package version number
- Auto prefix CSS for better browser support

## Getting started
- Run ``npm install`` from directory that the package.json file is in.

_Note: Unlike the previous starter, in order to perform the clean routine the gulpfile.js folder needs to be in the same directory as the project. Otherwise the force option will need to be used_

## Must change per project
- Change ``config.devUrl`` variable to match your dev URL. Found in /gulpfile.js/config/index.js.

## Configuration
- Most configuration can be done from the gulpfile.js/index.js file.
- Default source file locations
  - Sass: /src/assets/stylesheets/
  - Javascript: /src/assets/javascripts/
  - Images: /src/assets/images/
  - Icon Source: /src/assets/icons/
  - Fonts: /src/assets/fonts/

### JavaScript set up
I am using webpack to a very minimal level. The default name is page1.js (this can be adjusted in the index.js config.) In the page1.js or similar file I would recommend including/requiring any separate javascript files that are needed here. You can further require additional assets inside another js file. When compiled this will split out and combine the js into a page1.js and shared.js file as defined in the webpack config. If separate pages or applications will have unique javascript we could set up a new file name and include in the webpack config. This will automatically include the code needed by multiple pages in the shared.js while keeping the larger portion of the requirements in the separate files.

At the bottom of the template it should always include a reference to the shared.js followed by the applicable js needed to run the rest of the page.

## Start using
Once the dependencies are installed, run ``gulp`` from the project root.

## Production build
Run ``gulp build:production`` to generate the production files. Assets are suffixed with a hash key if changed and the references are updated in the compressed production files. The CSS and JS files are suffixed with the package name and should be conditionally linked to depending on the environment.

## Using icon fonts
A task runner automatically generates a Sass file under /src/stylesheets/generated/_icons.sass from the svg files. To use the icons it is required to keep the following mixins:

    =font-smoothing
      -moz-osx-font-smoothing: grayscale
      -webkit-font-smoothing: antialiased

      // Based on http://codepen.io/javasteve99/pen/hDxpn
    =font-face($font-family, $file-path, $font-weight: normal, $font-style: normal)
        @font-face
          font-family: $font-family
          src: url('#{$file-path}.eot')
          src: url('#{$file-path}.eot?#iefix') format('embedded-opentype'), url('#{$file-path}.woff2') format('woff2'), url('#{$file-path}.woff') format('woff'), url('#{$file-path}.ttf') format('truetype'), url('#{$file-path}.svg##{$font-family}') format('svg')
          font-weight: $font-weight
          font-style: $font-style

        // Chrome for Windows rendering fix: http://www.adtrak.co.uk/blog/font-face-chrome-rendering/
        @media screen and (-webkit-min-device-pixel-ratio: 0)
          @font-face
            font-family: $font-family
            src: url('#{$file-path}.svg##{$font-family}') format('svg')

After which you should be able to access the icon using +icon($name-of-thevar) or @include icon($name-of-thevar.) Source vector files for the icons should be kept in the /src/image-source/ folder.
