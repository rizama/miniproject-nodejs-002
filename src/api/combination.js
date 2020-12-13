const express = require('express');
const router = express.Router();
const Joi = require('joi');

const schema = Joi.object({
  n: Joi.number().min(0).required(),
  r: Joi.number().min(0).required()
})

router.post('/', async (req, res, next) => {

  try {

    const { n, r } = await schema.validateAsync(req.body);

    res.status(200).json({
      result: factorial(n) / (factorial(r) * factorial(n - r))
    });

  } catch (error) {
    next(error);
  }

});

const factorial = (number) => {
  let result = number;
  if (number === 0 || number === 1) {
    return 1;
  }

  while (number > 1) {
    number--;
    result *= number;
  }

  return result;
}

module.exports = router;
