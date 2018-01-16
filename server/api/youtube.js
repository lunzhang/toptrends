const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');

function youtubeTrends(res, rej) {
    let date = req.body.date;
    if(!date) date = new Date().toISOString().split('T')[0];
    YoutubeTrends.find({ date }, function(err, trends) {
        if(err) res.sendStatus('400');
        res.json(JSON.stringify(trends));
    });
};

module.exports = {
    youtubeTrends
};
