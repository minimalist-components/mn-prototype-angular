const gulp = require('gulp')
const {browserSync, browserSyncOptions} = require('./config.js')
const historyApi = require('connect-history-api-fallback')
const gzip = require('compression')

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  browserSyncOptions.middleware = [
    historyApi(),
    gzip(),
  ]

  browserSync.init(browserSyncOptions)
}
