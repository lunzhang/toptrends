const mongoose = require('mongoose');

const YoutubeTrends = new mongoose.Schema({
    date: String,
    trends: []
}, { minimize: false });

mongoose.model('YoutubeTrends', YoutubeTrends);
