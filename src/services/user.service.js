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
};

const getAll = async () => {
    const users = await User.findAll(
        { attributes: { exclude: ['password'] } },
        );
    return users;   
};

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