var gulp       = require('gulp'),
    util       = require('gulp-util'),
    notify     = require('gulp-notify'),
    babel      = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename');

var configs = {
    src: 'development/assets/js/main.js',
    dest: 'assets/js/',
    minName: 'main.min.js'
};
configs.browserifyOptions = {
    debug : true
};
configs.babelOptions = {
    presets: ['es2015']
};

// Bundle JS with browserify
// -> gulp js
gulp.task('js', function() {
    return gulp.src(configs.src)
        .pipe(browserify(configs.browserifyOptions))
        .pipe(babel(configs.babelOptions))
        .pipe(uglify())
        .pipe(rename(configs.minName))
        .on('error', function (errorStr) {
            util.log(util.colors.red('!!! ERROR !!!\n'), errorStr);
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify('JS compiled: <%= file.relative %>'));
});
