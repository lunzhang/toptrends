var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var port = process.env.PORT || 80;
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV || 'dev';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.set('port', (port));
server.listen(port);
