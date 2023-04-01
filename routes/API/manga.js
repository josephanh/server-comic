var express = require('express');
var router = express.Router();
const mangaController = require('../../components/manga/mangaController');
const { authenApp } = require('../../middleware/Authen');

// http://localhost:3000/api/news/chart
router.get('/chart', async function (req, res, next) {
    // hiển thị trang bảng dữ liệu
    res.render('manga/charts')
})


router.get('/', [authenApp], async (req, res, next) => {
    try {
        const mangas = await mangaController.getAllNews();
        res.status(200).json({ mangas });
    } catch (error) {
        res.status(400).json({});
    }
})

router.get('/web-sever-no-token', async (req, res, next) => {
    try {
        const mangas = await mangaController.getAllNews();
        res.status(200).json({ mangas });
    } catch (error) {
        res.status(400).json({});
    }
})

// lấy sản phẩm theo ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const mangas = await mangaController.getMagaById(id);
        res.status(200).json({ mangas });
    } catch (error) {
        res.status(400).json({});
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { title, author, describe, image, category } = req.body;
        await mangaController.addNewManga(title, author, describe, image, category);
        res.status(200).json({ result: true });
    } catch (error) {
        res.status(400).json({ result: false });
    }
})

// tim kiem san pham
// http://localhost:3000/api/product/search/name?keyword=acb
router.get('/search/name', async (req, res, next) => {
    try {
        const { keyword } = req.query;
        const products = await mangaController.search(keyword);
        return res.status(200).json({ products });
    } catch (error) {
        console.log('Search product error API', error);
        return res.status(500).json({})
    }
})

module.exports = router;