const fetch = require('node-fetch');

module.exports = {
  getQuote: function(req, res, next) {
    const quoteURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    fetch(quoteURL)
      .then(res => res.json())
      .then(data => {
        console.log('quote data', data);
        res.dailyQuote = data;
        next();
      })
      .catch(err => console.log('getQuote err', err));
  },
};