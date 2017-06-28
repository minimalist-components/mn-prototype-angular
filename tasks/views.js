const gulp = require('gulp')
const gutil = require('gulp-util')
const pug = require('gulp-pug')
const config = require('./config.js')
const plumber = require('gulp-plumber')

gulp.task('views', viewsTask)

function viewsTask() {
  return gulp
    .src(config.views.src)
    .pipe(plumber({errorHandler}))
    .pipe(pug())
    .pipe(gulp.dest(config.views.dest))
}

function errorHandler(err) {
  const message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
