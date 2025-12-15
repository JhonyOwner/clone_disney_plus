const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imageminModule = require('gulp-imagemin');
const imagemin = imageminModule && imageminModule.default ? imageminModule.default : imageminModule;

// Keep gulp.src binary-safe by default to avoid image corruption
const _gulpSrc = gulp.src;
gulp.src = function(glob, opts) {
    const safeOpts = Object.assign({}, { encoding: false }, opts);
    return _gulpSrc.call(gulp, glob, safeOpts);
};

function styles() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}