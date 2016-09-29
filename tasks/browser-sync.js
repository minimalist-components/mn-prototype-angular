import gulp from 'gulp';
import config from './gulp.config.js';
import historyApi from 'connect-history-api-fallback';
import gzip from 'compression';

gulp.task('browser-sync', browserSyncTask);

function browserSyncTask() {
  config.browserSyncOptions.middleware = [
    historyApi(),
    gzip(),
  ];
  config.browserSync.init(config.browserSyncOptions);
}
