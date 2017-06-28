const gulp = require('gulp')
console.info = () => null

gulp.task('api', apiTask)

function apiTask() {
  require('webservice')
}
