var gulp = require('gulp');
var del = require('del');
var config = require('../config')

gulp.task('clean', function (b) {
	del('./css/main.css');
	del('./build/js/main.jsx', b);
	del('./Index.html');
});