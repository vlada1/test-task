var gulp = require("gulp"),
    less = require("gulp-less"),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/script.js',
        style: 'src/less/style.less',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task("less", function() {
    gulp.src("src/less/style.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"));
});
