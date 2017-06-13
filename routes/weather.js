const router = require('express').Router();
const weather = require('../services/weather.js');

router.get('/zip/:zip', weather.currentZip, (req, res) => {
  res.json(res.zipWeather);
});

router.get('/city/:city', weather.currentCity, (req, res) => {
  res.json(res.cityWeather);
});

router.get('/forecast', weather.forecast, (req, res) => {
  res.json(res.weatherForecast);
});

module.exports = router;