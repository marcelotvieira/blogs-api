const { login, register, getAll, getUser } = require('../services/user.service');

const userLogin = async (req, _res, next) => {
    const user = await login(req.body);
    req.user = user;
    next();
};

const userRegister = async (req, _res, next) => {
    const user = await register(req.body);
    req.user = user;
    next();
};

const getUsers = async (req, res) => {
    const users = await getAll();
    res.status(200).json(users);
};

const getUserById = async ({ params }, res) => {
    const user = await getUser(params.id);
    res.status(200).json(user);
};

module.exports = {
    userLogin,
    userRegister,
    getUsers,
    getUserById,
};