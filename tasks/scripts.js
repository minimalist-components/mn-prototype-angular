const gulp = require('gulp')
const gutil = require('gulp-util')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const config = require('./config.js')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const ngAnnotate = require('gulp-ng-annotate')

gulp.task('scripts', scriptsTask)

function scriptsTask() {
  return gulp
    .src(config.scripts.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write({sourceRoot: '/sources/angular'}))
    .pipe(gulp.dest(config.scripts.dest))
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
