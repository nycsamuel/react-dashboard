const router = require('express').Router();
const setting = require('../services/setting.js');

router.get('/', setting.getSettings, (req, res) => {
  res.json(res.settings);
});

router.post('/', setting.saveSettings, (req, res) => {
  console.log('after saveSettings function');
  res.json(res.settings);
});

module.exports = router;