import gulp from 'gulp';
import ejs from 'gulp-ejs';
import del from 'del';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import fs from 'fs';
import babel from 'gulp-babel';
import connect from 'gulp-connect';

const paths = {
  data: './src/data/**.*',
  html: './src/markup/**.*',
  css: './src/styles/**.*',
  js: './src/styles/**.*',
};

gulp.task('rm:css', () => del(['build/index.css']));
gulp.task('rm:html', () => del(['build/index.html']));
gulp.task('rm:js', () => del(['build/index.js']));

gulp.task('html', ['rm:html'], () => {
  const data = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf8'));

  return gulp.src('./src/markup/index.html')
    .pipe(ejs({ ...data }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('css', ['rm:css'], () => {
  return gulp.src('./src/styles/index.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build/'));
});

gulp.task('js', ['rm:js'], () => {
  return gulp.src('./src/js/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('server', function () {
  connect.server({
    root: 'build',
    port: 8000,
  });
});

gulp.task('default', ['html', 'css', 'js', 'server'], () => {
  gulp.watch([paths.data, paths.html], ['html']);
  gulp.watch([paths.css], ['css']);
  gulp.watch([paths.js], ['js']);
});