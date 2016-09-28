import gulp from 'gulp';
import gulpConfig from './gulp.config.js';

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(gulpConfig.templates.src, [
    'templates',
    gulpConfig.browserSync.reload
  ]);
  
  gulp.watch(gulpConfig.views.watch, [
    'views',
    gulpConfig.browserSync.reload
  ]);

  gulp.watch(gulpConfig.styles.watch, ['styles']);

  gulp.watch(gulpConfig.scripts.src, [
    'scripts',
    gulpConfig.browserSync.reload
  ]);
  gulp.watch(gulpConfig.lint, ['lint']);

  gulp.watch('./bower.json', [
    'vendorCSS',
    'vendorJS',
    'styles'
  ]);
}
