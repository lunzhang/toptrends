let API_URL = '';

if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://toptrends.herokuapp.com/api/';
} else {
  API_URL = 'http://localhost:80/api/';
}

const BEGIN_DATE = new Date('1/25/2018');

const CHART_TYPES = [{
    chartType: 'Youtube',
    grid: {x: 0, y: 0, w: 4, h: 4}
}];

export {
    API_URL,
    BEGIN_DATE,
    CHART_TYPES,
};
