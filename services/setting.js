const db = require('../db/db.js');

function getSettings(req, res, next) {
  db.any('SELECT * FROM setting')
    .then(data => {
      console.log('*** setting data', data);
      res.settings = data;
      next();
    })
    .catch(err => console.log('psql error', err));
}

function saveSettings(req, res, next) {
  console.log('*** saving setting', req.body);
  db.none(`UPDATE setting SET location = $1, donotshowagain = $2, showampm = $3 WHERE userid=1`, [
      req.body.location, req.body.donotshowagain, req.body.showampm
    ])
    .then(() => next())
    .catch(err => next(err));
}

module.exports = {
  getSettings,
  saveSettings,
};