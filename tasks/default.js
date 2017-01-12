import gulp from 'gulp'

gulp.task('default', [
  'views',
  'templates',
  'api',
  'browser-sync',
  'sprites',
  'styles',
  'scripts',
  'lint',
  'watch',
])
