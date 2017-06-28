const gulp = require('gulp')
const {lint} = require('./config.js')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const cache = require('gulp-cached')

gulp.task('lint', lintTask)

function lintTask() {
  return gulp
    .src(lint)
    .pipe(cache('linting'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', beep)
}

function beep() {
  gutil.beep()
}

