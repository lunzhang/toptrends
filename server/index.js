const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'dev';

// Allow fetch of api from dev env
if (env === 'dev') {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

// Allow connection to servers with self signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('./db/index');
require('./microservices/index');
const api = require('./api/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../public/index.html'));
});
app.use('/api', api);

app.set('port', (port));
server.listen(port);
