import gulp from 'gulp'
import {lint} from './config.js'
import eslint from 'gulp-eslint'
import gutil from 'gulp-util'
import cache from 'gulp-cached'

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

