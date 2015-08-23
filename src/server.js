var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3030));

app.use('/', express.static(path.join(__dirname, 'build')));
//app.use('/assets', express.static(path.join(__dirname, 'assets')));
//app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
app.get('/questions.json', function(req, res) {
  fs.readFile('app/questions.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});
*/

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});