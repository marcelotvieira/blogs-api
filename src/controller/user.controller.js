const jwt = require('jsonwebtoken');
const { login } = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
    const signin = await login(req.body);
    const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { email: signin.email } }, secret, jwtConfig);
    console.log(token);
    res.status(200).json({ token });
};

module.exports = {
    userLogin,
};