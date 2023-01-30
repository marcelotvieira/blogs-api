const { Router } = require('express');
const rescue = require('express-rescue');
const { validateUserRequest, validateUserRegister, generateJwt } = require('../middlewares');
const { userLogin, userRegister } = require('../controller/user.controller');

const userRouter = Router();

userRouter.post(
    '/login',
    rescue(validateUserRequest),
    rescue(userLogin),
    rescue(generateJwt),
);

userRouter.post(
    '/user',
    rescue(validateUserRegister),
    rescue(userRegister),
    rescue(generateJwt),

);

module.exports = userRouter;
