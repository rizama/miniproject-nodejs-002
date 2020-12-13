const express = require('express');
const router = express.Router();
const Joi = require('joi');

const schema = Joi.object({
  character: Joi.string().trim().required()
})

router.post('/', async (req, res, next) => {

  try {

    const { character } = await schema.validateAsync(req.body);

    let newCharacter = '';
    for (let index = character.length - 1; index >= 0; index--) {
      newCharacter += character[index];
    }

    res.status(200).json({
      result: newCharacter
    });

  } catch (error) {
    next(error);
  }

});

module.exports = router;
