const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');
const RedditTrends = mongoose.model('RedditTrends');
const RedditPopular = mongoose.model('RedditPopular');

const { youtubeTrending } = require('./youtube.js');
const yahooTrending = require('./yahoo.js');
const { redditPopular, redditTrending } = require('./reddit.js');
const { twitterTrending } = require('./twitter.js');

// yahooTrends().then((trending) => console.log(trending));
// redditTrending().then((trending) => console.log(trending));
// twitterTrending().then((trending) => console.log(trending));

function dailyUpdate() {
        const date = new Date().toISOString().split('T')[0];

        //  Youtube trending videos
        youtubeTrending().then((trends) => {
            YoutubeTrends.findOneAndUpdate({
                date
            }, {
                date,
                trends
            }, {
                upsert: true
            }, function(err, obj) {
                if (err) console.log(err);
            });
        });

        // Reddit popular posts
        redditPopular().then((popular) => {
            RedditPopular.findOneAndUpdate({
                date
            }, {
                date,
                popular
            }, {
                upsert: true
            }, function(err, obj) {
                if (err) console.log(err);
            });
        });

        // Reddit trending daily subreddits
        redditTrending().then((trends) => {
            RedditTrends.findOneAndUpdate({
                date
            }, {
                date,
                trends: trends[0]
            }, {
                upsert: true
            }, function(err, obj) {
                if (err) console.log(err);
            });
        });

        // daily timer
        setTimeout(dailyUpdate, 8.64e+7);
};

dailyUpdate();
