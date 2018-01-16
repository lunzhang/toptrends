const mongoose = require('mongoose');

const RedditTrends = new mongoose.Schema({
    date: String,
    trends: []
}, { minimize: false });

mongoose.model('RedditTrends', RedditTrends);
