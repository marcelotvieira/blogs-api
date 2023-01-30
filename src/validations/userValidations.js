const Joi = require('joi');

const userValidation = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(3).required(),
});

const userRegisterValidation = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().min(5).email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
});

module.exports = {
    userValidation,
    userRegisterValidation,
};