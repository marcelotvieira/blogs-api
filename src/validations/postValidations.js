const Joi = require('joi');

const postValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
});

const updatePostValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

module.exports = {
    postValidation,
    updatePostValidation,
};