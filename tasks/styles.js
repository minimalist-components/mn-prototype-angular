import gulp from 'gulp'
import gutil from 'gulp-util'
import bowerFiles from 'bower-files'
import path from 'path'
import inject from 'gulp-inject'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import config from './config.js'
import plumber from 'gulp-plumber'

let injectTransform = {
  starttag: '/* inject:imports */',
  endtag: '/* endinject */',
  transform: filepath => `@import '../..${filepath}';`,
}

let injectConfig = {
  read: false,
  relative: false,
}

let outputStyle = 'compressed'

gulp.task('styles', stylesTask)

function stylesTask() {
  let dependencies = bowerFiles()
    .relative(path.join(__dirname, '..'))
    .ext('scss')
    .files

  gulp
    .src(config.styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(inject(gulp.src(dependencies, injectConfig), injectTransform))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(config.browserSync.stream({match: '**/*.css'}))
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
