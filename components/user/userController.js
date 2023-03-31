const userService = require('./userService');

const login = async (email, password) => {
    return await userService.login(email, password);
}

module.exports = { login }