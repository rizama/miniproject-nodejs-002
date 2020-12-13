const express = require('express');

const reverse = require('./reverse');
const fibonacci = require('./fibonacci');
const combination = require('./combination');
const employees = require('./employees');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌏'
  });
});

router.use('/reverse', reverse);

router.use('/fibonacci', fibonacci);

router.use('/combination', combination);

router.use('/employees', employees);

module.exports = router;
