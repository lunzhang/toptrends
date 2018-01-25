let API_URL = '';

if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://toptrends.herokuapp.com/api/';
} else {
  API_URL = 'http://localhost:80/api/';
}

export {
    API_URL
};
