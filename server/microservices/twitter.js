const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

const url = 'https://twitter.com/i/trends?k=&pc=true&show_context=false&src=search-home';

function twitterTrending() {
    return new Promise((res, rej) => {
        axios.get(url).then((resp) => {
            const $ = cheerio.load(resp.data.module_html);
            const trending = [];

            $('.trend-items .trend-item').each((i, elem) => {
                const trend = elem.attribs['data-trend-name'];
                const link = elem.children[1].attribs.href;

                trending.push({
                    trend,
                    link : 'https://twitter.com/hashtag' + link
                })
            });

            res(trending);
        });
    });
};

module.exports = {
    twitterTrending
};
