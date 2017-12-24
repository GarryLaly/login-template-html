var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() { //task runner compile sass to css
    gulp.src('assets/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('assets/css')); //hasil compile disimpan disini
});

gulp.task('min-css',function(){ //compress dan minify file css
    return gulp.src('assets/css/main.css')
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('source-maps'))
        .pipe(gulp.dest('build/css')); //file yang sudah berhasil dicompress dan minify disimpan disini
});

gulp.task('automate', function() { //task runner watching file
    gulp.watch('assets/sass/*.sass', ['sass']);
    gulp.watch('assets/css/*.css', ['min-css']);
});
