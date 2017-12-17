var basePaths = { 
    base: './',
    node: './node_modules/',
    sass: './_sass/',
    js: './js/'
}


var gulp = require('gulp');
var del = require('del');



gulp.task('clean-libs', function() {
    return(del[basePaths.sass + 'libs/**/*']);
});




gulp.task('copy-libs', ['clean-libs'], function() {

//Copy all bootstrap SCSS files and javascript files
var stream = gulp.src(basePaths.node + 'bootstrap/scss/**/*.scss')
  .pipe(gulp.dest(basePaths.sass + 'libs/bootstrap4'));
gulp.src([
    basePaths.node + 'bootstrap/dist/js/bootstrap.min.js',
    basePaths.node + 'bootstrap/dist/js/bootstrap.min.js.map'
]).pipe(gulp.dest(basePaths.js));


//Copy Scrollpos - Styler
gulp.src(basePaths.node + 'scrollpos-styler/scrollPosStyler.js')
    .pipe(gulp.dest(basePaths.js));

gulp.src(basePaths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eot,svg}')
    .pipe(gulp.dest(basePaths.base + 'fonts'));

gulp.src(basePaths.node + 'font-awesome/scss/*.scss')
  .pipe(gulp.dest(basePaths.sass + 'libs/font-awesome'));


//Copy all SCSS file from requried node modules
return stream;

});