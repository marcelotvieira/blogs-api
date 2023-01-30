const ApiError = require('../error/ApiError');
const userValidation = require('../validations/userValidations');

const validateUserRequest = (req, res, next) => {
    const { error } = userValidation.validate(req.body);
    if (error) return ApiError.badRequest('Some required fields are missing');
    next();
};

const errorHandler = async (error, _req, res, _next) => {
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  };

module.exports = {
    validateUserRequest,
    errorHandler,
};