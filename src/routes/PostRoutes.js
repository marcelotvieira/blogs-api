const { Router } = require('express');
const rescue = require('express-rescue');
const { validateJwt, postValidate } = require('../middlewares');

const postRouter = Router();

const { insertPost } = require('../controller/post.controller');

postRouter.post(
    '/post',
    rescue(validateJwt),
    rescue(postValidate),
    rescue(insertPost),
);

module.exports = postRouter;