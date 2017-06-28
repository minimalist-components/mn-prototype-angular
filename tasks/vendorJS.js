const gulp = require('gulp')
const packageFiles = require('package-files')
const concat = require('gulp-concat')
const minify = require('gulp-babili')
const webpack = require('webpack-stream')
const webpack2 = require('webpack')

gulp.task('vendorJS', vendorJSTask)

function vendorJSTask() {
  const dependencies = packageFiles()
    .filter(file => file.endsWith('.js'))

  return gulp
    .src(dependencies)
    .pipe(webpack({}, webpack2))
    .pipe(concat('vendor.js'))
    .pipe(minify({mangle: true}))
    .pipe(gulp.dest('./public/scripts'))
}
