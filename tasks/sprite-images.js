import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'
import plumber from 'gulp-plumber'
import config from './config.js'

const options = {
  imgName: 'sprites.png',
  cssName: 'sprite-vars.scss',
  imgPath: '../imgs/sprites/sprites.png',
  algorithm: 'binary-tree',
  engine: 'pngsmith',
  cssVarMap: sprite => sprite.name = `sprite-${sprite.name}`,
}

gulp.task('sprites', spritesTask)

function spritesTask() {
  const sprite = gulp
    .src(config.sprites.src)
    .pipe(plumber())
    .pipe(spritesmith(options))

  sprite.img.pipe(gulp.dest(config.sprites.dest))
  sprite.css.pipe(gulp.dest('./sources/styles/components/'))
}
