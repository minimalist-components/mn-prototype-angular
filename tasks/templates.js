const gulp = require('gulp')
const gutil = require('gulp-util')
const pug = require('gulp-pug')
const flatten = require('gulp-flatten')
const {templates} = require('./config.js')
const plumber = require('gulp-plumber')
const changed = require('gulp-changed')

gulp.task('templates', templatesTask)

function templatesTask() {
  return gulp
    .src(templates.src)
    .pipe(changed(templates.dest))
    .pipe(plumber({errorHandler}))
    .pipe(pug())
    .pipe(flatten())
    .pipe(gulp.dest(templates.dest))
}

function errorHandler(err) {
  const message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
