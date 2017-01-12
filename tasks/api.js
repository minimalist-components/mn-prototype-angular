import gulp from 'gulp'
console.info = () => null
process.env.PORT = 4000

gulp.task('api', apiTask)

function apiTask() {
  require('webservice')
}
