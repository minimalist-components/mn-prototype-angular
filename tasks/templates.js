import gulp from 'gulp'
import gutil from 'gulp-util'
import pug from 'gulp-pug'
import flatten from 'gulp-flatten'
import {templates} from './config.js'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'

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
