import browserSync from 'browser-sync';
import yargs from 'yargs';

module.exports = {
  lint: [
    './gulpfile.js',
    './test/**/*.js',
    './sources/angular/**/*.js'
  ],
  views: {
    src: './sources/views/*.jade',
    watch: './sources/views/**/*.jade',
    dest: './public/',
  },
  templates: {
    src: './sources/angular/**/*.template.jade',
    dest: './public/templates/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './public/styles/',
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/angular/**/*.spec.js'
    ],
    dest: './public/scripts/',
  },
  sprites: {
    src: './sources/sprites/*.png',
    dest: './public/imgs/sprites/',
  },
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: './public',
    },
    notify: false,
    reloadDelay: 100,
    open: yargs.argv.open,
  },
};
