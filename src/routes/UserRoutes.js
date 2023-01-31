const { Router } = require('express');
const rescue = require('express-rescue');
const {
    validateUserRequest,
    validateUserRegister,
    generateJwt,
    validateJwt,
    } = require('../middlewares');

const { userLogin, userRegister, getUsers } = require('../controller/user.controller');

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

userRouter.get(
    '/user',
    rescue(validateJwt),
    rescue(getUsers),
    );

module.exports = userRouter;
