var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

// Static server
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task ('watch', function(){
    gulp.watch('/*.js');
    gulp.watch('/*.css');
    gulp.watch('/*.html')
});

gulp.task('default', ['bs', 'watch']);