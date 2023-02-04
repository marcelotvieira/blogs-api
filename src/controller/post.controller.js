const { insert, getAll, getById, updateById } = require('../services/post.service');

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

const updatePost = async (req, res) => {
    const updated = await updateById(req);
    res.status(200).json(updated);
};

module.exports = {
    insertPost,
    getPosts,
    getPostById,
    updatePost,
};