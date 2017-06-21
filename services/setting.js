const db = require('../db/db.js');

// const pgp        = require('pg-promise');
// const connection = {
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DB,
//   user: process.env.PG_USER,
//   password: process.env.PG_PW,
// };

// const db = pgp(connection);

function getSettings(req, res, next) {
  db.any('SELECT * FROM setting')
    .then(data => {
      res.settings;
      next();
    })
    .catch(err => console.log('psql error', err));
}

module.exports = {
  getSettings,
};