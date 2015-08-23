var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var react = require('gulp-react'); 

gulp.task('lint', function() {
  return gulp.src('./app/*.js')
    .pipe(react())
    .on('error', function(err) {
      console.error('JSX ERROR in ' + err.fileName);
      console.error(err.message);
      this.end();
    })
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});