var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var configs = {
    port: 3010, // UI will run on 3011, make sure to increment by 10 on each project
    project: 'pedropinto.me',
    dir: './'
};

// Browsersync server
// -> gulp server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: configs.dir
        },
        port: configs.port,
        logLevel: 'debug',
        logPrefix: configs.project,
        // timestamps: true
    });

    // Live reload
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("assets/css/*.css").on('change', browserSync.reload);
    gulp.watch("assets/js/main.min.js").on('change', browserSync.reload);
});
