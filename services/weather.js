const fetch = require('node-fetch');

function currentZip(req, res, next) {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${req.params.zip},us&APPID=${process.env.WEATHER_KEY}`
  fetch(`${weatherURL}`)
    .then(res => res.json())
    .then(data => {
      console.log('current weather data', data);
      res.zipWeather = data;
      next();
    })
    .catch(error => console.log('current weather error', error));
}

function currentCity(req, res, next) {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},us&APPID=${process.env.WEATHER_KEY}`
  fetch(`${weatherURL}`)
    .then(res => res.json())
    .then(data => {
      console.log('current weather data', data);
      res.cityWeather = data;
      next();
    })
    .catch(error => console.log('current weather error', error));
}

function forecast(req, res, next) {
  // get params or query for days
}

module.exports = {
  currentZip,
  currentCity,
  forecast,
};