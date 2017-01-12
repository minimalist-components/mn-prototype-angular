import gulp from 'gulp'
console.info = () => null

gulp.task('api', apiTask)

function apiTask() {
  require('webservice')
}
