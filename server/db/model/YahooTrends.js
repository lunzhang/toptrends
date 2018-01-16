const mongoose = require('mongoose');

const YahooTrends = new mongoose.Schema({
    date: String,
    trends: []
}, { minimize: false });

mongoose.model('YahooTrends', YahooTrends);
