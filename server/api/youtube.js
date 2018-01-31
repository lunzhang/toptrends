const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');
const { parseChartDate } = require('./utils');

const youtubeTrends = (req, res) => {
    let { beginDate, endDate } = parseChartDate(req);

    YoutubeTrends.find({ date:  {$gte: beginDate, $lte: endDate}}, function(err, trends) {
        if(err) res.sendStatus('400');
        res.json(JSON.stringify(trends));
    });
};

module.exports = {
    youtubeTrends
};
