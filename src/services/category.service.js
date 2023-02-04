const { Category } = require('../models');

// const ApiError = require('../error/ApiError');

const insert = (data) => Category.create(data);

const getAll = async () => Category.findAll();

module.exports = {
    insert,
    getAll,
};