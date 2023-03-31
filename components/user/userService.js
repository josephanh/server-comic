

const login = async (email, password) => {
    const user = users.find(u => u.email == email);
    if(user && user.password === password) {
        return user;
    }
    return null;
}

module.exports = { login }

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