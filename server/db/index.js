const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'dev';
let dbURI;

if(env === 'dev'){
  dbURI = 'mongodb://localhost/toptrends';
}else{
  dbURI = 'mongodb://lun:lun@ds143132.mlab.com:43132/toptrends';
}

mongoose.connect(dbURI, {
  useMongoClient: true
});

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app termination', function () {
        process.exit(0);
    });
});

require('./model/YoutubeTrends');
require('./model/RedditTrends');
require('./model/RedditPopular');
require('./model/YahooTrends');
require('./model/TwitterTrends');
