const { insert, getAll, getById } = require('../services/post.service');

const insertPost = async (req, res) => {
    const newPost = await insert(req);
    res.status(201).json(newPost);
};

const getPosts = async (req, res) => {
    const posts = await getAll();
    res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const post = await getById(req.params.id);
    res.status(200).json(post);
};

module.exports = {
    insertPost,
    getPosts,
    getPostById,
};