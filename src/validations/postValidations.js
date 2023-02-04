const Joi = require('joi');

const postValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
});

module.exports = {
    postValidation,
};