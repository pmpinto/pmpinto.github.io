const gulp = require("gulp")
const less = require("gulp-less")
const autoprefixer = require("gulp-autoprefixer")
const path = require("path")
const util = require("gulp-util")
const notify = require("gulp-notify")

const configs = {
    src: "development/assets/css/*.less",
    dest: "assets/css/",
    imports: "development/assets/css/imports"
}

/**
 * Compile *.less tasks into *.css
 * @return {stream}
 */
const lessTask = () => {
    return gulp
        .src("development/assets/css/*.less")
        .pipe(
            less({
                paths: [path.join(__dirname, configs.imports)],
                compress: true
            })
        )
        .pipe(autoprefixer())
        .on("error", function(errorStr) {
            util.log(util.colors.red("!!! ERROR !!!\n"), errorStr)
        })
        .pipe(gulp.dest(configs.dest))
        .pipe(notify("LESS compiled: <%= file.relative %>"))
}

// Less task
// -> gulp less
gulp.task("less", lessTask)
