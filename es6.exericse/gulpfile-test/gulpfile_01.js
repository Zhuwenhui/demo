const gulp = require('gulp');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const gulpAutoPrefix = require('gulp-autoprefixer')
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const notify = require("gulp-notify");
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename')
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();


// const rename = require('gulp-rename');
//解决缓存问题
const hash = require('gulp-hash-filename');
//uglify static server gulp-livereload gulp-concat gulp-minify

//定义配置文件
var Config = {
    // 脚本目录
    scriptPath: './public/scripts/**/*.js',
    // 样式目录
    stylesPath: './public/styles/**/*.css',
    // SCSS 脚本
    'scss':'./public/scss/**/*.scss',
    // LESS 脚本 
    'Less':'./public/less/**/*.less',
    // 图片目录
    iamgesPath: './public/',
    //输出目录
    dist: './dist'
}


gulp.task('serve', function () {
    //服务器初始化
    browserSync.init({
        server:'./'
    })  
    
    //配置观察文件
    gulp.watch(Config.scss, gulp.series('scss'));
})


//https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
//styles
// [15:27:44] The following tasks did not complete: styles
// [15:27:44] Did you forget to signal async completion?
gulp.task('styles', function (done) {
    console.log('Starting style task 👋')
    // 也可以通过数组的方式引入多个不同的路径下的CSS文件
    return gulp.src(Config.stylesPath)
        .pipe(concat('vendor.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(hash({ "format": "{name}.{hash}{ext}" }))
        // .pipe(sourcemaps.init()) 
        .pipe(postcss([ autoprefixer() ]))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(Config.dist))
        .pipe(notify('压缩成功 👋'))
        .pipe(livereload())
})

//gulp webpack babel

//Scripts
gulp.task('scripts', function (done) {
    return gulp.src(Config.scriptPath)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(Config.dist))
        // 当文件进行修改时候 自动刷新
        .pipe(livereload())
})


gulp.task('scss', function (done) {
    console.log('调用了')
    return gulp.src(Config.scss)
        .pipe(sass({
            errLogToConsole:true,
            outputStyle: 'compressed'
        }))

        .pipe(plumber({ errorHandler: function(err) {
            notify.onError({
                title: "Gulp error in " + err.plugin,
                message:  err.toString()
            })(err);
            // play a sound once
            gutil.beep();
        }}))

        // .pipe(postcss([ autoprefixer() ]))

        .on('error',gutil.log)
        .pipe(gulp.dest('./public/styles/'));
});

//Images
gulp.task('images', function (done) {
    console.log('Images Task done 🐳')
    done();
})


//html
gulp.task('minify', () => {
    return gulp.src('./**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./dist/'));
});


// gulp v3.0 https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function
// gulp.task('watch', function() {
//     gulp.watch('app/css/*.css', ['styles']);
//     gulp.watch('app/js/*.js', ['scripts']);
//     gulp.watch('app/img/*', ['images']);
//   });

// gulp v4.0
gulp.task('watch', function (done) {
    // 引入服务文件
    require('./server.js');
    //开启监听模式 当有文件进行修改 那么立即重新刷新
    livereload.listen();
    //监听脚本是否修改
    gulp.watch(Config.scriptPath, gulp.series('scripts'));
    //监听样式文件是否被修改
    // gulp.watch(Config.stylesPath, gulp.series('styles'));
    gulp.watch(Config.scss, gulp.series('scss'));
})



gulp.task('assemble', function() {
    return gulp.src('./public/scripts/**/*.js')
      .pipe(uglify())
      .pipe(concat('vendor.js'))
      .pipe(hash({ "format": "{name}.{hash}.js" }))
      .pipe(gulp.dest('./dist'))
});



gulp.task('csstyle', function () {
    return gulp.src(Config.scss)
    .pipe(sass({
        errorLogToConsole:true,
        outputStyle:'compressed',
    })).on('error',console.error.bind(console))
    .pipe(gulpAutoPrefix({
        browsers:['last 2 versions'],
        cascade: false
    }))
        .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(Config.dist))
})


//进行转换
gulp.task('babel',function(){
    return gulp.src(Config.scriptPath)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest(Config.dist))
})


exports.default = gulp.series('scss','styles');