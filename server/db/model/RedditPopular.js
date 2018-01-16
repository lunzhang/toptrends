const mongoose = require('mongoose');

const RedditPopular = new mongoose.Schema({
    date: String,
    popular: []
}, { minimize: false });

mongoose.model('RedditPopular', RedditPopular);
