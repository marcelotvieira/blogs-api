const { Router } = require('express');
const rescue = require('express-rescue');

const {
    validateJwt, validateCategory,
    } = require('../middlewares/index');

const {
    insertCategory,
    getCategories,
    } = require('../controller/category.controller');

const categoryRoutes = Router();

categoryRoutes.post(
    '/categories',
    rescue(validateJwt),
    rescue(validateCategory),
    rescue(insertCategory),
);

categoryRoutes.get(
    '/categories',
    rescue(validateJwt),
    rescue(getCategories),
);

module.exports = categoryRoutes;