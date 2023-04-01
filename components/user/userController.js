const userService = require('./userService');

const login = async (email, password) => {
    return await userService.login(email, password);
}
const register = async (email, password, name) => {
    try {
        return await userService.register(email, password, name);
    } catch (error) {
        console.log("error: ", error);
    }
}


module.exports = { login, register }