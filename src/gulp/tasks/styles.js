var gulp = require('gulp');
var concat = require('gulp-concat');
var config  = require('../config').styles;

gulp.task('styles', function(){
	return gulp.src(config.src)
		.pipe(concat('main.css'))
		.pipe(gulp.dest(config.dest));
});