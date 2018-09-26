const gulp = require("gulp")
const util = require("gulp-util")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const browserify = require("gulp-browserify")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename")

const configs = {
    src: "development/assets/js/*.js",
    dest: "assets/js/",
    minName: "main.min.js"
}

configs.browserifyOptions = {
    debug: true
}

configs.babelOptions = {
    presets: ["es2015"]
}

/**
 * Bundle JS with Browserify
 * @return {stream}
 */
const jsTask = () => {
    return gulp
        .src(configs.src)
        .pipe(browserify(configs.browserifyOptions))
        .pipe(babel(configs.babelOptions))
        .pipe(uglify())
        .pipe(rename(configs.minName))
        .on("error", function(errorStr) {
            util.log(util.colors.red("!!! ERROR !!!\n"), errorStr)
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify("JS compiled: <%= file.relative %>"))
}

// Javascript task
// -> gulp js
gulp.task("js", jsTask)
