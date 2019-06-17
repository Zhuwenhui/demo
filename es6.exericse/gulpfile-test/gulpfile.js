const sass = require("gulp-sass");
const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const plumber = require('gulp-plumber');
const glob = require("gulp-sass-glob");
const notify = require("gulp-notify");
const ssi = require("connect-ssi");
const htmlint = require('gulp-htmlhint');
const eslint = require('gulp-eslint');
const scsslint = require('gulp-scss-lint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const hash = require('gulp-hash-filename');
const prettify = require('gulp-prettify');
const del = require('del');

//参考地址
// https://qiita.com/hibikikudo/items/493fbfbbea183c94b38b
// https://qiita.com/koba08/items/6484504bd90ca6fd5b91
// https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch

//定义配置文件路径
const paths = {
    root: './',
    scss: './public/scss/**/*.scss',
    dest: './dist',
    scripts: './public/scripts/**/*.js',
    html: './**/*.html',
    map:'./dist/maps/**/*.map'
}

function serve(done) {
    browserSync.init({
        server: {
            baseDir: paths.root,
            index: 'index.html',
            middleware: [
                ssi({
                    baseDir: paths.rootDir,
                    notify: false, //通知
                    ext: ".html"
                })
            ],
            port: 3000,
            reloadOnRestart: true
        }
    })


    const browserReload = () => {
        browserSync.reload();
        done();
    };

    gulp.watch(paths.scss, gulp.series(sassTask))
    gulp.watch(paths.scripts, gulp).on('change', gulp.series(esLint, scripts,browserReload))
    done();
}

function sassTask(done) {
    return gulp.src(paths.scss, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
            cascade: false
        }))
        .pipe(gulp.dest(paths.dest), { sourcemaps: true })
        .pipe(browserSync.stream());
}





function scripts() {
    return gulp.src(paths.scripts, { sourcemaps: true })
        .pipe(
            babel({
                presets: ['@babel/env'],
            }))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        //生产模式才开启缓存
        // .pipe(hash({ "format": "{name}.{hash}.js" }))
        // 在他输出当前目录下进行添加一个Maps目录
        .pipe(gulp.dest(paths.dest, { sourcemaps: './maps' }));
}




function esLint() {
    return gulp
        .src([paths.scripts, '!./src/js/core/**/*.js'])
        .pipe(
            eslint({
                useEslintrc: true,
                fix: true,
            }),
        )
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function htmlLint() {
    return gulp.src(paths.html).
        pipe(htmlint()).
        pipe(htmlint.reporter())
}


// SASS Lint
function sassLint() {
    return gulp.src(paths.scss).pipe(
        scsslint({
            config: 'scss-lint.yml',
        }),
    );
}

// HTML整形
function html() {
    return gulp
      .src(paths.html, { since: gulp.lastRun(html) })
      .pipe(
        prettify({
          indent_char: ' ',
          indent_size: 2,
          unformatted: ['a', 'span', 'br'],
        }),
      )
      .pipe(gulp.dest(paths.dest));
  }


// マップファイル除去
function cleanMapFiles() {
    return del([paths.dest]);
}
  
exports.cleanMapFiles = gulp.series(cleanMapFiles);
exports.html = gulp.series(html);
exports.scripts = gulp.series(scripts);
exports.sasslint = gulp.series(sassLint);
exports.eslint = gulp.series(esLint);
exports.htmllint = gulp.series(htmlLint);
exports.default = gulp.series(sassTask, serve);

