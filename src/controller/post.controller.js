const { insert, getAll } = require('../services/post.service');

const insertPost = async (req, res) => {
    const newPost = await insert(req);
    res.status(201).json(newPost);
};

const getPosts = async (req, res) => {
    const posts = await getAll();
    res.status(200).json(posts);
};

module.exports = {
    insertPost,
    getPosts,
};