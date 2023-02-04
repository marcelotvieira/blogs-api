const { insert } = require('../services/post.service');

const insertPost = async (req, res) => {
    const newPost = await insert(req);
    res.status(201).json(newPost);
};

module.exports = {
    insertPost,
};