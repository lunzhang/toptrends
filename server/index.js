const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'dev';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('./db/db');
require('./microservices/index');
require('./api/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.set('port', (port));
server.listen(port);
