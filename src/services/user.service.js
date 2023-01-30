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

module.exports = {
    login,
    register,
};