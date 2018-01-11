const googleTrends = require('./googleTrends.js');
const yahooTrends = require('./yahooTrends.js');

yahooTrends().then((trends) => console.log(trends));
