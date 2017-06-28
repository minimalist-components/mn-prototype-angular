const gulp = require('gulp')
const gutil = require('gulp-util')
const sourcemaps = require('gulp-sourcemaps')
const config = require('./config.js')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const minify = require('gulp-babili')
// const ngAnnotate = require('gulp-ng-annotate')

gulp.task('scripts', scriptsTask)

function scriptsTask() {
  return gulp
    .src(config.scripts.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    // .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(minify({mangle: false}))
    .pipe(sourcemaps.write({sourceRoot: '/sources/angular'}))
    .pipe(gulp.dest(config.scripts.dest))
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
