const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compiler
function style() {
    return gulp.src('./src/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./src/css')).pipe(browserSync.stream())
}
// Watch
function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/scss/**/*.sass', style);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/**/*.php').on('change', browserSync.reload);
    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;