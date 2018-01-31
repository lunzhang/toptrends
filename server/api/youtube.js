const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');

const youtubeTrends = (req, res) => {
    let { date } = req.query;

    if(!date) date = new Date().toLocaleDateString();

    YoutubeTrends.find({ date }, (err, trends) => {
        if(err) res.sendStatus('400');
        res.json(JSON.stringify(trends));
    });
};

module.exports = {
    youtubeTrends,
};
