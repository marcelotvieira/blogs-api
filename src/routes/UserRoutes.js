const { Router } = require('express');
const rescue = require('express-rescue');
const { validateUserRequest } = require('../middlewares');
const { userLogin } = require('../controller/user.controller');

const userRouter = Router();

userRouter.post(
    '/login',
    rescue(validateUserRequest),
    rescue(userLogin),
    );

module.exports = userRouter;
