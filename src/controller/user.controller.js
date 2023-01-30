const { login, register } = require('../services/user.service');

const userLogin = async (req, _res, next) => {
    await login(req.body);
    next();
};

const userRegister = async (req, _res, next) => {
    await register(req.body);
    next();
};

module.exports = {
    userLogin,
    userRegister,
};