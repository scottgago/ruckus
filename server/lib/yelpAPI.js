const Yelp = require('yelp');
const keys = require('../config/config.js');

const yelp = new Yelp({
  consumer_key: keys.yelp.consumer_key,
  consumer_secret: keys.yelp.consumer_secret,
  token: keys.yelp.token,
  token_secret: keys.yelp.token_secret,
});

module.exports = {
  yelpSearch: latLongString => {
    return new Promise((resolve, reject) => {
       yelp.search({term: 'bar', ll: latLongString})
        .then(data => {
          return resolve(data);
        })
          .catch(err => {
            return reject(err);
          });
    });
  }
};