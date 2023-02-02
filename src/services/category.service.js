const { Category } = require('../models');

// const ApiError = require('../error/ApiError');

const insert = (data) => {
    const newCategory = Category.create(data);
    return newCategory;
};

module.exports = {
    insert,
};