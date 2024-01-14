const {src, dest, watch, parallel, series}  = require('gulp');
const scss           = require('gulp-sass')(require('sass'));
const concat         = require('gulp-concat');
const autoprefixer   = require('gulp-autoprefixer');
const uglify         = require('gulp-uglify-es').default;
const imagemin       = require('gulp-imagemin');
const avif           = require('gulp-avif');
const webp           = require('gulp-webp');
const newer          = require('gulp-newer');
const fonter         = require('gulp-fonter');
const ttf2woff2      = require('gulp-ttf2woff2');
const svgSprite      = require('gulp-svg-sprite');
const include      = require('gulp-include');
// const { notify }     = require('browser-sync');
const del            = require('del');
const browserSync    = require('browser-sync').create();



function pages() {
   return src('app/pages/*.html')
   .pipe(include({
      includePaths: 'app/components'
   }))
   .pipe(dest('app'))
   .pipe(browserSync.stream())
}

function browsersync() {
   browserSync.init({
      server: {
         baseDir: 'app/'
      },
      notify: false
   })
}

function fonts() {
   return src('app/fonts/src/*.*')
   .pipe(fonter({
      formats: ['woff', 'ttf']
   }))
   .pipe(src('app/fonts/*.ttf'))
   .pipe(ttf2woff2())
   .pipe(dest('app/fonts'))
}

function styles() {
   return src('app/scss/style.scss')
   .pipe(scss({outputStyle: 'compressed'}))
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer({
      overrideBrowserslist: ['Last 10 versions']
   }))
   .pipe(dest('app/css'))
   .pipe(browserSync.stream())
}

function scripts() {
   return src([
      'node_modules/jquery/dist/jquery.js',
      'app/js/main.js'
   ])
   .pipe(concat('main.min.js'))
   .pipe(uglify())
   .pipe(dest('app/js'))
   .pipe(browserSync.stream())
}

function sprite() {
   return src('app/images/*.svg')
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: '../sprite.svg',
               example: true
            }
         }
      }))
      .pipe(dest('app/images'))
}

function images() {
   return src(['app/images/src/*.*', '!app/images/src/*.svg'])
      .pipe(newer('app/images'))
      .pipe(avif({quality : 50}))      
      .pipe(src('app/images/src/*.*'))
      .pipe(newer('app/images'))
      .pipe(webp())
      .pipe(src('app/images/src/*.*'))
      .pipe(newer('app/images'))
      .pipe(imagemin())
      .pipe(dest('app/images'))
}

function build() {
   return src([
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js',
      'app/images/*.*',
      '!app/images/*.svg',
      '!app/images/**/*.html',
      'app/images/sprite.svg',
      'app/fonts/*.*'
   ], {base: 'app'})
   .pipe(dest('dist'))
}

function cleanDist() {
   return del('dist')
}

function watching() {
   watch(['app/scss/**/*.scss'], styles);
   watch(['app/images/src'], images);
   watch(['app/components/*', 'app/pages/*'], pages);
   watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
   watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.sprite = sprite;
exports.images = images;
exports.fonts = fonts;
exports.pages = pages;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, pages, watching)