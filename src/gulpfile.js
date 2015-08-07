var gulp = require('gulp'),
	concat = require('gulp-concat');

var config = {
	paths: {
		js: {
			src: ['app/components/*.js', 'app/views/*.js', 'app/app.js'],
			dest: "app/build/js"
		},
		css: {
			src: [],
			dest: "app/build/css"
		},
		img: {
			src: ["assets/img/*"],
			dest: "app/build/img"
		}
	}
}

gulp.task('styles', function(){
	return gulp.src('')
});

gulp.task('scripts', function(){
	return gulp.src(config.paths.js.src)
		.pipe(concat('main.jsx'))
		.pipe(gulp.dest(config.paths.js.dest));
});

gulp.task('images', function() {
  return gulp.src(config.paths.img.src)
		.pipe(gulp.dest(config.paths.img.dest));
});

gulp.task('default', ['styles', 'scripts', 'images']);