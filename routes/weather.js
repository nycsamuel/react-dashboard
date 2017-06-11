const router = require('express').Router();
const weather = require('../services/weather.js');

router.get('/:zip', weather.current, (req, res) => {
  res.json(res.currentWeather);
});

router.get('/forecast', weather.forecast, (req, res) => {
  res.json(res.weatherForecast);
});

module.exports = router;