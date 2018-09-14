const gulp = require("gulp")
const util = require("gulp-util")
const notify = require("gulp-notify")
const newer = require("gulp-newer")
const jade = require("gulp-jade")

const configs = {
    src: "development/*.jade",
    dest: "./"
}

configs.jadeOptions = {
    pretty: false
}

configs.newerOptions = {
    dest: configs.dest,
    ext: ".html"
}

/**
 * Compile *.jade files into .html
 * @return {stream}
 */
const jadeTask = () => {
    return gulp
        .src(configs.src)
        .pipe(jade(configs.jadeOptions))
        .on("error", function(errorStr) {
            util.log(util.colors.red("!!! ERROR !!!\n"), errorStr)
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify("JADE compiled: <%= file.relative %>"))
}

/**
 * Watch for changes on *.jade files
 * @return {stream}
 */
const jadeWatch = () => {
    return gulp
        .src(configs.src)
        .pipe(newer(configs.newerOptions))
        .pipe(jade(configs.jadeOptions))
        .on("error", function(errorStr) {
            util.log(util.colors.red("!!! ERROR !!!\n"), errorStr)
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify("JADE compiled: <%= file.relative %>"))
}

// Jade task
// -> gulp jade
gulp.task("jade", jadeTask)
gulp.task("jadeWatch", jadeWatch)
