var gulp   = require('gulp'),
    util   = require('gulp-util'),
    notify = require('gulp-notify'),
    newer  = require('gulp-newer'),
    jade   = require('gulp-jade');

var configs = {
    src: 'development/*.jade',
    dest: './'
};
configs.jadeOptions = {
    pretty: false
};
configs.newerOptions = {
    dest: configs.dest,
    ext: '.html'
}

// JADE to HTML
// -> gulp jade
gulp.task('jade', function () {
    return gulp.src(configs.src)
        .pipe(jade(configs.jadeOptions))
        .on('error', function (errorStr) {
            util.log(util.colors.red('!!! ERROR !!!\n'), errorStr);
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify('JADE compiled: <%= file.relative %>'));
});

gulp.task('jade:watch', function () {
    return gulp.src(configs.src)
        .pipe(newer(configs.newerOptions))
        .pipe(jade(configs.jadeOptions))
        .on('error', function (errorStr) {
            util.log(util.colors.red('!!! ERROR !!!\n'), errorStr);
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify('JADE compiled: <%= file.relative %>'));
});
