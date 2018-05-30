var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var sassLint = require('gulp-sass-lint');
var eslint = require('gulp-eslint');

gulp.task('browserSync', function() {
    browserSync.init({
        server:'./'
    });
});

gulp.task('lint', function() {
    gulp.src('assets/js/app.js')
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('sass', function(){
    return gulp.src('assets/scss/main.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('js', function() {
    gulp.src('assets/js/app.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch',['browserSync','sass','js','lint'], function (){
  gulp.watch('assets/scss/main.scss', ['sass']); 
  gulp.watch('assets/js/app.js',['lint','js']);
});

gulp.task('default', ['browserSync','js','sass','watch']);