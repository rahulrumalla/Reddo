var gulp = require('gulp');

gulp.task('build', ['clean', 'styles', 'icons', 'depScripts', 'appScripts', 'images', 'index']);

gulp.task('default', ['build', 'watch', 'server']);