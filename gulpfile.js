var gulp = require('gulp');

// Default task
// -> gulp
gulp.task('default', ['less', 'js', 'jade', 'watch']);

// Watch task
// -> gulp watch
gulp.task('watch', function() {
    gulp.watch('development/assets/css/*.less', ['less']);
    gulp.watch('development/assets/js/*.js', ['js']);
    gulp.watch('development/*.jade', ['jade:watch']);
});

require('require-dir')('./gulp');
