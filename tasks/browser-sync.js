import gulp from 'gulp';
import {browserSync, browserSyncOptions} from './config.js';
import historyApi from 'connect-history-api-fallback';
import gzip from 'compression';

gulp.task('browser-sync', browserSyncTask);

function browserSyncTask() {
  browserSyncOptions.middleware = [
    historyApi(),
    gzip(),
  ];
  browserSync.init(browserSyncOptions);
}
