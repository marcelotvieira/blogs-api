const { Router } = require('express');
const rescue = require('express-rescue');

const userRouter = Router();

const {
    validateUserRequest,
    validateUserRegister,
    generateJwt,
    validateJwt,
} = require('../middlewares');

const { userLogin,
    userRegister,
    getUsers,
    getUserById,
 } = require('../controller/user.controller');

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

userRouter.get(
    '/user/:id',
    rescue(validateJwt),
    rescue(getUserById),
);

module.exports = userRouter;
