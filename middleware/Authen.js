var jwt = require('jsonwebtoken');
console.log('Bắt dầu');
const authenWeb = (req, res, next) => {
    const { session } = req;
    const url = req.originalUrl.toLowerCase();
    if (!session) {
        if (url.includes('login')) {
            
            next();
        } else {
            res.redirect('/login');
        }
    } else {
        const { token } = session;
        if (!token) {
            if (url.includes('login')) {
                
                next();
            } else {
                res.redirect('/login');
            }
        } else {
            jwt.verify(token, 'secret', function (error, decoded) {
                if (error) {
                    if (url.includes('login')) {
                        
                        next();
                    } else {
                        res.redirect('/login');
                    }
                } else {
                    if (url.includes('login')) {
                        res.redirect('/');
                    } else {
                        next();
                    }
                }
            })
        }
    }
}

module.exports = { authenWeb }