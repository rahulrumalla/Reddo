var gulp = require('gulp');
var config  = require('../config').staticData;

gulp.task('staticData', function(){
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest))
});