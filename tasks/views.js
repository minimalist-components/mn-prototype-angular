import gulp from 'gulp'
import gutil from 'gulp-util'
import pug from 'gulp-pug'
import config from './config.js'
import plumber from 'gulp-plumber'

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
