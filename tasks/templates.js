import gulp from 'gulp';
import gutil from 'gulp-util';
import jade from 'gulp-jade';
import flatten from 'gulp-flatten';
import config from './gulp.config.js';
import plumber from 'gulp-plumber';

gulp.task('templates', templatesTask);

function templatesTask() {
  return gulp
    .src(config.templates.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(flatten())
    .pipe(gulp.dest(config.templates.dest));
}

function onError(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
