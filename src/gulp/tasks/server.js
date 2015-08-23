var path = require('path');
var express = require('express');
var gulp = require('gulp');
var app = express();

gulp.task('server', function() {
    app.set('port', (process.env.PORT || 3030));

    var buildDir = path.join(__dirname, '../../build');

    console.log('BuildDirectory: ' + buildDir);

    app.use('/', express.static(buildDir));

    app.listen(app.get('port'), function() {
        console.log('Server started: http://localhost:' + app.get('port') + '/');
    });
});