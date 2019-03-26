var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

// Static server
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch', function() {
    gulp.watch('**/*.css').on('change', browserSync.reload);
    gulp.watch('**/*.html').on('change', browserSync.reload);
    gulp.watch('**/*.js').on('change', browserSync.reload);
});
gulp.task('default', ['bs', 'watch']);