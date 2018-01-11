const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

const url = 'https://www.yahoo.com/';

// fetches trending now from yahoo
module.exports =  function yahooTrending() {
    return new Promise((res, rej) => {
        axios.get(url).then((resp) => {
            const $ = cheerio.load(resp.data);
            const trending = [];

            $('.trending-list .trending-item a').each((i, elem) => {
                trending.push({
                    trend: elem.attribs.title,
                    link: elem.attribs.href
                });
            });

            res(trending);
        });
    });
};
