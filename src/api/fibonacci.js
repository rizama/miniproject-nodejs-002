const express = require('express');
const router = express.Router();
const Joi = require('joi');

const schema = Joi.object({
  n: Joi.number().required()
})

router.post('/', (req, res, next) => {

  if (req.body.n === 0 || req.body.n === 1) {
    res.status(200).json({
      result: `${req.body.n}`
    });
  }
  next();

}, async (req, res, next) => {

  try {
    const { n } = await schema.validateAsync(req.body);

    let fibonacci = [0, 1];

    for (let i = 1; i < n; i++) {
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
    }

    fibonacci.pop();

    res.status(200).json({
      result: fibonacci.join(" ")
    });

  } catch (error) {
    next(error);
  }

});

module.exports = router;
