import gulp from 'gulp';
import ejs from 'gulp-ejs';
import del from 'del';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import fs from 'fs';
import webpack from 'gulp-webpack';
import connect from 'gulp-connect';
import * as utils from './src/utils/index.js';

const paths = {
  data: './src/data/**.*',
  html: './src/markup/**.*',
  css: './src/styles/**.*',
  js: './src/**/*.js',
};

const readData = () => {
  return {
    schedule: JSON.parse(fs.readFileSync('./src/data/schedule.json', 'utf8')),
    lecturers: JSON.parse(fs.readFileSync('./src/data/lecturers.json', 'utf8')),
    schools: JSON.parse(fs.readFileSync('./src/data/schools.json', 'utf8')),
  };
};

gulp.task('rm:css', () => del(['build/index.css']));
gulp.task('rm:html', () => del(['build/index.html']));
gulp.task('rm:js', () => del(['build/index.js']));

gulp.task('html', ['rm:html'], () => {
  return gulp.src('./src/markup/index.html')
    .pipe(ejs({ ...readData(), utils }))
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
    .pipe(webpack({
      output: {
        filename: 'index.js',
      },
      module: {
        loaders: [{
          test: /\.(js)$/,
          loader: 'babel-loader'
        }],
      },
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
  gulp.watch([paths.js, paths.data], ['js']);
});

gulp.task('build', ['html', 'css', 'js']);