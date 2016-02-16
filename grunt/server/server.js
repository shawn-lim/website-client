var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/app.full.min.css', express.static(path.join(__dirname, 'app.full.min.css')));
app.use('/app.full.min.js', express.static(path.join(__dirname, 'app.full.min.js')));

app.use('*', function(req,res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

var server = http.createServer(app);
server.listen(3001, 'localhost');
