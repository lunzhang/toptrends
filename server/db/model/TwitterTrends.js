const mongoose = require('mongoose');

const TwitterTrends = new mongoose.Schema({
    date: String,
    trends: []
}, { minimize: false });

mongoose.model('TwitterTrends', TwitterTrends);
