const { Router } = require('express');
const rescue = require('express-rescue');

const {
    validateJwt, validateCategory,
    } = require('../middlewares/index');

const {
    insertCategory,
    } = require('../controller/category.controller');

const categoryRoutes = Router();

categoryRoutes.post(
    '/categories',
    rescue(validateJwt),
    rescue(validateCategory),
    rescue(insertCategory),
);

module.exports = categoryRoutes;