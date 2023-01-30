const Joi = require('joi');

const userValidation = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(3).required(),
});

module.exports = userValidation;