

var gulp = require('gulp');
var concat = require('gulp-concat');
var config  = require('../config').appScripts;
var react = require('gulp-react'); 

gulp.task('appScripts', function(){
	return gulp.src(config.src)
		.pipe(react())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(config.dest));
});