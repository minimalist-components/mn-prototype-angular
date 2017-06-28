const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const gutil = require('gulp-util')
const {browserSync, styles} = require('./config.js')

const outputStyle = 'compressed'

gulp.task('styles', stylesTask)

function stylesTask() {
  gulp
    .src(styles.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(styles.dest))
    .pipe(browserSync.stream({match: '**/*.css'}))
}

function errorHandler(err) {
  let message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
