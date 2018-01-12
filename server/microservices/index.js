const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');

const { youtubeTrending } = require('./youtube.js');
const yahooTrending = require('./yahoo.js');
const { redditPopular, redditTrending } = require('./reddit.js');
const { twitterTrending } = require('./twitter.js');

// yahooTrends().then((trending) => console.log(trending));
// redditPopular().then((popular) => console.log(popular));
// redditTrending().then((trending) => console.log(trending));
// twitterTrending().then((trending) => console.log(trending));
// youtubeTrending().then((trending) => console.log(trending));

function dailyUpdate() {
        youtubeTrending().then((trending) => {
            const today = new Date().toISOString().split('T')[0];

            YoutubeTrends.findOneAndUpdate({
                date: today
            }, {
                date: today,
                trends: trending
            }, {
                upsert: true
            }, function(err, obj) {
                if (err) console.log(err);
            });
        });

        setTimeout(dailyUpdate, 8.64e+7);
};

dailyUpdate();
