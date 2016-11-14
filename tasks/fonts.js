import gulp from 'gulp';
import {fonts} from './config.js';

gulp.task('fonts', fontsTask);

function fontsTask() {
  return gulp
    .src(fonts.src)
    .pipe(gulp.dest(fonts.dest));
}
