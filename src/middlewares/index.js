const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const ApiError = require('../error/ApiError');
const { userValidation, userRegisterValidation } = require('../validations/userValidations');

const validateUserRequest = (req, res, next) => {
    const { error } = userValidation.validate(req.body);
    if (error) return ApiError.badRequest('Some required fields are missing');
    next();
};

const validateUserRegister = (req, res, next) => {
    const { error } = userRegisterValidation.validate(req.body);
    if (error) return ApiError.badRequest(error.message);
    next();
};

const generateJwt = (req, res) => {
    const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { email: req.body.email } }, secret, jwtConfig);
    res.status(201).json({ token });
};

const errorHandler = async (error, _req, res, _next) => {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    if (error.name.includes('Unique')) {
        return res.status(409).json({ message: 'User already registered' });
    }

    res.status(500).json({ message: error.name });
  };

module.exports = {
    validateUserRequest,
    errorHandler,
    validateUserRegister,
    generateJwt,
};