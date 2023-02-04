const { Router } = require('express');
const rescue = require('express-rescue');
const { validateJwt, postValidate, updatePostValidate } = require('../middlewares');

const postRouter = Router();

const { 
    insertPost,
     getPosts,
    getPostById,
    updatePost,
     } = require('../controller/post.controller');

postRouter.post(
    '/post',
    rescue(validateJwt),
    rescue(postValidate),
    rescue(insertPost),
);

postRouter.get(
    '/post',
    rescue(validateJwt),
    rescue(getPosts),
);

postRouter.get(
    '/post/:id',
    rescue(validateJwt),
    rescue(getPostById),
);

postRouter.put(
    '/post/:id',
    rescue(validateJwt),
    rescue(updatePostValidate),
    rescue(updatePost),
);

module.exports = postRouter;