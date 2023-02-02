const { insert } = require('../services/category.service');

const insertCategory = async (req, res) => {
    const newCategory = await insert(req.body);
    res.status(201).json(newCategory);
};

module.exports = {
    insertCategory,
};