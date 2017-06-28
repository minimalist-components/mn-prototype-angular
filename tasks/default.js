const gulp = require('gulp')

gulp.task('default', [
  'views',
  'templates',
  'api',
  'browser-sync',
  'styles',
  'scripts',
  'fonts',
  'lint',
  'watch',
])
