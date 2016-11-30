import gulp from 'gulp'
import {
  browserSync,
  views,
  styles,
  scripts,
  templates,
  lint,
} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(templates.src, [
    'templates',
    browserSync.reload,
  ])

  gulp.watch(views.watch, [
    'views',
    browserSync.reload,
  ])

  gulp.watch(styles.watch, ['styles'])

  gulp.watch(scripts.src, [
    'scripts',
    browserSync.reload,
  ])
  gulp.watch(lint, ['lint'])

  gulp.watch('./bower.json', [
    'vendorCSS',
    'vendorJS',
    'styles',
  ])
}
