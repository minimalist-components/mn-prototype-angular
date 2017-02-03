import gulp from 'gulp'
import packageFiles from 'package-files'

gulp.task('fonts', fontsTask)

function fontsTask() {
  const fonts = packageFiles()
    .filter(file => file.match(/\.(eot|svg|ttf|woff|woff2)$/))

  return gulp
    .src(fonts)
    .pipe(gulp.dest('./public/fonts/'))
}
