let API_URL = '';

if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://toptrends.herokuapp.com/api/';
} else {
  API_URL = 'http://localhost:80/api/';
}

const BEGIN_DATE = new Date('1/25/2018');

export {
    API_URL,
    BEGIN_DATE,
};
