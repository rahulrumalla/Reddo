var gulp = require('gulp');
var concat = require('gulp-concat');
var config  = require('../config').depScripts;

gulp.task('depScripts', function(){
	return gulp.src(config.src)
		.pipe(concat('deps.js'))
		.pipe(gulp.dest(config.dest));
});