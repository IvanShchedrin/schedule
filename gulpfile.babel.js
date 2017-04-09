import gulp from 'gulp';
import ejs from 'gulp-ejs';
import htmlmin from 'gulp-htmlmin';
import del from 'del';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import fs from 'fs';
import ghpages from 'gh-pages';
import path from 'path';
import gulpWebpack from 'gulp-webpack';
import webpack from 'webpack';
import connect from 'gulp-connect';
import * as utils from './src/js/utils.js';

const paths = {
  data: './src/data/**.*',
  html: './src/markup/**.*',
  css: './src/styles/**.*',
  js: './src/**/*.js',
  assets: './src/**/*',
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
gulp.task('rm:assets', () => del(['build/assets/']));

gulp.task('html', ['rm:html'], () => {
  return gulp.src('./src/markup/index.html')
    .pipe(ejs({ ...readData(), utils }))
    .pipe(htmlmin({ collapseWhitespace: true }))
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
    .pipe(gulpWebpack({
      output: {
        filename: 'index.js',
      },
      module: {
        loaders: [{
          test: /\.(js)$/,
          loader: 'babel-loader'
        }],
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
      ]
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('assets', ['rm:assets'], () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./build/assets/'));
});

gulp.task('server', () => connect.server({ root: 'build', port: 8000 }));

gulp.task('gh:publish', ['build'], () => ghpages.publish(path.join(__dirname, 'build')));

gulp.task('default', ['html', 'css', 'js', 'assets', 'server'], () => {
  gulp.watch([paths.data, paths.html], ['html']);
  gulp.watch([paths.css], ['css']);
  gulp.watch([paths.js, paths.data], ['js']);
  gulp.watch([paths.assets], ['assets']);
});

gulp.task('build', ['html', 'css', 'js', 'assets']);