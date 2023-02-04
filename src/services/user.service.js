const ApiError = require('../error/ApiError');

const { User } = require('../models');

const login = async (data) => {
    const user = await User.findOne({ 
        where: { email: data.email, password: data.password },
    });

    if (!user) ApiError.badRequest('Invalid fields');
    return user.dataValues;
};

const register = async (user) => {
    const signup = await User.create(user);
    if (!signup.dataValues) ApiError.badRequest('erro no registro');    
    return signup.dataValues;
};

const getAll = async () => User
    .findAll({ attributes: { exclude: ['password'] } });

const getUser = async (id) => {
    const user = await User.findOne({
        where: { id: Number(id) },
        attributes: { exclude: ['password'] },
    });
    if (!user) return ApiError.notFound('User does not exist');
    return user;
};

module.exports = {
    login,
    register,
    getAll,
    getUser,
};