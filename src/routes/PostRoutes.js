const { Router } = require('express');
const rescue = require('express-rescue');
const { validateJwt, postValidate } = require('../middlewares');

const postRouter = Router();

const { insertPost, getPosts, getPostById } = require('../controller/post.controller');

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

module.exports = postRouter;