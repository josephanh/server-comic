var express = require('express');
var router = express.Router();

// http://localhost:3000/api/news/chart
router.get('/chart', async function (req, res, next) {
    // hiển thị trang bảng dữ liệu
    res.render('manga/charts')
})

module.exports = router;