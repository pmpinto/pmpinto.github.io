var gulp         = require('gulp'),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    path         = require('path'),
    util         = require('gulp-util'),
    notify       = require('gulp-notify');

var configs = {
    src: 'development/assets/css/*.less',
    dest: 'production/assets/css/',
    imports: 'development/assets/css/imports'
};

// LESS to CSS
// -> gulp less
gulp.task('less', function() {
    return gulp.src(configs.src)
        .pipe(less({
            paths: [ path.join(__dirname, configs.imports) ],
            compress: true
        }))
        .pipe(autoprefixer())
        .on('error', function (errorStr) {
            util.log(util.colors.red('!!! ERROR !!!\n'), errorStr);
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify('LESS compiled: <%= file.relative %>'));
});
