import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import config from './config.js';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import ngAnnotate from 'gulp-ng-annotate';

gulp.task('scripts', scriptsTask);

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
    .pipe(gulp.dest(config.scripts.dest));
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
