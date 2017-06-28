const gulp = require('gulp')
const packageFiles = require('package-files')
const minifyCss = require('gulp-minify-css')
const concat = require('gulp-concat')

gulp.task('vendorCSS', vendorCSSTask)

function vendorCSSTask() {
  const dependencies = packageFiles()
    .filter(file => file.endsWith('.css'))

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.css'))
    .pipe(minifyCss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./public/styles'))
}
