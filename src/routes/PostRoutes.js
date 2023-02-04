const { Router } = require('express');
const rescue = require('express-rescue');
const { validateJwt, postValidate } = require('../middlewares');

const postRouter = Router();

const { insertPost, getPosts } = require('../controller/post.controller');

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

module.exports = postRouter;