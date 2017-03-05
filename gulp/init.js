var gulp       = require('gulp'),
    fileSystem = require('file-system');

// Init new project folder structure
// -> sudo gulp init
gulp.task('init', function() {

    // Create folders
    console.log('[Init] Creating folders...');
    var folders = [
        'development/assets',
        'development/assets/css',
        'development/assets/css/imports',
        'development/assets/img',
        'development/assets/js',
        'assets',
        'assets/css',
        'assets/img',
        'assets/js'
    ];

    for (var folder of folders) {
        fileSystem.mkdir(folder);
        console.log('[Init] Created:', './' + folder);
    }

    // Create files
    console.log('[Init] Creating files...');

    var files = [
        { name: 'development/assets/css/imports/variables.less', contents: '// COLORS\n@color: #654321;' },
        { name: 'development/assets/css/styles.less', contents: '@import \'imports/variables\';\n\nh1 {\n    color: @color;\n}' },
        { name: 'development/assets/js/main.js', contents: 'var utils = require(\'./utils\');\n\nutils.log(\'Testing 123...\');' },
        { name: 'development/assets/js/utils.js', contents: 'module.exports = {\n    log: (str) => {\n        console.log(\'-->\', str);\n    }\n}' },
        { name: 'development/index.jade', contents: 'html_boilerplate // Press tab' },
        { name: 'favicon.ico', contents: '' },
        { name: 'apple-touch-icon.png', contents: '' }
    ];

    for (var file of files) {
        fileSystem.writeFile(file.name, file.contents, (err) => {
            if (err) throw err;
        });
        console.log('[Init] Created:', './' + file.name);
    }

    console.log('[Init] Done!');
});
