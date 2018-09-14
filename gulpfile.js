const gulp = require("gulp")
const HubRegistry = require("gulp-hub")

const hub = new HubRegistry(["./gulp/*.js"])
gulp.registry(hub)

/**
 * Watch for changes on asset files and recompile them
 */
const watch = () => {
    gulp.watch("development/assets/css/*.less", gulp.series("less"))
    gulp.watch("development/assets/js/*.js", gulp.series("js"))
    gulp.watch("development/*.jade", gulp.series("jadeWatch"))
}

// Watch task
// -> gulp watch
gulp.task("watch", watch)

// Default task
// -> gulp
gulp.task("default", gulp.series("less", "js", "jade", "watch"))
