//插件
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');  //压缩js
var rename = require('gulp-rename');  //重命名
var cleanCss = require('gulp-clean-css');//压缩CSS
var htmlMin = require('gulp-htmlmin'); //压缩html
var imagemin = require('gulp-imagemin');//压缩图片
var pngquant = require('imagemin-pngquant');//深度压缩图片
var concat = require("gulp-concat");//文件合并
var autoprefixer = require("gulp-autoprefixer"); //根据设置浏览器版本自动处理浏览器前缀
var argv = require('yargs').argv;

//其他变量
var app = 'project/' + argv.app;

//gulp tasks
gulp.task('serve', function (done) {
    var browserSyncConfig = {
        server: {
            baseDir: app + '/dist',// 启动服务的目录 默认 index.html
            index: 'index.html' // 自定义启动文件名
        },
        open: 'external' //决定Browsersync启动时自动打开的网址 external 表示 可外部打开 url, 可以在同一 wifi 下不同终端测试
        // injectChanges: true
    };
    browserSync.init(browserSyncConfig);  // 启动Browsersync服务
    done();
});

gulp.task("htmlMin", function () {
    var options = {
        removeComments: true,                // 清除HTML注释
        collapseWhitespace: true,            // 压缩HTML
        collapseBooleanAttributes: true,     // 省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,         // 删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,    // 删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true, //压缩页面CSS，
        // ignoreCustomFragments: [
        //     /<%[\s\S]*?%>/,
        //     /<\?[\s\S]*?\?>/
        //     ///<head[\s\S]*?<\/head>/
        // ],
        trimCustomFragments: true,
        ignoreCustomComments: [/^!/, /^br/]
    };
    return gulp.src(app + "/src/*.html")
        .pipe(htmlMin(options))
        .pipe(gulp.dest(app + '/dist'));
});

gulp.task('dealCss', function () {
    return gulp.src(app + '/src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        // .pipe(cleanCss({
        //     level: 2,
        //     debug: true
        // }, (details) => { console.log(`css optimize: ${details.stats.originalSize} ——> ${details.stats.minifiedSize}`)}))
        .pipe(rename({
            basename: 'main'
        }))
        .pipe(gulp.dest(app + '/dist/stylesheets'))
        .pipe(browserSync.stream());
});

gulp.task("watch", function () {
    gulp.watch(app + '/src/*.html').on("change",gulp.series('htmlMin'));
    gulp.watch(app + '/src/scss/*.scss').on("change",gulp.series('dealCss'));
    gulp.watch(app + '/dist/*.html').on("change", browserSync.reload);
    // gulp.watch(app + '/dist/css/*.css').on("change", browserSync.reload);

});

gulp.task('start', gulp.series(gulp.parallel('dealCss', 'htmlMin'), 'serve', 'watch'), function (done) {
    console.log("default task done!");
});


//download-page  tasks
gulp.task('serve2', function (done) {
    var browserSyncConfig = {
        server: {
            baseDir: app + '/src',// 启动服务的目录 默认 index.html
            index: 'index.html' // 自定义启动文件名
        },
        open: 'external' //决定Browsersync启动时自动打开的网址 external 表示 可外部打开 url, 可以在同一 wifi 下不同终端测试
        // injectChanges: true
    };
    browserSync.init(browserSyncConfig);  // 启动Browsersync服务
    done();
});

gulp.task("watch2", function () {
    gulp.watch(app + '/src/*.html').on("change", browserSync.reload);
});

gulp.task('start2', gulp.series('serve2', 'watch2'), function (done) {
    console.log("default task done!");
});

// ************* test ************
// gulp.task('task1', function (done) {
//     console.log("****** task1 异步执行之前 ******");
//     setTimeout(function () {
//         console.log("task1 异步执行之后");
//         done();
//     },1500);
// });
//
// gulp.task('task2',gulp.series('task1', function (done) {
//     console.log('***** this is task2 *****');
//     done();
// }));
