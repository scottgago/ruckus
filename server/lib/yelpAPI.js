const Yelp = require('yelp');
const keys = require('./config/config.js');

const yelp = new Yelp({
  consumer_key: keys.yelp.consumer_key,
  consumer_secret: keys.yelp.consumer_secret,
  token: keys.yelp.token,
  token_secret: keys.yelp.token_secret,
});

