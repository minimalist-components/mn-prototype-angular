import gulp from 'gulp'

gulp.task('default', [
  'views',
  'templates',
  'browser-sync',
  'sprites',
  'styles',
  'scripts',
  'lint',
  'watch',
])
