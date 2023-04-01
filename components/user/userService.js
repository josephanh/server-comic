const userModel = require('./userModel');
const bcryptjs = require('bcryptjs')
const login = async (email, password) => {
    try {
        let user = await userModel.findOne({email: email});
        if(user) {
            let check = bcryptjs.compareSync(password, user.password);
            return check ? user : false;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

const register = async (email, password, name) => {
    try {
        // kiểm tra tài khoản đã tồnt tại hay chưa,
        const user = await userModel.findOne({ email: email });
        if (!user) {
            var salt = bcryptjs.genSaltSync(10);
            var hash = bcryptjs.hashSync(password, salt);
            const newUser = { email, password: hash, name };
            console.log(newUser);
            await userModel.create(newUser);
            return true;
        }
    } catch (error) {
        console.log("error: ", error);
    }
    return false
}

module.exports = { login, register }
var users = [
    {
        _id: 1,
        email: 'anh@gmail.com',
        password: '12345@@@',
        name: 'Nguyễn Tuấn Anh'
    },
    {
        _id: 2,
        email: 'anh1@gmail.com',
        password: '12345@@@',
        name: 'Trần Thị Thảo'
    },
    {
        _id: 3,
        email: 'anh2@gmail.com',
        password: '12345@@@ ',
        name: 'Nguyễn Ngọc Nhi'
    }
]