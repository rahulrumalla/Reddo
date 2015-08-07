var gulp = require('gulp'),
	concat = require('gulp-concat');

var config = {
	paths: {
		deps: {
			src: [
					'node_modules/react/dist/react.js',
					'node_modules/react/dist/JSXTransformer.js',
					'node_modules/jquery/dist/jquery.js',
				],
			dest: "app/build/js"
		},
		js: {
			src: [
					'app/components/*.js', 
					'app/views/*.js', 
					'app/*.js'
				],
			dest: "app/build/js"
		},
		css: {
			src: [
					"node_modules/bootstrap/dist/css/bootstrap.min.css",
					"assets/css/site.css"
				],
			dest: "app/build/css"
		},
		img: {
			src: ["assets/img/*"],
			dest: "app/build/img"
		}
	}
}

gulp.task('styles', function(){
	return gulp.src(config.paths.css.src)
		.pipe(concat('main.css'))
		.pipe(gulp.dest(config.paths.css.dest));
});

gulp.task('depsScripts', function(){
	return gulp.src(config.paths.deps.src)
		.pipe(concat('deps.js'))
		.pipe(gulp.dest(config.paths.deps.dest));
});

gulp.task('appScripts', function(){
	return gulp.src(config.paths.js.src)
		.pipe(concat('main.jsx'))
		.pipe(gulp.dest(config.paths.js.dest));
});

gulp.task('images', function() {
  return gulp.src(config.paths.img.src)
		.pipe(gulp.dest(config.paths.img.dest));
});

gulp.task('default', ['styles', 'depsScripts', 'appScripts', 'images']);