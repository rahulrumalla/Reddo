var gulp = require('gulp');
var config  = require('../config');

gulp.task('watch', function(){
  gulp.watch(config.appScripts.src, ['appScripts']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.index.src, ['index']);
});

//gulp.watch('./build/**').on('change', refresh.changed);