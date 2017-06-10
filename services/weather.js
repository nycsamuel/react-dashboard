const fetch = require('node-fetch');

function current(req, res, next) {
  let city = 'flushing';
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_KEY}`
  fetch(`${weatherURL}`)
    .then(res => res.json())
    .then(data => {
      console.log('current weather data', data);
      res.currentWeather = data;
      next();
    })
    .catch(error => console.log('current weather error', error));
}

function forecast(req, res, next) {
  // get params or query for days
}

module.exports = {
  current,
  forecast,
};