const { insert, getAll } = require('../services/category.service');

const insertCategory = async (req, res) => {
    const newCategory = await insert(req.body);
    res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
    const categories = await getAll();
    res.status(200).json(categories);
};

module.exports = {
    insertCategory,
    getCategories,
};