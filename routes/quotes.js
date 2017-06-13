const router = require('express').Router();
const quotes = require('../services/quotes.js');

router.get('/', quotes.getQuote, (req, res) => {
  res.json(res.dailyQuote);
});

module.exports = router;