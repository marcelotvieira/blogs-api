const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const ApiError = require('../error/ApiError');
const { categoryValidation } = require('../validations/categoryValidations');
const { postValidation } = require('../validations/postValidations');
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

const validateCategory = (req, res, next) => {
    const { error } = categoryValidation.validate(req.body);
    if (error) return ApiError.badRequest(error.message);
    next();
};

const generateJwt = (req, res) => {
    const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };
    const token = jwt.sign(
        {
            data: { email: req.body.email, userId: req.user.id } },
            secret,
            jwtConfig,
        );
    const status = req.route.path === '/login' ? 200 : 201;
    res.status(status).json({ token });
};

const validateJwt = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(authorization, secret, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Expired or invalid token' });
        req.user = decoded;
        next();
    });
};

const postValidate = (req, res, next) => {
    const { error } = postValidation.validate(req.body);
    if (error) ApiError.badRequest('Some required fields are missing');
    next();
};

const errorHandler = async (error, _req, res, _next) => {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    if (error.name.includes('Unique')) {
        return res.status(409).json({ message: 'User already registered' });
    }
    res.status(500).json({ message: error });
};

module.exports = {
    validateUserRequest,
    validateCategory,
    errorHandler,
    validateUserRegister,
    generateJwt,
    validateJwt,
    postValidate,
};