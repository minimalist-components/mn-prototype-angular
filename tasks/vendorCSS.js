import gulp from 'gulp'
import packageFiles from 'package-files'
import minifyCss from 'gulp-minify-css'
import concat from 'gulp-concat'

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
