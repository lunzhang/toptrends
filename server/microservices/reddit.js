const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

const popularUrl = 'http://reddit.com/r/popular';
const trendingUrl = 'https://www.reddit.com/r/trendingsubreddits/';

// fetches current popular posts
function redditPopular() {
    return new Promise((res, rej) => {
        axios.get(popularUrl).then((resp) => {
            const $ = cheerio.load(resp.data);
            const popular = [];

            $('#siteTable .thing .entry').each((i, elem) => {
                const title = $(elem).find('a.title')[0].children[0].data;
                const link = $(elem).find('.first a')[0].attribs.href;

                popular.push({
                    title,
                    link
                });
            });

            res(popular);
        });
    });
};

// fetches trending subreddits with the associated date
function redditTrending() {
    return new Promise((res, rej) => {
        axios.get(trendingUrl).then((resp) => {
            const $ = cheerio.load(resp.data);
            const popular = [];

            $('#siteTable .thing .entry').each((i, elem) => {
                const data = $(elem).find('a.title')[0].children[0].data.split(':');
                const date = data[0].split(' ').pop();
                const subreddits = data[1].split(',').map((subreddit) => subreddit.replace(/\s/g, ''));

                popular.push({
                    subreddits,
                    date,
                });
            });

            res(popular);
        });
    });
};

module.exports = {
    redditPopular,
    redditTrending
};
