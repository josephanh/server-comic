var express = require('express');
var router = express.Router();
const userController = require('../components/user/userController');
var jwt = require('jsonwebtoken');
const auth = require('../middleware/Authen');

/* GET home page. */
router.get('/', [auth.authenWeb], function (req, res, next) {
  // hiển thị trang chủ
  res.render('index', { title: 'Nguyễn Tuấn Anh' })
})

router.get('/login', [auth.authenWeb] ,function (req, res, next) {
  // hiển thị trang chủ
  res.render('user/login', { title: 'Nguyễn Tuấn Anh' })
})

router.post('/login', [auth.authenWeb] ,async function (req, res, next) {
  const { email, password } = req.body;
  const result = await userController.login(email, password);
  if (result != null) {
    const token = jwt.sign({ _id: result._id }, 'secret');
    req.session.token = token;
    return res.redirect('/cpanel/manga/data-table');
  } else {
    return res.redirect('/login');
  }
})

module.exports = router;
