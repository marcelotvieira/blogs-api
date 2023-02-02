const Joi = require('joi');

const categoryValidation = Joi.object({
    name: Joi.string().min(3).required(),
});

module.exports = {
    categoryValidation,
};