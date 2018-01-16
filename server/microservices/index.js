const mongoose = require('mongoose');
const YoutubeTrends = mongoose.model('YoutubeTrends');
const RedditTrends = mongoose.model('RedditTrends');
const RedditPopular = mongoose.model('RedditPopular');
const YahooTrends = mongoose.model('YahooTrends');
const TwitterTrends = mongoose.model('TwitterTrends');

const { youtubeTrends } = require('./youtube.js');
const yahooTrends = require('./yahoo.js');
const { redditPopular, redditTrends } = require('./reddit.js');
const { twitterTrends } = require('./twitter.js');

function dailyUpdate() {
        const date = new Date().toISOString().split('T')[0];

        //  Youtube trending videos
        youtubeTrends().then((trends) => {
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
        redditTrends().then((trends) => {
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

        // Yahoo trending topics
        yahooTrends().then((trends) => {
            YahooTrends.findOneAndUpdate({
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

        // Twitter trending hashtags
        twitterTrends().then((trends) => {
            TwitterTrends.findOneAndUpdate({
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

        // daily timer
        setTimeout(dailyUpdate, 8.64e+7);
};

dailyUpdate();
