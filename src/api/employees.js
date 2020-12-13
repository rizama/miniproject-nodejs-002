const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { Employee } = require("../../models");

const schema = Joi.object({
  name: Joi.string().trim().required(),
  phone_number: Joi.string().trim().required(),
  job_title: Joi.string().trim().required(),
})


router.get('/', async (req, res, next) => {
  try {
    const data = await Employee.findAll();

    if (data) {
      return res.status(200).json(data);
    }

    res.status(404).send("Not Found");

  } catch (error) {
    next(error);
  }
});


router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Employee.findOne({
      where: {
        id: id
      }
    });

    if (!data) return next();

    res.status(200).json(data);

  } catch (error) {
    next(error);
  }
});


router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);

    const employee = await Employee.create({
      name: value.name,
      phone_number: value.phone_number,
      job_title: value.job_title,
    })

    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Employee.findOne({
      where: {
        id: id
      }
    });

    if (!data) return next();

    const value = await schema.validateAsync(req.body);

    await Employee.update({
      name: value.name,
      phone_number: value.phone_number,
      job_title: value.job_title
    }, {
      where: {
        id: id
      }
    })

    res.status(200).json(value);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Employee.findOne({
      where: {
        id: id
      }
    });

    if (!data) return next();

    await Employee.destroy({
      where: {
        id: id
      }
    });

    res.status(204).json(data)
    
  } catch (error) {
    next(error);
  }
})
module.exports = router;
