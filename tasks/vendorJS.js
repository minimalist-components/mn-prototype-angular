import gulp from 'gulp'
import bowerFiles from 'bower-files'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
// import packageFiles from 'package-files'

gulp.task('vendorJS', vendorJSTask)

function vendorJSTask() {
  // const packageDependencies = packageFiles().filter(file => file.endsWith('.css'))
  // console.log(packageDependencies)
  // return false

  const dependencies = bowerFiles()
    .ext('js')
    .files

  return gulp
    .src(dependencies)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'))
}
