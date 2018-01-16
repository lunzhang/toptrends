const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

const url = 'https://www.youtube.com/feed/trending';

function youtubeTrends() {
    return new Promise((res, rej) => {
        axios.get(url, { params: { pbj: 1 }}).then((resp) => {
            const $ = cheerio.load(resp.data);
            const trending = [];

            $('.expanded-shelf-content-item .yt-uix-tile-link').each((i, elem) => {
                const trend = elem.attribs.title;
                const link = elem.attribs.href;

                trending.push({
                    trend,
                    link: 'https://www.youtube.com' + link
                })
            });

            res(trending);
        });
    });
};

module.exports = {
    youtubeTrends
};
