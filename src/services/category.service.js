const { Category } = require('../models');

// const ApiError = require('../error/ApiError');

const insert = (data) => {
    const newCategory = Category.create(data);
    return newCategory;
};

const getAll = async () => {
    const rows = await Category.findAll();
    return rows;
};

module.exports = {
    insert,
    getAll,
};